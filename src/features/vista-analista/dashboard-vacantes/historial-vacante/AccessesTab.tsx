import { useCallback, useEffect, useState } from 'react';
import { Button } from 'magneto365.ui';
import { fetchVacancyShares, revokeVacancyShare } from '../../../../api/vacancyShares';
import type { VacancyShareRecord, VacancyShareStatus } from '../../../../api/vacancyShares.types';
import revokeAccessIcon from '../../../../assets/icons/revoke-access-icon.png';
import './AccessesTab.scss';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const time = d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: true });
  return `${date} - ${time}`;
}

function buildVisibilityLabel(record: VacancyShareRecord): string {
  if (record.visibilityScope === 'global') return 'Vista global — pipeline completo';
  const stages = record.visibleStages.map((s) => s.label).join(', ');
  return `Vista específica — ${stages}`;
}

function buildSharedFieldsLabel(record: VacancyShareRecord): string {
  const fields: string[] = ['Fecha de avance', 'Hoja de vida'];
  if (record.includeContactData) fields.push('Datos de contacto');
  if (record.includeSanitizedCv) fields.push('CV Magneto');
  return fields.join(' · ');
}

function buildFeedbackLabel(record: VacancyShareRecord): string {
  const items: string[] = [];
  if (record.feedbackGeneralEnabled) items.push('Comentarios generales');
  if (record.feedbackRatingEnabled) items.push('Valoración cualitativa');
  if (record.feedbackStageDecisionEnabled) items.push('Decisión de avance');
  return items.length > 0 ? items.join(' · ') : 'Sin feedback habilitado';
}

// ─── Sub-componentes ─────────────────────────────────────────────────────────

const IconShield = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconClock = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconCheck = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconX = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCloseModal = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5.5 5.5L14.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M14.5 5.5L5.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconEye = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconChat = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

interface StatusBadgeProps {
  status: VacancyShareStatus;
}

const STATUS_LABELS: Record<VacancyShareStatus, string> = {
  'pending-otp': 'Pendiente de OTP',
  active: 'Activo',
  revoked: 'Revocado',
};

const StatusBadge = ({ status }: StatusBadgeProps): JSX.Element => (
  <span className={`acc-badge acc-badge--${status}`}>
    {status === 'pending-otp' && <IconClock />}
    {status === 'active' && <IconCheck />}
    {status === 'revoked' && <IconX />}
    {STATUS_LABELS[status]}
  </span>
);

// ─── Tarjeta de acceso expandible ────────────────────────────────────────────

interface AccessCardProps {
  record: VacancyShareRecord;
  onRevoke: (id: string) => void;
  isRevoking: boolean;
}

const AccessCard = ({ record, onRevoke, isRevoking }: AccessCardProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const canRevoke = record.status !== 'revoked';

  return (
    <article className={`acc-card${record.status === 'revoked' ? ' acc-card--revoked' : ''}`}>
      <div className="acc-card__header">
        <div className="acc-card__header-main">
          <span className="acc-card__email">{record.recipientEmails[0] ?? '—'}</span>
          <StatusBadge status={record.status} />
        </div>
        <button
          type="button"
          className="acc-card__toggle"
          aria-expanded={expanded}
          aria-label={expanded ? 'Contraer detalle' : 'Ver detalle de permisos'}
          onClick={() => { setExpanded((v) => !v); }}
        >
          <span className={`acc-card__chevron${expanded ? ' acc-card__chevron--open' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </div>

      <div className="acc-card__meta">
        <span className="acc-card__meta-item">
          <IconClock />
          Invitado: {formatDate(record.createdAt)}
        </span>
        {record.lastAccessAt !== undefined && (
          <span className="acc-card__meta-item">
            <IconCheck />
            Último ingreso: {formatDateTime(record.lastAccessAt)}
          </span>
        )}
        {record.status === 'pending-otp' && record.lastAccessAt === undefined && (
          <span className="acc-card__meta-item acc-card__meta-item--muted">Sin ingreso aún</span>
        )}
        {record.revokedAt !== undefined && (
          <span className="acc-card__meta-item acc-card__meta-item--danger">
            <IconX />
            Revocado: {formatDateTime(record.revokedAt)}
            {record.revokedBy !== undefined && ` · ${record.revokedBy}`}
          </span>
        )}
      </div>

      {expanded && (
        <div className="acc-card__detail">
          <div className="acc-card__perm-row">
            <span className="acc-card__perm-icon"><IconEye /></span>
            <div className="acc-card__perm-body">
              <span className="acc-card__perm-title">Alcance de visibilidad</span>
              <span className="acc-card__perm-subtext">{buildVisibilityLabel(record)}</span>
            </div>
          </div>
          <div className="acc-card__perm-row">
            <span className="acc-card__perm-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </span>
            <div className="acc-card__perm-body">
              <span className="acc-card__perm-title">Información compartida</span>
              <span className="acc-card__perm-subtext">{buildSharedFieldsLabel(record)}</span>
            </div>
          </div>
          <div className="acc-card__perm-row">
            <span className="acc-card__perm-icon"><IconChat /></span>
            <div className="acc-card__perm-body">
              <span className="acc-card__perm-title">Feedback habilitado</span>
              <span className="acc-card__perm-subtext">{buildFeedbackLabel(record)}</span>
            </div>
          </div>
        </div>
      )}

      {canRevoke && (
        <div className="acc-card__actions">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => { onRevoke(record.id); }}
            disabled={isRevoking}
          >
            {isRevoking ? 'Revocando…' : 'Revocar acceso'}
          </Button>
        </div>
      )}
    </article>
  );
};

// ─── Modal de confirmación de revocación ─────────────────────────────────────

interface RevokeConfirmModalProps {
  email: string;
  onConfirm: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

const RevokeConfirmModal = ({ email, onConfirm, onCancel, isSubmitting }: RevokeConfirmModalProps): JSX.Element => (
  <div className="acc-revoke-backdrop" role="dialog" aria-modal="true" aria-labelledby="acc-revoke-title">
    <div className="acc-revoke-shell">
      <button
        type="button"
        className="acc-revoke__close"
        onClick={onCancel}
        aria-label="Cerrar"
        disabled={isSubmitting}
      >
        <IconCloseModal />
      </button>
      <div className="acc-revoke">
        <div className="acc-revoke__header">
          <span className="acc-revoke__icon" aria-hidden="true">
            <img src={revokeAccessIcon} alt="" width={52} height={52} />
          </span>
          <h3 className="acc-revoke__title" id="acc-revoke-title">
            ¿Revocar acceso?
          </h3>
        </div>
        <p className="acc-revoke__body">
          El acceso de <strong>{email}</strong> quedará bloqueado de inmediato. El enlace y el OTP dejarán de funcionar.
        </p>
        <p className="acc-revoke__hint">
          Para otorgar acceso nuevamente deberá compartir la vacante otra vez.
        </p>
        <div className="acc-revoke__footer">
          <Button type="button" variant="ghost" size="md" onClick={onCancel} disabled={isSubmitting}>
            Cancelar
          </Button>
          <Button type="button" variant="danger" size="md" onClick={onConfirm} disabled={isSubmitting}>
            {isSubmitting ? 'Revocando…' : 'Confirmar revocación'}
          </Button>
        </div>
      </div>
    </div>
  </div>
);

// ─── Filtros de estado ────────────────────────────────────────────────────────

type AccessFilter = 'all' | VacancyShareStatus;

const FILTER_LABELS: Record<AccessFilter, string> = {
  all: 'Todos',
  'pending-otp': 'Pendientes',
  active: 'Activos',
  revoked: 'Revocados',
};

// ─── Componente principal ─────────────────────────────────────────────────────

export interface AccessesTabProps {
  vacancyId: string;
  onShareVacancy: () => void;
}

const AccessesTab = ({ vacancyId, onShareVacancy }: AccessesTabProps): JSX.Element => {
  const [records, setRecords] = useState<VacancyShareRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<AccessFilter>('all');
  const [revokeTargetId, setRevokeTargetId] = useState<string | null>(null);
  const [revoking, setRevoking] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const all = await fetchVacancyShares();
      setRecords(all.filter((r) => r.vacancyId === vacancyId));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error al cargar los accesos.');
    } finally {
      setLoading(false);
    }
  }, [vacancyId]);

  useEffect(() => {
    void load();
  }, [load]);

  const handleRevoke = useCallback(async () => {
    if (revokeTargetId === null) return;
    setRevoking(true);
    try {
      const updated = await revokeVacancyShare(revokeTargetId, 'Analista');
      setRecords((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
      setRevokeTargetId(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudo revocar el acceso.');
      setRevokeTargetId(null);
    } finally {
      setRevoking(false);
    }
  }, [revokeTargetId]);

  const revokeTarget = revokeTargetId !== null
    ? records.find((r) => r.id === revokeTargetId)
    : undefined;

  const filtered = filter === 'all'
    ? records
    : records.filter((r) => r.status === filter);

  const counts: Record<AccessFilter, number> = {
    all: records.length,
    'pending-otp': records.filter((r) => r.status === 'pending-otp').length,
    active: records.filter((r) => r.status === 'active').length,
    revoked: records.filter((r) => r.status === 'revoked').length,
  };

  return (
    <section className="acc" aria-labelledby="acc-heading">
      <div className="acc__header">
        <h4 className="acc__heading" id="acc-heading">Accesos compartidos</h4>
      </div>

      {records.length > 0 && (
        <div className="acc-filters" role="group" aria-label="Filtrar accesos por estado">
          {(Object.keys(FILTER_LABELS) as AccessFilter[]).map((f) => (
            <button
              key={f}
              type="button"
              className={`acc-filters__btn${filter === f ? ' acc-filters__btn--active' : ''}`}
              onClick={() => { setFilter(f); }}
            >
              {FILTER_LABELS[f]}
              {counts[f] > 0 && (
                <span className="acc-filters__count">{counts[f]}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {loading && <p className="acc__state">Cargando accesos…</p>}

      {!loading && error !== null && (
        <div className="acc__error" role="alert">
          <p>{error}</p>
          <Button type="button" variant="ghost" size="sm" onClick={() => { void load(); }}>
            Reintentar
          </Button>
        </div>
      )}

      {!loading && error === null && records.length === 0 && (
        <div className="acc__empty">
          <span className="acc__empty-icon" aria-hidden="true">
            <IconShield />
          </span>
          <p className="acc__empty-text">Aún no ha compartido esta vacante con clientes internos.</p>
          <Button type="button" variant="blue" size="md" onClick={onShareVacancy}>
            Compartir vacante
          </Button>
        </div>
      )}

      {!loading && error === null && records.length > 0 && filtered.length === 0 && (
        <p className="acc__state">
          No hay accesos con estado "{FILTER_LABELS[filter]}" para esta vacante.
        </p>
      )}

      {!loading && error === null && filtered.length > 0 && (
        <ul className="acc__list">
          {filtered.map((record) => (
            <li key={record.id}>
              <AccessCard
                record={record}
                onRevoke={(id) => { setRevokeTargetId(id); }}
                isRevoking={revoking && revokeTargetId === record.id}
              />
            </li>
          ))}
        </ul>
      )}

      {revokeTarget !== undefined && (
        <RevokeConfirmModal
          email={revokeTarget.recipientEmails[0] ?? ''}
          onConfirm={() => { void handleRevoke(); }}
          onCancel={() => { setRevokeTargetId(null); }}
          isSubmitting={revoking}
        />
      )}
    </section>
  );
};

export default AccessesTab;
