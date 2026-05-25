/**
 * Flujo POST /vacancies: valida, persiste en JSON y envía correo.
 *
 * **Correo:** `sendVacancyEmail` (en `email.service.ts`) usa SMTP real si en `.env` hay
 * `SMTP_USER` y `SMTP_PASS`. Si faltan, Nodemailer crea automáticamente una cuenta en
 * **Ethereal.email** (sin Gmail); cada envío deja en consola la URL de vista previa del mensaje.
 */
import { randomUUID } from 'node:crypto';
import type { CreateVacancyShareBody, VacancyShareRecord, VacancyVisibleStage } from '../types/vacancy.js';
import { sendVacancyEmail } from './email.service.js';
import { appendRecord, deleteRecordById, readAllRecords, updateRecordById } from './jsonVacancyStore.js';

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === 'string');
}

function isVisibilityScope(v: unknown): v is CreateVacancyShareBody['visibilityScope'] {
  return v === 'global' || v === 'specific';
}

function isFeedbackChoice(v: unknown): v is CreateVacancyShareBody['feedbackSpecificChoice'] {
  return v === null || v === 'accept' || v === 'reject' || v === 'pending';
}

function parseVisibleStages(v: unknown): VacancyVisibleStage[] {
  if (!Array.isArray(v) || v.length === 0) {
    throw new Error('INVALID_VISIBLE_STAGES');
  }
  const out: VacancyVisibleStage[] = [];
  for (const item of v) {
    if (item === null || typeof item !== 'object') throw new Error('INVALID_VISIBLE_STAGES');
    const o = item as Record<string, unknown>;
    if (!isNonEmptyString(o.id) || !isNonEmptyString(o.label)) throw new Error('INVALID_VISIBLE_STAGES');
    out.push({ id: o.id.trim(), label: o.label.trim() });
  }
  return out;
}

function parseCreateBody(body: unknown): CreateVacancyShareBody {
  if (body === null || typeof body !== 'object') {
    throw new Error('INVALID_BODY');
  }
  const o = body as Record<string, unknown>;

  if (!isNonEmptyString(o.vacancyId)) throw new Error('INVALID_VACANCY_ID');
  if (!isNonEmptyString(o.vacancyTitle)) throw new Error('INVALID_VACANCY_TITLE');
  if (!isStringArray(o.recipientEmails) || o.recipientEmails.length === 0) {
    throw new Error('INVALID_RECIPIENTS');
  }
  if (!isVisibilityScope(o.visibilityScope)) throw new Error('INVALID_VISIBILITY');
  if (!isStringArray(o.visibleStageIds)) throw new Error('INVALID_STAGES');
  if (typeof o.includeSanitizedCv !== 'boolean') throw new Error('INVALID_FLAGS');
  if (typeof o.includeContactData !== 'boolean') throw new Error('INVALID_FLAGS');
  if (typeof o.includeAnalystComments !== 'boolean') throw new Error('INVALID_FLAGS');
  if (typeof o.feedbackGeneralEnabled !== 'boolean') throw new Error('INVALID_FLAGS');
  if (typeof o.feedbackRatingEnabled !== 'boolean') throw new Error('INVALID_FLAGS');
  if (typeof o.feedbackStageDecisionEnabled !== 'boolean') throw new Error('INVALID_FLAGS');
  if (typeof o.feedbackGeneralText !== 'string') throw new Error('INVALID_FEEDBACK_TEXT');
  if (!isFeedbackChoice(o.feedbackSpecificChoice)) throw new Error('INVALID_FEEDBACK_CHOICE');

  const visibleStages = parseVisibleStages(o.visibleStages);

  return {
    vacancyId: o.vacancyId.trim(),
    vacancyTitle: o.vacancyTitle.trim(),
    recipientEmails: o.recipientEmails.map((e) => e.trim().toLowerCase()),
    visibilityScope: o.visibilityScope,
    visibleStageIds: o.visibleStageIds.map((s) => String(s)),
    visibleStages,
    includeSanitizedCv: o.includeSanitizedCv,
    includeContactData: o.includeContactData,
    includeAnalystComments: o.includeAnalystComments,
    feedbackGeneralEnabled: o.feedbackGeneralEnabled,
    feedbackGeneralText: o.feedbackGeneralText,
    feedbackRatingEnabled: o.feedbackRatingEnabled,
    feedbackStageDecisionEnabled: o.feedbackStageDecisionEnabled,
    feedbackSpecificChoice: o.feedbackSpecificChoice,
  };
}

export async function listVacancyShares(): Promise<VacancyShareRecord[]> {
  const rows = await readAllRecords();
  return [...rows].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function createVacancyShare(body: unknown): Promise<VacancyShareRecord> {
  const data = parseCreateBody(body);
  const record: VacancyShareRecord = {
    ...data,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    confirmationCode: String(Math.floor(100000 + Math.random() * 900000)),
    status: 'pending-otp',
  };
  await appendRecord(record);
  try {
    await sendVacancyEmail(record);
  } catch (e) {
    await deleteRecordById(record.id);
    throw e;
  }
  return record;
}

/** HU 13 — Revoca un acceso compartido por id. */
export async function revokeVacancyShare(id: string, revokedBy: string): Promise<VacancyShareRecord> {
  const all = await readAllRecords();
  const record = all.find((r) => r.id === id);
  if (record === undefined) {
    throw new Error('ACCESS_NOT_FOUND');
  }
  if (record.status === 'revoked') {
    throw new Error('ACCESS_ALREADY_REVOKED');
  }
  const updated: VacancyShareRecord = {
    ...record,
    status: 'revoked',
    revokedBy: revokedBy.trim().length > 0 ? revokedBy.trim() : 'Analista',
    revokedAt: new Date().toISOString(),
  };
  await updateRecordById(id, updated);
  return updated;
}

export { sendVacancyEmail } from './email.service.js';
