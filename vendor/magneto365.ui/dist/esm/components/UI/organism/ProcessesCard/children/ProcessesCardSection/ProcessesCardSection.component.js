import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from '../../ProcessesCard.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: cx('processes-card__section', className) }, children);
};
var ProcessesCardSection = Component;

export { ProcessesCardSection };
//# sourceMappingURL=ProcessesCardSection.component.js.map
