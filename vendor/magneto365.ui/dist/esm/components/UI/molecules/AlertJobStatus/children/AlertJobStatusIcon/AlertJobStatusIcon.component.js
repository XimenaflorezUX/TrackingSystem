import React, { useMemo } from 'react';
import styles from './AlertJobStatusIcon.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import Checked2 from '../../../../../../assets/Checked2.svg.js';
import Warning3D from '../../../../../../assets/warning-3d.svg.js';
import Error3D from '../../../../../../assets/error-3d.svg.js';

var cx = classNames.bind(styles);
var alertIcons = {
    success: Checked2,
    warning: Warning3D,
    error: Error3D
};
var AlertJobStatusIcon = function (_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? 34 : _b, alt = _a.alt, className = _a.className, _c = _a.type, type = _c === void 0 ? 'warning' : _c;
    var customWidth = size ? { width: size + 'px' } : {};
    var iconByType = useMemo(function () { return alertIcons[type]; }, [type]);
    return (React.createElement("img", { style: customWidth, className: cx('alert-job__icon', className), src: src !== null && src !== void 0 ? src : iconByType, alt: alt !== null && alt !== void 0 ? alt : "icon-item", loading: "lazy" }));
};

export { AlertJobStatusIcon };
//# sourceMappingURL=AlertJobStatusIcon.component.js.map
