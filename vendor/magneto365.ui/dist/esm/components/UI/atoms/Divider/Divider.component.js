import React from 'react';
import style from './divider.module.scss.js';

var Component = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'HORIZONTAL' : _b, _c = _a.spacing, spacing = _c === void 0 ? 0 : _c;
    var inlineStyle = direction == 'HORIZONTAL'
        ? { width: 'calc(100% - 10px)', height: 1, margin: "".concat(spacing, "px 0px") }
        : { width: 1, margin: "0px ".concat(spacing, "px ") };
    return React.createElement("div", { style: inlineStyle, className: style.divider });
};
/**
 * Atom UI Divider Component
 */
var Divider = Component;

export { Divider };
//# sourceMappingURL=Divider.component.js.map
