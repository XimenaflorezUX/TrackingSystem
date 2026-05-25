import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Typography } from 'magneto365.ui';
import './VacancyKebabMenu.scss';

export type VacancyMenuActionId =
  | 'manage-candidates'
  | 'view-vacancy'
  | 'status-history';

export interface VacancyKebabMenuProps {
  onAction?: (action: VacancyMenuActionId) => void;
  /** `pipeline`: barra oscura (CandidatesViewClienteInterno). `card`: tarjeta clara (VacancyDashboard). */
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

const IconHistory = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
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
    id: 'status-history',
    title: 'Historial de estados de la vacante',
    description: 'Revise los estados registrados para esta vacante.',
    icon: <IconHistory />,
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
