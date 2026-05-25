import type { Vacancy, ProcessTab } from '../../interfaces/vacancy.interface';
import './VacancyStatusHeader.scss';

// ─── Props ────────────────────────────────────────────────────────────────────

interface VacancyStatusHeaderProps {
  vacancy: Vacancy;
  hasAccess: boolean;
  activeTab?: number;
  tabs?: ProcessTab[];
  onTabChange?: (index: number) => void;
  onSuggestedByAI?: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-CO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

const DEFAULT_TABS: ProcessTab[] = [
  { label: 'Candidatos', count: 0 },
  { label: 'Preseleccionados', count: 0 },
  { label: 'Entrevista técnica', count: 0 },
  { label: 'Oferta', count: 0 },
  { label: 'Contratados', count: 0 },
];

// ─── Component ────────────────────────────────────────────────────────────────

const VacancyStatusHeader = ({
  vacancy,
  hasAccess,
  activeTab = 0,
  tabs = DEFAULT_TABS,
  onTabChange,
  onSuggestedByAI,
}: VacancyStatusHeaderProps) => {
  if (!hasAccess) {
    return (
      <div
        className="vacancy-status-header vacancy-status-header--restricted"
        role="alert"
        aria-live="polite"
      >
        <p className="vacancy-status-header__restricted-msg">
          Este proceso de selección ya no se encuentra disponible para seguimiento.
        </p>
      </div>
    );
  }

  return (
    <header className="vacancy-status-header" role="banner">
      {/* Top section: info + AI action */}
      <div className="vacancy-status-header__top">
        <div className="vacancy-status-header__info">
          <h1 className="vacancy-status-header__title">{vacancy.title}</h1>
          <p className="vacancy-status-header__subtitle">
            <span className="vacancy-status-header__meta-item">{vacancy.location}</span>
            <span className="vacancy-status-header__separator" aria-hidden="true">·</span>
            <span className="vacancy-status-header__meta-item">{vacancy.contractType}</span>
            <span className="vacancy-status-header__separator" aria-hidden="true">·</span>
            <span className="vacancy-status-header__meta-item">
              Expira: {formatDate(vacancy.expiresAt)}
            </span>
          </p>
        </div>

        <div className="vacancy-status-header__actions">
          <button
            className="vacancy-status-header__ai-btn"
            onClick={onSuggestedByAI}
            type="button"
            aria-label="Ver sugerencias de candidatos por IA"
          >
            <span className="vacancy-status-header__ai-icon" aria-hidden="true">✦</span>
            Sugeridos por IA
          </button>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav
        className="vacancy-status-header__tabs"
        aria-label="Etapas del proceso de selección"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            key={`${tab.label}-${index}`}
            className={[
              'vacancy-status-header__tab',
              activeTab === index ? 'vacancy-status-header__tab--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onTabChange?.(index)}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-label={`${index + 1}. ${tab.label}: ${tab.count} candidatos`}
          >
            <span className="vacancy-status-header__tab-index" aria-hidden="true">
              {index + 1}.
            </span>
            {tab.label}
            <span className="vacancy-status-header__tab-count">({tab.count})</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default VacancyStatusHeader;
