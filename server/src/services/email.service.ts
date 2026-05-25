import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';
import type { SentMessageInfo, Transporter } from 'nodemailer';
import type { TestAccount } from 'nodemailer';
import type { VacancyShareRecord } from '../types/vacancy.js';

const DEFAULT_NOTIFICATION_TO = 'ximenamarilla11@gmail.com';

/** Raíz del monorepo (TrackingSystem/), desde `server/src/services/`. */
function getProjectRoot(): string {
  return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
}

/**
 * Logo del dashboard (`/branding/magneto-wordmark.png`) embebido en base64 si existe;
 * si no, marca compacta en SVG (colores Magneto: #1a324c / #00a7e1).
 */
function getMagnetoLogoSrc(): string {
  const pngPath = path.join(getProjectRoot(), 'public', 'branding', 'magneto-wordmark.png');
  if (existsSync(pngPath)) {
    const b64 = readFileSync(pngPath).toString('base64');
    return `data:image/png;base64,${b64}`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="36" viewBox="0 0 200 36" role="img" aria-label="Magneto"><text x="0" y="27" font-family="Segoe UI,Arial,sans-serif" font-size="22" font-weight="700"><tspan fill="#00a7e1">magneto</tspan></text></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg, 'utf8').toString('base64')}`;
}

/** Igual que `OtpLanding.maskEmail` en el front. */
function maskEmail(email: string): string {
  const atIndex = email.indexOf('@');
  if (atIndex < 0) return email;
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const visible = Math.min(2, local.length);
  const stars = '*'.repeat(Math.max(4, local.length - visible));
  return `${local.slice(0, visible)}${stars}${domain}`;
}

let etherealAccountPromise: Promise<TestAccount> | null = null;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stagesForEmail(record: VacancyShareRecord): { id: string; label: string }[] {
  if (record.visibleStages && record.visibleStages.length > 0) {
    return record.visibleStages;
  }
  return record.visibleStageIds.map((id) => ({ id, label: id }));
}

function otpDigits(code: string): string[] {
  const clean = code.replace(/\D/g, '').padStart(6, '0').slice(-6);
  return clean.split('');
}

function buildShareOtpEmailHtml(record: VacancyShareRecord): string {
  const logoSrc = getMagnetoLogoSrc();
  const primaryEmail = record.recipientEmails[0] ?? '';
  const masked = maskEmail(primaryEmail);
  const digits = otpDigits(record.confirmationCode ?? '000000');
  const stageList = stagesForEmail(record);

  const otpCells = digits
    .map(
      (d) => `
      <td style="width:16.66%;padding:0 4px;vertical-align:middle;">
        <div style="height:53px;line-height:53px;text-align:center;border:1px solid #c2c8cf;border-radius:12px;background:#ffffff;font-size:28px;font-weight:400;color:#292f37;font-family:Lato,Segoe UI,Arial,sans-serif;">${escapeHtml(d)}</div>
      </td>`,
    )
    .join('');

  const stagesRows = stageList
    .map(
      (s, i) => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e0e4e7;font-size:13px;color:#667688;width:32px;">${i + 1}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e0e4e7;font-size:14px;color:#292f37;font-weight:600;">${escapeHtml(s.label)}</td>
    </tr>`,
    )
    .join('');

  const recipients = record.recipientEmails.map((e) => `<li style="margin:3px 0;font-size:14px;color:#292f37;">${escapeHtml(e)}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Código de confirmación</title></head>
<body style="margin:0;padding:0;background:#f0f1f3;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f0f1f3;padding:24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:700px;background:#ffffff;border-radius:24px;overflow:hidden;">
          <tr>
            <td style="padding:32px 32px 8px;">
              <img src="${logoSrc}" alt="Magneto" width="200" height="36" style="display:block;height:auto;max-width:200px;border:0;outline:none;text-decoration:none;"/>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="width:28px;vertical-align:middle;color:#292f37;font-size:18px;line-height:1;">&#8592;</td>
                  <td style="vertical-align:middle;">
                    <h1 style="margin:0;font-size:24px;line-height:28px;font-weight:700;color:#292f37;font-family:Lato,Segoe UI,Arial,sans-serif;">Código de confirmación</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 0;font-size:16px;line-height:20px;color:#292f37;font-family:Lato,Segoe UI,Arial,sans-serif;">
              <p style="margin:0;">Se ha enviado un código de confirmación relacionado con la vacante <strong>${escapeHtml(record.vacancyTitle)}</strong> a <strong>${escapeHtml(masked)}</strong>. Por favor, revise su bandeja de entrada y encuéntrelo utilizando la palabra clave <strong>«Magneto»</strong>.</p>
              <p style="margin:16px 0 0;font-size:15px;line-height:20px;color:#292f37;">Ingrese el código enviado al candidato para habilitar la edición de su perfil en TrackingSystem.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 0;">
              <p style="margin:0 0 12px;font-size:16px;line-height:20px;font-weight:700;color:#667688;font-family:Lato,Segoe UI,Arial,sans-serif;">Escriba el código aquí:</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 0;">
                <tr>${otpCells}</tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 0;font-size:16px;line-height:20px;color:#667688;font-family:Lato,Segoe UI,Arial,sans-serif;">
              <p style="margin:0;font-weight:700;">¿Aún no ha recibido el código?</p>
              <p style="margin:8px 0 0;">Revise la carpeta de spam o busque por <strong>Magneto</strong>. El reenvío desde la app lo gestiona su analista en TrackingSystem.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 32px;">
              <div style="display:inline-block;padding:11px 24px;background:#e0e4e7;border-radius:30px;color:#a3adb8;font-size:16px;font-weight:700;font-family:Lato,Segoe UI,Arial,sans-serif;">Volver a enviar código</div>
              <p style="margin:12px 0 0;font-size:12px;color:#8591a0;">Este botón es solo referencia visual; el reenvío se realiza desde la aplicación.</p>
            </td>
          </tr>
          <tr>
            <td style="height:1px;background:#e0e4e7;padding:0 32px;"></td>
          </tr>
          <tr>
            <td style="padding:24px 32px 32px;">
              <p style="margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:#8591a0;font-weight:700;">Resumen del acceso compartido</p>
              <p style="margin:0 0 8px;font-size:15px;color:#292f37;"><strong>Vacante:</strong> ${escapeHtml(record.vacancyTitle)}</p>
              <p style="margin:0 0 8px;font-size:14px;color:#47535f;"><strong>ID:</strong> ${escapeHtml(record.vacancyId)}</p>
              <p style="margin:0 0 8px;font-size:14px;color:#47535f;"><strong>Destinatarios:</strong></p>
              <ul style="margin:0 0 16px;padding-left:20px;">${recipients}</ul>
              <p style="margin:0 0 8px;font-size:14px;color:#47535f;"><strong>Etapas visibles</strong></p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e4e7;border-radius:8px;overflow:hidden;">
                <tbody>${stagesRows}</tbody>
              </table>
              <p style="margin:16px 0 0;font-size:12px;color:#8591a0;">Registro: ${escapeHtml(record.createdAt)} · ${escapeHtml(record.id)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildShareOtpPlainText(record: VacancyShareRecord): string {
  const masked = maskEmail(record.recipientEmails[0] ?? '');
  const code = record.confirmationCode ?? '000000';
  const stages = stagesForEmail(record)
    .map((s) => s.label)
    .join(' → ');
  return [
    'Código de confirmación — Magneto / TrackingSystem',
    '',
    `Vacante: ${record.vacancyTitle}`,
    `Código (6 dígitos): ${code}`,
    '',
    `Mensaje enviado a (enmascarado): ${masked}`,
    'Busque en su bandeja la palabra clave: Magneto',
    '',
    'Etapas visibles:',
    stages,
    '',
    `Destinatarios: ${record.recipientEmails.join(', ')}`,
    `Registro id: ${record.id}`,
  ].join('\n');
}

async function getOrCreateEtherealAccount(): Promise<TestAccount> {
  if (etherealAccountPromise === null) {
    etherealAccountPromise = nodemailer.createTestAccount().then((account) => {
      console.info('[email] Sin SMTP_USER/SMTP_PASS en .env → usando Ethereal.email (cuenta de prueba automática).');
      console.info(`[email]   usuario: ${account.user}`);
      console.info(`[email]   contraseña (solo para depuración): ${account.pass}`);
      return account;
    });
  }
  return etherealAccountPromise;
}

interface MailTransportContext {
  transporter: Transporter;
  from: string;
  isEthereal: boolean;
}

async function resolveMailTransport(): Promise<MailTransportContext> {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (user && pass) {
    const host = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT ?? 587);
    const secure = process.env.SMTP_SECURE === 'true';
    const from = process.env.SMTP_FROM?.trim() || `TrackingSystem <${user}>`;
    return {
      transporter: nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      }),
      from,
      isEthereal: false,
    };
  }

  const account = await getOrCreateEtherealAccount();
  const from =
    process.env.SMTP_FROM?.trim() || `TrackingSystem <${account.user}>`;
  return {
    transporter: nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: { user: account.user, pass: account.pass },
    }),
    from,
    isEthereal: true,
  };
}

/**
 * Correo estilo pantalla OtpLanding + resumen de vacante compartida.
 * SMTP real si hay credenciales; si no, Ethereal (vista previa en consola).
 */
export async function sendVacancyEmail(record: VacancyShareRecord): Promise<void> {
  try {
    const { transporter, from, isEthereal } = await resolveMailTransport();
    const to = process.env.SMTP_NOTIFICATION_TO?.trim() || DEFAULT_NOTIFICATION_TO;

    const subject = `[Magneto · TrackingSystem] Código de confirmación · ${record.vacancyTitle}`;

    const info: SentMessageInfo = await transporter.sendMail({
      from,
      to,
      subject,
      text: buildShareOtpPlainText(record),
      html: buildShareOtpEmailHtml(record),
    });

    if (isEthereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (typeof previewUrl === 'string' && previewUrl.length > 0) {
        console.info(`[email] (Ethereal) Vista previa del mensaje: ${previewUrl}`);
      } else {
        console.info('[email] (Ethereal) Mensaje enviado (sin URL de vista previa disponible).');
      }
    }
  } catch (err) {
    console.error('[email] send failed', err);
    throw new Error('EMAIL_SEND_FAILED');
  }
}
