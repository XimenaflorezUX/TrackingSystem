import React from 'react';
import styles from './ApplicationSubTitle.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: cx('subtitle-summary', className) }, children);
};
var ApplicationSubtitle = Component;

export { ApplicationSubtitle };
//# sourceMappingURL=ApplicationSubTitle.component.js.map
