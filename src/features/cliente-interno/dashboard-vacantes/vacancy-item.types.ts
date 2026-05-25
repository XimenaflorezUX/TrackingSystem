/** Opciones al abrir la vista de candidatos desde el listado (p. ej. desde notificaciones). */
export interface VacancyNavigateOptions {
  /** Si es true, se abre el drawer de historial al montar la vista de candidatos. */
  openHistorial?: boolean;
  /** Id del evento en el timeline del historial (`VacancyHistoryEvent.id`) para desplazar y resaltar. */
  historialEntryId?: string;
}

/** Modelo de fila de vacante compartido entre listado (VacancyDashboard) y detalle (CandidatesViewClienteInterno). */
export interface VacancyItem {
  id: string;
  title: string;
  location: string;
  contractType: string;
  status: 'Publicada' | 'Borrador' | 'Expirada' | 'Inactiva' | 'Cancelada' | 'Cubierta';
  createdAt: string;
  expiresAt: string;
  channelEmail: string;
  applicantsCount: number;
}
