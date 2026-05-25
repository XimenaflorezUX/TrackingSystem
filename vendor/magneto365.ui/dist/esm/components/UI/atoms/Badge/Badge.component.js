import React from 'react';
import styles from './Badge.modules.scss.js';

var Component = function (_a) {
    var _b = _a.number, number = _b === void 0 ? undefined : _b, className = _a.className;
    return (React.createElement("p", { className: "".concat(styles['badge-count'], " ").concat(className) },
        React.createElement("span", { className: styles['badge-count__animation'] }),
        number && number));
};
var Badge = Component;

export { Badge };
//# sourceMappingURL=Badge.component.js.map
