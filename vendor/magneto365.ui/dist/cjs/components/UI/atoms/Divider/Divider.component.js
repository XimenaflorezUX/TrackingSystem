'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var divider_module = require('./divider.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'HORIZONTAL' : _b, _c = _a.spacing, spacing = _c === void 0 ? 0 : _c;
    var inlineStyle = direction == 'HORIZONTAL'
        ? { width: 'calc(100% - 10px)', height: 1, margin: "".concat(spacing, "px 0px") }
        : { width: 1, margin: "0px ".concat(spacing, "px ") };
    return React__default["default"].createElement("div", { style: inlineStyle, className: divider_module.divider });
};
/**
 * Atom UI Divider Component
 */
var Divider = Component;

exports.Divider = Divider;
//# sourceMappingURL=Divider.component.js.map
