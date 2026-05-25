import React from 'react';
import styles from './UserTermTitle.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("h2", { className: cx('user-term-title', className) }, children);
};
var UserTermTitle = Component;

export { UserTermTitle };
//# sourceMappingURL=UserTermTitle.component.js.map
