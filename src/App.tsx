import { useCallback, useEffect, useState, type ReactNode } from 'react';
import VacancyDashboard from './features/cliente-interno/dashboard-vacantes/VacancyDashboard';
import VacancyDashboardAnalista from './features/vista-analista/dashboard-vacantes/VacancyDashboard';
import CandidatesViewClienteInterno from './features/cliente-interno/dashboard-vacantes/CandidatesView/CandidatesViewClienteInterno';
import CandidatesViewAnalista from './features/vista-analista/dashboard-vacantes/CandidatesView/CandidatesViewAnalista';
import EmailPreview, { type EmailShareAccessSummary } from './features/cliente-interno/dashboard-vacantes/email-templates/EmailPreview';
import OtpLanding from './features/cliente-interno/auth-otp/OtpLanding';
import NavigationHub from './features/navigation-hub/NavigationHub';
import HubBackButton from './components/HubBackButton/HubBackButton';
import type { VacancyItem, VacancyNavigateOptions } from './features/cliente-interno/dashboard-vacantes/vacancy-item.types';
import type { VacancyShareRecord } from './api/vacancyShares.types';
import {
  applyViewToSearchParams,
  DEV_PREVIEW_VACANCY,
  readInitialNavigationState,
  type AppView,
  type NavExtras,
} from './navigation/appNavigation';
import {
  persistVacancyShareSession,
  readVacancyShareSession,
  readShareConfirmationDigits,
} from './session/vacancyShareSession';
/**
 * Query `view` para saltar de pantalla (válido en dev y en build / `vite preview`).
 * - Sin `view` o `?view=hub` → menú principal de navegación.
 * - `?view=vacantes` o `?view=dashboard` → VacancyDashboard (cliente interno).
 * - `?view=analista-vacantes` | `?view=dashboard-analista` | `?view=analista` → VacancyDashboard analista.
 * - `?view=candidates` → CandidatesViewClienteInterno con vacante de ejemplo.
 *   Opcional: `&candidate=c-01&tab=comentarios&historial=1`
 * - `?view=candidates-analista` → CandidatesView analista. Opcional: `&share=1` abre modal compartir.
 * - `?view=email-preview` | `?view=email` → EmailPreview.
 * - `?view=otp-landing` | `?view=otp` | `?view=codigo` → OtpLanding. Opcional: `&code=123456`.
 */
function buildEmailAccessSummary(s: VacancyShareRecord): EmailShareAccessSummary {
  const stagesLine =
    s.visibleStages.length > 0
      ? s.visibleStages.map((st) => st.label).join(' · ')
      : s.visibleStageIds.join(', ');
  return {
    includeSanitizedCv: s.includeSanitizedCv,
    includeContactData: s.includeContactData ?? false,
    feedbackGeneralEnabled: s.feedbackGeneralEnabled,
    feedbackRatingEnabled: s.feedbackRatingEnabled,
    feedbackStageDecisionEnabled: s.feedbackStageDecisionEnabled,
    visibilityScopeLabel:
      s.visibilityScope === 'global' ? 'Todas las etapas del proceso' : 'Solo etapas seleccionadas',
    visibleStagesLine: stagesLine.length > 0 ? stagesLine : '—',
  };
}

const App = () => {
  const initial = readInitialNavigationState();
  const [view, setView] = useState<AppView>(initial.view);
  const [selectedVacancy, setSelectedVacancy] = useState<VacancyItem | null>(initial.vacancy);
  const [navExtras, setNavExtras] = useState<NavExtras>(initial.extras);
  const [historialHighlightEventId, setHistorialHighlightEventId] = useState<string | undefined>(undefined);

  const handleSharePersisted = useCallback((record: VacancyShareRecord) => {
    persistVacancyShareSession(record);
  }, []);

  const goView = useCallback((next: AppView, extras: NavExtras = {}) => {
    applyViewToSearchParams(next, extras);
    setNavExtras(extras);
    setView(next);
  }, []);

  const handleShareThenEmailSimulation = useCallback(() => {
    goView('email-preview');
  }, [goView]);

  const goHub = useCallback(() => {
    goView('hub');
  }, [goView]);

  useEffect(() => {
    if (view === 'candidates' && selectedVacancy === null) {
      goView('dashboard');
      return;
    }
    if (view === 'candidates-analista' && selectedVacancy === null) {
      goView('analista-dashboard');
    }
  }, [view, selectedVacancy, goView]);

  const shareSession = readVacancyShareSession();
  const firstRecipient = shareSession?.recipientEmails[0] ?? '';
  const localPart = firstRecipient.includes('@') ? (firstRecipient.split('@')[0] ?? '') : '';
  const recipientPreviewName =
    localPart.length > 0
      ? `${localPart.charAt(0).toLocaleUpperCase('es')}${localPart.slice(1)}`
      : undefined;

  const emailAccessSummary: EmailShareAccessSummary | undefined =
    shareSession !== null ? buildEmailAccessSummary(shareSession) : undefined;

  const withHubBack = (content: ReactNode) => (
    <>
      {content}
      <HubBackButton onClick={goHub} />
    </>
  );

  if (view === 'hub') {
    return (
      <>
      <NavigationHub
        onNavigateAnalistaDashboard={() => goView('analista-dashboard')}
        onNavigateAnalistaCandidates={() => {
          setSelectedVacancy(DEV_PREVIEW_VACANCY);
          goView('candidates-analista');
        }}
        onNavigateAnalistaShare={() => {
          setSelectedVacancy(DEV_PREVIEW_VACANCY);
          goView('candidates-analista', { openShareOnMount: true });
        }}
        onNavigateAnalistaEmail={() => goView('email-preview')}
        onNavigateClienteEmail={() => goView('email-preview')}
        onNavigateClienteOtp={() => {
          const digits = readShareConfirmationDigits() ?? navExtras.otpCode;
          goView('otp-landing', digits !== undefined ? { otpCode: digits } : {});
        }}
        onNavigateClienteDashboard={() => {
          setSelectedVacancy(null);
          goView('dashboard');
        }}
        onNavigateClienteCandidates={() => {
          setSelectedVacancy(DEV_PREVIEW_VACANCY);
          goView('candidates');
        }}
        onNavigateClienteComments={() => {
          setSelectedVacancy(DEV_PREVIEW_VACANCY);
          goView('candidates', {
            initialProfileCandidateId: 'c-01',
            initialProfileTab: 'comentarios',
          });
        }}
      />
      </>
    );
  }

  if (view === 'otp-landing') {
    return withHubBack(
      <OtpLanding
        rawEmail={shareSession?.recipientEmails[0] ?? 'ximenamarilla11@gmail.com'}
        shareOtpCode={readShareConfirmationDigits()}
        onSuccess={() => {
          setSelectedVacancy(null);
          goView('dashboard');
        }}
        onBack={() => {
          goView('dashboard');
        }}
      />
    );
  }

  if (view === 'email-preview') {
    return withHubBack(
      <EmailPreview
        recipientFirstName={recipientPreviewName}
        vacancyName={shareSession?.vacancyTitle}
        recipientEmails={shareSession?.recipientEmails}
        accessSummary={emailAccessSummary}
        onOpenOtp={() => {
          // No prellenar ?code= aquí: con sesión de share el OTP se auto-verificaba
          // y saltaba al dashboard sin mostrar la pantalla HU 2.
          goView('otp-landing');
        }}
      />
    );
  }

  if (view === 'candidates' && selectedVacancy) {
    return withHubBack(
      <CandidatesViewClienteInterno
        vacancy={selectedVacancy}
        openHistorialOnMount={Boolean(navExtras.openHistorialOnMount)}
        historialHighlightEventId={historialHighlightEventId}
        initialProfileCandidateId={navExtras.initialProfileCandidateId ?? null}
        initialProfileTab={navExtras.initialProfileTab}
        onBack={() => {
          goView('dashboard');
          setSelectedVacancy(null);
          setHistorialHighlightEventId(undefined);
        }}
      />
    );
  }

  if (view === 'candidates-analista' && selectedVacancy) {
    return withHubBack(
      <CandidatesViewAnalista
        vacancy={selectedVacancy}
        openShareOnMount={Boolean(navExtras.openShareOnMount)}
        onVacancySharePersisted={handleSharePersisted}
        onShareThenEmailSimulation={handleShareThenEmailSimulation}
        onBack={() => {
          goView('analista-dashboard');
          setSelectedVacancy(null);
        }}
      />
    );
  }

  if (view === 'analista-dashboard') {
    return withHubBack(
      <VacancyDashboardAnalista
        onVacancyClick={(v) => {
          setSelectedVacancy(v);
          goView('candidates-analista');
        }}
        onVacancySharePersisted={handleSharePersisted}
        onShareThenEmailSimulation={handleShareThenEmailSimulation}
      />
    );
  }

  return withHubBack(
    <VacancyDashboard
      onVacancyClick={(v, opts?: VacancyNavigateOptions) => {
        setSelectedVacancy(v);
        goView('candidates', {
          openHistorialOnMount: Boolean(opts?.openHistorial),
        });
        setHistorialHighlightEventId(opts?.historialEntryId);
      }}
    />
  );
};

export default App;
