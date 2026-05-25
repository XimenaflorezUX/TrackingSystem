import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from '../../ProcessesCard.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.status, status = _b === void 0 ? 'Pending' : _b;
    return React.createElement("h3", { className: cx('processes-card__title', className, "processes-text-status--".concat(status)) }, children);
};
var ProcessesCardTitle = Component;

export { ProcessesCardTitle };
//# sourceMappingURL=ProcessesCardTitle.component.js.map
