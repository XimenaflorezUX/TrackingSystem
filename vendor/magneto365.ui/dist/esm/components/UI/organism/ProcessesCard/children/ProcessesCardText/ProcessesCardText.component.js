import React from 'react';
import styles from '../../ProcessesCard.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.status, status = _b === void 0 ? 'Pending' : _b, _c = _a.strong, strong = _c === void 0 ? false : _c;
    return (React.createElement("p", { className: cx('processes-card__text', className, "processes-text-status--".concat(status), {
            'processes-card__text--strong': strong
        }) }, children));
};
var ProcessesCardText = Component;

export { ProcessesCardText };
//# sourceMappingURL=ProcessesCardText.component.js.map
