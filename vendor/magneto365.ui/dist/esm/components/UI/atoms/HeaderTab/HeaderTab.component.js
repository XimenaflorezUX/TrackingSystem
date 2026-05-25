import React from 'react';
import styles from './HeaderTab.modules.scss.js';
import { Badge } from '../Badge/Badge.component.js';

var Component = function (_a) {
    var tabType = _a.tabType, tabText = _a.tabText, url = _a.url, isActive = _a.isActive, _b = _a.count, count = _b === void 0 ? 0 : _b;
    var TabLink = tabType === 'tabOption' ? url : '';
    return (React.createElement(React.Fragment, null, tabType === 'tabTitle' ? (React.createElement("div", { className: styles.headerTabComponent, "data-tab-type": "tabTitle" },
        count > 0 && React.createElement(Badge, { number: count, className: styles['headerTabComponent__count'] }),
        React.createElement("p", { className: styles['headerTabComponent__text'] }, tabText))) : (React.createElement("a", { className: styles.headerTabComponent, href: TabLink, "data-tab-type": "tabOption", "data-is-active": isActive },
        count > 0 && React.createElement(Badge, { number: count, className: styles['headerTabComponent__count'] }),
        React.createElement("p", { className: styles['headerTabComponent__text'] }, tabText)))));
};
/**
 * UI Atom component for HeaderTab
 */
var HeaderTab = Component;

export { HeaderTab };
//# sourceMappingURL=HeaderTab.component.js.map
