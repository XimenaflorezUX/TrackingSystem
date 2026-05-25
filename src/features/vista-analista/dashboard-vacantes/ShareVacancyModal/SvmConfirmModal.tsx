import { Button } from 'magneto365.ui';
import type { ReactNode } from 'react';
import './SvmConfirmModal.scss';

export interface SvmConfirmSummary {
  recipients: string[];
  visibilityScope: 'global' | 'specific';
  visibleStages: Array<{ id: string; label: string }>;
  includeContactData: boolean;
  includeSanitizedCv: boolean;
  feedbackGeneralEnabled: boolean;
  feedbackRatingEnabled: boolean;
  feedbackStageDecisionEnabled: boolean;
}

export interface SvmConfirmModalProps {
  isOpen: boolean;
  summary: SvmConfirmSummary;
  isSubmitting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const IconCheck = (): JSX.Element => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClose = (): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5.5 5.5L14.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M14.5 5.5L5.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconRecipients = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconVisibility = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconSharedFields = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

const IconFeedback = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

interface ConfirmCardProps {
  title: string;
  icon: JSX.Element;
  children: ReactNode;
  variant?: 'default' | 'compact' | 'flush';
}

const confirmCardClassName = (variant: ConfirmCardProps['variant'] = 'default'): string => {
  const base = 'svm-confirm__card';
  if (variant === 'compact') return `${base} svm-confirm__card--compact`;
  if (variant === 'flush') return `${base} svm-confirm__card--flush`;
  return base;
};

const ConfirmCard = ({ title, icon, children, variant = 'default' }: ConfirmCardProps): JSX.Element => (
  <article className={confirmCardClassName(variant)}>
    <header className="svm-confirm__card-header">
      <span className="svm-confirm__card-icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="svm-confirm__card-title">{title}</h3>
    </header>
    <div className="svm-confirm__card-body">{children}</div>
  </article>
);

const SvmConfirmModal = ({
  isOpen,
  summary,
  isSubmitting,
  onConfirm,
  onCancel,
}: SvmConfirmModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  const sharedFields: string[] = [
    'Fecha de avance',
    'Hoja de vida',
    ...(summary.includeContactData ? ['Datos de contacto, correo y teléfono'] : []),
    ...(summary.includeSanitizedCv ? ['CV cargada en Magneto'] : []),
  ];

  const feedbackItems: string[] = [
    ...(summary.feedbackGeneralEnabled ? ['Comentarios generales en el perfil'] : []),
    ...(summary.feedbackRatingEnabled ? ['Valoración cualitativa del candidato'] : []),
    ...(summary.feedbackStageDecisionEnabled ? ['Decisión de avance o descarte del candidato'] : []),
  ];

  const visibilityText =
    summary.visibilityScope === 'global'
      ? 'Todo el pipeline (vista global)'
      : `Vista específica — ${summary.visibleStages.length} etapa${summary.visibleStages.length !== 1 ? 's' : ''}: ${summary.visibleStages.map((s) => s.label).join(', ')}`;

  return (
    <div className="svm-confirm-backdrop" role="dialog" aria-modal="true" aria-labelledby="svm-confirm-title">
      <div className="svm-confirm-shell">
        <button
          type="button"
          className="svm-confirm__close"
          onClick={onCancel}
          aria-label="Cerrar"
          disabled={isSubmitting}
        >
          <IconClose />
        </button>

        <div className="svm-confirm">
          <h2 className="svm-confirm__title" id="svm-confirm-title">
            ¿Confirmar envío?
          </h2>
          <p className="svm-confirm__subtitle">
            Revisa el resumen antes de compartir la vacante. Esta acción no puede deshacerse sin generar un nuevo permiso.
          </p>

          <div className="svm-confirm__body">
            <ConfirmCard title="Destinatarios" icon={<IconRecipients />}>
              <ul className="svm-confirm__list">
                {summary.recipients.map((email) => (
                  <li key={email} className="svm-confirm__list-item">
                    <IconCheck />
                    <span>{email}</span>
                  </li>
                ))}
              </ul>
            </ConfirmCard>

            <ConfirmCard title="Visibilidad" icon={<IconVisibility />}>
              <p className="svm-confirm__card-value">{visibilityText}</p>
            </ConfirmCard>

            <ConfirmCard title="Información compartida" icon={<IconSharedFields />} variant="compact">
              <ul className="svm-confirm__list">
                {sharedFields.map((field) => (
                  <li key={field} className="svm-confirm__list-item">
                    <IconCheck />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
            </ConfirmCard>

            {feedbackItems.length > 0 && (
              <ConfirmCard title="Feedback habilitado" icon={<IconFeedback />} variant="flush">
                <ul className="svm-confirm__list">
                  {feedbackItems.map((item) => (
                    <li key={item} className="svm-confirm__list-item">
                      <IconCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ConfirmCard>
            )}
          </div>

          <footer className="svm-confirm__footer">
            <Button type="button" variant="ghost" size="md" onClick={onCancel} disabled={isSubmitting}>
              Volver
            </Button>
            <Button
              type="button"
              variant="blue"
              size="md"
              onClick={onConfirm}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando…' : 'Confirmar y Enviar'}
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SvmConfirmModal;
