import React from 'react';
import styles from './ApplicationText.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("p", { className: cx('text-summary', className) }, children);
};
var ApplicationText = Component;

export { ApplicationText };
//# sourceMappingURL=ApplicationText.component.js.map
