import type { GuestCandidateNotificationEventId } from './notificationEventIds';

export type NotificacionTabId = 'all' | 'solicitud' | 'candidatos' | 'estados';

export type NotificacionKind =
  | 'vacancy-expiring'
  | 'vacancy-status'
  | 'solicitud-vacante'
  | 'client-internal-candidates';

export type NotificacionPriority = 'normal' | 'high';

export interface ClientInternalNotificacionPayload {
  /**
   * Identificador de evento (HU gestión candidatos / invitado).
   * Si no viene, se asume legado vía `actionLabel`.
   */
  eventId?: GuestCandidateNotificationEventId;
  /** p. ej. Comentario, Calificación, Decisión — legado o etiqueta auxiliar */
  actionLabel?: string;
  /** Nombre visible del líder que realizó la gestión (vacancy leader). */
  leaderName?: string;
  /** @deprecated Preferir `leaderName`; se sigue leyendo por compatibilidad con payloads antiguos. */
  clientDisplayName?: string;
  candidateName?: string;
  /** Estrellas (1–5) para evento de calificación individual */
  stars?: number;
  /** Nombre de la etapa destino sugerida por el líder */
  targetStageName?: string;
  /** Id del ítem en `HistorialVacante` para anclar al abrir el drawer */
  historyEntryId?: string;
  /**
   * Varias notificaciones con el mismo id se consolidan en una tarjeta
   * (calificaciones o movimientos masivos del mismo lote).
   */
  bulkAggregationId?: string;
  groupCount?: number;
  /** Descarte o aprobación: prioridad alta en la lista (legado) */
  isQuickDecision?: boolean;
}

export interface NotificacionItem {
  id: string;
  kind: NotificacionKind;
  vacancyId: string;
  vacancyTitle: string;
  secondsAgo: number;
  read: boolean;
  /** Prioridad de visualización en el centro de notificaciones */
  priority?: NotificacionPriority;
  clientInternal?: ClientInternalNotificacionPayload;
  /** Línea secundaria (expiración, etc.) */
  metaLine?: string;
  /** Texto principal para kinds no cliente-interno */
  headline?: string;
}
