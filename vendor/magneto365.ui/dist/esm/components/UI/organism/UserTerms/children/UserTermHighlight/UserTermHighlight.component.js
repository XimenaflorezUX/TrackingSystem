import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './UserTermHighlight.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("h4", { className: cx('user-term-highlight', className) }, children);
};
var UserTermHighlight = Component;

export { UserTermHighlight };
//# sourceMappingURL=UserTermHighlight.component.js.map
