export type VacancyStatus =
  | 'Publicada'
  | 'Expirada'
  | 'Cubierta'
  | 'Inactiva'
  | 'Cancelada';

export interface Vacancy {
  id: string;
  title: string;
  location: string;
  contractType: string;
  status: VacancyStatus;
  createdAt: string; // ISO 8601
  expiresAt: string; // ISO 8601
  recruiterEmail: string;
  recruiterName: string;
  totalCandidates: number;
}

export interface ProcessTab {
  label: string;
  count: number;
}
