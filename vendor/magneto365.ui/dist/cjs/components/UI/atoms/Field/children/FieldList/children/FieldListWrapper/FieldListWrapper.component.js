'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Field_context = require('../../../../Field.context.js');
var FieldListWrapper_module = require('./FieldListWrapper.module.scss.js');
var classNames_util = require('../../../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldListWrapper_module);
var BaseComponent = function (_a, ref) {
    var children = _a.children, className = _a.className, nonRelative = _a.nonRelative, controlledOnBlur = _a.onBlur, tabIndex = _a.tabIndex, props = tslib_es6.__rest(_a, ["children", "className", "nonRelative", "onBlur", "tabIndex"]);
    var _b = Field_context.useFieldContext(), isMobile = _b.isMobile, wrapperRef = _b.wrapperRef, onBlur = _b.onBlur;
    var handleOnBlur = React.useCallback(function (evt) {
        onBlur(evt, ref || wrapperRef);
        controlledOnBlur === null || controlledOnBlur === void 0 ? void 0 : controlledOnBlur(evt);
    }, [controlledOnBlur, onBlur, ref, wrapperRef]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({}, props, { tabIndex: tabIndex || -1, className: cx('magneto-ui-field-list-wrapper', nonRelative ? 'magneto-ui-field-list-wrapper--non-relative' : '', className), onBlur: handleOnBlur, "data-lib": "magneto-ui", "data-slot": "field-list-wrapper", "data-state": nonRelative ? 'non-relative' : 'relative', ref: ref || wrapperRef }), React__default["default"].Children.map(children, function (child) { return (typeof child === 'function' ? child({ isMobile: isMobile }) : child); })));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldListWrapper = Object.assign(Component, {});

exports.FieldListWrapper = FieldListWrapper;
//# sourceMappingURL=FieldListWrapper.component.js.map
