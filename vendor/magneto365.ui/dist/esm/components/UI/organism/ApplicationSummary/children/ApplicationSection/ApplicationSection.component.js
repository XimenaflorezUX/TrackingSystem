import React from 'react';
import styles from './ApplicationSection.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var _b = _a.aligned, aligned = _b === void 0 ? 'start' : _b, className = _a.className, children = _a.children;
    return React.createElement("div", { className: cx('section-summary', aligned, className) }, children);
};
var ApplicationSection = Component;

export { ApplicationSection };
//# sourceMappingURL=ApplicationSection.component.js.map
