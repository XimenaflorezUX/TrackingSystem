import type { Vacancy, VacancyStatus } from '../../interfaces/vacancy.interface';
import './VacancyCard.scss';

// ─── Props ────────────────────────────────────────────────────────────────────

interface VacancyCardProps {
  vacancy: Vacancy;
  hasAccess: boolean;
  onCopyLink?: () => void;
  onAddCandidate?: () => void;
  onMenuClick?: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-CO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function getDaysElapsed(isoDate: string): number {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const STATUS_MODIFIER: Record<VacancyStatus, string> = {
  Publicada: 'published',
  Expirada: 'expired',
  Cubierta: 'covered',
  Inactiva: 'inactive',
  Cancelada: 'cancelled',
};

const ACTIVE_STATUSES: VacancyStatus[] = ['Publicada', 'Cubierta'];

// ─── Component ────────────────────────────────────────────────────────────────

const VacancyCard = ({
  vacancy,
  hasAccess,
  onCopyLink,
  onAddCandidate,
  onMenuClick,
}: VacancyCardProps) => {
  if (!hasAccess) {
    return (
      <div className="vacancy-card vacancy-card--restricted" role="alert" aria-live="polite">
        <p className="vacancy-card__restricted-msg">
          No tienes acceso para visualizar esta información. Completa el proceso de verificación.
        </p>
      </div>
    );
  }

  const daysElapsed = getDaysElapsed(vacancy.createdAt);
  const isActive = ACTIVE_STATUSES.includes(vacancy.status);
  const statusMod = STATUS_MODIFIER[vacancy.status];
  const timeLabel = isActive
    ? `Tiempo activa: ${daysElapsed} días`
    : `Hace ${daysElapsed} días`;

  return (
    <article className="vacancy-card" aria-label={`Vacante: ${vacancy.title}`}>
      {/* Header */}
      <header className="vacancy-card__header">
        <h3 className="vacancy-card__title">{vacancy.title}</h3>
        <button
          className="vacancy-card__menu-btn"
          onClick={onMenuClick}
          aria-label="Más opciones de la vacante"
          type="button"
        >
          <span className="vacancy-card__menu-icon" aria-hidden="true">⋮</span>
        </button>
      </header>

      {/* Status */}
      <div className="vacancy-card__status-row">
        <span
          className={`vacancy-card__status-dot vacancy-card__status-dot--${statusMod}`}
          aria-hidden="true"
        />
        <span className={`vacancy-card__status-label vacancy-card__status-label--${statusMod}`}>
          {vacancy.status}
        </span>
        <span className="vacancy-card__dates" aria-label="Fechas de vigencia">
          Creada: {formatDate(vacancy.createdAt)}&nbsp;|&nbsp;Expira: {formatDate(vacancy.expiresAt)}
        </span>
      </div>

      {/* Recruiter */}
      <div className="vacancy-card__recruiter">
        <span className="vacancy-card__recruiter-icon" aria-hidden="true">👤</span>
        <span className="vacancy-card__recruiter-name">{vacancy.recruiterName}</span>
        <span className="vacancy-card__recruiter-email">{vacancy.recruiterEmail}</span>
      </div>

      {/* Time elapsed */}
      <p className="vacancy-card__time-elapsed" aria-label={timeLabel}>
        {timeLabel}
      </p>

      {/* Footer */}
      <footer className="vacancy-card__footer">
        <span className="vacancy-card__candidates">
          <span aria-hidden="true">👥</span>
          <span>{vacancy.totalCandidates} candidatos en proceso</span>
        </span>

        <div className="vacancy-card__actions" role="group" aria-label="Acciones rápidas">
          <button
            className="vacancy-card__action-btn"
            onClick={onCopyLink}
            aria-label="Copiar enlace de la vacante"
            type="button"
          >
            <span aria-hidden="true">🔗</span>
          </button>
          <button
            className="vacancy-card__action-btn"
            onClick={onAddCandidate}
            aria-label="Agregar candidato"
            type="button"
          >
            <span aria-hidden="true">👤+</span>
          </button>
        </div>
      </footer>
    </article>
  );
};

export default VacancyCard;
