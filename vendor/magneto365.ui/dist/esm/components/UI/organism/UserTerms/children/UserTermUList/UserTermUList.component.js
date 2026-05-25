import React from 'react';
import styles from './UserTermUList.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("ul", { className: cx('user-term-u-list', className) }, children);
};
var UserTermUList = Component;

export { UserTermUList };
//# sourceMappingURL=UserTermUList.component.js.map
