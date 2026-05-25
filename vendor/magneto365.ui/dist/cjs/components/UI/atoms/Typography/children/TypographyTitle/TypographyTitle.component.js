'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Typography_constant = require('../../Typography.constant.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BaseComponent = function (_a, ref) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 2 : _b, props = tslib_es6.__rest(_a, ["children", "level"]);
    var _c = Typography_constant.typographyStyles(tslib_es6.__assign({}, props)), className = _c.className, style = _c.style;
    var Wrapper = React.useMemo(function () {
        var safeLevel = Math.min(Math.max(level, 1), 6);
        return "h".concat(safeLevel);
    }, [level]);
    return React__default["default"].createElement(Wrapper, tslib_es6.__assign(tslib_es6.__assign({}, Typography_constant.omitTypographyProps(props)), { className: className, style: style }), Typography_constant.applyWrappers(children, props), ref);
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI child component of Typography
 */
var TypographyTitle = Component;

exports.TypographyTitle = TypographyTitle;
//# sourceMappingURL=TypographyTitle.component.js.map
