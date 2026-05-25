export type VacancyHistoryPublishIcon = 'check' | 'bolt';

export type VacancyHistoryStateVariant = 'paused' | 'cancelled' | 'closed' | 'other';

export type VacancyHistoryEventKind =
  | 'publish'
  | 'state-change'
  | 'bulk-move'
  | 'internal-client'
  | 'vacancy-transition'
  | 'analyst-reassignment';

/** HU 5 — tipo de acción dentro de un registro de gestión */
export type InternalClientTraceTag = 'Comentario' | 'Calificación' | 'Decisión';

/** HU 5 — atribución del actor (no mostrar userId crudo) */
export type ActorAttribution = 'analyst' | 'guest' | 'vacancy-leader';

/** Píldora secundaria (p. ej. Automática / Analista en transiciones operativas) */
export type LogAttributionPill = 'Analista' | 'Automática';

export interface VacancyHistoryActorDisplay {
  displayName?: string;
  email?: string;
  attribution: ActorAttribution;
}

export interface VacancyHistoryEventBase {
  id: string;
  kind: VacancyHistoryEventKind;
  timestampIso: string;
  actorLabel: string;
  traceTag: string;
}

export interface VacancyHistoryPublishEvent extends VacancyHistoryEventBase {
  kind: 'publish';
  title: string;
  description: string;
  icon: VacancyHistoryPublishIcon;
}

export interface VacancyHistoryStateEvent extends VacancyHistoryEventBase {
  kind: 'state-change';
  stateVariant: VacancyHistoryStateVariant;
  title: string;
  description: string;
}

export interface VacancyHistoryBulkMoveEvent extends VacancyHistoryEventBase {
  kind: 'bulk-move';
  analystName: string;
  candidateCount: number;
  stageName: string;
}

export interface InternalClientImpact {
  totalCount?: number;
  names?: string[];
  discardedCount?: number;
  advancedCount?: number;
  discardedNames?: string[];
  advancedNames?: string[];
}

export interface InternalClientActionItem {
  id: string;
  actionType: InternalClientTraceTag;
  timestampIso: string;
  impact?: InternalClientImpact;
  showAffectedList?: boolean;
}

export interface VacancyHistoryInternalClientEvent extends VacancyHistoryEventBase {
  kind: 'internal-client';
  traceTag: 'Gestión de cliente interno';
  actor: VacancyHistoryActorDisplay;
  actions: InternalClientActionItem[];
}

export interface VacancyHistoryVacancyTransitionEvent extends VacancyHistoryEventBase {
  kind: 'vacancy-transition';
  transition: 'draft-to-published' | 'published-to-expired';
  traceTag: 'Borrador a Publicada' | 'Publicada a Expirada';
  attributionPill: LogAttributionPill;
  actor?: { displayName: string; email: string };
  bodyText: string;
}

export interface VacancyHistoryAnalystReassignmentEvent extends VacancyHistoryEventBase {
  kind: 'analyst-reassignment';
  traceTag: 'Reasignación analista';
  attributionPill: LogAttributionPill;
  executedBy?: { displayName: string; email: string };
  previousAnalyst: { displayName: string; email: string };
  newAnalyst: { displayName: string; email: string };
}

export type VacancyHistoryEvent =
  | VacancyHistoryPublishEvent
  | VacancyHistoryStateEvent
  | VacancyHistoryBulkMoveEvent
  | VacancyHistoryInternalClientEvent
  | VacancyHistoryVacancyTransitionEvent
  | VacancyHistoryAnalystReassignmentEvent;

export type HistorialVacanteDrawerTab = 'detalle' | 'etapas' | 'historial';
