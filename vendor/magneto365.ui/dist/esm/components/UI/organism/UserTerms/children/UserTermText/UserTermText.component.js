import React from 'react';
import styles from './UserTermText.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("p", { className: cx('user-term-text', className) }, children);
};
var UserTermText = Component;

export { UserTermText };
//# sourceMappingURL=UserTermText.component.js.map
