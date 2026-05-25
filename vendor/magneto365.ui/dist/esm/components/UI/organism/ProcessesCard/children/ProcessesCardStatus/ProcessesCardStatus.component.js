import React from 'react';
import styles from '../../ProcessesCard.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.status, status = _b === void 0 ? 'Pending' : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c;
    return (React.createElement("div", { className: cx('processes-card__status-card', className, "processes-card__status-card--".concat(status), {
            'processes-card__status-card--is-selected': isSelected
        }) }, children));
};
var ProcessesCardStatus = Component;

export { ProcessesCardStatus };
//# sourceMappingURL=ProcessesCardStatus.component.js.map
