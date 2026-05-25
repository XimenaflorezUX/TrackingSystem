import React from 'react';
import styles from './JobSuggestedSection.module.scss.js';
import { classNames } from '../../../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var _b = _a.aligned, aligned = _b === void 0 ? 'start' : _b, className = _a.className, children = _a.children, _c = _a.direction, direction = _c === void 0 ? 'row' : _c;
    return React.createElement("div", { className: cx('section', aligned, direction, className) }, children);
};
var JobSuggestedSection = Component;

export { JobSuggestedSection };
//# sourceMappingURL=JobSuggestedSection.component.js.map
