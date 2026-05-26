import { useState, useRef, useEffect, useCallback } from 'react';
import type { VacancyItem } from './vacancy-item.types';
import VacancyKebabMenu, { type VacancyMenuActionId } from './CandidatesView/VacancyKebabMenu';
import HistorialVacanteDrawer from './historial-vacante/HistorialVacanteDrawer';
import type { VacancyShareRecord } from '../../../api/vacancyShares.types';
import { saveVacancyShare } from '../../../api/vacancyShares';
import ShareVacancyModal from './ShareVacancyModal/ShareVacancyModal';
import { ANALISTA_SHARE_PIPELINE_STAGES } from './pipelineStagesForShare';
import { brandingAssetUrl } from '@/utils/brandingAssetUrl';
import './VacancyDashboard.scss';

export type { VacancyItem } from './vacancy-item.types';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const VACANCY_TABS: Tab[] = [
  { id: 'draft',     label: 'Borrador'   },
  { id: 'published', label: 'Publicadas' },
  { id: 'expired',   label: 'Expiradas'  },
  { id: 'inactive',  label: 'Inactivas'  },
  { id: 'cancelled', label: 'Canceladas' },
  { id: 'covered',   label: 'Cubiertas'  },
];

const SORT_OPTIONS = ['Fecha de modificación', 'Fecha de creación'];
const PAGE_SIZES   = [10, 20, 50];

const MOCK_VACANCIES: VacancyItem[] = [
  { id: 'v-01', title: 'Analista contable',                    location: 'Medellín',      contractType: 'Término indefinido', status: 'Publicada',  createdAt: '2026-03-12', expiresAt: '2026-06-12', channelEmail: 'flujo.requisiciones@gmail.com',    applicantsCount: 0  },
  { id: 'v-02', title: 'Frontend React',    location: 'Bogotá',        contractType: 'Término indefinido', status: 'Publicada',  createdAt: '2026-03-21', expiresAt: '2026-06-21', channelEmail: 'reclutamiento.tech@magneto.com',    applicantsCount: 2  },
  { id: 'v-03', title: 'Analista de Datos Junior',               location: 'Medellín',      contractType: 'Por proyecto',       status: 'Publicada',  createdAt: '2026-04-01', expiresAt: '2026-07-01', channelEmail: 'talent.analytics@empresa.co',       applicantsCount: 1  },
  { id: 'v-04', title: 'Diseñador UX/UI',                        location: 'Cali',          contractType: 'Término fijo',       status: 'Publicada',  createdAt: '2026-04-10', expiresAt: '2026-07-10', channelEmail: 'diseno.rrhh@empresa.com',           applicantsCount: 5  },
  { id: 'v-05', title: 'Ingeniero DevOps',                       location: 'Bogotá',        contractType: 'Término indefinido', status: 'Publicada',  createdAt: '2026-04-15', expiresAt: '2026-07-15', channelEmail: 'infraestructura@empresa.com',       applicantsCount: 3  },
  { id: 'v-06', title: 'Líder Técnico Backend Node.js',          location: 'Medellín',      contractType: 'Término indefinido', status: 'Publicada',  createdAt: '2026-04-28', expiresAt: '2026-07-28', channelEmail: 'backend.leads@magneto.com',         applicantsCount: 7  },
  { id: 'v-07', title: 'Product Manager',                        location: 'Bogotá',        contractType: 'Término indefinido', status: 'Borrador',   createdAt: '2026-05-01', expiresAt: '2026-08-01', channelEmail: 'product@empresa.com',               applicantsCount: 0  },
  { id: 'v-08', title: 'Especialista en Marketing Digital',      location: 'Cali',          contractType: 'Por proyecto',       status: 'Borrador',   createdAt: '2026-05-02', expiresAt: '2026-08-02', channelEmail: 'marketing.digital@empresa.com',     applicantsCount: 0  },
  { id: 'v-09', title: 'Analista Financiero Sr.',                location: 'Bogotá',        contractType: 'Término indefinido', status: 'Expirada',   createdAt: '2026-01-10', expiresAt: '2026-04-10', channelEmail: 'finanzas@empresa.com',              applicantsCount: 4  },
  { id: 'v-10', title: 'Scrum Master',                           location: 'Barranquilla',  contractType: 'Término fijo',       status: 'Expirada',   createdAt: '2026-02-10', expiresAt: '2026-05-10', channelEmail: 'agile.team@empresa.com',            applicantsCount: 2  },
  { id: 'v-11', title: 'Coordinador de Calidad ISO',             location: 'Bogotá',        contractType: 'Término fijo',       status: 'Inactiva',   createdAt: '2026-02-20', expiresAt: '2026-05-20', channelEmail: 'calidad@empresa.com',               applicantsCount: 1  },
  { id: 'v-12', title: 'Arquitecto de Software Cloud',           location: 'Bogotá',        contractType: 'Término indefinido', status: 'Cubierta',   createdAt: '2025-12-01', expiresAt: '2026-03-01', channelEmail: 'cloud.arch@magneto.com',            applicantsCount: 9  },
  { id: 'v-13', title: 'Ejecutivo Comercial B2B',                location: 'Medellín',      contractType: 'Por proyecto',       status: 'Cancelada',  createdAt: '2026-01-05', expiresAt: '2026-04-05', channelEmail: 'ventas.b2b@empresa.com',            applicantsCount: 0  },
];

const STATUS_TO_TAB: Record<VacancyItem['status'], string> = {
  Publicada:  'published',
  Borrador:   'draft',
  Expirada:   'expired',
  Inactiva:   'inactive',
  Cancelada:  'cancelled',
  Cubierta:   'covered',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-CO', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  });
}

// ─── Icons (inline SVG) ───────────────────────────────────────────────────────

const IconMenu       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="3" y1="6"  x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const IconBell       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const IconChevronDown= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>;
const IconHome       = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconClock      = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconBriefcase  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconUsers      = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBarChart   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6"  y1="20" x2="6"  y2="14"/></svg>;
const IconSettings   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconSearch     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconFilter     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconSortArrows = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="8 15 4 19 0 15"/><line x1="4" y1="3" x2="4" y2="19"/><polyline points="16 9 20 5 24 9"/><line x1="20" y1="3" x2="20" y2="21"/></svg>;
const IconGlobe      = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconPeople     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconCopy       = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>;
const IconShare      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconChevronLeft = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>;
const IconChevronRight= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>;

// ─── Magneto Logo ─────────────────────────────────────────────────────────────

const MAGNETO_WORDMARK_SRC = brandingAssetUrl('magneto365-ai-wordmark-dashboard.png');

const MagnetoLogo = () => (
  <div className="vd-navbar__logo" aria-label="Magneto">
    <img
      className="vd-navbar__logo-img"
      src={MAGNETO_WORDMARK_SRC}
      alt=""
      width={140}
      height={28}
      decoding="async"
    />
  </div>
);

// ─── NavBar ───────────────────────────────────────────────────────────────────

interface NavBarProps {
  onMenuToggle: () => void;
}

const NavBar = ({ onMenuToggle }: NavBarProps) => (
  <header className="vd-navbar" role="banner">
    <div className="vd-navbar__left">
      <button
        className="vd-navbar__icon-btn"
        onClick={onMenuToggle}
        aria-label="Abrir menú de navegación"
        type="button"
      >
        <IconMenu />
      </button>
      <MagnetoLogo />
    </div>

    <div className="vd-navbar__right">
      <button className="vd-navbar__icon-btn" aria-label="Notificaciones" type="button">
        <IconBell />
      </button>

      <button className="vd-navbar__profile" aria-label="Menú de usuario" type="button">
        <span className="vd-navbar__avatar" aria-hidden="true">XA</span>
        <span className="vd-navbar__user-info">
          <span className="vd-navbar__user-name">Ximena Álvarez</span>
          <span className="vd-navbar__user-org">Magneto Piloto</span>
        </span>
        <IconChevronDown />
      </button>
    </div>
  </header>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: <IconHome />,      label: 'Inicio'      },
  { icon: <IconClock />,     label: 'Historial'   },
  { icon: <IconBriefcase />, label: 'Vacantes', isActive: true },
  { icon: <IconUsers />,     label: 'Candidatos'  },
  { icon: <IconBarChart />,  label: 'Analytics'   },
  { icon: <IconSettings />,  label: 'Configuración'},
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => (
  <aside className={`vd-sidebar${isOpen ? ' vd-sidebar--expanded' : ''}`} aria-label="Navegación principal">
    <nav className="vd-sidebar__nav">
      {SIDEBAR_ITEMS.map((item) => (
        <button
          key={item.label}
          className={`vd-sidebar__item${item.isActive ? ' vd-sidebar__item--active' : ''}`}
          aria-label={item.label}
          aria-current={item.isActive ? 'page' : undefined}
          type="button"
        >
          <span className="vd-sidebar__icon">{item.icon}</span>
          {isOpen && <span className="vd-sidebar__label">{item.label}</span>}
        </button>
      ))}
    </nav>

    <div className="vd-sidebar__footer">
      <span className="vd-sidebar__flag" aria-label="Mercado: Colombia" role="img">🇨🇴</span>
    </div>
  </aside>
);

// ─── Vacancy Card ─────────────────────────────────────────────────────────────

interface VacancyGridCardProps {
  vacancy: VacancyItem;
  onTitleClick: (vacancy: VacancyItem) => void;
  onVacancyMenuAction: (vacancy: VacancyItem, action: VacancyMenuActionId) => void;
}

const VacancyGridCard = ({ vacancy, onTitleClick, onVacancyMenuAction }: VacancyGridCardProps) => (
  <article className="vd-card" aria-label={vacancy.title}>
    <div className="vd-card__header">
      <button
        className="vd-card__title-btn"
        onClick={() => onTitleClick(vacancy)}
        type="button"
        aria-label={`Ver candidatos de: ${vacancy.title}`}
        title={vacancy.title}
      >
        {vacancy.title}
      </button>
      <VacancyKebabMenu surface="card" onAction={(action) => onVacancyMenuAction(vacancy, action)} />
    </div>

    <p className="vd-card__location">
      {vacancy.location}&nbsp;&nbsp;–&nbsp;&nbsp;{vacancy.contractType}
    </p>

    <div className="vd-card__status-row">
      <span className="vd-card__status-dot" aria-hidden="true" />
      <span className="vd-card__dates">
        Creada: {formatShortDate(vacancy.createdAt)}&nbsp;|&nbsp;Expira: {formatShortDate(vacancy.expiresAt)}
      </span>
    </div>

    <div className="vd-card__channel">
      <IconGlobe />
      <span className="vd-card__channel-email" title={vacancy.channelEmail}>
        {vacancy.channelEmail}
      </span>
    </div>

    <div className="vd-card__footer">
      <span className="vd-card__applicants">
        <IconPeople />
        <span>AR: {vacancy.applicantsCount}</span>
      </span>
      <div className="vd-card__actions">
        <button className="vd-card__action-btn" type="button" aria-label="Duplicar vacante">
          <IconCopy />
        </button>
        <button className="vd-card__action-btn" type="button" aria-label="Compartir enlace">
          <IconShare />
        </button>
      </div>
    </div>
  </article>
);

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
      <button
        className="vd-sort__trigger"
        onClick={onToggle}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selected}</span>
        <IconChevronDown />
      </button>
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
  onVacancyClick: (vacancy: VacancyItem) => void;
  onVacancySharePersisted?: (record: VacancyShareRecord) => void;
  onShareThenEmailSimulation?: (recipientEmails: string[]) => void;
}

const VacancyDashboard = ({
  onVacancyClick,
  onVacancySharePersisted,
  onShareThenEmailSimulation,
}: VacancyDashboardProps) => {
  const [sidebarOpen, setSidebarOpen]   = useState(false);
  const [activeTab,   setActiveTab]     = useState('published');
  const [sortOpen,    setSortOpen]      = useState(false);
  const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
  const [currentPage, setCurrentPage]   = useState(1);
  const [pageSize,    setPageSize]      = useState(20);
  const [historialOpen, setHistorialOpen] = useState(false);
  const [historialVacancy, setHistorialVacancy] = useState<VacancyItem | null>(null);
  const [historialInitialTab, setHistorialInitialTab] = useState<'historial' | 'accesos'>('historial');
  const [shareVacancyOpen, setShareVacancyOpen] = useState(false);
  const [shareVacancyTarget, setShareVacancyTarget] = useState<VacancyItem | null>(null);

  const handleVacancyMenuAction = useCallback(
    (v: VacancyItem, action: VacancyMenuActionId) => {
      if (action === 'manage-candidates') {
        onVacancyClick(v);
        return;
      }
      if (action === 'status-history') {
        setHistorialVacancy(v);
        setHistorialInitialTab('historial');
        setHistorialOpen(true);
        return;
      }
      if (action === 'manage-accesses') {
        setHistorialVacancy(v);
        setHistorialInitialTab('accesos');
        setHistorialOpen(true);
        return;
      }
      if (action === 'share-internal-client') {
        setShareVacancyTarget(v);
        setShareVacancyOpen(true);
        return;
      }
      console.info('Menú vacante:', action, v.id);
    },
    [onVacancyClick],
  );

  const visibleVacancies = MOCK_VACANCIES.filter(
    (v) => STATUS_TO_TAB[v.status] === activeTab,
  );

  const totalPages = Math.max(1, Math.ceil(visibleVacancies.length / pageSize));
  const safePage   = Math.min(currentPage, totalPages);
  const pageStart  = (safePage - 1) * pageSize;
  const pageItems  = visibleVacancies.slice(pageStart, pageStart + pageSize);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <div className="vd">
      <NavBar onMenuToggle={() => setSidebarOpen((o) => !o)} />

      {/* Floating chat/support button */}
      <button className="vd__fab" type="button" aria-label="Soporte por chat">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      <div className="vd__body">
        <Sidebar isOpen={sidebarOpen} />

        <main className="vd__main" id="main-content">
          {/* ── Tabs ─────────────────────────────────────────────────── */}
          <nav className="vd-tabs" aria-label="Filtros de vacante" role="tablist">
            {/* Page label — not a selectable tab */}
            <span className="vd-tabs__page-label" aria-hidden="true">Vacantes</span>

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
            {/* ── Filter row ─────────────────────────────────────────── */}
            <div className="vd-filters">
              <div className="vd-filters__left">
                <button className="vd-filters__search-btn" type="button" aria-label="Buscar vacantes">
                  <IconSearch />
                </button>
                <button className="vd-filters__create-btn" type="button">
                  + Crear nueva vacante
                </button>
              </div>

              <div className="vd-filters__right">
                <SortDropdown
                  isOpen={sortOpen}
                  selected={selectedSort}
                  onToggle={() => setSortOpen((o) => !o)}
                  onSelect={setSelectedSort}
                />

                <button className="vd-filters__sort-dir-btn" type="button" aria-label="Dirección de orden">
                  <IconSortArrows />
                </button>

                <button className="vd-filters__filter-btn" type="button" aria-label="Filtros avanzados">
                  <IconFilter />
                </button>
              </div>
            </div>

            {/* ── Card Grid ──────────────────────────────────────────── */}
            {pageItems.length === 0 ? (
              <div className="vd__empty" role="status">
                No hay vacantes en esta categoría.
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

            {/* ── Pagination ─────────────────────────────────────────── */}
            <div className="vd-pagination" aria-label="Paginación">
              <button
                className="vd-pagination__btn"
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={safePage <= 1}
                type="button"
                aria-label="Página anterior"
              >
                <IconChevronLeft /> Anterior
              </button>

              <div className="vd-pagination__pages" aria-label={`Página ${safePage} de ${totalPages}`}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`vd-pagination__page${page === safePage ? ' vd-pagination__page--active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                    aria-current={page === safePage ? 'page' : undefined}
                    aria-label={`Ir a página ${page}`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className="vd-pagination__btn"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={safePage >= totalPages}
                type="button"
                aria-label="Página siguiente"
              >
                Siguiente <IconChevronRight />
              </button>

              <div className="vd-pagination__size-wrapper">
                <select
                  className="vd-pagination__size-select"
                  value={pageSize}
                  onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
                  aria-label="Vacantes por página"
                >
                  {PAGE_SIZES.map((s) => (
                    <option key={s} value={s}>{s} / página</option>
                  ))}
                </select>
                <IconChevronDown />
              </div>
            </div>

          </div>
        </main>
      </div>

      {historialVacancy !== null && (
        <HistorialVacanteDrawer
          isOpen={historialOpen}
          onClose={() => {
            setHistorialOpen(false);
            window.setTimeout(() => setHistorialVacancy(null), 520);
          }}
          vacancyId={historialVacancy.id}
          vacancyTitle={historialVacancy.title}
          initialTab={historialInitialTab}
          onShareVacancy={() => {
            setShareVacancyTarget(historialVacancy);
            setShareVacancyOpen(true);
          }}
        />
      )}

      {shareVacancyTarget !== null && (
        <ShareVacancyModal
          isOpen={shareVacancyOpen}
          onClose={() => {
            setShareVacancyOpen(false);
            window.setTimeout(() => setShareVacancyTarget(null), 0);
          }}
          vacancyId={shareVacancyTarget.id}
          vacancyTitle={shareVacancyTarget.title}
          pipelineStages={ANALISTA_SHARE_PIPELINE_STAGES}
          onSubmit={async (payload) =>
            saveVacancyShare({
              ...payload,
              vacancyTitle: shareVacancyTarget.title,
            })
          }
          onSharePersisted={onVacancySharePersisted}
          onShareThenEmailSimulation={onShareThenEmailSimulation}
        />
      )}
    </div>
  );
};

export default VacancyDashboard;
