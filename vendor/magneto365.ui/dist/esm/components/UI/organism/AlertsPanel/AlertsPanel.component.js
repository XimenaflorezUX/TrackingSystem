import React from 'react';
import styles from './AlertsPanel.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { AlertsPanelList } from './children/AlertsPanelList/AlertsPanelList.component.js';
import { AlertsPanelItem } from './children/AlertsPanelItem/AlertsPanelItem.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var title = _a.title, children = _a.children, className = _a.className;
    return (React.createElement("div", { className: cx('alerts-panel', className) },
        React.createElement("h2", { className: cx('alerts-panel__title', className) }, title),
        children));
};
var AlertsPanel = Object.assign(Component, {
    List: AlertsPanelList,
    Item: AlertsPanelItem
});

export { AlertsPanel };
//# sourceMappingURL=AlertsPanel.component.js.map
