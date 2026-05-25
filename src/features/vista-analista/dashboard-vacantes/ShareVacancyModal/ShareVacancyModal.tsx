import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { Button, Modal } from 'magneto365.ui';
import type { VacancyShareRecord } from '../../../../api/vacancyShares.types';
import type {
  ShareVacancyFormPayload,
  ShareVacancyPipelineStage,
  ShareVacancyVisibilityScope,
} from './shareVacancyModal.types';
import './ShareVacancyModal.scss';
import SvmAlert from './SvmAlert';
import SvmCheckbox from './SvmCheckbox';
import SvmConfirmModal from './SvmConfirmModal';
import './SvmConfirmModal.scss';
import SvmRadio from './SvmRadio';
import SvmRecipientTagsField from './SvmRecipientTagsField';
import { useSvmToast } from './useSvmToast';

const MAX_RECIPIENTS = 5;
const STAGE_FETCH_MS = 420;

const SHARE_SUCCESS_MESSAGE =
  '¡Vacante compartida y correo enviado a ximenamarilla11@gmail.com!';
const GMAIL_INBOX_URL = 'https://mail.google.com';

/** Formato mínimo: una sola @, parte local y dominio no vacíos (sin restricción de dominio). */
function isValidEmail(raw: string): boolean {
  const t = raw.trim().toLowerCase();
  if (t.length === 0) return false;
  const at = t.indexOf('@');
  if (at < 1) return false;
  if (t.lastIndexOf('@') !== at) return false;
  const local = t.slice(0, at);
  const domain = t.slice(at + 1);
  return local.length > 0 && domain.length > 0;
}

function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

export interface ShareVacancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  vacancyId: string;
  vacancyTitle: string;
  pipelineStages: ShareVacancyPipelineStage[];
  /**
   * Si la promesa resuelve con `VacancyShareRecord`, se invoca `onSharePersisted`.
   * Si se rechaza, el modal muestra el error y permanece abierto.
   */
  onSubmit?: (payload: ShareVacancyFormPayload) => void | Promise<void | VacancyShareRecord>;
  /** Tras guardar con éxito cuando `onSubmit` devuelve el registro persistido (p. ej. `sessionStorage`). */
  onSharePersisted?: (record: VacancyShareRecord) => void;
  /**
   * Tras **Guardar y Enviar** con éxito: se cierra el modal y se invoca en el siguiente tick
   * (p. ej. abrir la simulación del correo). Si no se define, se muestra el banner de éxito en el modal.
   */
  onContinueToEmailSimulation?: () => void;
}

const IconSectionRecipients = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconSectionVisibility = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconSectionStages = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const IconSectionSharedFields = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

const IconSectionFeedback = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

interface SvmSectionTitleProps {
  as?: 'h2' | 'p';
  id: string;
  icon: JSX.Element;
  children: ReactNode;
}

const SvmSectionTitle = ({ as: Tag = 'h2', id, icon, children }: SvmSectionTitleProps): JSX.Element => (
  <Tag className="svm__section-title" id={id}>
    <span className="svm__section-title-icon" aria-hidden="true">
      {icon}
    </span>
    <span className="svm__section-title-text">{children}</span>
  </Tag>
);

const ShareVacancyModal = ({
  isOpen,
  onClose,
  vacancyId,
  vacancyTitle: _vacancyTitle,
  pipelineStages,
  onSubmit,
  onSharePersisted,
  onContinueToEmailSimulation,
}: ShareVacancyModalProps): JSX.Element | null => {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [emails, setEmails] = useState<string[]>([]);
  const [draft, setDraft] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [visibilityScope, setVisibilityScope] = useState<ShareVacancyVisibilityScope>('global');
  const [stagesLoading, setStagesLoading] = useState(false);
  const [selectedStageIds, setSelectedStageIds] = useState<Set<string>>(() => new Set());
  const [includeSanitizedCv, setIncludeSanitizedCv] = useState(false);
  const [includeContactData, setIncludeContactData] = useState(false);
  const [feedbackGeneralOn, setFeedbackGeneralOn] = useState(false);
  const [feedbackRatingOn, setFeedbackRatingOn] = useState(false);
  const [feedbackStageDecisionOn, setFeedbackStageDecisionOn] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { showToast, ToastPortal } = useSvmToast();

  const allStageIds = useMemo(() => pipelineStages.map((s) => s.id), [pipelineStages]);

  const resetForm = useCallback(() => {
    setEmails([]);
    setDraft('');
    setInputError(null);
    setVisibilityScope('global');
    setStagesLoading(false);
    setSelectedStageIds(new Set(allStageIds));
    setIncludeSanitizedCv(false);
    setIncludeContactData(false);
    setFeedbackGeneralOn(false);
    setFeedbackRatingOn(false);
    setFeedbackStageDecisionOn(false);
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(false);
  }, [allStageIds]);

  useEffect(() => {
    if (!isOpen) return;
    resetForm();
  }, [isOpen, vacancyId, resetForm]);

  useEffect(() => {
    if (!isOpen || visibilityScope !== 'specific') {
      setStagesLoading(false);
      return undefined;
    }
    setStagesLoading(true);
    const t = window.setTimeout(() => {
      setStagesLoading(false);
      setSelectedStageIds(new Set(allStageIds));
    }, STAGE_FETCH_MS);
    return () => window.clearTimeout(t);
  }, [isOpen, visibilityScope, allStageIds]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const t = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 80);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const tryAddEmail = useCallback(() => {
    const value = normalizeEmail(draft);
    setInputError(null);
    if (value.length === 0) return;
    if (emails.length >= MAX_RECIPIENTS) {
      setInputError(`Usted ya alcanzó el máximo de ${MAX_RECIPIENTS} destinatarios por envío.`);
      return;
    }
    if (emails.includes(value)) {
      setInputError('Ese correo ya fue agregado.');
      setDraft('');
      return;
    }
    if (!isValidEmail(value)) {
      setInputError('Ingrese una dirección de correo electrónico válida.');
      return;
    }
    setEmails((prev) => [...prev, value]);
    setDraft('');
  }, [draft, emails]);

  const removeEmail = useCallback((e: string) => {
    setEmails((prev) => prev.filter((x) => x !== e));
  }, []);

  const onDraftKeyDown = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement>) => {
      if (ev.key === 'Enter' || ev.key === ',') {
        ev.preventDefault();
        tryAddEmail();
      }
    },
    [tryAddEmail],
  );

  const toggleStage = useCallback((id: string, checked: boolean) => {
    setSelectedStageIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const openConfirm = useCallback(() => {
    setSubmitError(null);
    if (emails.length === 0) {
      setInputError('Agregue al menos un destinatario.');
      firstFieldRef.current?.focus();
      return;
    }
    setInputError(null);
    if (visibilityScope === 'specific') {
      if (stagesLoading) {
        setSubmitError('Espere a que se carguen las etapas antes de continuar.');
        return;
      }
      if (selectedStageIds.size === 0) {
        setSubmitError('Seleccione al menos una etapa para la vista específica.');
        return;
      }
    }
    setConfirmOpen(true);
  }, [emails, visibilityScope, stagesLoading, selectedStageIds]);

  const handleSubmit = useCallback(async () => {
    setSubmitError(null);
    setConfirmOpen(false);

    const visibleStageIds =
      visibilityScope === 'global' ? [...allStageIds] : [...selectedStageIds];

    const visibleStages = pipelineStages.filter((s) => visibleStageIds.includes(s.id));

    const payload: ShareVacancyFormPayload = {
      vacancyId,
      recipientEmails: [...emails],
      visibilityScope,
      visibleStageIds,
      visibleStages,
      includeSanitizedCv,
      includeContactData,
      includeAnalystComments: false,
      feedbackGeneralEnabled: feedbackGeneralOn,
      feedbackGeneralText: '',
      feedbackRatingEnabled: feedbackRatingOn,
      feedbackStageDecisionEnabled: feedbackStageDecisionOn,
      feedbackSpecificChoice: null,
    };

    setIsSubmitting(true);
    try {
      const result = await onSubmit?.(payload);
      if (result !== undefined && result !== null && typeof result === 'object' && 'id' in result) {
        onSharePersisted?.(result as VacancyShareRecord);
      }
      const toastMsg =
        emails.length === 1
          ? '¡Vacante compartida! Correo enviado a:'
          : `¡Vacante compartida! Correo enviado a ${emails.length} destinatarios:`;

      if (onContinueToEmailSimulation !== undefined) {
        showToast(toastMsg, 'success', [...emails]);
        onClose();
        window.setTimeout(() => {
          onContinueToEmailSimulation();
        }, 0);
        return;
      }
      showToast(toastMsg, 'success', [...emails]);
      setSubmitSuccess(SHARE_SUCCESS_MESSAGE);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'No se pudo guardar. Intente nuevamente.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }, [
    emails,
    visibilityScope,
    stagesLoading,
    selectedStageIds,
    allStageIds,
    pipelineStages,
    vacancyId,
    includeSanitizedCv,
    includeContactData,
    feedbackGeneralOn,
    feedbackRatingOn,
    feedbackStageDecisionOn,
    onSubmit,
    onSharePersisted,
    onContinueToEmailSimulation,
    onClose,
    showToast,
  ]);

  const openGmailInbox = useCallback(() => {
    window.open(GMAIL_INBOX_URL, '_blank', 'noopener,noreferrer');
  }, []);

  const shareDescription =
    'Configure los accesos con precisión; esta acción requiere su confirmación explícita.';

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} title="Compartir vacante con cliente interno" blockBackgroundClose={false} className="svm-modal">
      <>
        <div
          className={`svm${submitSuccess !== null ? ' svm--success-mode' : ''}`}
          role="document"
          aria-labelledby={titleId}
        >
          {submitSuccess !== null && (
            <div className="svm__success-banner" role="status">
              <p className="svm__success-text">{submitSuccess}</p>
              <p className="svm__success-hint">
                Puede abrir Gmail en una nueva pestaña para revisar la bandeja de{' '}
                <strong>ximenamarilla11@gmail.com</strong>.
              </p>
            </div>
          )}
          <Modal.Description className="svm__modal-description">{shareDescription}</Modal.Description>
          <span id={titleId} className="svm-visually-hidden">
            Formulario para compartir vacante con cliente interno
          </span>

        <section className="svm__section" aria-labelledby="svm-recipients-heading">
          <SvmSectionTitle id="svm-recipients-heading" icon={<IconSectionRecipients />}>
            Destinatarios
          </SvmSectionTitle>
          <p className="svm__hint">
            Ingrese correos electrónicos y pulse Entrar o coma para agregarlos. Máximo {MAX_RECIPIENTS} destinatarios
            por envío.
          </p>
          <SvmRecipientTagsField
            emails={emails}
            draft={draft}
            inputError={inputError}
            maxRecipients={MAX_RECIPIENTS}
            inputRef={firstFieldRef}
            onDraftChange={(value) => {
              setDraft(value);
              setInputError(null);
            }}
            onDraftKeyDown={onDraftKeyDown}
            onRemoveEmail={removeEmail}
            onFieldBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                if (draft.trim().length > 0) tryAddEmail();
              }
            }}
          />
        </section>

        <section className="svm__section" aria-labelledby="svm-visibility-heading">
          <SvmSectionTitle id="svm-visibility-heading" icon={<IconSectionVisibility />}>
            Alcance de visibilidad
          </SvmSectionTitle>
          <p className="svm__hint">Defina si el cliente interno verá todo el pipeline o únicamente etapas seleccionadas.</p>
          <fieldset className="svm-radios">
            <legend className="svm-visually-hidden">Tipo de vista para el cliente interno</legend>
            <div className="svm-radios__row">
              <SvmRadio
                id="svm-scope-global"
                name="svm-visibility-scope"
                checked={visibilityScope === 'global'}
                onChange={() => {
                  setVisibilityScope('global');
                }}
              />
              <label className="svm-radios__label" htmlFor="svm-scope-global">
                Vista global: el cliente interno podrá ver todo el pipeline de la vacante.
              </label>
            </div>
            <div className="svm-radios__row">
              <SvmRadio
                id="svm-scope-specific"
                name="svm-visibility-scope"
                checked={visibilityScope === 'specific'}
                onChange={() => {
                  setVisibilityScope('specific');
                }}
              />
              <div className="svm-radios__row-body">
                <label className="svm-radios__label" htmlFor="svm-scope-specific">
                  Vista específica: limite la visibilidad a las etapas que usted autorice.
                </label>
                {visibilityScope === 'specific' && (
                  <div className="svm-stages" role="region" aria-live="polite" aria-labelledby="svm-stages-heading">
                    <SvmSectionTitle as="p" id="svm-stages-heading" icon={<IconSectionStages />}>
                      Etapas visibles
                    </SvmSectionTitle>
                    {stagesLoading ? (
                      <p className="svm-stages__loading">Cargando etapas de la vacante…</p>
                    ) : (
                      <div className="svm-stages__list" role="group" aria-label="Selección de etapas">
                        {pipelineStages.map((st) => (
                          <div key={st.id} className="svm-stages__row">
                            <SvmCheckbox
                              id={`svm-stage-${st.id}`}
                              checked={selectedStageIds.has(st.id)}
                              onChange={(checked) => {
                                toggleStage(st.id, checked);
                              }}
                            />
                            <label htmlFor={`svm-stage-${st.id}`}>{st.label}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </fieldset>
        </section>

        <section className="svm__section" aria-labelledby="svm-fields-heading">
          <SvmSectionTitle id="svm-fields-heading" icon={<IconSectionSharedFields />}>
            Información compartida con el cliente
          </SvmSectionTitle>
          <div className="svm-fields">
            <div className="svm-fields__group">
              <div className="svm-fields__row">
                <SvmCheckbox id="svm-f-date" checked disabled />
                <label htmlFor="svm-f-date">Fecha de avance (obligatorio)</label>
              </div>
              <div className="svm-fields__row">
                <SvmCheckbox id="svm-f-resume" checked disabled />
                <label htmlFor="svm-f-resume">Hoja de vida (obligatorio)</label>
              </div>
              <div className="svm-fields__row">
                <SvmCheckbox
                  id="svm-f-contact"
                  checked={includeContactData}
                  onChange={(c) => {
                    setIncludeContactData(c);
                  }}
                />
                <label htmlFor="svm-f-contact">Datos de contacto, correo y teléfono</label>
              </div>
              <div className="svm-fields__row">
                <SvmCheckbox
                  id="svm-f-cv"
                  checked={includeSanitizedCv}
                  onChange={(c) => {
                    setIncludeSanitizedCv(c);
                  }}
                />
                <label htmlFor="svm-f-cv">CV cargada en Magneto</label>
              </div>
            </div>
          </div>
        </section>

        <section className="svm__section" aria-labelledby="svm-feedback-heading">
          <SvmSectionTitle id="svm-feedback-heading" icon={<IconSectionFeedback />}>
            Configuración de feedback
          </SvmSectionTitle>
          <p className="svm__hint">Active los mecanismos que el líder podrá utilizar para devolverle información.</p>
          <div className="svm-fields svm-feedback__options">
            <div className="svm-fields__group">
              <div className="svm-fields__row">
                <SvmCheckbox
                  id="svm-feedback-enable-general"
                  checked={feedbackGeneralOn}
                  onChange={(c) => {
                    setFeedbackGeneralOn(c);
                  }}
                />
                <label htmlFor="svm-feedback-enable-general">
                  Comentarios generales en el perfil
                </label>
              </div>
              <div className="svm-fields__row">
                <SvmCheckbox
                  id="svm-feedback-enable-rating"
                  checked={feedbackRatingOn}
                  onChange={(c) => {
                    setFeedbackRatingOn(c);
                  }}
                />
                <label htmlFor="svm-feedback-enable-rating">
                  Valoración cualitativa del candidato
                </label>
              </div>
              <div className="svm-fields__row">
                <SvmCheckbox
                  id="svm-feedback-enable-stage-decision"
                  checked={feedbackStageDecisionOn}
                  onChange={(c) => {
                    setFeedbackStageDecisionOn(c);
                  }}
                />
                <label htmlFor="svm-feedback-enable-stage-decision">
                  Decisión de avance o descarte del candidato
                </label>
              </div>
            </div>
          </div>
        </section>

        <SvmAlert>
          Nota: Para modificar esta configuración una vez guardada, deberá retirar el permiso actual y generar uno
          nuevo. Asegúrese de que los campos seleccionados son los correctos antes de finalizar.
        </SvmAlert>

        {submitError !== null && (
          <p className="svm__error" role="alert">
            {submitError}
          </p>
        )}
        </div>

        <footer className="svm-footer">
          {submitSuccess !== null ? (
            <>
              <Button type="button" variant="ghost" size="md" onClick={openGmailInbox}>
                Abrir Gmail
              </Button>
              <Button type="button" variant="blue" size="md" onClick={onClose}>
                Cerrar
              </Button>
            </>
          ) : (
            <>
              <Button type="button" variant="ghost" size="md" onClick={onClose} disabled={isSubmitting}>
                Cancelar
              </Button>
              <Button
                type="button"
                variant="blue"
                size="md"
                onClick={openConfirm}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Guardando y enviando correo…' : 'Compartir vacante'}
              </Button>
            </>
          )}
        </footer>
      </>
    </Modal>

    <SvmConfirmModal
      isOpen={confirmOpen}
      isSubmitting={isSubmitting}
      summary={{
        recipients: emails,
        visibilityScope,
        visibleStages:
          visibilityScope === 'global'
            ? pipelineStages
            : pipelineStages.filter((s) => selectedStageIds.has(s.id)),
        includeContactData,
        includeSanitizedCv,
        feedbackGeneralEnabled: feedbackGeneralOn,
        feedbackRatingEnabled: feedbackRatingOn,
        feedbackStageDecisionEnabled: feedbackStageDecisionOn,
      }}
      onConfirm={() => { void handleSubmit(); }}
      onCancel={() => { setConfirmOpen(false); }}
    />

    <ToastPortal />
    </>
  );
};

export default ShareVacancyModal;
