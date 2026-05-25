'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Typography_constant = require('../../Typography.constant.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BaseComponent = function (_a, ref) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    var _b = Typography_constant.typographyStyles(tslib_es6.__assign({}, props)), className = _b.className, style = _b.style;
    return (React__default["default"].createElement("span", tslib_es6.__assign({}, Typography_constant.omitTypographyProps(props), { className: className, style: style, ref: ref }), Typography_constant.applyWrappers(children, props)));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI child component of Typography
 */
var TypographyText = Component;

exports.TypographyText = TypographyText;
//# sourceMappingURL=TypographyText.component.js.map
