import React from 'react';
import styles from '../../AlertJobModal.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import Urgent from '../../../../../../assets/Urgent.svg.js';

var cx = classNames.bind(styles);
var AlertJobModalIcon = function (_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? 50 : _b, alt = _a.alt, className = _a.className;
    var customWidth = size ? { width: size + 'px' } : {};
    return (React.createElement("img", { style: customWidth, className: cx('alert-job__icon', className), src: src !== null && src !== void 0 ? src : Urgent, alt: alt !== null && alt !== void 0 ? alt : "icon-item", loading: "lazy" }));
};

export { AlertJobModalIcon };
//# sourceMappingURL=AlertJobModalIcon.component.js.map
