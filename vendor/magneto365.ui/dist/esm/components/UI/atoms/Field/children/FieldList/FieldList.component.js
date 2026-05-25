import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useRef, useEffect } from 'react';
import { FieldListBody } from './children/FieldListBody/FieldListBody.component.js';
import { FieldListItem } from './children/FieldListItem/FieldListItem.component.js';
import { FieldListResponsive } from './children/FieldListResponsive/FieldListResponsive.component.js';
import { FieldListWrapper } from './children/FieldListWrapper/FieldListWrapper.component.js';
import { useFieldContext } from '../../Field.context.js';
import { combineRefs } from '../../Field.constant.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { ListContext } from './FieldList.context.js';
import { useFieldList } from './FieldList.hooks.js';
import { renderChildren } from '../../../../../../utils/react/index.js';
import styles from './FieldList.module.scss.js';

var cx = classNames.bind(styles);
function BaseComponent(_a, ref) {
    var controlledBreakpoint = _a.breakpoint, children = _a.children, className = _a.className, defaultValue = _a.defaultValue, _b = _a.direction, direction = _b === void 0 ? 'down' : _b, multiple = _a.multiple, onChange = _a.onChange, controlledValue = _a.value, props = __rest(_a, ["breakpoint", "children", "className", "defaultValue", "direction", "multiple", "onChange", "value"]);
    var _c = useFieldContext(), breakpoint = _c.breakpoint, hasError = _c.hasError, hasList = _c.hasList, isDesktop = _c.isDesktop, isFocused = _c.isFocused, isMobile = _c.isMobile, setBreakpoint = _c.setBreakpoint, setHasList = _c.setHasList;
    var _d = useFieldList({
        defaultValue: defaultValue,
        multiple: multiple,
        onChange: onChange,
        value: controlledValue
    }), value = _d.value, toggleValue = _d.toggleValue;
    var listRef = useRef(null);
    var shadowRef = useRef(null);
    useEffect(function () {
        if (!breakpoint && controlledBreakpoint) {
            setBreakpoint(controlledBreakpoint);
        }
    }, [breakpoint, controlledBreakpoint, setBreakpoint]);
    useEffect(function () {
        if (!hasList)
            setHasList(true);
    }, [hasList, setHasList]);
    useEffect(function () {
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
    return (React.createElement(ListContext.Provider, { value: { isInsideList: true, toggleValue: toggleValue, value: value } },
        React.createElement(FieldListResponsive, null,
            React.createElement("div", __assign({}, props, { ref: function (node) { return combineRefs(node, listRef, ref); }, "data-lib": "magneto-ui", "data-slot": "field-list", "data-state": isFocused ? 'visible' : 'hidden', className: cx('magneto-ui-field-list', !isMobile ? 'magneto-ui-field-list--desktop' : '', direction === 'up' && !isMobile ? 'magneto-ui-field-list--up' : undefined, isFocused ? 'magneto-ui-field-list--visible' : 'magneto-ui-field-list--hidden', hasError ? 'magneto-ui-field-list--error' : '', className) }),
                React.createElement("div", { ref: shadowRef, className: cx('magneto-ui-field-list-shadow', direction === 'up' ? 'magneto-ui-field-list-shadow--up' : undefined, isFocused && !hasError ? 'magneto-ui-field-list-shadow--visible' : 'magneto-ui-field-list-shadow--hidden') }),
                renderChildren(children, { isDesktop: isDesktop, isMobile: isMobile })))));
}
var Component = forwardRef(BaseComponent);
var FieldList = Object.assign(Component, { Item: FieldListItem, Wrapper: FieldListWrapper, Body: FieldListBody });

export { FieldList };
//# sourceMappingURL=FieldList.component.js.map
