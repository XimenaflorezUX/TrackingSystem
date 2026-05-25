import React from 'react';
import styles from '../../AlertsPanel.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var AlertsPanelList = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("ul", { className: cx('alerts-panel__list', className) }, children);
};

export { AlertsPanelList };
//# sourceMappingURL=AlertsPanelList.component.js.map
