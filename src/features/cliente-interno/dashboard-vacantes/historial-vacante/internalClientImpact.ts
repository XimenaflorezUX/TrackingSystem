import type {
  InternalClientActionItem,
  InternalClientImpact,
  InternalClientTraceTag,
} from './historial-vacante.types';

export interface InternalClientAffectedGroup {
  label: string;
  names: string[];
}

function resolveTotalCount(impact: InternalClientImpact): number {
  return impact.totalCount ?? impact.names?.length ?? 0;
}

function formatCommentOrRatingImpact(
  actionType: 'Comentario' | 'Calificación',
  impact: InternalClientImpact,
): string {
  const n = resolveTotalCount(impact);
  const name = impact.names?.[0];
  if (actionType === 'Comentario') {
    if (n === 1 && name) return `Se agregó comentario a ${name}`;
    return `Se agregó comentario a ${n} candidatos`;
  }
  if (n === 1 && name) return `Se agregó valoración a ${name}`;
  return `Se agregó valoración a ${n} candidatos`;
}

function formatDecisionImpact(impact: InternalClientImpact): string {
  const discarded = impact.discardedCount ?? 0;
  const advanced = impact.advancedCount ?? 0;
  if (advanced === 1) {
    return `Se descartaron ${discarded} y se pasó a apto 1 persona`;
  }
  return `Se descartaron ${discarded} y se pasaron a apto ${advanced} personas`;
}

export function formatInternalClientActionImpact(
  actionType: InternalClientTraceTag,
  impact?: InternalClientImpact,
): string | null {
  if (!impact) return null;

  switch (actionType) {
    case 'Comentario':
    case 'Calificación':
      return formatCommentOrRatingImpact(actionType, impact);
    case 'Decisión':
      return formatDecisionImpact(impact);
  }
}

export function getAffectedListGroups(action: InternalClientActionItem): InternalClientAffectedGroup[] {
  if (!action.showAffectedList || !action.impact) return [];

  const impact = action.impact;

  if (action.actionType === 'Decisión') {
    const groups: InternalClientAffectedGroup[] = [];
    if (impact.discardedNames !== undefined && impact.discardedNames.length > 0) {
      groups.push({ label: 'Descartados', names: impact.discardedNames });
    }
    if (impact.advancedNames !== undefined && impact.advancedNames.length > 0) {
      groups.push({ label: 'Apto', names: impact.advancedNames });
    }
    return groups;
  }

  if (impact.names !== undefined && impact.names.length > 0) {
    return [{ label: 'Candidatos', names: impact.names }];
  }

  return [];
}

export function countAffectedNames(action: InternalClientActionItem): number {
  return getAffectedListGroups(action).reduce((sum, group) => sum + group.names.length, 0);
}

export function canExpandAffectedList(action: InternalClientActionItem): boolean {
  if (!action.showAffectedList) return false;
  return countAffectedNames(action) > 1;
}

export function expandToggleLabel(action: InternalClientActionItem): string {
  const total = countAffectedNames(action);
  if (action.actionType === 'Decisión') {
    return `Ver detalle (${total} personas)`;
  }
  return `Ver candidatos (${total})`;
}
