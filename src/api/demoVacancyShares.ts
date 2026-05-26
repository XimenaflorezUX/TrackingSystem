import type { SaveVacancyShareRequest, VacancyShareRecord } from './vacancyShares.types';
import demoSharesSeed from '../data/demo-vacancy-shares.json';

/** IDs de vacante equivalentes para la demo (hub usa `preview-v-02`, datos en JSON usan `v-02`). */
const VACANCY_ID_ALIASES: Record<string, readonly string[]> = {
  'preview-v-02': ['preview-v-02', 'v-02'],
  'v-02': ['v-02', 'preview-v-02'],
};

export function resolveShareVacancyIds(vacancyId: string): readonly string[] {
  return VACANCY_ID_ALIASES[vacancyId] ?? [vacancyId];
}

let demoCache: VacancyShareRecord[] = (demoSharesSeed as VacancyShareRecord[]).map((r) => ({ ...r }));

export function listDemoVacancyShares(): VacancyShareRecord[] {
  return [...demoCache].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

/** Simula POST /vacancies cuando el API no está disponible (demo / GitHub Pages). */
export function saveDemoVacancyShare(body: SaveVacancyShareRequest): VacancyShareRecord {
  const record: VacancyShareRecord = {
    ...body,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    confirmationCode: String(Math.floor(100000 + Math.random() * 900000)),
    status: 'pending-otp',
  };
  demoCache = [...demoCache, record];
  return record;
}

export function revokeDemoVacancyShare(id: string, revokedBy: string): VacancyShareRecord {
  const record = demoCache.find((r) => r.id === id);
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
  demoCache = demoCache.map((r) => (r.id === id ? updated : r));
  return updated;
}
