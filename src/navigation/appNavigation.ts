import type { VacancyItem } from '../features/cliente-interno/dashboard-vacantes/vacancy-item.types';

export type AppView =
  | 'hub'
  | 'dashboard'
  | 'analista-dashboard'
  | 'candidates'
  | 'candidates-analista'
  | 'email-preview'
  | 'otp-landing';

export type ProfileTabId = 'valoraciones' | 'comentarios';

export interface NavExtras {
  otpCode?: string;
  openShareOnMount?: boolean;
  openHistorialOnMount?: boolean;
  initialProfileCandidateId?: string | null;
  initialProfileTab?: ProfileTabId;
}

export interface InitialNavigationState {
  view: AppView;
  vacancy: VacancyItem | null;
  extras: NavExtras;
}

export const DEV_PREVIEW_VACANCY: VacancyItem = {
  id: 'preview-v-02',
  title: 'Frontend React',
  location: 'Bogotá',
  contractType: 'Término indefinido',
  status: 'Publicada',
  createdAt: '2026-03-21',
  expiresAt: '2026-06-21',
  channelEmail: 'reclutamiento.tech@magneto.com',
  applicantsCount: 2,
};

const PROFILE_TABS: ProfileTabId[] = ['valoraciones', 'comentarios'];

function parseProfileTab(raw: string | null): ProfileTabId | undefined {
  if (raw === null || raw.trim().length === 0) return undefined;
  const tab = raw.trim().toLowerCase() as ProfileTabId;
  return PROFILE_TABS.includes(tab) ? tab : undefined;
}

function readExtras(params: URLSearchParams): NavExtras {
  const extras: NavExtras = {};

  const code = params.get('code')?.replace(/\D/g, '') ?? '';
  if (code.length === 6) {
    extras.otpCode = code;
  }

  if (params.get('share') === '1') {
    extras.openShareOnMount = true;
  }

  if (params.get('historial') === '1') {
    extras.openHistorialOnMount = true;
  }

  const candidate = params.get('candidate');
  if (candidate !== null && candidate.trim().length > 0) {
    extras.initialProfileCandidateId = candidate.trim();
  }

  const tab = parseProfileTab(params.get('tab'));
  if (tab !== undefined) {
    extras.initialProfileTab = tab;
  }

  return extras;
}

export function readInitialNavigationState(): InitialNavigationState {
  const params = new URLSearchParams(globalThis.location?.search ?? '');
  const raw = params.get('view');
  const devView = raw === null ? '' : raw.trim().toLowerCase();
  const extras = readExtras(params);

  if (devView === '' || devView === 'hub' || devView === 'inicio' || devView === 'home') {
    return { view: 'hub', vacancy: null, extras: {} };
  }
  if (devView === 'vacantes' || devView === 'dashboard') {
    return { view: 'dashboard', vacancy: null, extras };
  }
  if (devView === 'candidates') {
    return { view: 'candidates', vacancy: DEV_PREVIEW_VACANCY, extras };
  }
  if (devView === 'analista-vacantes' || devView === 'dashboard-analista' || devView === 'analista') {
    return { view: 'analista-dashboard', vacancy: null, extras };
  }
  if (devView === 'candidates-analista' || devView === 'analista-candidates') {
    return { view: 'candidates-analista', vacancy: DEV_PREVIEW_VACANCY, extras };
  }
  if (devView === 'email-preview' || devView === 'email') {
    return { view: 'email-preview', vacancy: null, extras };
  }
  if (devView === 'otp' || devView === 'otp-landing' || devView === 'codigo') {
    return { view: 'otp-landing', vacancy: null, extras };
  }

  return { view: 'hub', vacancy: null, extras: {} };
}

export function applyViewToSearchParams(view: AppView, extras: NavExtras = {}): void {
  if (globalThis.window === undefined) return;

  const url = new URL(globalThis.location.href);
  url.searchParams.delete('share');
  url.searchParams.delete('historial');
  url.searchParams.delete('candidate');
  url.searchParams.delete('tab');
  url.searchParams.delete('code');

  switch (view) {
    case 'hub':
      url.searchParams.set('view', 'hub');
      break;
    case 'dashboard':
      url.searchParams.set('view', 'vacantes');
      break;
    case 'candidates':
      url.searchParams.set('view', 'candidates');
      if (extras.initialProfileCandidateId) {
        url.searchParams.set('candidate', extras.initialProfileCandidateId);
      }
      if (extras.initialProfileTab) {
        url.searchParams.set('tab', extras.initialProfileTab);
      }
      if (extras.openHistorialOnMount) {
        url.searchParams.set('historial', '1');
      }
      break;
    case 'candidates-analista':
      url.searchParams.set('view', 'candidates-analista');
      if (extras.openShareOnMount) {
        url.searchParams.set('share', '1');
      }
      break;
    case 'analista-dashboard':
      url.searchParams.set('view', 'analista-vacantes');
      break;
    case 'email-preview':
      url.searchParams.set('view', 'email-preview');
      break;
    case 'otp-landing':
      url.searchParams.set('view', 'otp-landing');
      if (extras.otpCode !== undefined && extras.otpCode.length === 6) {
        url.searchParams.set('code', extras.otpCode);
      }
      break;
    default:
      break;
  }

  globalThis.history.replaceState(null, '', `${url.pathname}${url.search}`);
}
