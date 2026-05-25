import './HubBackButton.scss';

export interface HubBackButtonProps {
  onClick: () => void;
}

const HubBackButton = ({ onClick }: HubBackButtonProps) => (
  <button type="button" className="hub-back" onClick={onClick} aria-label="Volver al menú principal">
    <span className="hub-back__icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </span>
    <span className="hub-back__label">Menú principal</span>
  </button>
);

export default HubBackButton;
