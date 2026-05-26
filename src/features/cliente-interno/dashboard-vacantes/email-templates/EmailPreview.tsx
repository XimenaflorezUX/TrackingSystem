import { brandingAssetUrl } from '@/utils/brandingAssetUrl';
import './EmailPreview.scss';

// ─── Props ────────────────────────────────────────────────────────────────────

/** Resumen del acceso guardado (misma información que verá aplicada el cliente interno). */
export interface EmailShareAccessSummary {
  includeSanitizedCv: boolean;
  includeContactData: boolean;
  feedbackGeneralEnabled: boolean;
  feedbackRatingEnabled: boolean;
  feedbackStageDecisionEnabled: boolean;
  visibilityScopeLabel: string;
  visibleStagesLine: string;
}

interface EmailPreviewProps {
  onOpenOtp: () => void;
  recipientFirstName?: string;
  vacancyName?: string;
  companyName?: string;
  analystName?: string;
  recipientEmails?: readonly string[];
  accessSummary?: EmailShareAccessSummary;
}

// ─── Sample values (replace with dynamic data in production) ──────────────────

const MAGNETO_WORDMARK_SRC = brandingAssetUrl('magneto-wordmark.png');

const SAMPLE_DATA = {
  recipientFirstName: 'Ximena',
  vacancyName:        'Auxiliar de Enfermería — Sede Cartagena',
  companyName:        '@Nombreempresa',
  analystName:        'Ana Rodríguez · Analista de Selección',
  year:               new Date().getFullYear(),
};

function formatSiNo(value: boolean): string {
  return value ? 'Sí' : 'No';
}

// ─── Component ────────────────────────────────────────────────────────────────

const EmailPreview = ({
  onOpenOtp,
  recipientFirstName,
  vacancyName,
  companyName,
  analystName,
  recipientEmails,
  accessSummary,
}: EmailPreviewProps): JSX.Element => {
  const data = {
    recipientFirstName: recipientFirstName ?? SAMPLE_DATA.recipientFirstName,
    vacancyName: vacancyName ?? SAMPLE_DATA.vacancyName,
    companyName: companyName ?? SAMPLE_DATA.companyName,
    analystName: analystName ?? SAMPLE_DATA.analystName,
    year: SAMPLE_DATA.year,
  };

  return (
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
            ¡Hola! {data.recipientFirstName}
          </p>

          <p className="ep__intro">
            Te han invitado a realizar el seguimiento en tiempo real de la siguiente
            vacante activa en nuestro portal de atracción de talento:
          </p>

          {recipientEmails !== undefined && recipientEmails.length > 0 && (
            <p className="ep__recipients">
              <span className="ep__recipients-label">Enviado a:</span>{' '}
              {recipientEmails.join(', ')}
            </p>
          )}

          {/* Vacancy card */}
          <div className="ep__vacancy-card">
            <p className="ep__vacancy-name">{data.vacancyName}</p>
            <p className="ep__vacancy-company">{data.companyName}</p>
            <div className="ep__vacancy-meta">
              <p className="ep__vacancy-analyst">{data.analystName}</p>
              <p className="ep__vacancy-sublabel">Analista responsable</p>
            </div>
          </div>

          {accessSummary !== undefined && (
            <div className="ep__summary" role="region" aria-label="Resumen del acceso compartido">
              <p className="ep__summary-title">Tu acceso incluye</p>
              <ul className="ep__summary-list">
                <li className="ep__summary-item">
                  <span className="ep__summary-key">Alcance de etapas</span>
                  <span className="ep__summary-val">{accessSummary.visibilityScopeLabel}</span>
                </li>
                <li className="ep__summary-item">
                  <span className="ep__summary-key">Etapas visibles</span>
                  <span className="ep__summary-val">{accessSummary.visibleStagesLine}</span>
                </li>
                <li className="ep__summary-item">
                  <span className="ep__summary-key">CV cargada en Magneto</span>
                  <span className="ep__summary-val">{formatSiNo(accessSummary.includeSanitizedCv)}</span>
                </li>
                <li className="ep__summary-item">
                  <span className="ep__summary-key">Datos de contacto, correo y teléfono</span>
                  <span className="ep__summary-val">{formatSiNo(accessSummary.includeContactData)}</span>
                </li>
                <li className="ep__summary-item">
                  <span className="ep__summary-key">Comentarios generales en el perfil</span>
                  <span className="ep__summary-val">{formatSiNo(accessSummary.feedbackGeneralEnabled)}</span>
                </li>
                <li className="ep__summary-item">
                  <span className="ep__summary-key">Valoración cualitativa del candidato</span>
                  <span className="ep__summary-val">{formatSiNo(accessSummary.feedbackRatingEnabled)}</span>
                </li>
                <li className="ep__summary-item">
                  <span className="ep__summary-key">Decisión de avance o descarte del candidato</span>
                  <span className="ep__summary-val">{formatSiNo(accessSummary.feedbackStageDecisionEnabled)}</span>
                </li>
              </ul>
            </div>
          )}

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
            © {data.year} Magneto Global. Vinculado a la red de prestadores del Servicio
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
};

export default EmailPreview;
