import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Typography } from 'magneto365.ui';
import './VacancyKebabMenu.scss';

export type VacancyMenuActionId =
  | 'manage-candidates'
  | 'view-vacancy'
  | 'share-internal-client'
  | 'manage-accesses'
  | 'status-history'
  | 'clone'
  | 'deactivate'
  | 'edit'
  | 'stage-settings';

export interface VacancyKebabMenuProps {
  onAction?: (action: VacancyMenuActionId) => void;
  /** `pipeline`: barra oscura (CandidatesView). `card`: tarjeta clara (VacancyDashboard). */
  surface?: 'pipeline' | 'card';
}

interface MenuEntry {
  id: VacancyMenuActionId;
  title: string;
  description: string;
  icon: JSX.Element;
}

const IconDots = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const IconUsers = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconEye = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/** Estilo Lucide `user-plus`: invitar / compartir acceso con otro usuario. */
const IconUserPlus = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </svg>
);

const IconHistory = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconCopy = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconPauseCircle = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <line x1="10" y1="15" x2="10" y2="9" />
    <line x1="14" y1="15" x2="14" y2="9" />
  </svg>
);

const IconPencil = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const IconBellCog = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 4.5v1M18 6.5v1M17 6h1M19 6h1" />
  </svg>
);

const MENU_ENTRIES: MenuEntry[] = [
  {
    id: 'manage-candidates',
    title: 'Gestionar candidatos',
    description: 'Visualice las etapas de la vacante y gestione a los candidatos.',
    icon: <IconUsers />,
  },
  {
    id: 'view-vacancy',
    title: 'Ver vacante',
    description: 'Consulte la información detallada de la vacante.',
    icon: <IconEye />,
  },
  {
    id: 'share-internal-client',
    title: 'Compartir con cliente interno',
    description: 'Configure los accesos, visibilidad y feedback para el líder de área.',
    icon: <IconUserPlus />,
  },
  {
    id: 'manage-accesses',
    title: 'Ver accesos compartidos',
    description: 'Consulte y revoque los accesos otorgados a clientes internos.',
    icon: <IconHistory />,
  },
  {
    id: 'status-history',
    title: 'Historial de estados de la vacante',
    description: 'Revise los estados registrados para esta vacante.',
    icon: <IconHistory />,
  },
  {
    id: 'clone',
    title: 'Clonar vacante',
    description: 'Replique esta vacante para generar una nueva a partir de la actual.',
    icon: <IconCopy />,
  },
  {
    id: 'deactivate',
    title: 'Inactivar vacante',
    description: 'Desactive esta vacante en el sistema cuando corresponda.',
    icon: <IconPauseCircle />,
  },
  {
    id: 'edit',
    title: 'Editar vacante',
    description: 'Modifique los datos de esta vacante.',
    icon: <IconPencil />,
  },
  {
    id: 'stage-settings',
    title: 'Ver configuración de las etapas',
    description: 'Configure las notificaciones asociadas a las etapas de esta vacante.',
    icon: <IconBellCog />,
  },
];

const VIEWPORT_MARGIN = 12;
const GAP = 8;

const VacancyKebabMenu = ({ onAction, surface = 'pipeline' }: VacancyKebabMenuProps) => {
  const [open, setOpen] = useState(false);
  const [panelRect, setPanelRect] = useState<{ top: number; left: number; width: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const computePanelRect = useCallback(() => {
    const el = triggerRef.current;
    if (!el || typeof window === 'undefined') return;

    const r = el.getBoundingClientRect();
    const maxW = Math.min(360, window.innerWidth - VIEWPORT_MARGIN * 2);
    const width = Math.max(260, maxW);
    let left = r.right - width;
    left = Math.min(Math.max(left, VIEWPORT_MARGIN), window.innerWidth - width - VIEWPORT_MARGIN);

    let top = r.bottom + GAP;
    const estimatedH = 480;
    if (top + estimatedH > window.innerHeight - VIEWPORT_MARGIN) {
      top = Math.max(VIEWPORT_MARGIN, r.top - GAP - estimatedH);
    }

    setPanelRect({ top, left, width });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setPanelRect(null);
      return;
    }
    computePanelRect();
  }, [open, computePanelRect]);

  useEffect(() => {
    if (!open) return undefined;

    const onResize = () => computePanelRect();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [open, computePanelRect]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [open]);

  const handleSelect = (id: VacancyMenuActionId) => {
    onAction?.(id);
    setOpen(false);
  };

  const menuPanel =
    open && panelRect
      ? createPortal(
          <div
            ref={panelRef}
            className="cv-vacancy-menu__panel"
            role="menu"
            aria-label="Acciones de la vacante"
            style={{
              position: 'fixed',
              top: panelRect.top,
              left: panelRect.left,
              width: panelRect.width,
              zIndex: 1100,
            }}
          >
            {MENU_ENTRIES.map((entry) => (
              <button
                key={entry.id}
                type="button"
                role="menuitem"
                className="cv-vacancy-menu__item"
                onClick={() => handleSelect(entry.id)}
              >
                <span className="cv-vacancy-menu__item-icon" aria-hidden>
                  {entry.icon}
                </span>
                <span className="cv-vacancy-menu__item-body">
                  <Typography.Text strong size="md" className="cv-vacancy-menu__item-title">
                    {entry.title}
                  </Typography.Text>
                  <Typography.Text size="sm" color="grey-600" className="cv-vacancy-menu__item-desc">
                    {entry.description}
                  </Typography.Text>
                </span>
              </button>
            ))}
          </div>,
          document.body,
        )
      : null;

  const rootClass =
    surface === 'card' ? 'cv-vacancy-menu cv-vacancy-menu--card' : 'cv-vacancy-menu';

  return (
    <span className={rootClass}>
      <Button
        ref={triggerRef}
        type="button"
        variant="ghost"
        size="sm"
        className="cv-vacancy-menu__trigger"
        iconLeft={<IconDots />}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Más opciones de la vacante"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      />
      {menuPanel}
    </span>
  );
};

export default VacancyKebabMenu;
