import type { ShareVacancyFormPayload } from '../features/vista-analista/dashboard-vacantes/ShareVacancyModal/shareVacancyModal.types';

/** HU 13 — estado del acceso compartido. */
export type VacancyShareStatus = 'pending-otp' | 'active' | 'revoked';

/** Cuerpo enviado a POST /vacancies (payload del modal + título de la vacante). */
export interface SaveVacancyShareRequest extends ShareVacancyFormPayload {
  vacancyTitle: string;
}

export interface VacancyShareRecord extends SaveVacancyShareRequest {
  id: string;
  createdAt: string;
  /** Generado en servidor; OTP del correo de confirmación. */
  confirmationCode?: string;
  /** HU 13 — estado del acceso; default: pending-otp. */
  status: VacancyShareStatus;
  /** HU 13 — fecha de primer ingreso exitoso (OTP validado). */
  lastAccessAt?: string;
  /** HU 13 — analista que revocó el acceso. */
  revokedBy?: string;
  /** HU 13 — fecha de revocación. */
  revokedAt?: string;
}
