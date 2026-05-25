import React from 'react';
import styles from './Tooltip.module.scss.js';

var Tooltip = function (_a) {
    var title = _a.title, _b = _a.position, position = _b === void 0 ? 'top' : _b, children = _a.children, _c = _a.width, width = _c === void 0 ? '10rem' : _c, _d = _a.visible, visible = _d === void 0 ? true : _d;
    return (React.createElement("div", { className: "".concat(styles['tooltip-container'], " ").concat(styles["tooltip-".concat(position)]) },
        React.createElement("div", { className: "".concat(styles['tooltip'], " ").concat(styles["tooltip-".concat(position)]) },
            children,
            visible && (React.createElement("span", { className: "".concat(styles['tooltip-text'], " ").concat(styles["tooltip-text-".concat(position)]), style: { width: width } }, title)))));
};

export { Tooltip as default };
//# sourceMappingURL=Tooltip.component.js.map
