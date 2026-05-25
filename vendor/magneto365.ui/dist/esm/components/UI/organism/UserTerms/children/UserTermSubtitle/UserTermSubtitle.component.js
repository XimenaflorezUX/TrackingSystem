import React from 'react';
import styles from './UserTermSubtitle.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("h3", { className: cx('user-term-subtitle', className) }, children);
};
var UserTermSubTitle = Component;

export { UserTermSubTitle };
//# sourceMappingURL=UserTermSubtitle.component.js.map
