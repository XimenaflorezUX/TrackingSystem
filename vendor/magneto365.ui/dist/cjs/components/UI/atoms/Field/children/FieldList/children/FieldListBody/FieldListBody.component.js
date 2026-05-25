'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var responsive_constants = require('../../../../../../../../constants/responsive.constants.js');
var Field_context = require('../../../../Field.context.js');
var classNames_util = require('../../../../../../../../shared/utils/common/classNames.util.js');
var FieldListBody_module = require('./FieldListBody.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldListBody_module);
function BaseComponent(_a, ref) {
    var className = _a.className, children = _a.children, style = _a.style, props = tslib_es6.__rest(_a, ["className", "children", "style"]);
    var _b = Field_context.useFieldContext(), breakpoint = _b.breakpoint, isDesktop = _b.isDesktop, isMobile = _b.isMobile;
    var styles = React.useMemo(function () { return (tslib_es6.__assign(tslib_es6.__assign({}, style), { '--breakpoint': "".concat(responsive_constants.screenSize[breakpoint || 'sm'], "px") })); }, [breakpoint, style]);
    return (React__default["default"].createElement("ul", tslib_es6.__assign({}, props, { ref: ref, "data-lib": "magneto-ui", "data-slot": "field-list-body", style: styles, className: cx('magneto-ui-field-list-body', isDesktop ? 'magneto-ui-field-list-body--desktop' : '', className) }), typeof children === 'function' ? children({ isDesktop: isDesktop, isMobile: isMobile }) : children));
}
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldListBody = Object.assign(Component, {});

exports.FieldListBody = FieldListBody;
//# sourceMappingURL=FieldListBody.component.js.map
