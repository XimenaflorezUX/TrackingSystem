import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Drawer, Typography } from 'magneto365.ui';
import type {
  ActorAttribution,
  HistorialVacanteDrawerTab,
  VacancyHistoryAccessGrantedEvent,
  VacancyHistoryAccessRevokedEvent,
  VacancyHistoryAnalystReassignmentEvent,
  VacancyHistoryEvent,
  VacancyHistoryActorDisplay,
  VacancyHistoryInternalClientEvent,
  VacancyHistoryVacancyTransitionEvent,
} from './historial-vacante.types';
import {
  HISTORIAL_PAGE_SIZE,
  fetchHistorialVacantePage,
  formatHistorialTimestamp,
} from './mockHistorialVacante';
import AccessesTab from './AccessesTab';
import { InternalClientActionRow } from './InternalClientActionRow';
import './HistorialVacanteDrawer.scss';

export interface HistorialVacanteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  vacancyId: string;
  vacancyTitle: string;
  /** Ancla visual y scroll al evento del timeline (p. ej. desde notificación). */
  highlightEventId?: string;
  /** HU 13 — abre directamente en la pestaña de accesos. */
  initialTab?: HistorialVacanteDrawerTab;
  /** HU 13 — callback para abrir el modal de compartir desde la pestaña de accesos. */
  onShareVacancy?: () => void;
}

const IconClose = (): JSX.Element => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCheck = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconBolt = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
);

const IconUsersSmall = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const IconPause = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const IconX = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconLock = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconDot = (): JSX.Element => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <circle cx="12" cy="12" r="4" />
  </svg>
);

/** Interacción externa / cliente interno (HU 5) */
const IconExternalClient = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconClock = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/** Reasignación (flechas horizontales, referencia diseño) */
const IconReassign = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <polyline points="17 8 21 12 17 16" />
    <polyline points="7 8 3 12 7 16" />
    <line x1="21" y1="12" x2="3" y2="12" />
  </svg>
);

/** Ícono de candado para eventos de acceso (HU 13 / HU 14) */
const IconShield = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

function hasAttributionPill(
  ev: VacancyHistoryEvent,
): ev is VacancyHistoryVacancyTransitionEvent | VacancyHistoryAnalystReassignmentEvent | VacancyHistoryAccessGrantedEvent | VacancyHistoryAccessRevokedEvent {
  return (
    ev.kind === 'vacancy-transition' ||
    ev.kind === 'analyst-reassignment' ||
    ev.kind === 'access-granted' ||
    ev.kind === 'access-revoked'
  );
}

function nodeClassForEvent(ev: VacancyHistoryEvent): string {
  if (ev.kind === 'internal-client') return 'hvd-timeline__node--client';
  if (ev.kind === 'access-granted') return 'hvd-timeline__node--access-granted';
  if (ev.kind === 'access-revoked') return 'hvd-timeline__node--access-revoked';
  if (ev.kind === 'vacancy-transition') {
    return ev.transition === 'published-to-expired' ? 'hvd-timeline__node--expired' : 'hvd-timeline__node--published';
  }
  if (ev.kind === 'analyst-reassignment') return 'hvd-timeline__node--reassign';
  if (ev.kind === 'publish') return 'hvd-timeline__node--publish';
  if (ev.kind === 'bulk-move') return 'hvd-timeline__node--bulk';
  switch (ev.stateVariant) {
    case 'paused':
      return 'hvd-timeline__node--paused';
    case 'cancelled':
      return 'hvd-timeline__node--cancelled';
    case 'closed':
      return 'hvd-timeline__node--closed';
    default:
      return 'hvd-timeline__node--other';
  }
}

function nodeIcon(ev: VacancyHistoryEvent): JSX.Element {
  if (ev.kind === 'internal-client') {
    return <IconExternalClient />;
  }
  if (ev.kind === 'access-granted' || ev.kind === 'access-revoked') {
    return <IconShield />;
  }
  if (ev.kind === 'vacancy-transition') {
    return ev.transition === 'published-to-expired' ? <IconClock /> : <IconCheck />;
  }
  if (ev.kind === 'analyst-reassignment') {
    return <IconReassign />;
  }
  if (ev.kind === 'publish') {
    return ev.icon === 'bolt' ? <IconBolt /> : <IconCheck />;
  }
  if (ev.kind === 'bulk-move') {
    return <IconUsersSmall />;
  }
  switch (ev.stateVariant) {
    case 'paused':
      return <IconPause />;
    case 'cancelled':
      return <IconX />;
    case 'closed':
      return <IconLock />;
    default:
      return <IconDot />;
  }
}

const INTERNAL_CLIENT_MANAGEMENT_LABEL = 'Gestión de cliente interno';

function resolveHistoryHighlightDomId(
  events: VacancyHistoryEvent[],
  highlightEventId: string,
): string {
  for (const ev of events) {
    if (ev.id === highlightEventId) return ev.id;
    if (ev.kind === 'internal-client' && ev.actions.some((a) => a.id === highlightEventId)) {
      return ev.id;
    }
  }
  return highlightEventId;
}

function isHistoryEntryHighlighted(ev: VacancyHistoryEvent, highlightEventId?: string): boolean {
  if (highlightEventId === undefined || highlightEventId.length === 0) return false;
  if (ev.id === highlightEventId) return true;
  if (ev.kind === 'internal-client') {
    return ev.actions.some((a) => a.id === highlightEventId);
  }
  return false;
}

function logActionTitle(ev: VacancyHistoryEvent): string {
  if (ev.kind === 'internal-client') return INTERNAL_CLIENT_MANAGEMENT_LABEL;
  if (
    ev.kind === 'vacancy-transition' ||
    ev.kind === 'analyst-reassignment' ||
    ev.kind === 'access-granted' ||
    ev.kind === 'access-revoked'
  ) return ev.traceTag;
  if (ev.kind === 'bulk-move') {
    return `Movimiento masivo a ${ev.stageName}`;
  }
  return ev.title;
}

function greyBoxLines(ev: VacancyHistoryEvent): string[] {
  if (ev.kind === 'internal-client') return [];
  if (ev.kind === 'vacancy-transition' || ev.kind === 'analyst-reassignment') return [];
  if (ev.kind === 'access-granted') {
    const fields = ev.sharedFields.join(', ');
    const feedback = ev.feedbackEnabled.length > 0 ? ev.feedbackEnabled.join(', ') : 'Sin feedback habilitado';
    return [
      `Destinatario: ${ev.recipientEmail}`,
      `Visibilidad: ${ev.visibilityLabel}`,
      `Información compartida: ${fields}`,
      `Feedback: ${feedback}`,
      'El destinatario recibirá un correo con enlace de acceso y validación OTP.',
    ];
  }
  if (ev.kind === 'access-revoked') {
    return [
      `Destinatario: ${ev.recipientEmail}`,
      'El enlace y el OTP de este acceso dejaron de ser válidos de inmediato.',
    ];
  }
  if (ev.kind === 'bulk-move') {
    return [
      `El analista ${ev.analystName} movió ${ev.candidateCount} candidatos a la etapa ${ev.stageName}.`,
      'Podrá revisar el detalle de cada candidato en la vista de etapas cuando lo requiera.',
    ];
  }
  return [ev.description];
}

function attributionBadgeLabel(a: ActorAttribution): string | null {
  if (a === 'guest') return 'Invitado';
  if (a === 'vacancy-leader') return 'Líder de Vacante';
  return null;
}

function internalClientActorLine(actor: VacancyHistoryActorDisplay): string {
  const name = actor.displayName ?? 'Cliente interno';
  return actor.email !== undefined && actor.email.length > 0 ? `${name} · ${actor.email}` : name;
}

function InternalClientActorRow({ actor }: { actor: VacancyHistoryActorDisplay }): JSX.Element {
  const badge = attributionBadgeLabel(actor.attribution);

  return (
    <div className="hvd-log__actor">
      {badge !== null && <span className="hvd-log__attribution-heading">{badge}</span>}
      <Typography.Text size="sm" color="grey-600" className="hvd-log__footer-meta">
        {internalClientActorLine(actor)}
      </Typography.Text>
    </div>
  );
}

function InternalClientLogBody({ ev }: { ev: VacancyHistoryInternalClientEvent }): JSX.Element {
  return (
    <>
      <InternalClientActorRow actor={ev.actor} />
      <div className="hvd-log__box hvd-log__internal-panel">
        <div className="hvd-log__internal-actions">
          {ev.actions.map((action) => (
            <InternalClientActionRow key={action.id} action={action} />
          ))}
        </div>
      </div>
    </>
  );
}

function personAttributionLine(person: { displayName: string; email: string }): string {
  return person.email ? `${person.displayName} · ${person.email}` : person.displayName;
}

function authorAttributionText(
  ev:
    | VacancyHistoryVacancyTransitionEvent
    | VacancyHistoryAnalystReassignmentEvent
    | VacancyHistoryAccessGrantedEvent
    | VacancyHistoryAccessRevokedEvent,
  actorLabel?: string,
): string | undefined {
  if (ev.kind === 'access-granted' || ev.kind === 'access-revoked') {
    return personAttributionLine(ev.actor);
  }
  if (ev.kind === 'vacancy-transition' && ev.actor !== undefined) {
    return personAttributionLine(ev.actor);
  }
  if (ev.kind === 'analyst-reassignment' && ev.executedBy !== undefined) {
    return personAttributionLine(ev.executedBy);
  }
  return actorLabel;
}

function HistorialLogTags({
  ev,
  actorLabel,
}: {
  ev:
    | VacancyHistoryVacancyTransitionEvent
    | VacancyHistoryAnalystReassignmentEvent
    | VacancyHistoryAccessGrantedEvent
    | VacancyHistoryAccessRevokedEvent;
  actorLabel?: string;
}): JSX.Element {
  const authorText = authorAttributionText(ev, actorLabel);

  return (
    <div className="hvd-log__attribution-block hvd-log__attribution-block--external">
      <span className="hvd-log__attribution-heading">{ev.attributionPill}</span>
      {authorText !== undefined && (
        <Typography.Text size="sm" color="grey-600" className="hvd-log__footer-meta">
          {authorText}
        </Typography.Text>
      )}
    </div>
  );
}

function VacancyTransitionBox({ ev }: { ev: VacancyHistoryVacancyTransitionEvent }): JSX.Element {
  return (
    <Typography.Text color="grey-800" className="hvd-log__comentario-creado">
      {ev.bodyText}
    </Typography.Text>
  );
}

function AnalystReassignmentBox({ ev }: { ev: VacancyHistoryAnalystReassignmentEvent }): JSX.Element {
  const prev = ev.previousAnalyst;
  const next = ev.newAnalyst;
  return (
    <>
      <Typography.Text color="grey-800" className="hvd-log__structured-line">
        Analista anterior: {prev.displayName} {prev.email}
      </Typography.Text>
      <Typography.Text color="grey-800" className="hvd-log__structured-line">
        Nuevo analista asignado: {next.displayName} {next.email}
      </Typography.Text>
    </>
  );
}

function kindChipClassForEvent(ev: VacancyHistoryEvent): string {
  return nodeClassForEvent(ev).replace('hvd-timeline__node--', 'hvd-timeline__kind-chip--');
}

function HistorialKindChip({ ev }: { ev: VacancyHistoryEvent }): JSX.Element {
  return (
    <span className={`hvd-timeline__kind-chip ${kindChipClassForEvent(ev)}`}>
      {nodeIcon(ev)}
      <span>{logActionTitle(ev)}</span>
    </span>
  );
}

function HistorialTimelineEntry({
  ev,
  highlighted,
}: {
  ev: VacancyHistoryEvent;
  highlighted: boolean;
}): JSX.Element {
  const ts = formatHistorialTimestamp(ev.timestampIso);
  const lines = greyBoxLines(ev);
  const isInternal = ev.kind === 'internal-client';
  const isTransition = ev.kind === 'vacancy-transition';
  const isReassign = ev.kind === 'analyst-reassignment';
  const showFooterMeta = !isInternal && !isTransition && !isReassign;

  return (
    <li
      id={`hvd-event-${ev.id}`}
      className={`hvd-timeline__item${highlighted ? ' hvd-timeline__item--highlight' : ''}`}
    >
      <div className="hvd-timeline__head">
        <HistorialKindChip ev={ev} />
        <Typography.Text size="sm" color="grey-600" className="hvd-log__when">
          {ts}
        </Typography.Text>
      </div>
      <div className="hvd-timeline__rail" aria-hidden="true">
        <span className="hvd-timeline__rail-line" />
      </div>
      <div className="hvd-timeline__body hvd-log">
        {isInternal ? (
          <InternalClientLogBody ev={ev} />
        ) : hasAttributionPill(ev) ? (
          <HistorialLogTags ev={ev} actorLabel={ev.actorLabel} />
        ) : (
          <span className="hvd-log__tag">{ev.traceTag}</span>
        )}
        {!isInternal && (
          <div className="hvd-log__box">
            {isTransition && <VacancyTransitionBox ev={ev} />}
            {isReassign && <AnalystReassignmentBox ev={ev} />}
            {!isTransition && !isReassign && (
              lines.map((line, idx) => (
                <Typography.Text key={idx} color="grey-800" className="hvd-log__box-line">
                  {line}
                </Typography.Text>
              ))
            )}
          </div>
        )}
        {showFooterMeta && !hasAttributionPill(ev) && (
          <Typography.Text size="sm" color="grey-600" className="hvd-log__footer-meta">
            Autor: {ev.actorLabel}
          </Typography.Text>
        )}
      </div>
    </li>
  );
}

/** Orden: Detalle → Etapas → Historial de estados → Accesos compartidos */
const TAB_ITEMS: { id: HistorialVacanteDrawerTab; label: string }[] = [
  { id: 'detalle', label: 'Detalle de la vacante' },
  { id: 'etapas', label: 'Etapas' },
  { id: 'historial', label: 'Historial de estados' },
  { id: 'accesos', label: 'Accesos compartidos' },
];

const HistorialVacanteDrawer = ({
  isOpen,
  onClose,
  vacancyId,
  vacancyTitle,
  highlightEventId,
  initialTab,
  onShareVacancy,
}: HistorialVacanteDrawerProps) => {
  const [activeTab, setActiveTab] = useState<HistorialVacanteDrawerTab>(initialTab ?? 'historial');
  const [events, setEvents] = useState<VacancyHistoryEvent[]>([]);
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const offsetRef = useRef(0);
  const loadingRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab ?? 'historial');
  }, [isOpen, vacancyId, initialTab]);

  const resetAndLoadFirst = useCallback(async () => {
    offsetRef.current = 0;
    setEvents([]);
    setHasMore(true);
    setLoadingInitial(true);
    loadingRef.current = true;
    try {
      const batch = await fetchHistorialVacantePage(vacancyId, 0, HISTORIAL_PAGE_SIZE);
      setEvents(batch);
      offsetRef.current = batch.length;
      setHasMore(batch.length === HISTORIAL_PAGE_SIZE);
    } finally {
      loadingRef.current = false;
      setLoadingInitial(false);
    }
  }, [vacancyId]);

  useEffect(() => {
    if (!isOpen) return;
    void resetAndLoadFirst();
  }, [isOpen, vacancyId, resetAndLoadFirst]);

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingRef.current) return;
    loadingRef.current = true;
    setLoadingMore(true);
    try {
      const batch = await fetchHistorialVacantePage(vacancyId, offsetRef.current, HISTORIAL_PAGE_SIZE);
      if (batch.length === 0) {
        setHasMore(false);
        return;
      }
      setEvents((prev) => [...prev, ...batch]);
      offsetRef.current += batch.length;
      setHasMore(batch.length === HISTORIAL_PAGE_SIZE);
    } finally {
      loadingRef.current = false;
      setLoadingMore(false);
    }
  }, [hasMore, vacancyId]);

  useEffect(() => {
    if (!isOpen || activeTab !== 'historial' || !hasMore) return undefined;
    const root = scrollRef.current;
    const sentinel = sentinelRef.current;
    if (!root || !sentinel) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadMore();
        }
      },
      { root, rootMargin: '120px 0px', threshold: 0 },
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, [isOpen, activeTab, hasMore, loadMore, events.length]);

  useEffect(() => {
    if (!isOpen || highlightEventId === undefined || highlightEventId.length === 0 || loadingInitial) {
      return undefined;
    }
    if (events.length === 0) return undefined;
    const handle = window.setTimeout(() => {
      const root = scrollRef.current;
      const domId = resolveHistoryHighlightDomId(events, highlightEventId);
      const el = root?.querySelector(`#hvd-event-${CSS.escape(domId)}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 420);
    return () => window.clearTimeout(handle);
  }, [isOpen, highlightEventId, loadingInitial, events]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      direction="right"
      drawerWidth="min(100vw - 16px, 468px)"
      customPadding={0}
      hideButton
      className="hvd-drawer-shell"
    >
      <div className="hvd">
        <div className="hvd__chrome">
          <button
            type="button"
            className="hvd__dismiss"
            onClick={onClose}
            aria-label="Cerrar panel"
          >
            <IconClose />
          </button>
        </div>

        <div className="hvd__top">
          <p className="hvd__vacancy-context">{vacancyTitle}</p>

          <nav className="hvd-tabs" role="tablist" aria-label="Secciones de la vacante">
            {TAB_ITEMS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`hvd-tab-${t.id}`}
                aria-selected={activeTab === t.id}
                aria-controls={`hvd-panel-${t.id}`}
                className={`hvd-tabs__tab${activeTab === t.id ? ' hvd-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="hvd__scroll" ref={scrollRef}>
          {activeTab === 'detalle' && (
            <section
              className="hvd-panel"
              id="hvd-panel-detalle"
              role="tabpanel"
              aria-labelledby="hvd-tab-detalle"
            >
              <Typography.Title level={4} id="hvd-detalle-heading" className="hvd-panel__title">
                Detalle de la vacante
              </Typography.Title>
              <Typography.Paragraph color="grey-700" className="hvd-panel__text">
                Consulte aquí el resumen de la vacante. Pronto se habilitará el contenido completo para usted en esta misma vista.
              </Typography.Paragraph>
            </section>
          )}

          {activeTab === 'etapas' && (
            <section
              className="hvd-panel"
              id="hvd-panel-etapas"
              role="tabpanel"
              aria-labelledby="hvd-tab-etapas"
            >
              <Typography.Title level={4} id="hvd-etapas-heading" className="hvd-panel__title">
                Etapas
              </Typography.Title>
              <Typography.Paragraph color="grey-700" className="hvd-panel__text">
                Consulte el esquema de etapas desde esta pestaña cuando esté disponible para usted.
              </Typography.Paragraph>
            </section>
          )}

          {activeTab === 'historial' && (
            <section
              className="hvd-historial"
              id="hvd-panel-historial"
              role="tabpanel"
              aria-labelledby="hvd-tab-historial"
            >
              <Typography.Title level={4} id="hvd-historial-heading" className="hvd-historial__heading">
                Historial de estados
              </Typography.Title>

              {loadingInitial && (
                <p className="hvd__loading">Cargando su historial…</p>
              )}

              {!loadingInitial && events.length === 0 && (
                <p className="hvd__end">No hay eventos registrados para mostrarle en este momento.</p>
              )}

              {!loadingInitial && events.length > 0 && (
                <ol className="hvd-timeline">
                  {events.map((ev) => (
                    <HistorialTimelineEntry
                      key={ev.id}
                      ev={ev}
                      highlighted={isHistoryEntryHighlighted(ev, highlightEventId)}
                    />
                  ))}
                </ol>
              )}

              {loadingMore && <p className="hvd__loading">Cargando más eventos…</p>}

              {!hasMore && events.length > 0 && !loadingInitial && (
                <p className="hvd__end">No hay más eventos para mostrarle.</p>
              )}

              {!loadingInitial && hasMore && events.length > 0 && (
                <div ref={sentinelRef} className="hvd__sentinel" aria-hidden="true" />
              )}
            </section>
          )}

          {activeTab === 'accesos' && (
            <section
              className="hvd-panel"
              id="hvd-panel-accesos"
              role="tabpanel"
              aria-labelledby="hvd-tab-accesos"
            >
              <AccessesTab
                vacancyId={vacancyId}
                onShareVacancy={() => {
                  onClose();
                  window.setTimeout(() => { onShareVacancy?.(); }, 300);
                }}
              />
            </section>
          )}
        </div>

        <footer className="hvd__footer">
          <Button type="button" variant="grey" size="sm" onClick={onClose}>
            Cerrar
          </Button>
        </footer>
      </div>
    </Drawer>
  );
};

export default HistorialVacanteDrawer;
