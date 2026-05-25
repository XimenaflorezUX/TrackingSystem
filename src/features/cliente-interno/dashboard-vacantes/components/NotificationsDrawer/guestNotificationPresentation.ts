import { GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS } from './notificationEventIds';
import type { GuestCandidateNotificationEventId } from './notificationEventIds';
import type {
  ClientInternalNotificacionPayload,
  NotificacionItem,
  NotificacionKind,
  NotificacionTabId,
} from './notifications.types';

export function inferGuestEventId(
  ci: ClientInternalNotificacionPayload,
): GuestCandidateNotificationEventId | null {
  if (ci.eventId !== undefined) return ci.eventId;
  if (ci.actionLabel === 'Comentario') return GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.COMMENT;
  if (ci.actionLabel === 'Calificación') return GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.RATING;
  return null;
}

function leaderDisplayName(ci: ClientInternalNotificacionPayload): string {
  return ci.leaderName ?? ci.clientDisplayName ?? 'el líder';
}

function effectivePriorityRank(n: NotificacionItem): number {
  if (n.priority === 'high') return 2;
  if (inferGuestEventId(n.clientInternal ?? {}) === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.STAGE_MOVE) return 2;
  return 1;
}

function kindForTab(tab: NotificacionTabId): NotificacionKind | 'all' {
  if (tab === 'solicitud') return 'solicitud-vacante';
  if (tab === 'candidatos') return 'client-internal-candidates';
  if (tab === 'estados') return 'vacancy-expiring'; // placeholder: filter below handles both estado kinds
  return 'all';
}

export function filterItemsByTab(items: NotificacionItem[], tab: NotificacionTabId): NotificacionItem[] {
  if (tab === 'all') return items;
  if (tab === 'estados') {
    return items.filter((n) => n.kind === 'vacancy-expiring' || n.kind === 'vacancy-status');
  }
  const k = kindForTab(tab);
  return items.filter((n) => n.kind === k);
}

export function sortNotificationsForDisplay(items: NotificacionItem[]): NotificacionItem[] {
  return [...items].sort((a, b) => {
    const pr = effectivePriorityRank(b) - effectivePriorityRank(a);
    if (pr !== 0) return pr;
    return a.secondsAgo - b.secondsAgo;
  });
}

function candidateCountContribution(n: NotificacionItem): number {
  return n.clientInternal?.groupCount ?? 1;
}

function mergeGuestBulkGroup(group: NotificacionItem[]): NotificacionItem {
  const sorted = [...group].sort((a, b) => a.secondsAgo - b.secondsAgo);
  const base = sorted[0]!;
  const ci = base.clientInternal;
  if (ci === undefined) return base;

  const eventId = inferGuestEventId(ci);
  const totalCandidates = sorted.reduce((acc, n) => acc + candidateCountContribution(n), 0);
  const anyUnread = sorted.some((n) => !n.read);
  const mergedId = `merged-${ci.bulkAggregationId ?? sorted.map((s) => s.id).join('-')}`;

  if (eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.RATING) {
    return {
      ...base,
      id: mergedId,
      read: !anyUnread,
      secondsAgo: Math.min(...sorted.map((s) => s.secondsAgo)),
      priority: base.priority,
      clientInternal: {
        ...ci,
        eventId: GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.RATING,
        groupCount: totalCandidates,
        candidateName: undefined,
        stars: undefined,
        historyEntryId: sorted.find((s) => s.clientInternal?.historyEntryId)?.clientInternal?.historyEntryId,
      },
    };
  }

  if (eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.STAGE_MOVE) {
    return {
      ...base,
      id: mergedId,
      read: !anyUnread,
      secondsAgo: Math.min(...sorted.map((s) => s.secondsAgo)),
      priority: 'high',
      clientInternal: {
        ...ci,
        eventId: GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.STAGE_MOVE,
        groupCount: totalCandidates,
        candidateName: undefined,
        targetStageName: undefined,
        historyEntryId: sorted.find((s) => s.clientInternal?.historyEntryId)?.clientInternal?.historyEntryId,
      },
    };
  }

  return base;
}

/**
 * Agrupa notificaciones cliente-interno con el mismo `bulkAggregationId` (calificación o movimiento masivo).
 */
export function applyGuestBulkAggregation(items: NotificacionItem[]): NotificacionItem[] {
  const bulkKeyToItems = new Map<string, NotificacionItem[]>();
  const rest: NotificacionItem[] = [];

  for (const n of items) {
    const bulkId = n.clientInternal?.bulkAggregationId;
    if (
      n.kind === 'client-internal-candidates' &&
      bulkId !== undefined &&
      bulkId.length > 0
    ) {
      const ev = inferGuestEventId(n.clientInternal ?? {});
      if (
        ev === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.RATING ||
        ev === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.STAGE_MOVE
      ) {
        const arr = bulkKeyToItems.get(bulkId) ?? [];
        arr.push(n);
        bulkKeyToItems.set(bulkId, arr);
        continue;
      }
    }
    rest.push(n);
  }

  const merged: NotificacionItem[] = [];
  for (const [, group] of bulkKeyToItems) {
    merged.push(group.length > 1 ? mergeGuestBulkGroup(group) : group[0]!);
  }

  return [...merged, ...rest];
}

export function formatHaceTiempo(secondsAgo: number): string {
  if (secondsAgo < 60) return 'Hace menos de un minuto';
  const m = Math.floor(secondsAgo / 60);
  if (m < 60) return `Hace ${m} minuto${m === 1 ? '' : 's'}`;
  const h = Math.floor(m / 60);
  if (h < 24) return `Hace ${h} hora${h === 1 ? '' : 's'}`;
  const d = Math.floor(h / 24);
  return `Hace ${d} día${d === 1 ? '' : 's'}`;
}

export interface GuestCardCopy {
  title: string;
  body: string;
}

export function buildGuestClientCardCopy(
  vacancyTitle: string,
  ci: ClientInternalNotificacionPayload,
): GuestCardCopy {
  const leader = leaderDisplayName(ci);
  const eventId = inferGuestEventId(ci);

  if (ci.groupCount !== undefined && ci.groupCount > 1 && eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.RATING) {
    return {
      title: `El líder ${leader} calificó a ${ci.groupCount} candidatos`,
      body: 'Ingrese para ver el detalle en el historial de la vacante.',
    };
  }

  if (ci.groupCount !== undefined && ci.groupCount > 1 && eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.STAGE_MOVE) {
    return {
      title: `El líder ${leader} sugirió el movimiento de etapa de ${ci.groupCount} candidatos`,
      body: 'Ingrese para revisar el detalle en el historial de la vacante.',
    };
  }

  if (eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.COMMENT) {
    const cand = ci.candidateName ?? 'el candidato';
    return {
      title: `Acción del líder ${leader} en la vacante ${vacancyTitle}.`,
      body: `Usted tiene un nuevo comentario en el perfil de ${cand} para su revisión.`,
    };
  }

  if (eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.RATING) {
    const cand = ci.candidateName ?? 'el candidato';
    const stars = ci.stars ?? '—';
    return {
      title: `Nueva calificación del líder ${leader} en ${vacancyTitle}.`,
      body: `El líder ha calificado con ${stars} estrellas a ${cand}. Ingrese para ver el detalle.`,
    };
  }

  if (eventId === GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS.STAGE_MOVE) {
    const cand = ci.candidateName ?? 'el candidato';
    const stage = ci.targetStageName ?? 'la etapa indicada';
    return {
      title: `Solicitud de movimiento de etapa por ${leader}.`,
      body: `El líder sugiere mover a ${cand} a la etapa: ${stage}`,
    };
  }

  /* Legado (p. ej. Decisión) */
  const label = ci.actionLabel ?? 'Gestión';
  return {
    title: `${label} — ${vacancyTitle}`,
    body: `El líder ${leader} registró una acción pendiente de su revisión.`,
  };
}
