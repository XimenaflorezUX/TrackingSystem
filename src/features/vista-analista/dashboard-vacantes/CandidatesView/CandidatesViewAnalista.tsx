import { useState, useEffect } from 'react';
import type { VacancyItem } from '../vacancy-item.types';
import HistorialVacanteDrawer from '../historial-vacante/HistorialVacanteDrawer';
import type { VacancyShareRecord } from '../../../../api/vacancyShares.types';
import { saveVacancyShare } from '../../../../api/vacancyShares';
import ShareVacancyModal from '../ShareVacancyModal/ShareVacancyModal';
import VacancyKebabMenu from './VacancyKebabMenu';
import './CandidatesViewAnalista.scss';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Candidate {
  id: string;
  name: string;
  initials: string;
  colorIndex: 1 | 2 | 3 | 4 | 5 | 6;
  fitPercentage: number;
  studyLevel: string;
  salaryExpectation: number;
  experience: string[];
  studies: string[];
  skills: string[];
  languages: string[];
  availability: string;
  isSuggestedByAI: boolean;
  status: 'active' | 'discarded' | 'suitable' | 'eliminated';
}

type StatusFilter  = 'active' | 'discarded' | 'suitable' | 'eliminated';
type PipelineStage = 'ai' | 'postulantes' | 'videoentrevista' | 'entrevista-lider' | 'pruebas' | 'apertura';

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'c-01', name: 'Dominga Luz Velasquez Monsalve', initials: 'DV', colorIndex: 1,
    fitPercentage: 81, studyLevel: 'Técnico', salaryExpectation: 1750000,
    experience: ['Enfermería'],
    studies:    ['Auxiliar enfermería'],
    skills:     ['Responsable', 'Resiliencia'],
    languages:  ['Inglés'],
    availability: 'Tiempo completo', isSuggestedByAI: true, status: 'active',
  },
  {
    id: 'c-02', name: 'Angie Paola Bolaños Díaz', initials: 'AB', colorIndex: 2,
    fitPercentage: 72, studyLevel: 'Técnico', salaryExpectation: 751242,
    experience: ['Sin experiencia'],
    studies:    ['Auxiliar de enfermería'],
    skills:     ['Sin habilidades'],
    languages:  ['Sin idiomas'],
    availability: 'Tiempo completo, Medio tiempo', isSuggestedByAI: true, status: 'active',
  },
  {
    id: 'c-03', name: 'Beatriz Castañón Cuervo', initials: 'BC', colorIndex: 3,
    fitPercentage: 68, studyLevel: 'Técnico', salaryExpectation: 1400000,
    experience: ['Auxiliar de enfermería', 'Auxiliar de enfermería'],
    studies:    ['Nuli', 'Nuli'],
    skills:     ['Trabajo en equipo', 'Puntualidad y compromiso'],
    languages:  ['Español'],
    availability: 'Por horas', isSuggestedByAI: true, status: 'active',
  },
  {
    id: 'c-04', name: 'Amparo Ortiz Pérez', initials: 'AO', colorIndex: 4,
    fitPercentage: 66, studyLevel: 'Técnico', salaryExpectation: 1000000,
    experience: ['Aux. en enfermería', 'Aux. en enfermería'],
    studies:    ['Auxiliar en enfermería'],
    skills:     ['Respeto', 'Laboratorio clínico'],
    languages:  ['Español'],
    availability: 'Tiempo completo', isSuggestedByAI: true, status: 'active',
  },
  {
    id: 'c-05', name: 'Maira Cortez Aguilar', initials: 'MC', colorIndex: 5,
    fitPercentage: 67, studyLevel: 'Técnico', salaryExpectation: 2000000,
    experience: ['Toma de muestras', 'Toma de muestras'],
    studies:    ['Auditor interno', 'Salud ocupacional'],
    skills:     ['Eficaz', 'Laborioso'],
    languages:  ['Sin idiomas'],
    availability: 'Jornada diurna', isSuggestedByAI: false, status: 'active',
  },
  {
    id: 'c-06', name: 'María Milagro Llamas Batista', initials: 'ML', colorIndex: 6,
    fitPercentage: 63, studyLevel: 'Técnico', salaryExpectation: 1800000,
    experience: ['Auxiliar de enfermería', 'Auxiliar de enfermería'],
    studies:    ['Auxiliar de enfermería'],
    skills:     ['Sin habilidades'],
    languages:  ['Sin licencias'],
    availability: 'Medio tiempo', isSuggestedByAI: false, status: 'active',
  },
  {
    id: 'c-07', name: 'Lizbeth Susana Ayala Fonseca', initials: 'LA', colorIndex: 1,
    fitPercentage: 51, studyLevel: 'Técnico', salaryExpectation: 1200000,
    experience: ['Técny express', 'Auxiliar de enfermería'],
    studies:    ['Primero', 'Auxiliar de enfermería'],
    skills:     ['Experiencias en salud'],
    languages:  ['Sin idiomas'],
    availability: 'Tiempo completo', isSuggestedByAI: false, status: 'active',
  },
  {
    id: 'c-08', name: 'Rosangélica Pérez Batista', initials: 'RP', colorIndex: 2,
    fitPercentage: 62, studyLevel: 'Tecnólogo', salaryExpectation: 1300000,
    experience: ['Auxiliar de enfer.', 'Técnico laboral'],
    studies:    ['Técnico laboral', 'Técnico laboral'],
    skills:     ['Lo que me propongo lo logro'],
    languages:  ['Español', 'Aprendo rápido'],
    availability: 'Tiempo completo, Medio tiempo', isSuggestedByAI: false, status: 'active',
  },
];

const PIPELINE_STAGES = [
  { id: 'ai'              as PipelineStage, label: 'Sugeridos por IA',    isAI: true,  count: 0  },
  { id: 'postulantes'     as PipelineStage, label: 'POSTULANTES',          isAI: false, count: 1,  index: 1 },
  { id: 'videoentrevista' as PipelineStage, label: 'VIDEOENTREVISTA',      isAI: false, count: 18, index: 2 },
  { id: 'entrevista-lider'as PipelineStage, label: 'ENTREVISTA LÍDER C.',  isAI: false, count: 0,  index: 3 },
  { id: 'pruebas'         as PipelineStage, label: 'PRUEBAS PSICOLÓGIC.', isAI: false, count: 0,  index: 4 },
  { id: 'apertura'        as PipelineStage, label: 'APERTURA CONV.',       isAI: false, count: 0,  index: 5 },
];

const STATUS_FILTERS: { id: StatusFilter; label: string; count: number }[] = [
  { id: 'active',    label: 'Activos',      count: 18 },
  { id: 'discarded', label: 'Descartados',  count: 22 },
  { id: 'suitable',  label: 'Aptos',        count: 13 },
  { id: 'eliminated',label: 'Eliminados',   count: 0  },
];

const PAGE_SIZES = [10, 20, 50];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
}

function formatExpiryDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-CO', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconArrowLeft   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>;
const IconDots        = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>;
const IconChevronRight= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>;
const IconStar        = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const IconSearch      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconChevronDown = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>;
const IconSortArrows  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M11 5H4M7 12H4M9 19H4M13 5l4 4 4-4M17 9v10"/></svg>;
const IconColumns     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="18"/><rect x="14" y="3" width="7" height="18"/></svg>;
const IconGrid        = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const IconFilter      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconVideo       = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
const IconCheck       = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
const IconX           = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const IconInfo        = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const IconUserActive  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconUserX       = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>;
const IconUserCheck   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>;
const IconTrash       = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
const IconChevronLeft = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>;

// ─── Expandable cell ──────────────────────────────────────────────────────────

const ExpandableCell = ({ items }: { items: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 2);
  return (
    <div className="cv-table__expandable">
      {visible.map((item, i) => (
        <span key={i} className="cv-table__cell-text">{item}</span>
      ))}
      {items.length > 2 && (
        <button
          className="cv-table__see-more"
          onClick={() => setExpanded((e) => !e)}
          type="button"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
      {items.length <= 2 && items.length > 0 && (
        <button className="cv-table__see-more" type="button">Ver más</button>
      )}
    </div>
  );
};

// ─── Candidate Row ────────────────────────────────────────────────────────────

interface CandidateRowProps {
  candidate: Candidate;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onInfo: (id: string) => void;
}

const CandidateRow = ({ candidate, isSelected, onSelect, onApprove, onReject, onInfo }: CandidateRowProps) => (
  <tr className={`cv-table__row${isSelected ? ' cv-table__row--selected' : ''}`}>
    {/* Candidate */}
    <td className="cv-table__td cv-table__td--candidate">
      <div className="cv-table__candidate-cell">
        <input
          type="checkbox"
          className="cv-table__checkbox"
          checked={isSelected}
          onChange={() => onSelect(candidate.id)}
          aria-label={`Seleccionar ${candidate.name}`}
        />
        <div className="cv-table__avatar-wrapper">
          <div className={`cv-table__avatar cv-table__avatar--color-${candidate.colorIndex}`} aria-hidden="true">
            {candidate.initials}
          </div>
          <span className="cv-table__avatar-badge" aria-label="Video entrevista">
            <IconVideo />
          </span>
        </div>
        <div className="cv-table__candidate-info">
          <span className="cv-table__candidate-name" title={candidate.name}>
            {candidate.name}
          </span>
          {candidate.isSuggestedByAI && (
            <span className="cv-table__ai-badge" aria-label="Sugerido con IA">
              Sugerido con IA
            </span>
          )}
        </div>
      </div>
    </td>

    {/* Fit percentage */}
    <td className="cv-table__td cv-table__td--fit">
      <div className="cv-table__fit-cell">
        <span className="cv-table__fit-pct">{candidate.fitPercentage}%</span>
        <button className="cv-table__train-link" type="button">
          ¡Entrenemos el ranking IA!
        </button>
      </div>
    </td>

    {/* Study level */}
    <td className="cv-table__td">
      <span className="cv-table__cell-text">{candidate.studyLevel}</span>
    </td>

    {/* Salary */}
    <td className="cv-table__td">
      <span className="cv-table__cell-text">{formatCurrency(candidate.salaryExpectation)}</span>
    </td>

    {/* Experience */}
    <td className="cv-table__td"><ExpandableCell items={candidate.experience} /></td>

    {/* Studies */}
    <td className="cv-table__td"><ExpandableCell items={candidate.studies} /></td>

    {/* Skills */}
    <td className="cv-table__td"><ExpandableCell items={candidate.skills} /></td>

    {/* Languages */}
    <td className="cv-table__td"><ExpandableCell items={candidate.languages} /></td>

    {/* Availability */}
    <td className="cv-table__td">
      <span className="cv-table__cell-text">{candidate.availability}</span>
    </td>

    {/* Row actions — revealed on hover */}
    <td className="cv-table__td cv-table__td--actions">
      <div className="cv-table__row-actions" role="group" aria-label={`Acciones para ${candidate.name}`}>
        <button
          className="cv-table__action-btn cv-table__action-btn--reject"
          onClick={() => onReject(candidate.id)}
          aria-label="Rechazar candidato"
          type="button"
        >
          <IconX />
        </button>
        <button
          className="cv-table__action-btn cv-table__action-btn--approve"
          onClick={() => onApprove(candidate.id)}
          aria-label="Aprobar candidato"
          type="button"
        >
          <IconCheck />
        </button>
        <button
          className="cv-table__action-btn cv-table__action-btn--info"
          onClick={() => onInfo(candidate.id)}
          aria-label="Ver detalle"
          type="button"
        >
          <IconInfo />
        </button>
      </div>
    </td>
  </tr>
);

// ─── Main Component ───────────────────────────────────────────────────────────

interface CandidatesViewProps {
  vacancy: VacancyItem;
  onBack: () => void;
  openShareOnMount?: boolean;
  onVacancySharePersisted?: (record: VacancyShareRecord) => void;
  onShareThenEmailSimulation?: (recipientEmails: string[]) => void;
}

const CandidatesView = ({
  vacancy,
  onBack,
  openShareOnMount = false,
  onVacancySharePersisted,
  onShareThenEmailSimulation,
}: CandidatesViewProps) => {
  const [activeStage,    setActiveStage]    = useState<PipelineStage>('videoentrevista');
  const [activeStatus,   setActiveStatus]   = useState<StatusFilter>('active');
  const [selectedIds,    setSelectedIds]    = useState<Set<string>>(new Set());
  const [currentPage,    setCurrentPage]    = useState(1);
  const [pageSize,       setPageSize]       = useState(20);
  const [historialOpen,  setHistorialOpen]  = useState(false);
  const [shareVacancyOpen, setShareVacancyOpen] = useState(false);

  useEffect(() => {
    if (openShareOnMount) setShareVacancyOpen(true);
  }, [openShareOnMount]);

  const candidates = MOCK_CANDIDATES;
  const totalPages = Math.max(1, Math.ceil(candidates.length / pageSize));
  const safePage   = Math.min(currentPage, totalPages);
  const pageStart  = (safePage - 1) * pageSize;
  const pageItems  = candidates.slice(pageStart, pageStart + pageSize);

  const allSelected   = pageItems.length > 0 && pageItems.every((c) => selectedIds.has(c.id));
  const someSelected  = pageItems.some((c) => selectedIds.has(c.id));

  const toggleAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(pageItems.map((c) => c.id)));
    }
  };

  const toggleOne = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="cv">
      {/* ── Pipeline Header ────────────────────────────────────────────────── */}
      <header className="cv-pipeline" role="banner">
        <div className="cv-pipeline__left">
          <button className="cv-pipeline__back-btn" onClick={onBack} type="button" aria-label="Volver al dashboard">
            <IconArrowLeft />
          </button>
          <div className="cv-pipeline__vacancy-info">
            <div className="cv-pipeline__vacancy-name">
              <span className="cv-pipeline__vacancy-title" title={vacancy.title}>
                {vacancy.title}
              </span>
              <VacancyKebabMenu
                onAction={(action) => {
                  if (action === 'status-history') {
                    setHistorialOpen(true);
                    return;
                  }
                  if (action === 'share-internal-client') {
                    setShareVacancyOpen(true);
                    return;
                  }
                  console.info('Acción de vacante:', action, vacancy.id);
                }}
              />
            </div>
            <p className="cv-pipeline__vacancy-meta">
              {vacancy.location}&nbsp;·&nbsp;1 cupo&nbsp;·&nbsp;Expira el {formatExpiryDate(vacancy.expiresAt)}
            </p>
          </div>
        </div>

        <nav className="cv-pipeline__stages" aria-label="Etapas del proceso" role="tablist">
          {PIPELINE_STAGES.map((stage) => (
            <button
              key={stage.id}
              className={[
                'cv-pipeline__stage',
                stage.isAI               ? 'cv-pipeline__stage--ai'     : '',
                activeStage === stage.id ? 'cv-pipeline__stage--active'  : '',
              ].filter(Boolean).join(' ')}
              onClick={() => setActiveStage(stage.id)}
              type="button"
              role="tab"
              aria-selected={activeStage === stage.id}
            >
              {stage.isAI && <IconStar />}
              {!stage.isAI && stage.index && (
                <span className="cv-pipeline__stage-index">{stage.index}.&nbsp;</span>
              )}
              {stage.label}
              {!stage.isAI && stage.count !== undefined && (
                <span className="cv-pipeline__stage-count">({stage.count})</span>
              )}
              {activeStage === stage.id && (
                <span className="cv-pipeline__stage-dots"><IconDots /></span>
              )}
            </button>
          ))}
          <button className="cv-pipeline__scroll-btn" type="button" aria-label="Más etapas">
            <IconChevronRight />
          </button>
        </nav>
      </header>

      {/* ── Secondary Filter Bar ──────────────────────────────────────────── */}
      <div className="cv-filters">
        <div className="cv-filters__left">
          <input
            type="checkbox"
            className="cv-filters__select-all"
            checked={allSelected}
            ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }}
            onChange={toggleAll}
            aria-label="Seleccionar todos"
          />
          <span className="cv-filters__total-label">
            Todos ({selectedIds.size})
          </span>

          <span className="cv-filters__divider" aria-hidden="true" />
          <button className="cv-filters__search-btn" type="button" aria-label="Buscar candidato">
            <IconSearch />
          </button>
          <span className="cv-filters__divider" aria-hidden="true" />

          <div className="cv-filters__status-group" role="group" aria-label="Filtrar por estado">
            {STATUS_FILTERS.map((sf) => (
              <button
                key={sf.id}
                className={`cv-filters__status-btn${activeStatus === sf.id ? ' cv-filters__status-btn--active' : ''}`}
                onClick={() => setActiveStatus(sf.id)}
                type="button"
              >
                {sf.id === 'active'     && <IconUserActive />}
                {sf.id === 'discarded'  && <IconUserX />}
                {sf.id === 'suitable'   && <IconUserCheck />}
                {sf.id === 'eliminated' && <IconTrash />}
                {sf.label} ({sf.count})
              </button>
            ))}
          </div>
        </div>

        <div className="cv-filters__right">
          <div className="cv-filters__sort-wrapper">
            <span className="cv-filters__sort-label">Porcentaje de aj.</span>
            <IconChevronDown />
          </div>

          <button className="cv-filters__tool-btn" type="button" aria-label="Dirección de orden">
            <IconSortArrows />
          </button>

          <div className="cv-filters__col-wrapper">
            <IconColumns />
            <span>8 Columnas</span>
            <IconChevronDown />
          </div>

          <button className="cv-filters__tool-btn" type="button" aria-label="Vista de cuadrícula">
            <IconGrid />
          </button>

          <button className="cv-filters__filter-btn" type="button" aria-label="Filtros avanzados">
            <IconFilter />
          </button>
        </div>
      </div>

      {/* ── Candidates Table ──────────────────────────────────────────────── */}
      <div className="cv-table__scroll-wrapper" role="region" aria-label="Tabla de candidatos" tabIndex={0}>
        <table className="cv-table">
          <thead className="cv-table__head">
            <tr>
              <th className="cv-table__th cv-table__th--candidate" scope="col">Candidato</th>
              <th className="cv-table__th cv-table__th--fit"       scope="col">% de ajuste</th>
              <th className="cv-table__th"                          scope="col">Nivel de estudios</th>
              <th className="cv-table__th"                          scope="col">Aspiración salarial</th>
              <th className="cv-table__th"                          scope="col">Experiencia</th>
              <th className="cv-table__th"                          scope="col">Estudios</th>
              <th className="cv-table__th"                          scope="col">Habilidades</th>
              <th className="cv-table__th"                          scope="col">Idiomas</th>
              <th className="cv-table__th"                          scope="col">Disponibilidad horaria</th>
              <th className="cv-table__th cv-table__th--actions"    scope="col" aria-label="Acciones" />
            </tr>
          </thead>
          <tbody className="cv-table__body">
            {pageItems.map((candidate) => (
              <CandidateRow
                key={candidate.id}
                candidate={candidate}
                isSelected={selectedIds.has(candidate.id)}
                onSelect={toggleOne}
                onApprove={(id) => console.info('Aprobar:', id)}
                onReject={(id)  => console.info('Rechazar:', id)}
                onInfo={(id)    => console.info('Info:', id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ────────────────────────────────────────────────────── */}
      <HistorialVacanteDrawer
        isOpen={historialOpen}
        onClose={() => setHistorialOpen(false)}
        vacancyId={vacancy.id}
        vacancyTitle={vacancy.title}
      />

      <ShareVacancyModal
        isOpen={shareVacancyOpen}
        onClose={() => setShareVacancyOpen(false)}
        vacancyId={vacancy.id}
        vacancyTitle={vacancy.title}
        pipelineStages={PIPELINE_STAGES.map(({ id, label }) => ({ id, label }))}
        onSubmit={async (payload) =>
          saveVacancyShare({
            ...payload,
            vacancyTitle: vacancy.title,
          })
        }
        onSharePersisted={onVacancySharePersisted}
        onShareThenEmailSimulation={onShareThenEmailSimulation}
      />

      <div className="cv-pagination" aria-label="Paginación">
        <button
          className="cv-pagination__btn"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={safePage <= 1}
          type="button"
        >
          <IconChevronLeft /> Anterior
        </button>

        <div className="cv-pagination__pages">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`cv-pagination__page${page === safePage ? ' cv-pagination__page--active' : ''}`}
              onClick={() => setCurrentPage(page)}
              type="button"
              aria-current={page === safePage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="cv-pagination__btn"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={safePage >= totalPages}
          type="button"
        >
          Siguiente <IconChevronRight />
        </button>

        <div className="cv-pagination__size-wrapper">
          <select
            className="cv-pagination__size-select"
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
            aria-label="Candidatos por página"
          >
            {PAGE_SIZES.map((s) => <option key={s} value={s}>{s} / página</option>)}
          </select>
          <IconChevronDown />
        </div>
      </div>
    </div>
  );
};

export default CandidatesView;
