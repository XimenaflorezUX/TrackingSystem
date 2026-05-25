export type ShareVacancyVisibilityScope = 'global' | 'specific';

export type ShareVacancySpecificFeedback = 'accept' | 'reject' | 'pending';

export interface ShareVacancyPipelineStage {
  id: string;
  label: string;
}

export interface ShareVacancyFormPayload {
  vacancyId: string;
  recipientEmails: string[];
  visibilityScope: ShareVacancyVisibilityScope;
  visibleStageIds: string[];
  /** Etapas visibles con etiqueta (para persistencia y notificación por correo). */
  visibleStages: ShareVacancyPipelineStage[];
  includeSanitizedCv: boolean;
  includeContactData: boolean;
  includeAnalystComments: boolean;
  feedbackGeneralEnabled: boolean;
  feedbackGeneralText: string;
  feedbackRatingEnabled: boolean;
  feedbackStageDecisionEnabled: boolean;
  feedbackSpecificChoice: ShareVacancySpecificFeedback | null;
}
