import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Button, Typography } from 'magneto365.ui';
import type { VacancyItem, VacancyNavigateOptions } from './vacancy-item.types';
import type { VacancyMenuActionId } from './CandidatesView/VacancyKebabMenu';
import type { NotificacionItem } from './components/NotificationsDrawer/notifications.types';
import { MOCK_NOTIFICACIONES } from './components/NotificationsDrawer/mockNotificacionesClienteInterno';
import HistorialVacanteDrawer from './historial-vacante/HistorialVacanteDrawer';
import NotificationsDrawer from './components/NotificationsDrawer/NotificationsDrawer';
import DashboardAppRail from './components/DashboardAppRail/DashboardAppRail';
import type { DashboardAppRailNavItem } from './components/DashboardAppRail/DashboardAppRail';
import DashboardShellHeader from './components/DashboardShellHeader/DashboardShellHeader';
import VacancyGridCard from './components/VacancyGridCard/VacancyGridCard';
import { readVacancyShareSession } from '../../../session/vacancyShareSession';
import './VacancyDashboard.scss';

export type { VacancyItem, VacancyNavigateOptions } from './vacancy-item.types';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const VACANCY_TABS: Tab[] = [
  { id: 'all',       label: 'Ver todos'  },
  { id: 'published', label: 'Publicadas' },
  { id: 'expired',   label: 'Expiradas'  },
  { id: 'covered',   label: 'Cubiertas'  },
];

const SORT_OPTIONS = ['Fecha de creación', 'Fecha de modificación'];
const PAGE_SIZES   = [10, 20, 50];

/** Correo demo cuando no hay sesión de acceso compartido (modo desarrollo). */
const INTERNAL_CLIENT_DEV_EMAIL = 'ximena@magnetoglobal.com';

const MOCK_VACANCIES: VacancyItem[] = [
  { id: 'v-01', title: 'Analista contable',                    location: 'Medellín',      contractType: 'Término indefinido', status: 'Publicada',  createdAt: '2026-03-12', expiresAt: '2026-06-12', channelEmail: 'flujo.requisiciones@gmail.com',    applicantsCount: 0  },
  { id: 'v-02', title: 'Frontend React',    location: 'Bogotá',        contractType: 'Término indefinido', status: 'Publicada',  createdAt: '2026-03-21', expiresAt: '2026-06-21', channelEmail: 'reclutamiento.tech@magneto.com',    applicantsCount: 2  },
  { id: 'v-04', title: 'Diseñador UX/UI',                        location: 'Cali',          contractType: 'Término fijo',       status: 'Publicada',  createdAt: '2026-04-10', expiresAt: '2026-07-10', channelEmail: 'diseno.rrhh@empresa.com',           applicantsCount: 5  },
  { id: 'v-07', title: 'Product Manager',                        location: 'Bogotá',        contractType: 'Término indefinido', status: 'Borrador',   createdAt: '2026-05-01', expiresAt: '2026-08-01', channelEmail: 'product@empresa.com',               applicantsCount: 0  },
  { id: 'v-08', title: 'Especialista en Marketing Digital',      location: 'Cali',          contractType: 'Por proyecto',       status: 'Borrador',   createdAt: '2026-05-02', expiresAt: '2026-08-02', channelEmail: 'marketing.digital@empresa.com',     applicantsCount: 0  },
  { id: 'v-09', title: 'Analista Financiero Sr.',                location: 'Bogotá',        contractType: 'Término indefinido', status: 'Expirada',   createdAt: '2026-01-10', expiresAt: '2026-04-10', channelEmail: 'finanzas@empresa.com',              applicantsCount: 4  },
  { id: 'v-10', title: 'Scrum Master',                           location: 'Barranquilla',  contractType: 'Término fijo',       status: 'Expirada',   createdAt: '2026-02-10', expiresAt: '2026-05-10', channelEmail: 'agile.team@empresa.com',            applicantsCount: 2  },
  { id: 'v-12', title: 'Arquitecto de Software Cloud',           location: 'Bogotá',        contractType: 'Término indefinido', status: 'Cubierta',   createdAt: '2025-12-01', expiresAt: '2026-03-01', channelEmail: 'cloud.arch@magneto.com',            applicantsCount: 9  },
];

/** Vacantes visibles hacia la vista de candidatos: se excluyen Inactiva y Cancelada. */
const TRACKING_VISIBLE_VACANCIES = MOCK_VACANCIES.filter(
  (v) => v.status !== 'Inactiva' && v.status !== 'Cancelada'
);

const STATUS_TO_TAB: Record<VacancyItem['status'], string> = {
  Publicada:  'published',
  Borrador:   'draft',
  Expirada:   'expired',
  Inactiva:   'inactive',
  Cancelada:  'cancelled',
  Cubierta:   'covered',
};

// ─── Icons (toolbar, paginación y riel) ───────────────────────────────────────

const IconRailHome = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconRailTask = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4m6-9h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4" />
    <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    <rect x="9" y="7" width="6" height="13" rx="1" />
  </svg>
);
const IconRailBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const IconRailUserSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="11" cy="7" r="4" />
    <path d="M11 11v6H7" />
    <circle cx="17" cy="17" r="3" />
    <line x1="19" y1="19" x2="21" y2="21" />
  </svg>
);
const IconRailImage = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const IconRailSettings = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconRailPeople = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconRailGrid = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconRailDoc = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IconChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconAddSquare = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
const IconFilter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconSortArrows = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <polyline points="8 15 4 19 0 15" />
    <line x1="4" y1="3" x2="4" y2="19" />
    <polyline points="16 9 20 5 24 9" />
    <line x1="20" y1="3" x2="20" y2="21" />
  </svg>
);
const IconChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function buildRailPrimaryItems(): DashboardAppRailNavItem[] {
  return [
    { id: 'home', label: 'Inicio', icon: <IconRailHome /> },
    { id: 'tasks', label: 'Mis pendientes', icon: <IconRailTask /> },
    { id: 'vacancies', label: 'Vacantes', icon: <IconRailBriefcase />, isActive: true },
    { id: 'search', label: 'Búsqueda de talento', icon: <IconRailUserSearch /> },
    { id: 'brand', label: 'Marca empleador', icon: <IconRailImage /> },
  ];
}

function buildRailSecondaryItems(): DashboardAppRailNavItem[] {
  return [
    { id: 'settings', label: 'Configuración', icon: <IconRailSettings /> },
    { id: 'team', label: 'Equipo', icon: <IconRailPeople /> },
    { id: 'board', label: 'Tableros', icon: <IconRailGrid /> },
    { id: 'docs', label: 'Documentación', icon: <IconRailDoc /> },
  ];
}

// ─── Sort Dropdown ────────────────────────────────────────────────────────────

interface SortDropdownProps {
  isOpen: boolean;
  selected: string;
  onToggle: () => void;
  onSelect: (option: string) => void;
}

const SortDropdown = ({ isOpen, selected, onToggle, onSelect }: SortDropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onToggle();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onToggle]);

  return (
    <div className="vd-sort" ref={ref}>
      <Button
        type="button"
        variant="grey"
        size="lg"
        className="vd-sort__trigger"
        onClick={onToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        iconRight={<IconChevronDown />}
      >
        {selected}
      </Button>
      {isOpen && (
        <ul className="vd-sort__dropdown" role="listbox" aria-label="Criterio de ordenamiento">
          {SORT_OPTIONS.map((opt) => (
            <li
              key={opt}
              className={`vd-sort__option${opt === selected ? ' vd-sort__option--selected' : ''}`}
              role="option"
              aria-selected={opt === selected}
              onClick={() => { onSelect(opt); onToggle(); }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ─── Main Dashboard ───────────────────────────────────────────────────────────

interface VacancyDashboardProps {
  onVacancyClick: (vacancy: VacancyItem, options?: VacancyNavigateOptions) => void;
}

const cloneMockNotificaciones = (): NotificacionItem[] =>
  MOCK_NOTIFICACIONES.map((row) => ({
    ...row,
    clientInternal: row.clientInternal !== undefined ? { ...row.clientInternal } : undefined,
  }));

const VacancyDashboard = ({
  onVacancyClick,
}: VacancyDashboardProps) => {
  const [sidebarOpen, setSidebarOpen]   = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationItems, setNotificationItems] = useState<NotificacionItem[]>(cloneMockNotificaciones);
  const [activeTab,   setActiveTab]     = useState('published');
  const [sortOpen,    setSortOpen]      = useState(false);
  const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
  const [currentPage, setCurrentPage]   = useState(1);
  const [pageSize,    setPageSize]      = useState(20);
  const [historialOpen, setHistorialOpen] = useState(false);
  const [historialVacancy, setHistorialVacancy] = useState<VacancyItem | null>(null);

  const railPrimary = useMemo(() => buildRailPrimaryItems(), []);
  const railSecondary = useMemo(() => buildRailSecondaryItems(), []);
  const internalClientEmail =
    readVacancyShareSession()?.recipientEmails[0] ?? INTERNAL_CLIENT_DEV_EMAIL;

  const handleVacancyMenuAction = useCallback(
    (v: VacancyItem, action: VacancyMenuActionId) => {
      if (action === 'manage-candidates') {
        onVacancyClick(v);
        return;
      }
      if (action === 'status-history') {
        setHistorialVacancy(v);
        setHistorialOpen(true);
        return;
      }
      console.info('Menú vacante:', action, v.id);
    },
    [onVacancyClick],
  );

  const visibleVacancies =
    activeTab === 'all'
      ? TRACKING_VISIBLE_VACANCIES
      : TRACKING_VISIBLE_VACANCIES.filter((v) => STATUS_TO_TAB[v.status] === activeTab);

  const totalPages = Math.max(1, Math.ceil(visibleVacancies.length / pageSize));
  const safePage   = Math.min(currentPage, totalPages);
  const pageStart  = (safePage - 1) * pageSize;
  const pageItems  = visibleVacancies.slice(pageStart, pageStart + pageSize);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <div className="vd vd--analista-shell">
      <button className="vd__fab" type="button" aria-label="Abra el chat de soporte">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      <div className="vd__shell">
        <DashboardAppRail
          isExpanded={sidebarOpen}
          onToggleMenu={() => setSidebarOpen((o) => !o)}
          primaryItems={railPrimary}
          secondaryItems={railSecondary}
        />

        <div className="vd__column">
          <DashboardShellHeader
            onOpenNotifications={() => setNotificationsOpen(true)}
            userEmail={internalClientEmail}
          />

          <main className="vd__main" id="main-content">
            <nav className="vd-tabs vd-tabs--pills" aria-label="Filtros de estado de vacante" role="tablist">
              <Typography.Title level={5} className="vd-tabs__page-heading">
                Vacantes
              </Typography.Title>

              {VACANCY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`vd-tabs__item${activeTab === tab.id ? ' vd-tabs__item--active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="vd__content">
              <div className="vd-filters">
                <div className="vd-filters__left">
                  <button
                    className="vd-filters__search-btn"
                    type="button"
                    aria-label="Abra el buscador para consultar vacantes"
                  >
                    <IconSearch />
                  </button>
                  <Button
                    type="button"
                    variant="grey"
                    size="lg"
                    className="vd-filters__create-magneto"
                    iconLeft={<IconAddSquare />}
                  >
                    Crear nueva vacante
                  </Button>
                </div>

                <div className="vd-filters__right">
                  <SortDropdown
                    isOpen={sortOpen}
                    selected={selectedSort}
                    onToggle={() => setSortOpen((o) => !o)}
                    onSelect={setSelectedSort}
                  />

                  <Button
                    type="button"
                    variant="grey"
                    size="lg"
                    className="vd-filters__sort-dir-magneto"
                    aria-label="Invierta el sentido del ordenamiento"
                  >
                    <IconSortArrows />
                  </Button>

                  <Button
                    type="button"
                    variant="blue"
                    size="lg"
                    className="vd-filters__filter-magneto"
                    aria-label="Abra los filtros avanzados de vacantes"
                  >
                    <IconFilter />
                  </Button>
                </div>
              </div>

              {pageItems.length === 0 ? (
                <div className="vd__empty" role="status">
                  No encontramos vacantes en esta categoría. Seleccione otro filtro o cree una nueva vacante.
                </div>
              ) : (
                <div className="vd-grid" role="list" aria-label="Listado de vacantes">
                  {pageItems.map((vacancy) => (
                    <div key={vacancy.id} role="listitem">
                      <VacancyGridCard
                        vacancy={vacancy}
                        onTitleClick={onVacancyClick}
                        onVacancyMenuAction={handleVacancyMenuAction}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="vd-pagination vd-pagination--pills" aria-label="Paginación del listado">
                <Button
                  type="button"
                  variant="grey"
                  size="md"
                  className="vd-pagination__nav-magneto"
                  onClick={() => setCurrentPage((p) => p - 1)}
                  disabled={safePage <= 1}
                  iconLeft={<IconChevronLeft />}
                >
                  Anterior
                </Button>

                <div className="vd-pagination__pages" aria-label={`Página ${safePage} de ${totalPages}`}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`vd-pagination__page${page === safePage ? ' vd-pagination__page--active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                      type="button"
                      aria-current={page === safePage ? 'page' : undefined}
                      aria-label={`Ir a la página ${page}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <Button
                  type="button"
                  variant="grey"
                  size="md"
                  className="vd-pagination__nav-magneto"
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={safePage >= totalPages}
                  iconRight={<IconChevronRight />}
                >
                  Siguiente
                </Button>

                <div className="vd-pagination__size-wrapper">
                  <select
                    className="vd-pagination__size-select"
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    aria-label="Seleccione cuántas vacantes desea ver por página"
                  >
                    {PAGE_SIZES.map((s) => (
                      <option key={s} value={s}>
                        {s} / página
                      </option>
                    ))}
                  </select>
                  <IconChevronDown />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <NotificationsDrawer
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        vacancies={TRACKING_VISIBLE_VACANCIES}
        items={notificationItems}
        onNavigateVacancy={(v, opts) => {
          setNotificationsOpen(false);
          onVacancyClick(v, opts);
        }}
        onMarkAllRead={() => {
          setNotificationItems((prev) => prev.map((n) => ({ ...n, read: true })));
        }}
        onAfterNavigateMarkRead={(notificationId) => {
          setNotificationItems((prev) =>
            prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n)),
          );
        }}
      />

      {historialVacancy !== null && (
        <HistorialVacanteDrawer
          isOpen={historialOpen}
          onClose={() => {
            setHistorialOpen(false);
            window.setTimeout(() => setHistorialVacancy(null), 520);
          }}
          vacancyId={historialVacancy.id}
          vacancyTitle={historialVacancy.title}
        />
      )}

    </div>
  );
};

export default VacancyDashboard;
