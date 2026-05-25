import React from 'react';
import styles from '../../AlertJobModal.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var AlertJobModalTitle = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: cx('alert-modal__title', className) },
        React.createElement("p", null, subtitle),
        React.createElement("p", null, "\u201C".concat(title, "\u201D")),
        children));
};

export { AlertJobModalTitle };
//# sourceMappingURL=AlertJobModalTitle.component.js.map
