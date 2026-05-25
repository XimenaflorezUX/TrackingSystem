/**
 * Identificadores únicos (catálogo / sistema de diseño) para eventos de notificación
 * originados por acciones del cliente interno (invitado / líder) en gestión de candidatos.
 */
export const GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS = {
  /** Nuevo comentario del líder sobre un candidato */
  COMMENT: 'trk-notif-ci-guest-comment',
  /** Nueva calificación del líder (individual o agregable en lote) */
  RATING: 'trk-notif-ci-guest-rating',
  /** Solicitud de cambio de etapa sugerida por el líder */
  STAGE_MOVE: 'trk-notif-ci-guest-stage-move',
} as const;

export type GuestCandidateNotificationEventId =
  (typeof GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS)[keyof typeof GUEST_CANDIDATE_NOTIFICATION_EVENT_IDS];
