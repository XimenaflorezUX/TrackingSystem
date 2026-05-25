import './DashboardAppRail.scss';

export interface DashboardAppRailNavItem {
  id: string;
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

export interface DashboardAppRailProps {
  isExpanded: boolean;
  onToggleMenu: () => void;
  primaryItems: DashboardAppRailNavItem[];
  secondaryItems: DashboardAppRailNavItem[];
}

const DashboardAppRail = ({
  isExpanded,
  onToggleMenu,
  primaryItems,
  secondaryItems,
}: DashboardAppRailProps) => {
  const rootClass = ['vd-rail', isExpanded ? 'vd-rail--expanded' : ''].filter(Boolean).join(' ');

  const renderItem = (item: DashboardAppRailNavItem) => (
    <button
      key={item.id}
      type="button"
      className={`vd-rail__item${item.isActive ? ' vd-rail__item--active' : ''}`}
      aria-label={item.label}
      aria-current={item.isActive ? 'page' : undefined}
    >
      <span className="vd-rail__item-indicator" aria-hidden />
      <span className="vd-rail__item-icon">{item.icon}</span>
      {isExpanded && <span className="vd-rail__item-label">{item.label}</span>}
    </button>
  );

  return (
    <aside className={rootClass} aria-label="Navegación principal del portal">
      <div className="vd-rail__top">
        <button
          type="button"
          className="vd-rail__menu-btn"
          onClick={onToggleMenu}
          aria-label="Abrir o cerrar el menú lateral"
          aria-expanded={isExpanded}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <div className="vd-rail__groups">
        <div className="vd-rail__group" role="list">
          {primaryItems.map(renderItem)}
        </div>

        <div className="vd-rail__group">
          <div className="vd-rail__divider" aria-hidden>
            <span className="vd-rail__divider-line" />
          </div>
          {secondaryItems.map(renderItem)}
        </div>
      </div>

      <div className="vd-rail__footer">
        <div className="vd-rail__flag-wrap">
          <span className="vd-rail__flag" role="img" aria-label="Mercado: Colombia">
            🇨🇴
          </span>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAppRail;
