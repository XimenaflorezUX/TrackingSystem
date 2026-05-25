import React from 'react';
import styles from '../../AlertJobModal.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var AlertJobModalFooter = function (_a) {
    var className = _a.className, children = _a.children;
    return React.createElement("div", { className: cx('alert-modal__footer', className) }, children);
};

export { AlertJobModalFooter };
//# sourceMappingURL=AlertJobModalFooter.component.js.map
