import type { VacancyHistoryEvent } from './historial-vacante.types';

/**
 * HU 5 — un solo ítem de timeline con varias acciones (comentario, valoración, decisión).
 * IDs de acción (hu5-01, hu5-02, …) se conservan para anclas desde notificaciones.
 */
const HU5_GESTION_EVENT: VacancyHistoryEvent = {
  id: 'hu5-gestion',
  kind: 'internal-client',
  traceTag: 'Gestión de cliente interno',
  timestampIso: '2026-04-20T14:51:00',
  actorLabel: 'Cliente interno',
  actor: {
    displayName: 'Patricia Gómez',
    email: 'patricia.gomez@cliente.co',
    attribution: 'guest',
  },
  actions: [
    {
      id: 'hu5-01',
      actionType: 'Comentario',
      timestampIso: '2026-04-20T14:51:00',
      showAffectedList: false,
      impact: {
        totalCount: 1,
        names: ['Dominga Luz Velasquez Monsalve'],
      },
    },
    {
      id: 'hu5-02',
      actionType: 'Calificación',
      timestampIso: '2026-04-19T09:30:00',
      showAffectedList: true,
      impact: {
        totalCount: 5,
        names: [
          'Angie Paola Bolaños Díaz',
          'Beatriz Castañón Cuervo',
          'Amparo Ortiz Pérez',
          'Maira Cortez Aguilar',
          'Juan Pablo Restrepo Vargas',
        ],
      },
    },
    {
      id: 'hu5-03',
      actionType: 'Decisión',
      timestampIso: '2026-04-18T16:15:00',
      showAffectedList: true,
      impact: {
        discardedCount: 10,
        advancedCount: 1,
        discardedNames: [
          'Candidato descartado 1',
          'Candidato descartado 2',
          'Candidato descartado 3',
          'Candidato descartado 4',
          'Candidato descartado 5',
          'Candidato descartado 6',
          'Candidato descartado 7',
          'Candidato descartado 8',
          'Candidato descartado 9',
          'Candidato descartado 10',
        ],
        advancedNames: ['María Fernanda López'],
      },
    },
  ],
};

const MOCK_HISTORIAL_CATALOG: VacancyHistoryEvent[] = [
  HU5_GESTION_EVENT,
  {
    id: 'access-granted-01',
    kind: 'access-granted',
    traceTag: 'Acceso compartido',
    attributionPill: 'Analista',
    timestampIso: '2026-04-22T10:05:00',
    actorLabel: 'Laura Méndez',
    actor: { displayName: 'Laura Méndez', email: 'l.mendez@magneto.com' },
    recipientEmail: 'patricia.gomez@cliente.co',
    visibilityLabel: 'Vista específica — Entrevista jefe directo',
    sharedFields: ['Fecha de avance', 'Hoja de vida', 'Datos de contacto', 'Comentarios del analista'],
    feedbackEnabled: ['Decisión de avance o descarte del candidato'],
  },
  {
    id: 'op-reassign-auto',
    kind: 'analyst-reassignment',
    traceTag: 'Reasignación analista',
    attributionPill: 'Automática',
    timestampIso: '2026-04-20T14:51:00',
    actorLabel: 'Sistema',
    previousAnalyst: { displayName: 'Carlos Ríos', email: 'c.rios@magneto.com' },
    newAnalyst: { displayName: 'María Pérez', email: 'm.perez@magneto.com' },
  },
  {
    id: 'op-reassign-analyst',
    kind: 'analyst-reassignment',
    traceTag: 'Reasignación analista',
    attributionPill: 'Analista',
    timestampIso: '2026-04-21T09:15:00',
    actorLabel: 'Laura Méndez',
    executedBy: { displayName: 'Laura Méndez', email: 'l.mendez@magneto.com' },
    previousAnalyst: { displayName: 'María Pérez', email: 'm.perez@magneto.com' },
    newAnalyst: { displayName: 'Andrés López', email: 'a.lopez@magneto.com' },
  },
  {
    id: 'access-revoked-01',
    kind: 'access-revoked',
    traceTag: 'Acceso revocado',
    attributionPill: 'Analista',
    timestampIso: '2026-04-25T15:30:00',
    actorLabel: 'Andrea Jimenez',
    actor: { displayName: 'Andrea Jimenez', email: 'correo@correo.com' },
    recipientEmail: 'ricardo.mora@cliente.co',
  },
  {
    id: 'access-granted-02',
    kind: 'access-granted',
    traceTag: 'Acceso compartido',
    attributionPill: 'Analista',
    timestampIso: '2026-04-22T10:05:00',
    actorLabel: 'Laura Méndez',
    actor: { displayName: 'Laura Méndez', email: 'l.mendez@magneto.com' },
    recipientEmail: 'ricardo.mora@cliente.co',
    visibilityLabel: 'Vista específica — Entrevista jefe directo',
    sharedFields: ['Fecha de avance', 'Hoja de vida', 'Datos de contacto', 'Comentarios del analista'],
    feedbackEnabled: ['Decisión de avance o descarte del candidato'],
  },
  {
    id: 'op-published-expired',
    kind: 'vacancy-transition',
    transition: 'published-to-expired',
    traceTag: 'Publicada a Expirada',
    attributionPill: 'Automática',
    timestampIso: '2026-05-10T23:59:00',
    actorLabel: 'Sistema',
    bodyText: 'La vacante ha expirado porque se ha alcanzado el tiempo límite de vigencia.',
  },
  {
    id: 'op-draft-published',
    kind: 'vacancy-transition',
    transition: 'draft-to-published',
    traceTag: 'Borrador a Publicada',
    attributionPill: 'Analista',
    timestampIso: '2026-05-08T10:00:00',
    actorLabel: 'Laura Méndez',
    actor: { displayName: 'Laura Méndez', email: 'l.mendez@magneto.com' },
    bodyText:
      'La vacante quedó publicada y es visible para los candidatos en los canales configurados. Podrá gestionar las postulaciones desde esta vista.',
  },
];

const NETWORK_DELAY_MS = 380;

export const HISTORIAL_PAGE_SIZE = 6;

export function formatHistorialTimestamp(iso: string): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const time = d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', hour12: true });
  return `${date} - ${time}`;
}

export async function fetchHistorialVacantePage(
  _vacancyId: string,
  offset: number,
  limit: number,
): Promise<VacancyHistoryEvent[]> {
  await new Promise((r) => {
    setTimeout(r, NETWORK_DELAY_MS);
  });
  return MOCK_HISTORIAL_CATALOG.slice(offset, offset + limit);
}
