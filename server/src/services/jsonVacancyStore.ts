import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { VacancyShareRecord } from '../types/vacancy.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_DATA_PATH = path.resolve(__dirname, '../../data/vacancies.json');

function getDataPath(): string {
  return process.env.VACANCIES_DATA_PATH?.trim() || DEFAULT_DATA_PATH;
}

async function ensureDirForFile(filePath: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
}

export async function readAllRecords(): Promise<VacancyShareRecord[]> {
  const filePath = getDataPath();
  try {
    const raw = await readFile(filePath, 'utf8');
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as VacancyShareRecord[];
  } catch (e) {
    const err = e as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') return [];
    throw e;
  }
}

export async function appendRecord(record: VacancyShareRecord): Promise<void> {
  const filePath = getDataPath();
  await ensureDirForFile(filePath);
  const existing = await readAllRecords();
  const next = [...existing, record];
  await writeFile(filePath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
}

export async function deleteRecordById(id: string): Promise<void> {
  const filePath = getDataPath();
  const existing = await readAllRecords();
  const next = existing.filter((r) => r.id !== id);
  if (next.length === existing.length) return;
  await ensureDirForFile(filePath);
  await writeFile(filePath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
}

export async function updateRecordById(id: string, updated: VacancyShareRecord): Promise<void> {
  const filePath = getDataPath();
  const existing = await readAllRecords();
  const next = existing.map((r) => (r.id === id ? updated : r));
  await ensureDirForFile(filePath);
  await writeFile(filePath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
}
