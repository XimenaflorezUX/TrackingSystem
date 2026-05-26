import { Typography } from 'magneto365.ui';
import { brandingAssetUrl } from '@/utils/brandingAssetUrl';
import './DashboardShellHeader.scss';

export interface DashboardShellHeaderProps {
  onOpenNotifications: () => void;
  /** Correo del cliente interno con acceso al tracking (sin cuenta Magneto). */
  userEmail: string;
}

const IconBell = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const IconProfile = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconChevronDown = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MAGNETO_WORDMARK_SRC = brandingAssetUrl('magneto365-ai-wordmark-dashboard.png');

const MagnetoWordmark = (): JSX.Element => (
  <img
    className="vd-shell-header__logo-mark"
    src={MAGNETO_WORDMARK_SRC}
    alt=""
    width={140}
    height={28}
    decoding="async"
  />
);

const DashboardShellHeader = ({
  onOpenNotifications,
  userEmail,
}: DashboardShellHeaderProps) => (
  <header className="vd-shell-header" role="banner">
    <div className="vd-shell-header__left">
      <div className="vd-shell-header__logo" aria-label="Magneto">
        <MagnetoWordmark />
      </div>
    </div>

    <div className="vd-shell-header__right">
      <button
        type="button"
        className="vd-shell-header__icon-btn"
        onClick={onOpenNotifications}
        aria-label="Consulte sus notificaciones"
      >
        <IconBell />
      </button>

      <button
        type="button"
        className="vd-shell-header__user"
        aria-label={`Sesión del cliente interno: ${userEmail}`}
      >
        <span className="vd-shell-header__user-avatar" aria-hidden>
          <IconProfile />
        </span>
        <span className="vd-shell-header__user-text">
          <Typography.Text size="sm" color="grey-50" strong className="vd-shell-header__user-line">
            {userEmail}
          </Typography.Text>
        </span>
        <span className="vd-shell-header__chevron" aria-hidden>
          <IconChevronDown />
        </span>
      </button>
    </div>
  </header>
);

export default DashboardShellHeader;
