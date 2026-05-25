import { useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { VacancyItem, VacancyNavigateOptions } from '../../vacancy-item.types';
import type { NotificacionItem } from '../NotificationsDrawer/notifications.types';
import {
  applyGuestBulkAggregation,
  buildGuestClientCardCopy,
  filterItemsByTab,
  formatHaceTiempo,
  sortNotificationsForDisplay,
} from '../NotificationsDrawer/guestNotificationPresentation';
import './DrawerConfiguracionNotificaciones.scss';

/**
 * Organismo (Atomic Design): panel lateral de notificaciones con cabecera, pestañas,
 * lista de tarjetas y acción global en el pie. Integra moléculas (fila de pestañas,
 * tarjeta con cabecera + metadatos + acciones) y átomos (iconos, tipografía, indicador no leído).
 */

export type DrawerConfiguracionNotificacionesTabId =
  | 'all'
  | 'solicitud'
  | 'candidatos'
  | 'estados';

export interface DrawerConfiguracionNotificacionesProps {
  className?: string;
  onClose?: () => void;
  initialTabId?: DrawerConfiguracionNotificacionesTabId;
  items: NotificacionItem[];
  vacancies: VacancyItem[];
  onIrVacante: (vacancy: VacancyItem, options?: VacancyNavigateOptions) => void;
  onMarkAllRead?: () => void;
  onAfterNavigateMarkRead?: (notificationId: string) => void;
}

const TABS: { id: DrawerConfiguracionNotificacionesTabId; label: string }[] = [
  { id: 'all', label: 'Todo' },
  { id: 'solicitud', label: 'Solicitud de vacantes' },
  { id: 'candidatos', label: 'Gestión de candidatos' },
  { id: 'estados', label: 'Estados de vacante' },
];

const IconBell = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const IconClose = (): JSX.Element => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconClock = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconBriefcase = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

/** Icono distintivo (referencia user-check): acciones del cliente interno / líder. */
const IconUserFeedback = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const IconArrowRight = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function systemCardIcon(kind: NotificacionItem['kind']): JSX.Element {
  if (kind === 'vacancy-expiring') return <IconClock />;
  return <IconBriefcase />;
}

function notificationCardIcon(item: NotificacionItem): JSX.Element {
  if (item.kind === 'client-internal-candidates') return <IconUserFeedback />;
  return systemCardIcon(item.kind);
}

function systemCardHeadline(item: NotificacionItem): ReactNode {
  return item.headline ?? 'Actualización de vacante';
}

const DrawerConfiguracionNotificaciones = ({
  className = '',
  onClose,
  initialTabId = 'all',
  items,
  vacancies,
  onIrVacante,
  onMarkAllRead,
  onAfterNavigateMarkRead,
}: DrawerConfiguracionNotificacionesProps) => {
  const [activeTab, setActiveTab] = useState<DrawerConfiguracionNotificacionesTabId>(initialTabId);

  const preparedItems = useMemo(
    () => sortNotificationsForDisplay(applyGuestBulkAggregation(items)),
    [items],
  );

  const visibleItems = useMemo(
    () => filterItemsByTab(preparedItems, activeTab),
    [preparedItems, activeTab],
  );

  const hasUnread = useMemo(() => items.some((n) => !n.read), [items]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const resolveVacancy = useCallback(
    (vacancyId: string): VacancyItem | undefined => vacancies.find((v) => v.id === vacancyId),
    [vacancies],
  );

  const handleIrVacante = useCallback(
    (item: NotificacionItem) => {
      const vacancy = resolveVacancy(item.vacancyId);
      if (vacancy === undefined) return;

      const opts: VacancyNavigateOptions = {};
      if (item.kind === 'client-internal-candidates') {
        opts.openHistorial = true;
        const hid = item.clientInternal?.historyEntryId;
        if (hid !== undefined && hid.length > 0) {
          opts.historialEntryId = hid;
        }
      }

      onIrVacante(vacancy, opts);
      onAfterNavigateMarkRead?.(item.id);
    },
    [onIrVacante, onAfterNavigateMarkRead, resolveVacancy],
  );

  const rootClass = ['dcn-drawer', className].filter(Boolean).join(' ');

  return (
    <div className={rootClass} data-layer="drawer configuracion notificaciones">
      <header className="dcn-drawer__header" data-layer="header drawer etapas nuevo">
        <div className="dcn-drawer__header-row" data-layer="Frame 6470">
          <div className="dcn-drawer__title-group" data-layer="Frame 1321319853">
            <span className="dcn-drawer__title-icon" data-layer="notification" aria-hidden>
              <IconBell />
            </span>
            <h1 className="dcn-drawer__title" data-layer="Notificaciones">
              Notificaciones
            </h1>
          </div>
          <button
            type="button"
            className="dcn-drawer__close"
            data-layer="close 1"
            aria-label="Cerrar panel de notificaciones"
            onClick={handleClose}
          >
            <IconClose />
          </button>
        </div>
      </header>

      <nav className="dcn-drawer__tabs" data-layer="Tabs" aria-label="Filtros de notificaciones">
        <div className="dcn-drawer__tabs-row" data-layer="Frame 1321319889" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={activeTab === t.id}
              className={`dcn-drawer__tab${activeTab === t.id ? ' dcn-drawer__tab--active' : ''}`}
              data-layer="secondary button"
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="dcn-drawer__list" data-layer="Frame 1321319888">
        {visibleItems.length === 0 && (
          <p className="dcn-drawer__empty" role="status">
            No hay notificaciones en esta categoría.
          </p>
        )}

        {visibleItems.map((item) => {
          const vacancy = resolveVacancy(item.vacancyId);
          const canNavigate = vacancy !== undefined;
          const isGuest = item.kind === 'client-internal-candidates' && item.clientInternal !== undefined;
          const copy =
            isGuest && item.clientInternal !== undefined
              ? buildGuestClientCardCopy(item.vacancyTitle, item.clientInternal)
              : null;

          return (
            <article key={item.id} className="dcn-card" data-layer="Card notificación">
              <div className="dcn-card__icon-btn" data-layer="secondary button" aria-hidden>
                {notificationCardIcon(item)}
              </div>
              <div className="dcn-card__content" data-layer="Frame 14237">
                <div className="dcn-card__top" data-layer="barra superior">
                  <p className="dcn-card__headline">
                    {copy !== null ? copy.title : systemCardHeadline(item)}
                  </p>
                  <div className="dcn-card__time-group" data-layer="fecha">
                    <span className="dcn-card__time" data-layer="tiempo relativo">
                      {formatHaceTiempo(item.secondsAgo)}
                    </span>
                    {!item.read && (
                      <span className="dcn-card__unread" data-layer="Ellipse 27" aria-label="No leída" />
                    )}
                  </div>
                </div>
                {copy !== null ? (
                  <p className="dcn-card__meta" data-layer="Text">
                    {copy.body}
                  </p>
                ) : (
                  item.metaLine !== undefined && (
                    <p className="dcn-card__meta" data-layer="Text">
                      {item.metaLine}
                    </p>
                  )
                )}
                <div className="dcn-card__actions" data-layer="Frame 1321319816">
                  <button
                    type="button"
                    className="dcn-pill-btn dcn-pill-btn--solid-grey"
                    data-layer="Primary button"
                    disabled={!canNavigate}
                    aria-disabled={!canNavigate}
                    onClick={() => {
                      handleIrVacante(item);
                    }}
                  >
                    Ir a la vacante
                    <IconArrowRight />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <footer className="dcn-drawer__footer" data-layer="Frame 1321319887">
        <button
          type="button"
          className="dcn-drawer__mark-all"
          data-layer="Primary button"
          disabled={!hasUnread}
          aria-disabled={!hasUnread}
          onClick={() => {
            onMarkAllRead?.();
          }}
        >
          Marcar todo como leído
        </button>
      </footer>
    </div>
  );
};

export default DrawerConfiguracionNotificaciones;
