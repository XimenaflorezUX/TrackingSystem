'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FieldListBody_component = require('./children/FieldListBody/FieldListBody.component.js');
var FieldListItem_component = require('./children/FieldListItem/FieldListItem.component.js');
var FieldListResponsive_component = require('./children/FieldListResponsive/FieldListResponsive.component.js');
var FieldListWrapper_component = require('./children/FieldListWrapper/FieldListWrapper.component.js');
var Field_context = require('../../Field.context.js');
var Field_constant = require('../../Field.constant.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var FieldList_context = require('./FieldList.context.js');
var FieldList_hooks = require('./FieldList.hooks.js');
var index = require('../../../../../../utils/react/index.js');
var FieldList_module = require('./FieldList.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldList_module);
function BaseComponent(_a, ref) {
    var controlledBreakpoint = _a.breakpoint, children = _a.children, className = _a.className, defaultValue = _a.defaultValue, _b = _a.direction, direction = _b === void 0 ? 'down' : _b, multiple = _a.multiple, onChange = _a.onChange, controlledValue = _a.value, props = tslib_es6.__rest(_a, ["breakpoint", "children", "className", "defaultValue", "direction", "multiple", "onChange", "value"]);
    var _c = Field_context.useFieldContext(), breakpoint = _c.breakpoint, hasError = _c.hasError, hasList = _c.hasList, isDesktop = _c.isDesktop, isFocused = _c.isFocused, isMobile = _c.isMobile, setBreakpoint = _c.setBreakpoint, setHasList = _c.setHasList;
    var _d = FieldList_hooks.useFieldList({
        defaultValue: defaultValue,
        multiple: multiple,
        onChange: onChange,
        value: controlledValue
    }), value = _d.value, toggleValue = _d.toggleValue;
    var listRef = React.useRef(null);
    var shadowRef = React.useRef(null);
    React.useEffect(function () {
        if (!breakpoint && controlledBreakpoint) {
            setBreakpoint(controlledBreakpoint);
        }
    }, [breakpoint, controlledBreakpoint, setBreakpoint]);
    React.useEffect(function () {
        if (!hasList)
            setHasList(true);
    }, [hasList, setHasList]);
    React.useEffect(function () {
        if (!isFocused || hasError || !shadowRef.current || !listRef.current)
            return;
        var listNode = listRef.current;
        var shadow = shadowRef.current;
        var updateShadow = function () {
            var _a;
            var fieldInput = (_a = listNode
                .closest('[data-lib="magneto-ui"][data-slot="field"]')) === null || _a === void 0 ? void 0 : _a.querySelector('[data-slot="field-input"]');
            if (!fieldInput)
                return;
            var inputRect = fieldInput.getBoundingClientRect();
            shadow.style.width = "".concat(inputRect.width, "px");
            shadow.style.height = "calc(100% + ".concat(inputRect.height, "px)");
        };
        updateShadow();
        var resizeObserver = new ResizeObserver(updateShadow);
        resizeObserver.observe(listNode);
        window.addEventListener('scroll', updateShadow, true);
        window.addEventListener('resize', updateShadow);
        return function () {
            resizeObserver.disconnect();
            window.removeEventListener('scroll', updateShadow, true);
            window.removeEventListener('resize', updateShadow);
        };
    }, [hasError, isFocused, isMobile]);
    return (React__default["default"].createElement(FieldList_context.ListContext.Provider, { value: { isInsideList: true, toggleValue: toggleValue, value: value } },
        React__default["default"].createElement(FieldListResponsive_component.FieldListResponsive, null,
            React__default["default"].createElement("div", tslib_es6.__assign({}, props, { ref: function (node) { return Field_constant.combineRefs(node, listRef, ref); }, "data-lib": "magneto-ui", "data-slot": "field-list", "data-state": isFocused ? 'visible' : 'hidden', className: cx('magneto-ui-field-list', !isMobile ? 'magneto-ui-field-list--desktop' : '', direction === 'up' && !isMobile ? 'magneto-ui-field-list--up' : undefined, isFocused ? 'magneto-ui-field-list--visible' : 'magneto-ui-field-list--hidden', hasError ? 'magneto-ui-field-list--error' : '', className) }),
                React__default["default"].createElement("div", { ref: shadowRef, className: cx('magneto-ui-field-list-shadow', direction === 'up' ? 'magneto-ui-field-list-shadow--up' : undefined, isFocused && !hasError ? 'magneto-ui-field-list-shadow--visible' : 'magneto-ui-field-list-shadow--hidden') }),
                index.renderChildren(children, { isDesktop: isDesktop, isMobile: isMobile })))));
}
var Component = React.forwardRef(BaseComponent);
var FieldList = Object.assign(Component, { Item: FieldListItem_component.FieldListItem, Wrapper: FieldListWrapper_component.FieldListWrapper, Body: FieldListBody_component.FieldListBody });

exports.FieldList = FieldList;
//# sourceMappingURL=FieldList.component.js.map
