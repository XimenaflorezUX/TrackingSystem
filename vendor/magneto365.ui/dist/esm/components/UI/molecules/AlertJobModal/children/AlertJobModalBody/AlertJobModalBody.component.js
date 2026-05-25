import React from 'react';
import styles from '../../AlertJobModal.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var AlertJobModalBody = function (_a) {
    var className = _a.className, children = _a.children;
    return React.createElement("div", { className: cx('alert-modal__body', className) }, children);
};

export { AlertJobModalBody };
//# sourceMappingURL=AlertJobModalBody.component.js.map
