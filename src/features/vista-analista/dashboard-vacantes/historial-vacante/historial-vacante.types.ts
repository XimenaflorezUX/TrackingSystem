export type VacancyHistoryPublishIcon = 'check' | 'bolt';

export type VacancyHistoryStateVariant = 'paused' | 'cancelled' | 'closed' | 'other';

export type VacancyHistoryEventKind =
  | 'publish'
  | 'state-change'
  | 'bulk-move'
  | 'internal-client'
  | 'vacancy-transition'
  | 'analyst-reassignment'
  | 'access-granted'
  | 'access-revoked';

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
  /** Etiqueta principal bajo el encabezado del log */
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

/** Resumen de impacto HU 5 (comentario, valoración o decisión). */
export interface InternalClientImpact {
  totalCount?: number;
  names?: string[];
  discardedCount?: number;
  advancedCount?: number;
  /** Detalle para desplegable en decisiones */
  discardedNames?: string[];
  advancedNames?: string[];
}

/** Una acción dentro del único ítem de gestión de cliente interno. */
export interface InternalClientActionItem {
  id: string;
  actionType: InternalClientTraceTag;
  timestampIso: string;
  impact?: InternalClientImpact;
  /** Si true y hay más de un candidato en listas, muestra desplegable con nombres */
  showAffectedList?: boolean;
}

/** HU 5 — un <li> con varias acciones (comentario, valoración, decisión). */
export interface VacancyHistoryInternalClientEvent extends VacancyHistoryEventBase {
  kind: 'internal-client';
  traceTag: 'Gestión de cliente interno';
  /** Actor único del registro (p. ej. invitado que realizó las acciones en lote). */
  actor: VacancyHistoryActorDisplay;
  actions: InternalClientActionItem[];
}

/** Transiciones de estado de la vacante (Borrador↔Publicada, vigencia, etc.) */
export interface VacancyHistoryVacancyTransitionEvent extends VacancyHistoryEventBase {
  kind: 'vacancy-transition';
  transition: 'draft-to-published' | 'published-to-expired';
  traceTag: 'Borrador a Publicada' | 'Publicada a Expirada';
  attributionPill: LogAttributionPill;
  /** Obligatorio si attributionPill es Analista */
  actor?: { displayName: string; email: string };
  bodyText: string;
}

/** Reasignación de analista (detalle estructurado) */
export interface VacancyHistoryAnalystReassignmentEvent extends VacancyHistoryEventBase {
  kind: 'analyst-reassignment';
  traceTag: 'Reasignación analista';
  attributionPill: LogAttributionPill;
  executedBy?: { displayName: string; email: string };
  previousAnalyst: { displayName: string; email: string };
  newAnalyst: { displayName: string; email: string };
}

/** HU 13 / HU 14 — acceso compartido otorgado */
export interface VacancyHistoryAccessGrantedEvent extends VacancyHistoryEventBase {
  kind: 'access-granted';
  traceTag: 'Acceso compartido';
  attributionPill: LogAttributionPill;
  actor: { displayName: string; email: string };
  recipientEmail: string;
  visibilityLabel: string;
  sharedFields: string[];
  feedbackEnabled: string[];
}

/** HU 13 / HU 14 — acceso revocado */
export interface VacancyHistoryAccessRevokedEvent extends VacancyHistoryEventBase {
  kind: 'access-revoked';
  traceTag: 'Acceso revocado';
  attributionPill: LogAttributionPill;
  actor: { displayName: string; email: string };
  recipientEmail: string;
}

export type VacancyHistoryEvent =
  | VacancyHistoryPublishEvent
  | VacancyHistoryStateEvent
  | VacancyHistoryBulkMoveEvent
  | VacancyHistoryInternalClientEvent
  | VacancyHistoryVacancyTransitionEvent
  | VacancyHistoryAnalystReassignmentEvent
  | VacancyHistoryAccessGrantedEvent
  | VacancyHistoryAccessRevokedEvent;

/** Pestañas del panel lateral de vacante (orden fijado por negocio / diseño plataforma). */
export type HistorialVacanteDrawerTab = 'detalle' | 'etapas' | 'historial' | 'accesos';
