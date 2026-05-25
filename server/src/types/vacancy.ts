export type ShareVacancyVisibilityScope = 'global' | 'specific';

export type ShareVacancySpecificFeedback = 'accept' | 'reject' | 'pending';

/** HU 13 — estado del acceso compartido */
export type VacancyShareStatus = 'pending-otp' | 'active' | 'revoked';

export interface VacancyVisibleStage {
  id: string;
  label: string;
}

/** Cuerpo esperado en POST /vacancies (formulario + título mostrado). */
export interface CreateVacancyShareBody {
  vacancyId: string;
  vacancyTitle: string;
  recipientEmails: string[];
  visibilityScope: ShareVacancyVisibilityScope;
  visibleStageIds: string[];
  /** Etiquetas de etapas visibles (para el correo y auditoría). */
  visibleStages: VacancyVisibleStage[];
  includeSanitizedCv: boolean;
  includeContactData: boolean;
  includeAnalystComments: boolean;
  feedbackGeneralEnabled: boolean;
  feedbackGeneralText: string;
  feedbackRatingEnabled: boolean;
  feedbackStageDecisionEnabled: boolean;
  feedbackSpecificChoice: ShareVacancySpecificFeedback | null;
}

/** Registro persistido (incluye metadatos del servidor). */
export interface VacancyShareRecord extends CreateVacancyShareBody {
  id: string;
  createdAt: string;
  /** OTP de 6 dígitos incluido en el correo (misma UX que la pantalla OtpLanding). */
  confirmationCode: string;
  /** HU 13 — estado del acceso; default: pending-otp. */
  status: VacancyShareStatus;
  /** HU 13 — fecha de primer ingreso exitoso (OTP validado). */
  lastAccessAt?: string;
  /** HU 13 — analista que revocó el acceso. */
  revokedBy?: string;
  /** HU 13 — fecha de revocación. */
  revokedAt?: string;
}
