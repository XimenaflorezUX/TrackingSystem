/** Modelo de fila de vacante compartido entre listado (VacancyDashboard) y detalle (CandidatesView). */
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
