import './NavigationHub.scss';

const MAGNETO365_AI_LOGO_SRC = '/branding/magneto365-ai-wordmark.png';
const ANALISTA_ICON_SRC = '/branding/analista-icon.png';
const CLIENTE_INTERNO_ICON_SRC = '/branding/cliente-interno-icon.png';

export interface NavigationHubProps {
  onNavigateAnalistaDashboard: () => void;
  onNavigateAnalistaCandidates: () => void;
  onNavigateAnalistaShare: () => void;
  onNavigateAnalistaEmail: () => void;
  onNavigateClienteEmail: () => void;
  onNavigateClienteOtp: () => void;
  onNavigateClienteDashboard: () => void;
  onNavigateClienteCandidates: () => void;
  onNavigateClienteComments: () => void;
}

interface HubLinkProps {
  title: string;
  description: string;
  onClick: () => void;
}

const HubLink = ({ title, description, onClick }: HubLinkProps) => (
  <button type="button" className="nav-hub__link" onClick={onClick}>
    <span className="nav-hub__link-title">{title}</span>
    <span className="nav-hub__link-desc">{description}</span>
  </button>
);

const NavigationHub = ({
  onNavigateAnalistaDashboard,
  onNavigateAnalistaCandidates,
  onNavigateAnalistaShare,
  onNavigateAnalistaEmail,
  onNavigateClienteEmail,
  onNavigateClienteOtp,
  onNavigateClienteDashboard,
  onNavigateClienteCandidates,
  onNavigateClienteComments,
}: NavigationHubProps) => (
  <div className="nav-hub">
    <header className="nav-hub__header">
      <img
        className="nav-hub__logo"
        src={MAGNETO365_AI_LOGO_SRC}
        alt="Magneto 365 AI"
        width={220}
        height={40}
        decoding="async"
      />
      <h1 className="nav-hub__title">Tracking de proceso de selección</h1>
      <p className="nav-hub__intro">
        Seleccione una vista para iniciar la demo. Dentro de cada pantalla puede explorar subprocesos
        (perfil, historial, modals). Use el botón <strong>Menú principal</strong> para regresar aquí.
      </p>
    </header>

    <div className="nav-hub__grid">
      <section className="nav-hub__section" aria-labelledby="nav-hub-analista-heading">
        <div className="nav-hub__section-head">
          <h2 id="nav-hub-analista-heading" className="nav-hub__section-title">
            <img
              className="nav-hub__section-icon"
              src={ANALISTA_ICON_SRC}
              width={28}
              height={28}
              alt=""
              aria-hidden="true"
            />
            <span>Vista analista</span>
          </h2>
          <p className="nav-hub__section-desc">Operación de vacantes y configuración de accesos.</p>
        </div>
        <div className="nav-hub__links">
          <HubLink
            title="Dashboard de vacantes"
            description="Listado, filtros y acciones sobre vacantes."
            onClick={onNavigateAnalistaDashboard}
          />
          <HubLink
            title="Pipeline / candidatos"
            description="Etapas del proceso y tabla de candidatos."
            onClick={onNavigateAnalistaCandidates}
          />
          <HubLink
            title="Compartir vacante"
            description="Modal de permisos para el cliente interno."
            onClick={onNavigateAnalistaShare}
          />
          <HubLink
            title="Simulación de correo"
            description="Vista previa del email tras Guardar y enviar."
            onClick={onNavigateAnalistaEmail}
          />
        </div>
      </section>

      <section className="nav-hub__section" aria-labelledby="nav-hub-cliente-heading">
        <div className="nav-hub__section-head">
          <h2 id="nav-hub-cliente-heading" className="nav-hub__section-title">
            <img
              className="nav-hub__section-icon"
              src={CLIENTE_INTERNO_ICON_SRC}
              width={28}
              height={28}
              alt=""
              aria-hidden="true"
            />
            <span>Vista cliente interno</span>
          </h2>
          <p className="nav-hub__section-desc">
            Solicitante de la vacante: acceso según permisos configurados en la modal de compartir.
          </p>
        </div>
        <div className="nav-hub__links">
          <HubLink
            title="Correo de invitación"
            description="Email con resumen de accesos y botón hacia OTP."
            onClick={onNavigateClienteEmail}
          />
          <HubLink
            title="OTP — código de acceso"
            description="Validación del código de confirmación."
            onClick={onNavigateClienteOtp}
          />
          <HubLink
            title="Dashboard de vacantes"
            description="Vacantes compartidas con el líder de área."
            onClick={onNavigateClienteDashboard}
          />
          <HubLink
            title="Pipeline / candidatos"
            description="Listado de candidatos según etapas autorizadas."
            onClick={onNavigateClienteCandidates}
          />
          <HubLink
            title="Perfil — tab Comentarios"
            description="Hoja de vida con panel de comentarios del cliente interno."
            onClick={onNavigateClienteComments}
          />
        </div>
      </section>
    </div>
  </div>
);

export default NavigationHub;
