import React from 'react';
import styles from './AlertJobStatusContainer.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var AlertJobStatusContainer = function (_a) {
    var className = _a.className, children = _a.children;
    return React.createElement("div", { className: cx('alert-job__content', className) }, children);
};

export { AlertJobStatusContainer };
//# sourceMappingURL=AlertJobStatusContainer.component.js.map
