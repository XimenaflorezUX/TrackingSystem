import type { VacancyShareRecord } from '../api/vacancyShares.types';
import {
  VACANCY_PIPELINE_STAGE_IDS,
  VACANCY_PIPELINE_STAGES,
  isVacancyPipelineStageId,
  type VacancyPipelineStageId,
} from '../shared/vacancyPipelineStages';

const STORAGE_KEY = 'tracking_internal_vacancy_share_v1';

/** Correo de demostración cuando no hay share en sesión (cliente interno). */
export const CLIENTE_INTERNO_DEV_EMAIL = 'ximena@magnetoglobal.com';

function isVacancyShareRecord(value: unknown): value is VacancyShareRecord {
  if (value === null || typeof value !== 'object') return false;
  const o = value as Record<string, unknown>;
  return typeof o.id === 'string' && typeof o.vacancyId === 'string';
}

export function persistVacancyShareSession(record: VacancyShareRecord): void {
  try {
    globalThis.sessionStorage?.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* ignore quota / private mode */
  }
}

export function readVacancyShareSession(): VacancyShareRecord | null {
  try {
    const raw = globalThis.sessionStorage?.getItem(STORAGE_KEY);
    if (raw === null || raw === undefined || raw.length === 0) return null;
    const parsed: unknown = JSON.parse(raw);
    return isVacancyShareRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearVacancyShareSession(): void {
  try {
    globalThis.sessionStorage?.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** Normaliza el código OTP de 6 dígitos devuelto al guardar el share (si existe). */
/** Correo del invitado que comenta en el perfil (primer destinatario del share o fallback dev). */
export function readClienteInternoAuthorEmail(): string {
  const email = readVacancyShareSession()?.recipientEmails[0]?.trim();
  return email !== undefined && email.length > 0 ? email : CLIENTE_INTERNO_DEV_EMAIL;
}

export function readShareConfirmationDigits(): string | undefined {
  const r = readVacancyShareSession();
  const digits = r?.confirmationCode?.replace(/\D/g, '') ?? '';
  return digits.length === 6 ? digits : undefined;
}

export interface ShareUiFlags {
  /** `true` si hay un share persistido en sesión (flujo post “Guardar y Enviar”). */
  fromShare: boolean;
  showSanitizedCv: boolean;
  showContactData: boolean;
  showGeneralFeedback: boolean;
  showRatingFeedback: boolean;
  showStageDecisionFeedback: boolean;
}

export type FeedbackTabId = 'valoraciones' | 'comentarios';

const FEEDBACK_TAB_ORDER: FeedbackTabId[] = ['valoraciones', 'comentarios'];

export function isFeedbackTabEnabled(tabId: FeedbackTabId, flags: ShareUiFlags): boolean {
  return tabId === 'valoraciones' ? flags.showRatingFeedback : flags.showGeneralFeedback;
}

export function getEnabledFeedbackTabs(flags: ShareUiFlags): FeedbackTabId[] {
  return FEEDBACK_TAB_ORDER.filter((tabId) => isFeedbackTabEnabled(tabId, flags));
}

export function resolveFeedbackTab(
  preferred: FeedbackTabId,
  flags: ShareUiFlags,
): FeedbackTabId | null {
  if (isFeedbackTabEnabled(preferred, flags)) return preferred;
  return getEnabledFeedbackTabs(flags)[0] ?? null;
}

export function hasFeedbackPanel(flags: ShareUiFlags): boolean {
  return flags.showGeneralFeedback || flags.showRatingFeedback;
}

export type ShareVisibilityScope = 'global' | 'specific';

export interface ShareVisibilityConfig {
  fromShare: boolean;
  visibilityScope: ShareVisibilityScope;
  visibleStageIds: VacancyPipelineStageId[];
}

function normalizeVisibleStageIds(ids: string[]): VacancyPipelineStageId[] {
  return ids.filter(isVacancyPipelineStageId);
}

/**
 * Alcance de etapas visibles para el cliente interno según el acceso compartido.
 * Sin sesión de share: modo desarrollo con pipeline completo.
 */
export function getShareVisibilityConfig(): ShareVisibilityConfig {
  const record = readVacancyShareSession();
  if (record === null) {
    return {
      fromShare: false,
      visibilityScope: 'global',
      visibleStageIds: [...VACANCY_PIPELINE_STAGE_IDS],
    };
  }

  if (record.visibilityScope === 'global') {
    return {
      fromShare: true,
      visibilityScope: 'global',
      visibleStageIds: [...VACANCY_PIPELINE_STAGE_IDS],
    };
  }

  const fromRecord = normalizeVisibleStageIds(record.visibleStageIds);
  const fromLabels = normalizeVisibleStageIds(
    record.visibleStages?.map((stage) => stage.id) ?? [],
  );
  const visibleStageIds =
    fromRecord.length > 0
      ? fromRecord
      : fromLabels.length > 0
        ? fromLabels
        : [...VACANCY_PIPELINE_STAGE_IDS];

  return {
    fromShare: true,
    visibilityScope: 'specific',
    visibleStageIds,
  };
}

export function getVisiblePipelineStages(config: ShareVisibilityConfig) {
  const allowed = new Set(config.visibleStageIds);
  return VACANCY_PIPELINE_STAGES.filter((stage) => allowed.has(stage.id));
}

export function resolvePipelineStage(
  preferred: VacancyPipelineStageId,
  config: ShareVisibilityConfig,
): VacancyPipelineStageId {
  if (config.visibleStageIds.includes(preferred)) return preferred;
  return config.visibleStageIds[0] ?? VACANCY_PIPELINE_STAGE_IDS[0];
}

/**
 * Reglas de UI para cliente interno.
 * Sin sesión de share: se asume modo desarrollo y todo visible.
 */
export function getShareUiFlags(): ShareUiFlags {
  const r = readVacancyShareSession();
  if (r === null) {
    return {
      fromShare: false,
      showSanitizedCv: true,
      showContactData: true,
      showGeneralFeedback: true,
      showRatingFeedback: true,
      showStageDecisionFeedback: true,
    };
  }
  const legacySpecific =
    'feedbackSpecificEnabled' in r && typeof r.feedbackSpecificEnabled === 'boolean'
      ? r.feedbackSpecificEnabled
      : false;

  return {
    fromShare: true,
    showSanitizedCv: r.includeSanitizedCv,
    showContactData: r.includeContactData ?? false,
    showGeneralFeedback: r.feedbackGeneralEnabled,
    showRatingFeedback: r.feedbackRatingEnabled ?? legacySpecific,
    showStageDecisionFeedback: r.feedbackStageDecisionEnabled ?? legacySpecific,
  };
}
