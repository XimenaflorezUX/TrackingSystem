import React from 'react';
import styles from './ApplicationTitle.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: cx('title-summary', className) }, children);
};
var ApplicationTitle = Component;

export { ApplicationTitle };
//# sourceMappingURL=ApplicationTitle.component.js.map
