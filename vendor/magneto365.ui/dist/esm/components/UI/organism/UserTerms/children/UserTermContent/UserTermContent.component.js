import React from 'react';
import styles from './UserTermContent.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: cx('user-term-content', className) }, children);
};
var UserTermContent = Component;

export { UserTermContent };
//# sourceMappingURL=UserTermContent.component.js.map
