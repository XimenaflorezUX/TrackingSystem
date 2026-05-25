import { useState, useEffect, useMemo } from 'react';
import type { VacancyItem } from '../vacancy-item.types';
import HistorialVacanteDrawer from '../historial-vacante/HistorialVacanteDrawer';
import CandidateProfileClienteInterno from './CandidateProfileClienteInterno';
import type { ProfileTabId } from './CandidateProfileClienteInterno';
import { CandidateRatingSentimentTags } from './CandidateRatingSentimentTags';
import type { CandidateRatingSummary } from './candidateRating.types';
import { hasAnyRatings } from './candidateRating.types';
import {
  getShareUiFlags,
  getShareVisibilityConfig,
  getVisiblePipelineStages,
  resolvePipelineStage,
} from '../../../../session/vacancyShareSession';
import type { VacancyPipelineStageId } from '../../../../shared/vacancyPipelineStages';
import {
  getNextPipelineStageId,
  getVacancyPipelineStageLabel,
} from '../../../../shared/vacancyPipelineStages';
import { useSvmToast } from '../../../vista-analista/dashboard-vacantes/ShareVacancyModal/useSvmToast';
import './CandidatesViewClienteInterno.scss';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Candidate {
  id: string;
  name: string;
  initials: string;
  colorIndex: 1 | 2 | 3 | 4 | 5 | 6;
  updateDate: string;
  applicationDate: string;
  profileCompleteness: number;
  fitPercentage: number;
  studyLevel: string;
  jobCategory: string;
  age: number;
  gender: string;
  salaryExpectation: number;
  experience: string[];
  studies: string[];
  skills: string[];
  languages: string[];
  availability: string;
  profession?: string;
  documentType?: string;
  documentNumber?: string;
  birthDate?: string;
  email?: string;
  location?: string;
  phone?: string;
  photoUrl?: string;
  linkedIn?: string;
  facebook?: string;
  eriStatus: 'completed' | 'nodata';
  eriResultLabel: string;
  tmSocioemotionalStatus: 'completed' | 'nodata';
  tmSocioemotionalLabel: string;
  tmLeadershipStatus: 'completed' | 'nodata';
  tmLeadershipLabel: string;
  tmCognitiveStatus: 'completed' | 'nodata';
  tmCognitiveLabel: string;
  mcsaStatus: 'completed' | 'nodata';
  mcsaLabel: string;
  mdiscStatus: 'completed' | 'nodata';
  isSuggestedByAI: boolean;
  status: 'active' | 'discarded' | 'suitable' | 'eliminated';
  /** Etapa del pipeline en la que se encuentra el candidato. */
  stageId: VacancyPipelineStageId;
  /** Resumen de valoraciones (bueno / regular / malo) para vista rápida en tabla y tabs. */
  ratingSummary: CandidateRatingSummary;
}

type StatusFilter  = 'active' | 'discarded' | 'suitable' | 'eliminated';

const DEFAULT_PIPELINE_STAGE: VacancyPipelineStageId = 'postulantes';

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'c-01', name: 'Sofía Martínez',    initials: 'SM', colorIndex: 1,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 90, fitPercentage: 90,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 40, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    profession: 'Comunicador',
    documentType: 'CC',
    documentNumber: '1037651011',
    birthDate: '14/08/1987',
    email: 'nombre@correo.com',
    location: 'Medellín, Colombia',
    phone: '+57 3001234567',
    linkedIn: 'www.linkedin.com/sofiamartinez',
    facebook: 'www.facebook.com/sofiamartinez',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: true, status: 'active',
    stageId: 'postulantes',
    ratingSummary: { bueno: 1, regular: 0, malo: 0 },
  },
  {
    id: 'c-02', name: 'Isabella Torres',   initials: 'IT', colorIndex: 2,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 90, fitPercentage: 90,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 40, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'nodata', mcsaLabel: 'Sin datos',
    mdiscStatus: 'completed',
    isSuggestedByAI: true, status: 'active',
    stageId: 'postulantes',
    ratingSummary: { bueno: 0, regular: 1, malo: 0 },
  },
  {
    id: 'c-03', name: 'Camila Gómez',      initials: 'CG', colorIndex: 3,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 90, fitPercentage: 90,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 40, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'nodata', mcsaLabel: 'Sin datos',
    mdiscStatus: 'completed',
    isSuggestedByAI: true, status: 'active',
    stageId: 'postulantes',
    ratingSummary: { bueno: 0, regular: 0, malo: 1 },
  },
  {
    id: 'c-04', name: 'Valentina Ruiz',    initials: 'VR', colorIndex: 4,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 90, fitPercentage: 90,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 35, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: true, status: 'active',
    stageId: 'videoentrevista',
    ratingSummary: { bueno: 1, regular: 0, malo: 0 },
  },
  {
    id: 'c-05', name: 'Gabriela López',    initials: 'GL', colorIndex: 5,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 90, fitPercentage: 90,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 35, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: false, status: 'active',
    stageId: 'videoentrevista',
    ratingSummary: { bueno: 0, regular: 1, malo: 0 },
  },
  {
    id: 'c-06', name: 'Ana María Pérez',   initials: 'AP', colorIndex: 6,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 80, fitPercentage: 80,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 35, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: false, status: 'active',
    stageId: 'videoentrevista',
    ratingSummary: { bueno: 0, regular: 0, malo: 1 },
  },
  {
    id: 'c-07', name: 'Mariana Sánchez',   initials: 'MS', colorIndex: 1,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 80, fitPercentage: 80,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 35, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: false, status: 'active',
    stageId: 'videoentrevista',
    ratingSummary: { bueno: 1, regular: 0, malo: 0 },
  },
  {
    id: 'c-08', name: 'Claudia Jiménez',   initials: 'CJ', colorIndex: 2,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 80, fitPercentage: 80,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 30, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: false, status: 'active',
    stageId: 'entrevista-lider',
    ratingSummary: { bueno: 0, regular: 0, malo: 0 },
  },
  {
    id: 'c-09', name: 'Fernanda Castillo', initials: 'FC', colorIndex: 3,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 80, fitPercentage: 70,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 30, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: false, status: 'active',
    stageId: 'pruebas',
    ratingSummary: { bueno: 0, regular: 0, malo: 1 },
  },
  {
    id: 'c-10', name: 'Lucía Hernández',   initials: 'LH', colorIndex: 4,
    updateDate: '10/10/2024', applicationDate: '10/10/2024',
    profileCompleteness: 80, fitPercentage: 70,
    studyLevel: 'Especialización/Maestría', jobCategory: 'Ingenierías\nSoftware, informática',
    age: 30, gender: 'Femenino', salaryExpectation: 4000000,
    experience: ['Coordinadora de operación...', 'Analista senior de gestión...'],
    studies:    ['Especialización en gestión de...', 'Tecnología en programación...'],
    skills:     ['Comunicación asertiva', 'Liderazgo'],
    languages:  ['Inglés', 'Español'],
    availability: 'Tiempo completo',
    eriStatus: 'completed', eriResultLabel: 'FP',
    tmSocioemotionalStatus: 'completed', tmSocioemotionalLabel: 'Media',
    tmLeadershipStatus: 'completed',     tmLeadershipLabel: 'Media',
    tmCognitiveStatus: 'completed',      tmCognitiveLabel: 'Media',
    mcsaStatus: 'completed', mcsaLabel: 'Agricultor',
    mdiscStatus: 'completed',
    isSuggestedByAI: false, status: 'active',
    stageId: 'apertura',
    ratingSummary: { bueno: 0, regular: 1, malo: 0 },
  },
];

const PAGE_SIZES = [10, 20, 50];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
}

function formatExpiryDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-CO', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconArrowLeft   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>;
const IconChevronRight= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>;
const IconSearch      = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconChevronDown = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>;
const IconSortArrows  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M11 5H4M7 12H4M9 19H4M13 5l4 4 4-4M17 9v10"/></svg>;
const IconColumns     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="7" height="18"/><rect x="14" y="3" width="7" height="18"/></svg>;
const IconGrid        = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>;
const IconFilter      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconChevronLeft = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>;
const IconDotsVertical= () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>;
const IconUserActive  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconUserX       = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>;
const IconUserCheck   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>;
const IconUserOff     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 17H3"/><path d="M10.5 15.5A4.5 4.5 0 1 0 5.73 8.73"/><path d="m3 3 18 18"/></svg>;
const IconSmsTracking = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <rect x="0.68" y="1.49" width="11.65" height="10.02" rx="1" stroke="#667688" strokeWidth="0.9" fill="none"/>
    <polyline points="0.68,1.49 6.5,7 12.33,1.49" stroke="#667688" strokeWidth="0.9" fill="none"/>
    <line x1="0.68" y1="8.53" x2="4.74" y2="8.53" stroke="#667688" strokeWidth="0.9"/>
    <line x1="0.68" y1="6.36" x2="3.12" y2="6.36" stroke="#667688" strokeWidth="0.9"/>
  </svg>
);
const IconTaskSquare = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="0.83" y="0.83" width="14.33" height="14.33" rx="2" fill="#0CBB4E"/>
    <polyline points="4,8 7,11 12,5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="#8591A0" strokeWidth="1.2"/>
    <path d="M8 4.5V8.5L10.5 10" stroke="#8591A0" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconBroom = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 3 L6 13 L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6 L8 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCalendarTick = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="1.88" y="2.08" width="16.25" height="16.67" rx="2" stroke="white" strokeWidth="1.3"/>
    <line x1="5" y1="1" x2="5" y2="4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="15" y1="1" x2="15" y2="4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="1.88" y1="7" x2="18.12" y2="7" stroke="white" strokeWidth="1.3"/>
    <polyline points="6,11 9,14 14,9" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="1.88" y="2.08" width="16.25" height="15.83" rx="2" stroke="white" strokeWidth="1.3"/>
    <line x1="5" y1="1" x2="5" y2="4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="15" y1="1" x2="15" y2="4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="1.88" y1="7" x2="18.12" y2="7" stroke="white" strokeWidth="1.3"/>
  </svg>
);
const IconBookUser = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2.67" y="1" width="14.67" height="18" rx="2" stroke="white" strokeWidth="1.3"/>
    <circle cx="10" cy="7" r="3" stroke="white" strokeWidth="1.3"/>
    <path d="M4.67 17c0-2.76 2.39-5 5.33-5s5.33 2.24 5.33 5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconClipboardX = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2.67" y="1" width="14.67" height="18" rx="2" stroke="white" strokeWidth="1.3"/>
    <line x1="7" y1="9" x2="13" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="13" y1="9" x2="7" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconFileDownload = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3.5 1.83 L13.5 1.83 L16.5 4.83 L16.5 18.17 L3.5 18.17 Z" stroke="white" strokeWidth="1.3"/>
    <polyline points="7,11 10,14 13,11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10" y1="7" x2="10" y2="14" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);
const IconArrowDown2 = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.3"/>
    <polyline points="6.5,9 10,12.5 13.5,9" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconMessages = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M2 2h16a1 1 0 011 1v10a1 1 0 01-1 1H6l-4 4V3a1 1 0 011-1z" stroke="white" strokeWidth="1.3"/>
  </svg>
);
const IconTrash = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <polyline points="3,5 5,5 17,5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M16 5l-1 13H5L4 5" stroke="white" strokeWidth="1.3"/>
    <path d="M8 9v6M12 9v6" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M7 5V3h6v2" stroke="white" strokeWidth="1.3"/>
  </svg>
);
const IconRedo = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M14 6h-4a5 5 0 000 10h2" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    <polyline points="11,3 14,6 11,9" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconExport = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="0.83" y="0.83" width="14.33" height="14.33" rx="2" stroke="currentColor" strokeWidth="0.8"/>
    <polyline points="5,9 8,6 11,9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="6" x2="8" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);
const IconClose = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <line x1="4" y1="4" x2="12" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="4" x2="4" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCheckApprove = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <polyline points="3,8 6.5,12 13,4.5" stroke="#001B38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Expandable cell ──────────────────────────────────────────────────────────

const ExpandableCell = ({ items }: { items: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 2);
  return (
    <div className="cv-table__expandable">
      {visible.map((item, i) => (
        <span key={i} className="cv-table__cell-text">{item}</span>
      ))}
      <button
        className="cv-table__see-more"
        onClick={() => setExpanded((e) => !e)}
        type="button"
      >
        {expanded ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};

// ─── Test-status cell helper ───────────────────────────────────────────────────

interface TestStatusCellProps {
  status: 'completed' | 'nodata';
  badgeLabel: string;
  badgeType: 'eri' | 'potential' | 'seller' | 'mdisc' | 'nodata';
  extraText?: string;
}

const TestStatusCell = ({ status, badgeLabel, badgeType, extraText }: TestStatusCellProps) => (
  <div className="cv-table__test-status">
    {status === 'completed' ? <IconTaskSquare /> : <IconClock />}
    {extraText && <span className="cv-table__cell-text">{extraText}</span>}
    {badgeType !== 'mdisc' && (
      <span className={`cv-table__test-badge cv-table__test-badge--${badgeType}`}>
        {badgeLabel}
      </span>
    )}
    {badgeType === 'mdisc' && (
      <span className="cv-table__cell-text">{badgeLabel}</span>
    )}
  </div>
);

// ─── Candidate Row ────────────────────────────────────────────────────────────

interface CandidateRowProps {
  candidate: Candidate;
  isSelected: boolean;
  showRatingFeedback: boolean;
  onSelect: (id: string) => void;
  onOpenProfile: (id: string) => void;
}

const CandidateRow = ({
  candidate,
  isSelected,
  showRatingFeedback,
  onSelect,
  onOpenProfile,
}: CandidateRowProps) => (
  <tr className={`cv-table__row${isSelected ? ' cv-table__row--selected' : ''}`}>

    {/* ── Col 1: Checkbox (sticky) ── */}
    <td className="cv-table__td cv-table__td--checkbox">
      <input
        type="checkbox"
        className="cv-table__checkbox"
        checked={isSelected}
        onChange={() => onSelect(candidate.id)}
        aria-label={`Seleccionar ${candidate.name}`}
      />
    </td>

    {/* ── Col 2: Candidate name + tags (sticky) ── */}
    <td className="cv-table__td cv-table__td--candidate">
      <div className="cv-table__candidate-cell">
        <div className={`cv-table__avatar cv-table__avatar--color-${candidate.colorIndex}`} aria-hidden="true">
          {candidate.initials}
        </div>

        <div className="cv-table__candidate-info">
          <button
            type="button"
            className="cv-table__candidate-name-btn"
            title={candidate.name}
            onClick={() => onOpenProfile(candidate.id)}
          >
            {candidate.name}
          </button>
          <div className="cv-table__tags">
            <span className="cv-table__tag">
              <IconSmsTracking />
              Invitado
            </span>
            {showRatingFeedback && hasAnyRatings(candidate.ratingSummary) ? (
              <CandidateRatingSentimentTags
                summary={candidate.ratingSummary}
                variant="table"
              />
            ) : null}
          </div>
        </div>
      </div>
    </td>

    {/* ── Col 3: Actualización de perfil ── */}
    <td className="cv-table__td cv-table__td--date">
      <span className="cv-table__cell-text">{candidate.updateDate}</span>
    </td>

    {/* ── Col 4: Fecha de postulación ── */}
    <td className="cv-table__td cv-table__td--date">
      <span className="cv-table__cell-text">{candidate.applicationDate}</span>
    </td>

    {/* ── Col 5: Completitud de perfil ── */}
    <td className="cv-table__td cv-table__td--pct">
      <span className="cv-table__cell-text">{candidate.profileCompleteness}%</span>
    </td>

    {/* ── Col 6: Porcentaje de ajuste ── */}
    <td className="cv-table__td cv-table__td--pct">
      <div className="cv-table__fit-cell">
        <span className="cv-table__cell-text">{candidate.fitPercentage}%</span>
        <button className="cv-table__train-link" type="button">
          ¡Entrenemos<br />el ranking IA!
        </button>
      </div>
    </td>

    {/* ── Col 7: Nivel de estudios ── */}
    <td className="cv-table__td cv-table__td--study">
      <span className="cv-table__cell-text">{candidate.studyLevel}</span>
    </td>

    {/* ── Col 8: Categoría laboral ── */}
    <td className="cv-table__td cv-table__td--category">
      <ExpandableCell items={candidate.jobCategory.split('\n')} />
    </td>

    {/* ── Col 9: Edad ── */}
    <td className="cv-table__td cv-table__td--narrow">
      <span className="cv-table__cell-text">{candidate.age}</span>
    </td>

    {/* ── Col 10: Género ── */}
    <td className="cv-table__td cv-table__td--narrow">
      <span className="cv-table__cell-text">{candidate.gender}</span>
    </td>

    {/* ── Col 11: Aspiración salarial ── */}
    <td className="cv-table__td cv-table__td--salary">
      <span className="cv-table__cell-text">{formatCurrency(candidate.salaryExpectation)}</span>
    </td>

    {/* ── Col 12: Experiencia laboral ── */}
    <td className="cv-table__td cv-table__td--wide">
      <ExpandableCell items={candidate.experience} />
    </td>

    {/* ── Col 13: Estudios ── */}
    <td className="cv-table__td cv-table__td--wide">
      <ExpandableCell items={candidate.studies} />
    </td>

    {/* ── Col 14: Habilidades ── */}
    <td className="cv-table__td cv-table__td--wide">
      <ExpandableCell items={candidate.skills} />
    </td>

    {/* ── Col 15: Idiomas ── */}
    <td className="cv-table__td cv-table__td--medium">
      <ExpandableCell items={candidate.languages} />
    </td>

    {/* ── Col 16: Disponibilidad horaria ── */}
    <td className="cv-table__td cv-table__td--medium">
      <span className="cv-table__cell-text">{candidate.availability}</span>
    </td>

    {/* ── Col 17: Prueba ERI ── */}
    <td className="cv-table__td cv-table__td--test">
      <TestStatusCell
        status={candidate.eriStatus}
        badgeLabel={candidate.eriResultLabel}
        badgeType="eri"
        extraText="ERI"
      />
    </td>

    {/* ── Col 18: TM Gestión socioemocional ── */}
    <td className="cv-table__td cv-table__td--test">
      <TestStatusCell
        status={candidate.tmSocioemotionalStatus}
        badgeLabel={candidate.tmSocioemotionalLabel}
        badgeType="potential"
      />
    </td>

    {/* ── Col 19: TM Potencial Liderazgo -E ── */}
    <td className="cv-table__td cv-table__td--test">
      <TestStatusCell
        status={candidate.tmLeadershipStatus}
        badgeLabel={candidate.tmLeadershipLabel}
        badgeType="potential"
      />
    </td>

    {/* ── Col 20: TM Habilidades cognitivas ── */}
    <td className="cv-table__td cv-table__td--test">
      <TestStatusCell
        status={candidate.tmCognitiveStatus}
        badgeLabel={candidate.tmCognitiveLabel}
        badgeType="potential"
      />
    </td>

    {/* ── Col 21: MCSA ── */}
    <td className="cv-table__td cv-table__td--test">
      <TestStatusCell
        status={candidate.mcsaStatus}
        badgeLabel={candidate.mcsaLabel}
        badgeType={candidate.mcsaStatus === 'completed' ? 'seller' : 'nodata'}
      />
    </td>

    {/* ── Col 22: M-DISC ── */}
    <td className="cv-table__td cv-table__td--test">
      <TestStatusCell
        status={candidate.mdiscStatus}
        badgeLabel="Realizado"
        badgeType="mdisc"
      />
    </td>
  </tr>
);

// ─── Mass Actions Bar ─────────────────────────────────────────────────────────

const MassActionsBar = ({
  count,
  onClear,
}: {
  count: number;
  onClear: () => void;
}) => (
  <div className="cv-mass-actions" role="toolbar" aria-label="Acciones masivas">
    <div className="cv-mass-actions__info">
      <span className="cv-mass-actions__title">Acciones masivas</span>
      <div className="cv-mass-actions__count-row">
        <span className="cv-mass-actions__count-bubble">{count}</span>
        <button className="cv-mass-actions__clear-btn" type="button" onClick={onClear} aria-label="Limpiar selección">
          <IconBroom />
          Limpiar
        </button>
      </div>
    </div>

    <div className="cv-mass-actions__action-icons" role="group" aria-label="Acciones disponibles">
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Agendar entrevista"><IconCalendarTick /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Agendar fecha"><IconCalendar /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Perfil"><IconBookUser /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Descartar"><IconClipboardX /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Descargar"><IconFileDownload /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Mover"><IconArrowDown2 /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Mensaje"><IconMessages /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Eliminar"><IconTrash /></button>
      <button className="cv-mass-actions__icon-btn" type="button" aria-label="Rehacer"><IconRedo /></button>
    </div>

    <div className="cv-mass-actions__divider" aria-hidden="true" />

    <div className="cv-mass-actions__quick-actions" role="group" aria-label="Acciones rápidas">
      <button className="cv-mass-actions__quick-btn cv-mass-actions__quick-btn--neutral" type="button" aria-label="Exportar selección">
        <IconExport />
      </button>
      <button className="cv-mass-actions__quick-btn cv-mass-actions__quick-btn--reject" type="button" aria-label="Rechazar selección">
        <IconClose />
      </button>
      <button className="cv-mass-actions__quick-btn cv-mass-actions__quick-btn--approve" type="button" aria-label="Aprobar selección">
        <IconCheckApprove />
      </button>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export interface CandidatesViewClienteInternoProps {
  vacancy: VacancyItem;
  onBack: () => void;
  openHistorialOnMount?: boolean;
  historialHighlightEventId?: string;
  initialProfileCandidateId?: string | null;
  initialProfileTab?: ProfileTabId;
}

const CandidatesViewClienteInterno = ({
  vacancy,
  onBack,
  openHistorialOnMount = false,
  historialHighlightEventId,
  initialProfileCandidateId = null,
  initialProfileTab,
}: CandidatesViewClienteInternoProps) => {
  const shareUi = getShareUiFlags();
  const { showToast, ToastPortal } = useSvmToast({ defaultPosition: 'top-center' });
  const visibilityConfig = useMemo(() => getShareVisibilityConfig(), []);
  const visiblePipelineStages = useMemo(
    () => getVisiblePipelineStages(visibilityConfig),
    [visibilityConfig],
  );
  const visibleStageIds = useMemo(
    () => visiblePipelineStages.map((stage) => stage.id),
    [visiblePipelineStages],
  );
  const [candidates, setCandidates] = useState<Candidate[]>(() => MOCK_CANDIDATES);
  const [activeStage, setActiveStage] = useState<VacancyPipelineStageId>(() =>
    resolvePipelineStage(DEFAULT_PIPELINE_STAGE, getShareVisibilityConfig()),
  );
  const [activeStatus,     setActiveStatus]     = useState<StatusFilter>('active');
  const [selectedIds,      setSelectedIds]      = useState<Set<string>>(new Set());
  const [currentPage,      setCurrentPage]      = useState(1);
  const [pageSize,         setPageSize]         = useState(20);
  const [historialOpen,    setHistorialOpen]    = useState(false);
  const [profileCandidateId, setProfileCandidateId] = useState<string | null>(initialProfileCandidateId);

  useEffect(() => {
    if (openHistorialOnMount) setHistorialOpen(true);
  }, [vacancy.id, openHistorialOnMount]);

  useEffect(() => {
    setActiveStage((current) => resolvePipelineStage(current, visibilityConfig));
  }, [visibilityConfig]);

  useEffect(() => {
    setCurrentPage(1);
    setSelectedIds(new Set());
  }, [activeStage, activeStatus]);

  const authorizedCandidates = useMemo(
    () =>
      candidates.filter((candidate) =>
        visibilityConfig.visibleStageIds.includes(candidate.stageId),
      ),
    [candidates, visibilityConfig.visibleStageIds],
  );

  const statusCounts = useMemo(() => {
    const inStage = authorizedCandidates.filter((candidate) => candidate.stageId === activeStage);
    return {
      active: inStage.filter((candidate) => candidate.status === 'active').length,
      discarded: inStage.filter((candidate) => candidate.status === 'discarded').length,
      suitable: inStage.filter((candidate) => candidate.status === 'suitable').length,
      eliminated: inStage.filter((candidate) => candidate.status === 'eliminated').length,
    };
  }, [authorizedCandidates, activeStage]);

  const stageCounts = useMemo(() => {
    const counts = new Map<VacancyPipelineStageId, number>();
    for (const candidate of authorizedCandidates) {
      counts.set(candidate.stageId, (counts.get(candidate.stageId) ?? 0) + 1);
    }
    return counts;
  }, [authorizedCandidates]);

  const pipelineStagesForNav = useMemo(
    () =>
      visiblePipelineStages.map((stage, index) => ({
        ...stage,
        index: index + 1,
        count: stageCounts.get(stage.id) ?? 0,
      })),
    [visiblePipelineStages, stageCounts],
  );

  const stageFilteredCandidates = useMemo(
    () => authorizedCandidates.filter((candidate) => candidate.stageId === activeStage),
    [authorizedCandidates, activeStage],
  );

  const statusFilteredCandidates = useMemo(
    () => stageFilteredCandidates.filter((candidate) => candidate.status === activeStatus),
    [stageFilteredCandidates, activeStatus],
  );

  const activeStageIndex = pipelineStagesForNav.findIndex((stage) => stage.id === activeStage);
  const canGoPreviousStage = activeStageIndex > 0;
  const canGoNextStage =
    activeStageIndex >= 0 && activeStageIndex < pipelineStagesForNav.length - 1;

  const totalPages = Math.max(1, Math.ceil(statusFilteredCandidates.length / pageSize));
  const safePage   = Math.min(currentPage, totalPages);
  const pageStart  = (safePage - 1) * pageSize;
  const pageItems  = statusFilteredCandidates.slice(pageStart, pageStart + pageSize);

  const profileCandidate = profileCandidateId === null
    ? null
    : candidates.find((candidate) => candidate.id === profileCandidateId) ?? null;

  const profileNavCandidates = useMemo(() => {
    if (profileCandidate === null) return [];
    return authorizedCandidates.filter(
      (candidate) =>
        candidate.stageId === profileCandidate.stageId
        && candidate.status === profileCandidate.status,
    );
  }, [authorizedCandidates, profileCandidate]);

  const profileIndex = profileCandidate === null
    ? -1
    : profileNavCandidates.findIndex((candidate) => candidate.id === profileCandidate.id);

  const isProfileOpen = profileCandidate !== null;

  const handleAdvanceCandidate = (candidateId: string) => {
    const candidate = candidates.find((item) => item.id === candidateId);
    if (candidate === undefined) return;

    const nextStageId = getNextPipelineStageId(candidate.stageId, visibleStageIds);
    if (nextStageId === null) {
      showToast('El candidato ya se encuentra en la última etapa visible.', 'error');
      return;
    }

    const nextStageLabel = getVacancyPipelineStageLabel(nextStageId);
    setCandidates((prev) =>
      prev.map((item) =>
        item.id === candidateId ? { ...item, stageId: nextStageId } : item,
      ),
    );
    setActiveStage(nextStageId);
    setActiveStatus('active');
    showToast(`${candidate.name} avanzó a ${nextStageLabel}.`, 'success');
  };

  const handleDiscardCandidate = (candidateId: string) => {
    const candidate = candidates.find((item) => item.id === candidateId);
    if (candidate === undefined) return;

    setCandidates((prev) =>
      prev.map((item) =>
        item.id === candidateId ? { ...item, status: 'discarded' } : item,
      ),
    );
    setActiveStatus('discarded');
    showToast(`${candidate.name} fue descartado del proceso.`, 'success');
  };

  const allSelected  = pageItems.length > 0 && pageItems.every((c) => selectedIds.has(c.id));
  const someSelected = pageItems.some((c) => selectedIds.has(c.id));

  const toggleAll = () => {
    if (allSelected) { setSelectedIds(new Set()); }
    else             { setSelectedIds(new Set(pageItems.map((c) => c.id))); }
  };

  const toggleOne = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (isProfileOpen && profileCandidate !== null) {
    const canAdvanceProfileCandidate =
      getNextPipelineStageId(profileCandidate.stageId, visibleStageIds) !== null;

    return (
      <>
        <CandidateProfileClienteInterno
          vacancyTitle={vacancy.title}
          candidate={profileCandidate}
          candidateOrdinal={profileIndex >= 0 ? profileIndex + 1 : 1}
          totalCandidates={profileNavCandidates.length > 0 ? profileNavCandidates.length : 1}
          initialTab={initialProfileTab}
          onClose={() => setProfileCandidateId(null)}
          onPreviousCandidate={() => {
            const prev = profileNavCandidates[profileIndex - 1];
            if (prev) setProfileCandidateId(prev.id);
          }}
          onNextCandidate={() => {
            const next = profileNavCandidates[profileIndex + 1];
            if (next) setProfileCandidateId(next.id);
          }}
          canGoPreviousCandidate={profileIndex > 0}
          canGoNextCandidate={profileIndex >= 0 && profileIndex < profileNavCandidates.length - 1}
          canAdvanceStage={canAdvanceProfileCandidate}
          onAdvanceStage={() => { handleAdvanceCandidate(profileCandidate.id); }}
          onDiscard={() => { handleDiscardCandidate(profileCandidate.id); }}
        />
        <ToastPortal />
      </>
    );
  }

  return (
    <>
    <div className="cv">

      {/* ── Pipeline Header ─────────────────────────────────────────────────── */}
      <header className="cv-pipeline" role="banner">
        <button className="cv-pipeline__back-btn" onClick={onBack} type="button" aria-label="Volver al dashboard">
          <IconArrowLeft />
        </button>

        <div className="cv-pipeline__vacancy-info">
          <div className="cv-pipeline__vacancy-name">
            <span className="cv-pipeline__status-dot" aria-hidden="true" />
            <span className="cv-pipeline__vacancy-title" title={vacancy.title}>{vacancy.title}</span>
          </div>
          <p className="cv-pipeline__vacancy-meta">
            {vacancy.location}&nbsp;|&nbsp;2 cupos&nbsp;|&nbsp;expira el {formatExpiryDate(vacancy.expiresAt)}
          </p>
        </div>

        <div className="cv-pipeline__actions">
          <button
            className="cv-pipeline__action-icon-btn"
            type="button"
            aria-label="Más opciones"
            onClick={() => {}}
          >
            <IconDotsVertical />
          </button>
        </div>

        <nav className="cv-pipeline__stages" aria-label="Etapas del proceso" role="tablist">
          {pipelineStagesForNav.length > 1 ? (
            <button
              className="cv-pipeline__stage-nav"
              type="button"
              aria-label="Etapa anterior"
              disabled={!canGoPreviousStage}
              onClick={() => {
                if (canGoPreviousStage) {
                  setActiveStage(pipelineStagesForNav[activeStageIndex - 1].id);
                }
              }}
            >
              <IconChevronLeft />
            </button>
          ) : null}
          {pipelineStagesForNav.map((stage) => (
            <button
              key={stage.id}
              className={`cv-pipeline__stage${activeStage === stage.id ? ' cv-pipeline__stage--active' : ''}`}
              onClick={() => setActiveStage(stage.id)}
              type="button"
              role="tab"
              aria-selected={activeStage === stage.id}
            >
              {stage.index}.&nbsp;{stage.label}&nbsp;({stage.count})
            </button>
          ))}
          {pipelineStagesForNav.length > 1 ? (
            <button
              className="cv-pipeline__stage-nav"
              type="button"
              aria-label="Siguiente etapa"
              disabled={!canGoNextStage}
              onClick={() => {
                if (canGoNextStage) {
                  setActiveStage(pipelineStagesForNav[activeStageIndex + 1].id);
                }
              }}
            >
              <IconChevronRight />
            </button>
          ) : null}
        </nav>
      </header>

      {/* ── Secondary Filter Bar ──────────────────────────────────────────────  */}
      <div className="cv-filters">
        <div className="cv-filters__left">
          <label className="cv-filters__select-all-wrapper">
            <input
              type="checkbox"
              className="cv-filters__select-all"
              checked={allSelected}
              ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }}
              onChange={toggleAll}
              aria-label="Seleccionar todos"
            />
            <span className="cv-filters__total-label">Todos ({selectedIds.size})</span>
          </label>

          <button className="cv-filters__search-btn" type="button" aria-label="Buscar candidato">
            <IconSearch />
          </button>

          <div className="cv-filters__status-segment" role="group" aria-label="Filtrar activos y descartados">
            <button
              className={`cv-filters__segment-btn cv-filters__segment-btn--left${activeStatus === 'active' ? ' cv-filters__segment-btn--on' : ''}`}
              onClick={() => setActiveStatus('active')}
              type="button"
            >
              <IconUserActive />
              Activos ({statusCounts.active})
            </button>
            <button
              className={`cv-filters__segment-btn cv-filters__segment-btn--right${activeStatus === 'discarded' ? ' cv-filters__segment-btn--on' : ''}`}
              onClick={() => setActiveStatus('discarded')}
              type="button"
            >
              <IconUserX />
              Descartados ({statusCounts.discarded})
            </button>
          </div>

          <div className="cv-filters__status-segment" role="group" aria-label="Filtrar aptos y eliminados">
            <button
              className={`cv-filters__segment-btn cv-filters__segment-btn--left${activeStatus === 'suitable' ? ' cv-filters__segment-btn--on' : ''}`}
              onClick={() => setActiveStatus('suitable')}
              type="button"
            >
              <IconUserCheck />
              Aptos ({statusCounts.suitable})
            </button>
            <button
              className={`cv-filters__segment-btn cv-filters__segment-btn--right${activeStatus === 'eliminated' ? ' cv-filters__segment-btn--on' : ''}`}
              onClick={() => setActiveStatus('eliminated')}
              type="button"
            >
              <IconUserOff />
              Eliminados ({statusCounts.eliminated})
            </button>
          </div>
        </div>

        <div className="cv-filters__sort-combo">
          <div className="cv-filters__sort-select">
            <span className="cv-filters__sort-label">Fecha de modificación</span>
            <IconChevronDown />
          </div>
          <button className="cv-filters__sort-order-btn" type="button" aria-label="Cambiar dirección de orden">
            <IconSortArrows />
          </button>
        </div>

        <div className="cv-filters__right">
          <div className="cv-filters__col-wrapper">
            <IconColumns />
            <span>16 Columnas</span>
            <IconChevronDown />
          </div>
          <button className="cv-filters__tool-btn" type="button" aria-label="Vista de cuadrícula">
            <IconGrid />
          </button>
          <button className="cv-filters__filter-btn" type="button" aria-label="Filtros avanzados">
            <IconFilter />
          </button>
        </div>
      </div>

      {/* ── Candidates Table ────────────────────────────────────────────────── */}
      <div className="cv-table__scroll-wrapper" role="region" aria-label="Tabla de candidatos" tabIndex={0}>
        <table className="cv-table">
          <thead className="cv-table__head">
            <tr>
              <th className="cv-table__th cv-table__th--checkbox" scope="col" aria-label="Seleccionar" />
              <th className="cv-table__th cv-table__th--candidate" scope="col">Candidato</th>
              <th className="cv-table__th cv-table__th--date" scope="col">Actualización<br/>de perfil</th>
              <th className="cv-table__th cv-table__th--date" scope="col">Fecha de postulación</th>
              <th className="cv-table__th cv-table__th--pct" scope="col">Completitud<br/>de perfil</th>
              <th className="cv-table__th cv-table__th--pct" scope="col">Porcentaje<br/>de ajuste</th>
              <th className="cv-table__th cv-table__th--study" scope="col">Nivel de<br/>estudios</th>
              <th className="cv-table__th cv-table__th--category" scope="col">Categoría<br/>laboral</th>
              <th className="cv-table__th cv-table__th--narrow" scope="col">Edad</th>
              <th className="cv-table__th cv-table__th--narrow" scope="col">Género</th>
              <th className="cv-table__th cv-table__th--salary" scope="col">Aspiración<br/>salarial</th>
              <th className="cv-table__th cv-table__th--wide" scope="col">Experiencia<br/>laboral</th>
              <th className="cv-table__th cv-table__th--wide" scope="col">Estudios</th>
              <th className="cv-table__th cv-table__th--wide" scope="col">Habilidades</th>
              <th className="cv-table__th cv-table__th--medium" scope="col">Idiomas</th>
              <th className="cv-table__th cv-table__th--medium" scope="col">Disponibilidad<br/>horaria</th>
              <th className="cv-table__th cv-table__th--test" scope="col">Prueba ERI</th>
              <th className="cv-table__th cv-table__th--test" scope="col">TM Gestión<br/>socioemocional</th>
              <th className="cv-table__th cv-table__th--test" scope="col">TM Potencial<br/>Liderazgo -E</th>
              <th className="cv-table__th cv-table__th--test" scope="col">TM Habilidades<br/>cognitivas</th>
              <th className="cv-table__th cv-table__th--test" scope="col">MCSA</th>
              <th className="cv-table__th cv-table__th--test" scope="col">M-DISC</th>
            </tr>
          </thead>
          <tbody className="cv-table__body">
            {pageItems.map((candidate) => (
              <CandidateRow
                key={candidate.id}
                candidate={candidate}
                isSelected={selectedIds.has(candidate.id)}
                showRatingFeedback={shareUi.showRatingFeedback}
                onSelect={toggleOne}
                onOpenProfile={(id) => setProfileCandidateId(id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mass Actions Floating Bar ────────────────────────────────────────── */}
      {selectedIds.size > 0 && (
        <MassActionsBar
          count={selectedIds.size}
          onClear={() => setSelectedIds(new Set())}
        />
      )}

      {/* ── Pagination ──────────────────────────────────────────────────────── */}
      <div className="cv-pagination" aria-label="Paginación">
        <button
          className="cv-pagination__btn"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={safePage <= 1}
          type="button"
        >
          <IconChevronLeft /> Anterior
        </button>

        <div className="cv-pagination__pages">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`cv-pagination__page${page === safePage ? ' cv-pagination__page--active' : ''}`}
              onClick={() => setCurrentPage(page)}
              type="button"
              aria-current={page === safePage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="cv-pagination__btn"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={safePage >= totalPages}
          type="button"
        >
          Siguiente <IconChevronRight />
        </button>

        <div className="cv-pagination__size-wrapper">
          <select
            className="cv-pagination__size-select"
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
            aria-label="Candidatos por página"
          >
            {PAGE_SIZES.map((s) => <option key={s} value={s}>{s} / página</option>)}
          </select>
          <IconChevronDown />
        </div>
      </div>

      {/* ── Drawers / Modals ─────────────────────────────────────────────────── */}
      <HistorialVacanteDrawer
        isOpen={historialOpen}
        onClose={() => setHistorialOpen(false)}
        vacancyId={vacancy.id}
        vacancyTitle={vacancy.title}
        highlightEventId={historialHighlightEventId}
      />

    </div>

    <ToastPortal />
    </>
  );
};

export default CandidatesViewClienteInterno;
