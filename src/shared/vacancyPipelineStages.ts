export interface VacancyPipelineStage {
  id: VacancyPipelineStageId;
  label: string;
}

export type VacancyPipelineStageId =
  | 'postulantes'
  | 'videoentrevista'
  | 'entrevista-lider'
  | 'pruebas'
  | 'apertura';

/** Etapas del pipeline compartidas entre analista (share) y cliente interno. */
export const VACANCY_PIPELINE_STAGES: VacancyPipelineStage[] = [
  { id: 'postulantes', label: 'Postulantes' },
  { id: 'videoentrevista', label: 'Videoentrevista' },
  { id: 'entrevista-lider', label: 'Entrevista líder c.' },
  { id: 'pruebas', label: 'Pruebas psicológic.' },
  { id: 'apertura', label: 'Apertura conv.' },
];

export const VACANCY_PIPELINE_STAGE_IDS: VacancyPipelineStageId[] =
  VACANCY_PIPELINE_STAGES.map((stage) => stage.id);

export function isVacancyPipelineStageId(value: string): value is VacancyPipelineStageId {
  return VACANCY_PIPELINE_STAGE_IDS.includes(value as VacancyPipelineStageId);
}

export function getVacancyPipelineStageLabel(stageId: VacancyPipelineStageId): string {
  return VACANCY_PIPELINE_STAGES.find((stage) => stage.id === stageId)?.label ?? stageId;
}

/** Siguiente etapa dentro del alcance visible; `null` si ya está en la última. */
export function getNextPipelineStageId(
  currentStageId: VacancyPipelineStageId,
  visibleStageIds: VacancyPipelineStageId[],
): VacancyPipelineStageId | null {
  const index = visibleStageIds.indexOf(currentStageId);
  if (index < 0 || index >= visibleStageIds.length - 1) return null;
  return visibleStageIds[index + 1] ?? null;
}
