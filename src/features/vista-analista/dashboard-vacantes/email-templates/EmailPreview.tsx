import './EmailPreview.scss';

// ─── Props ────────────────────────────────────────────────────────────────────

interface EmailPreviewProps {
  onOpenOtp: () => void;
}

// ─── Sample values (replace with dynamic data in production) ──────────────────

const MAGNETO_WORDMARK_SRC = '/branding/magneto-wordmark.png';

const SAMPLE_DATA = {
  recipientFirstName: 'Ximena',
  vacancyName:        'Auxiliar de Enfermería — Sede Cartagena',
  companyName:        '@Nombreempresa',
  analystName:        'Ana Rodríguez · Analista de Selección',
  year:               new Date().getFullYear(),
};

// ─── Component ────────────────────────────────────────────────────────────────

const EmailPreview = ({ onOpenOtp }: EmailPreviewProps) => (
  <div className="ep">
    <div className="ep__canvas">
      <div className="ep__email">

        {/* Preheader + wordmark (plantilla transaccional) */}
        <div className="ep__preheader" aria-hidden="true" />
        <div className="ep__wordmark-row">
          <img
            className="ep__wordmark"
            src={MAGNETO_WORDMARK_SRC}
            alt="Magneto"
            width={157}
            height={40}
            decoding="async"
          />
        </div>

        {/* Body */}
        <div className="ep__body">
          <p className="ep__greeting">
            ¡Hola! {SAMPLE_DATA.recipientFirstName}
          </p>

          <p className="ep__intro">
            Te han invitado a realizar el seguimiento en tiempo real de la siguiente
            vacante activa en nuestro portal de atracción de talento:
          </p>

          {/* Vacancy card */}
          <div className="ep__vacancy-card">
            <p className="ep__vacancy-name">{SAMPLE_DATA.vacancyName}</p>
            <p className="ep__vacancy-company">{SAMPLE_DATA.companyName}</p>
            <div className="ep__vacancy-meta">
              <p className="ep__vacancy-analyst">{SAMPLE_DATA.analystName}</p>
              <p className="ep__vacancy-sublabel">Analista responsable</p>
            </div>
          </div>

          {/* CTA — simulates the email link → navigates to OTP landing (HU 2) */}
          <div className="ep__cta-wrapper">
            <button
              className="ep__cta-btn"
              onClick={onOpenOtp}
              type="button"
              aria-label="Simular clic en CTA: abrir Landing de Validación OTP (HU 2)"
            >
              Ver tracking de cliente interno
            </button>
          </div>

          {/* Security block */}
          <div className="ep__security">
            <div className="ep__security-icon" aria-hidden="true">🔒</div>
            <div className="ep__security-content">
              <p className="ep__security-title">Acceso con doble validación</p>
              <p className="ep__security-text">
                Por tu seguridad y la confidencialidad de la información, el acceso
                requiere un proceso de doble validación. Te enviaremos un código
                temporal (OTP) de 6 dígitos a tu correo cuando ingreses al enlace.{' '}
                <strong>No necesitas crear una contraseña.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ep__footer">
          <img
            className="ep__footer-wordmark"
            src={MAGNETO_WORDMARK_SRC}
            alt=""
            width={120}
            height={31}
            decoding="async"
          />
          <p className="ep__footer-tagline">
            Plataforma oficial de reclutamiento de grandes empresas del país.
          </p>
          <p className="ep__footer-text">
            Este es un correo automático, por favor no respondas a este mensaje.
          </p>
          <p className="ep__footer-text">
            Este enlace es único, personal e intransferible. No lo compartas con otras personas.
          </p>
          <p className="ep__footer-legal">
            © {SAMPLE_DATA.year} Magneto Global. Vinculado a la red de prestadores del Servicio
            Público de Empleo. Autorizado por la Unidad Administrativa Especial del Servicio
            Público de Empleo según resolución No. 0333/2022 y resolución No. 0070/2024.
          </p>
          <p className="ep__footer-unsub">
            Puedes dejar de recibir estos correos haciendo{' '}
            <a className="ep__footer-unsub-link" href="#">
              click aquí
            </a>
            .
          </p>
        </div>

      </div>
    </div>
  </div>
);

export default EmailPreview;
