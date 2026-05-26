import { apiBase } from './apiBase';
import {
  listDemoVacancyShares,
  revokeDemoVacancyShare,
  saveDemoVacancyShare,
} from './demoVacancyShares';
import type { SaveVacancyShareRequest, VacancyShareRecord } from './vacancyShares.types';

const ERROR_HINTS: Record<string, string> = {
  INVALID_BODY: 'Solicitud inválida.',
  INVALID_VACANCY_ID: 'Identificador de vacante no válido.',
  INVALID_VACANCY_TITLE: 'Título de vacante no válido.',
  INVALID_RECIPIENTS: 'Debe incluir al menos un destinatario.',
  INVALID_VISIBILITY: 'Alcance de visibilidad no válido.',
  INVALID_STAGES: 'Etapas visibles no válidas.',
  INVALID_VISIBLE_STAGES: 'Debe incluir la lista de etapas visibles (id y etiqueta).',
  INVALID_FLAGS: 'Opciones del formulario no válidas.',
  INVALID_FEEDBACK_TEXT: 'Texto de feedback no válido.',
  INVALID_FEEDBACK_CHOICE: 'Opción de feedback específico no válida.',
  EMAIL_NOT_CONFIGURED: 'El servidor no tiene configurado el envío de correo (SMTP).',
  EMAIL_SEND_FAILED: 'No se pudo enviar el correo de confirmación.',
};

const DEV_API_HINT =
  'En local, el front reenvía /vacancies al API en el puerto 4000. Ejecute en otra terminal `npm run server:dev` o use `npm run dev:full` para levantar web y API a la vez.';

/** Sin `VITE_API_BASE_URL` en build de producción no hay API en el mismo origen (GitHub Pages). */
function isStaticDemoHost(): boolean {
  return apiBase().length === 0 && !import.meta.env.DEV;
}

function shouldUseDemoShares(res: Response | null): boolean {
  if (res === null) return true;
  // Pages: GET/POST a /vacancies en github.io devuelve 404 (no existe el API).
  if (apiBase().length === 0 && res.status === 404) return true;
  return res.status === 500 || res.status === 502 || res.status === 503;
}

async function fetchVacancySharesFromApi(): Promise<VacancyShareRecord[] | null> {
  if (isStaticDemoHost()) {
    return listDemoVacancyShares();
  }

  try {
    const res = await fetch(`${apiBase()}/vacancies`);
    if (!res.ok) {
      if (shouldUseDemoShares(res)) {
        return listDemoVacancyShares();
      }
      throw new Error(await readErrorMessage(res));
    }
    return (await res.json()) as VacancyShareRecord[];
  } catch (e) {
    if (e instanceof Error && e.message.startsWith('Error del servidor')) {
      throw e;
    }
    return listDemoVacancyShares();
  }
}

async function readErrorMessage(res: Response): Promise<string> {
  let text = '';
  try {
    text = await res.text();
  } catch {
    /* ignore */
  }

  if (text.trim().length > 0) {
    try {
      const data: unknown = JSON.parse(text);
      if (data !== null && typeof data === 'object' && 'error' in data) {
        const code = (data as { error?: unknown }).error;
        const detail = (data as { detail?: unknown }).detail;
        const detailStr = typeof detail === 'string' && detail.length > 0 ? ` ${detail}` : '';
        if (typeof code === 'string' && code in ERROR_HINTS) {
          return `${ERROR_HINTS[code] ?? code}${detailStr}`;
        }
        if (typeof code === 'string') return `${code}${detailStr}`;
      }
    } catch {
      /* not JSON */
    }
  }

  if (import.meta.env.DEV && (res.status === 500 || res.status === 502 || res.status === 503)) {
    return `Error del servidor (${res.status}). ${DEV_API_HINT}`;
  }
  return `Error del servidor (${res.status})`;
}

/**
 * Persiste una configuración de “Compartir vacante”.
 * En desarrollo, con `VITE_API_BASE_URL` vacío, Vite reenvía `/vacancies` al API (ver `vite.config.ts`).
 */
export async function saveVacancyShare(body: SaveVacancyShareRequest): Promise<VacancyShareRecord> {
  if (isStaticDemoHost()) {
    return saveDemoVacancyShare(body);
  }

  try {
    const res = await fetch(`${apiBase()}/vacancies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      if (shouldUseDemoShares(res)) {
        return saveDemoVacancyShare(body);
      }
      throw new Error(await readErrorMessage(res));
    }
    return (await res.json()) as VacancyShareRecord;
  } catch (e) {
    if (e instanceof Error && e.message.startsWith('Error del servidor')) {
      throw e;
    }
    return saveDemoVacancyShare(body);
  }
}

/** Lista registros del API o, si no está disponible, datos demo embebidos (Pages / solo front). */
export async function fetchVacancyShares(): Promise<VacancyShareRecord[]> {
  const rows = await fetchVacancySharesFromApi();
  return rows ?? listDemoVacancyShares();
}

/** HU 13 — Revoca un acceso compartido por id. */
export async function revokeVacancyShare(
  id: string,
  revokedBy: string,
): Promise<VacancyShareRecord> {
  if (isStaticDemoHost()) {
    return revokeDemoVacancyShare(id, revokedBy);
  }

  try {
    const res = await fetch(`${apiBase()}/vacancies/${id}/revoke`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ revokedBy }),
    });
    if (!res.ok) {
      if (shouldUseDemoShares(res)) {
        return revokeDemoVacancyShare(id, revokedBy);
      }
      throw new Error(await readErrorMessage(res));
    }
    return (await res.json()) as VacancyShareRecord;
  } catch (e) {
    if (e instanceof Error && e.message.startsWith('Error del servidor')) {
      throw e;
    }
    return revokeDemoVacancyShare(id, revokedBy);
  }
}
