export interface TrackingAccess {
  id: string;
  vacancyName: string;
  recruiterName: string;
  location: string;
  createdAt: string; // ISO 8601
  internalClientEmail: string;
  candidatesCount: number;
  isActive: boolean;
}

export type StatusFilter = 'all' | 'active' | 'inactive';
