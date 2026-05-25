import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  Button,
  Field,
  Typography,
} from 'magneto365.ui';
import './OtpLanding.scss';
import { useOtpTimer } from './hooks/useOtpTimer';
import { useOtpState } from './hooks/useOtpState';

// ─── Mock codes ───────────────────────────────────────────────────────────────

const CODE_SUCCESS = '111111'; // → navigate to /dashboard/vacantes
const CODE_EXPIRED = '222222'; // → expired state
const MAX_ATTEMPTS = 3;

// ─── Types ────────────────────────────────────────────────────────────────────

type ScreenState     = 'otp' | 'blocked';
type ValidationState = 'idle' | 'error' | 'expired';

// ─── Props ────────────────────────────────────────────────────────────────────

export interface OtpLandingProps {
  /** Pre-masked email shown in the subtitle when `rawEmail` is not set. */
  maskedEmail?:    string;
  /** Raw email — will be masked automatically for display (first 2 chars + **** + domain). */
  rawEmail?:       string;
  /** Código de 6 dígitos devuelto al guardar el share; válido además del mock de desarrollo. */
  shareOtpCode?:   string;
  /** Called on successful OTP verification — navigate to /dashboard/vacantes. */
  onSuccess?:      () => void;
  /** Called when the user presses the back arrow. */
  onBack?:         () => void;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

/**
 * Masks an email address: shows first 2 chars of the local part,
 * replaces the rest with asterisks, and appends the full domain.
 */
export function maskEmail(email: string): string {
  const atIndex = email.indexOf('@');
  if (atIndex < 0) return email;
  const local   = email.slice(0, atIndex);
  const domain  = email.slice(atIndex);
  const visible = Math.min(2, local.length);
  const stars   = '*'.repeat(Math.max(4, local.length - visible));
  return `${local.slice(0, visible)}${stars}${domain}`;
}

// ─── Icons (solo currentColor; sin hex en stroke/fill) ───────────────────────

const IconAlertCircle = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Logo (mismo asset que dashboard: `public/branding/magneto-wordmark.png`) ─

const MAGNETO_WORDMARK_SRC = '/branding/magneto-wordmark.png';

const OtpMagnetoLogo = (): JSX.Element => (
  <img
    className="otl__logo-img"
    src={MAGNETO_WORDMARK_SRC}
    alt="Magneto 365"
    width={110}
    decoding="async"
  />
);

// ─── OTP Grid ─────────────────────────────────────────────────────────────────

interface OtpGridProps {
  values:          string[];
  validationState: ValidationState;
  disabled:        boolean;
  inputRefs:       React.MutableRefObject<(HTMLInputElement | null)[]>;
  onChange:        (index: number, value: string) => void;
  onKeyDown:       (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste:         (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

const OtpGrid = ({
  values,
  validationState,
  disabled,
  inputRefs,
  onChange,
  onKeyDown,
  onPaste,
}: OtpGridProps) => {
  const hasFieldError = validationState === 'error' || validationState === 'expired';

  return (
    <div
      className="otl__otp-grid"
      role="group"
      aria-label="Ingresa el código OTP de 6 dígitos"
    >
      {values.map((val, i) => (
        <Field key={i} error={hasFieldError} className="otl__otp-field">
          <Field.Input
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            disabled={disabled}
            onChange={(e) => onChange(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            onPaste={onPaste}
            aria-label={`Dígito ${i + 1} del código`}
            autoComplete={i === 0 ? 'one-time-code' : 'off'}
            size="medium"
          />
        </Field>
      ))}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const OtpLanding = ({
  maskedEmail    = 'us****@ejemplo.com',
  rawEmail,
  shareOtpCode,
  onSuccess,
  onBack,
}: OtpLandingProps) => {
  const displayEmail = rawEmail ? maskEmail(rawEmail) : maskedEmail;

  const initialOtpFromUrl = useMemo(() => {
    const params = new URLSearchParams(globalThis.location?.search ?? '');
    const raw = params.get('code');
    if (!raw) return undefined;
    const digits = raw.replace(/\D/g, '');
    return digits.length === 6 ? digits : undefined;
  }, []);

  const [screen,     setScreen]     = useState<ScreenState>('otp');
  const [validation, setValidation] = useState<ValidationState>('idle');
  const [attempts,   setAttempts]   = useState(0);

  const lastSubmittedCode = useRef<string>('');
  const userHasInteracted = useRef(false);

  const timer = useOtpTimer(screen === 'otp');
  const otp   = useOtpState(6, initialOtpFromUrl);

  const handleVerify = useCallback(
    (code: string) => {
      const shareOk =
        shareOtpCode !== undefined &&
        shareOtpCode.length === 6 &&
        code === shareOtpCode;

      if (code === CODE_SUCCESS || shareOk) {
        onSuccess?.();
        return;
      }

      if (code === CODE_EXPIRED) {
        setValidation('expired');
        return;
      }

      const next = attempts + 1;
      setAttempts(next);

      if (next >= MAX_ATTEMPTS) {
        setValidation('error');
        setScreen('blocked');
      } else {
        setValidation('error');
      }
    },
    [attempts, onSuccess, shareOtpCode]
  );

  useEffect(() => {
    otp.focusFirst();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      userHasInteracted.current &&
      otp.isComplete &&
      validation === 'idle' &&
      otp.code !== lastSubmittedCode.current
    ) {
      lastSubmittedCode.current = otp.code;
      handleVerify(otp.code);
    }
  }, [otp.isComplete, otp.code, validation, handleVerify]);

  const handleOtpChange = useCallback(
    (index: number, value: string) => {
      userHasInteracted.current = true;
      if (validation !== 'idle') {
        setValidation('idle');
        lastSubmittedCode.current = '';
      }
      otp.handleChange(index, value);
    },
    [validation, otp]
  );

  const handleOtpKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      userHasInteracted.current = true;
      if (
        (e.key === 'Backspace' || e.key.length === 1) &&
        validation !== 'idle'
      ) {
        setValidation('idle');
        lastSubmittedCode.current = '';
      }
      otp.handleKeyDown(index, e);
    },
    [validation, otp]
  );

  const handleOtpPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      userHasInteracted.current = true;
      otp.handlePaste(e);
    },
    [otp]
  );

  const handleResend = useCallback(() => {
    userHasInteracted.current = false;
    otp.reset();
    timer.reset();
    setValidation('idle');
    lastSubmittedCode.current = '';
    otp.focusFirst();
  }, [otp, timer]);

  const canResend = timer.isExpired || validation === 'expired';

  if (screen === 'blocked') {
    return (
      <div className="otl" role="main">
        <div className="otl__card otl__card--blocked" role="region" aria-live="assertive">
          <div className="otl__logo-host">
            <OtpMagnetoLogo />
          </div>
          <div className="otl__state-icon">
            <IconAlertCircle />
          </div>
          <Typography.Title level={1}>
            Enlace inhabilitado temporalmente
          </Typography.Title>
          <Typography.Paragraph>
            Por motivos de seguridad, tu acceso ha sido suspendido temporalmente tras{' '}
            <strong>{MAX_ATTEMPTS} intentos fallidos</strong>. Solicita un nuevo enlace con el
            analista de selección para recuperar el acceso.
          </Typography.Paragraph>
          <Button variant="grey" fullWidth onClick={onBack} type="button">
            Entendido / Cerrar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="otl" role="main">
      <div className="otl__card" role="region" aria-live="polite" aria-atomic="false">

        <div className="otl__logo-host">
          <OtpMagnetoLogo />
        </div>

        <div className="otl__header">
          <Typography.Title level={1}>Código de confirmación</Typography.Title>
        </div>

        <Typography.Paragraph>
          Ingrese el código enviado al candidato para habilitar la edición de su perfil.{' '}
          {displayEmail && (
            <Typography.Text color="blue-light-500" strong>
              {displayEmail}
            </Typography.Text>
          )}
        </Typography.Paragraph>

        <div className="otl__section">
          <Typography.Text>Ingrese el código de verificación:</Typography.Text>

          <OtpGrid
            values={otp.values}
            validationState={validation}
            disabled={false}
            inputRefs={otp.inputRefs}
            onChange={handleOtpChange}
            onKeyDown={handleOtpKeyDown}
            onPaste={handleOtpPaste}
          />

          {validation === 'error' && (
            <Typography.Paragraph color="red-200" role="alert">
              El código es incorrecto, inténtelo de nuevo.
              {attempts < MAX_ATTEMPTS && (
                <Typography.Text color="red-200">
                  {' '}Te quedan <strong>{MAX_ATTEMPTS - attempts}</strong>{' '}
                  {MAX_ATTEMPTS - attempts === 1 ? 'intento' : 'intentos'}.
                </Typography.Text>
              )}
            </Typography.Paragraph>
          )}
          {validation === 'expired' && (
            <Typography.Paragraph color="yellow-300" role="alert">
              El código ha expirado. Por favor, envíe un nuevo código.
            </Typography.Paragraph>
          )}
        </div>

        <div className="otl__timer-row">
          <Typography.Text color="grey-600">
            ¿El candidato aún no ha recibido el código?
            {!timer.isExpired && validation !== 'expired' ? (
              <>
                {' '}
                Reenviar código en: <strong>{timer.formattedTime}</strong>
              </>
            ) : (
              <> Ya puede reenviar el código.</>
            )}
          </Typography.Text>
        </div>

        <div className="otl__actions">
          <Button
            type="button"
            variant="blue"
            fullWidth
            disabled={!canResend}
            onClick={canResend ? handleResend : undefined}
            aria-disabled={!canResend}
          >
            Volver a enviar código
          </Button>
        </div>

        {import.meta.env.DEV && (
          <p className="otl__dev-hint" role="note">
            Desarrollo: <strong>111111</strong> simula verificación correcta; <strong>222222</strong> simula código
            expirado. URL con código: <code className="otl__dev-hint-code">?view=otp&amp;code=123456</code>
          </p>
        )}

      </div>
    </div>
  );
};

export default OtpLanding;
