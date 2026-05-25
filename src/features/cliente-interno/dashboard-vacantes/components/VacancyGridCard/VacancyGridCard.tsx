import type { VacancyItem } from '../../vacancy-item.types';
import VacancyKebabMenu, { type VacancyMenuActionId } from '../../CandidatesView/VacancyKebabMenu';

export interface VacancyGridCardProps {
  vacancy: VacancyItem;
  onTitleClick: (vacancy: VacancyItem) => void;
  onVacancyMenuAction: (vacancy: VacancyItem, action: VacancyMenuActionId) => void;
}

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

const IconGlobe = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconPeople = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconUserAdd = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const VacancyGridCard = ({ vacancy, onTitleClick, onVacancyMenuAction }: VacancyGridCardProps) => (
  <article className="vd-card" aria-label={vacancy.title}>
    <div className="vd-card__header">
      <button
        className="vd-card__title-btn"
        onClick={() => onTitleClick(vacancy)}
        type="button"
        aria-label={`Abrir la gestión de candidatos de la vacante «${vacancy.title}»`}
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
        <button
          className="vd-card__action-btn"
          type="button"
          disabled
          aria-label="Registro de candidatos"
          title="Próximamente podrá registrar candidatos desde esta vista."
        >
          <IconUserAdd />
        </button>
      </div>
    </div>
  </article>
);

export default VacancyGridCard;
