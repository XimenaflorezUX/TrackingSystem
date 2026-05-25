import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useRef, useCallback } from 'react';
import { FieldInputTypeEnum } from './FieldInput.interface.js';
import { useFieldListContext } from '../FieldList/FieldList.context.js';
import { useFieldFocus, useFieldError } from '../../Field.hooks.js';
import { useFieldContext } from '../../Field.context.js';
import { combineRefs } from '../../Field.constant.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './FieldInput.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? 'left' : _b, className = _a.className, disabled = _a.disabled, error = _a.error, inputClassName = _a.inputClassName, controlledOnFocus = _a.onFocus, placeholder = _a.placeholder, prefix = _a.prefix, prefixClassName = _a.prefixClassName, preserveFocus = _a.preserveFocus, readOnly = _a.readOnly, size = _a.size, suffix = _a.suffix, suffixClassName = _a.suffixClassName, type = _a.type, value = _a.value, wrapper = _a.wrapper, props = __rest(_a, ["align", "className", "disabled", "error", "inputClassName", "onFocus", "placeholder", "prefix", "prefixClassName", "preserveFocus", "readOnly", "size", "suffix", "suffixClassName", "type", "value", "wrapper"]);
    var prefixRef = useRef(null);
    var suffixRef = useRef(null);
    var inputRef = useRef(null);
    var _c = useFieldContext(), hasList = _c.hasList, setIsFocused = _c.setIsFocused, isFocused = _c.isFocused, isMobile = _c.isMobile;
    var listContext = useFieldListContext();
    var handleOnFocus = useFieldFocus({
        disabled: disabled,
        readOnly: readOnly,
        ref: inputRef,
        onFocus: controlledOnFocus
    }).handleOnFocus;
    useFieldError(error);
    var handleLocalOnFocus = useCallback(function (evt) {
        if (isMobile && !preserveFocus && hasList)
            evt.target.blur();
        if (hasList)
            handleOnFocus(evt);
        controlledOnFocus === null || controlledOnFocus === void 0 ? void 0 : controlledOnFocus(evt);
    }, [controlledOnFocus, hasList, handleOnFocus, isMobile, preserveFocus]);
    var handleOnWrapperMouseDown = useCallback(function (evt) {
        var _a;
        if (evt.defaultPrevented)
            return;
        if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.contains(evt.target)) {
            return;
        }
        if (disabled || readOnly)
            return;
        if (hasList) {
            setIsFocused(true);
        }
        evt.preventDefault();
        var input = inputRef.current;
        input === null || input === void 0 ? void 0 : input.focus();
        if (input && typeof input.value === 'string' && type !== FieldInputTypeEnum.BUTTON) {
            var len = input.value.length;
            input.setSelectionRange(len, len);
        }
    }, [disabled, hasList, readOnly, setIsFocused, type]);
    if (type && !Object.values(FieldInputTypeEnum).includes(type))
        return null;
    return (React.createElement("span", __assign({}, wrapper, { onMouseDown: handleOnWrapperMouseDown, "data-lib": "magneto-ui", "data-slot": "field-input", "data-disabled": !!disabled, "data-readonly": !!readOnly, "data-error": !!error, "data-size": size, "data-type": type, className: cx('magneto-ui-field-input-wrapper', disabled ? 'magneto-ui-field-input-wrapper--disabled' : '', readOnly ? 'magneto-ui-field-input-wrapper--readonly' : '', error ? 'magneto-ui-field-input-wrapper--error' : '', size ? "magneto-ui-field-input-wrapper--".concat(size) : '', type ? "magneto-ui-field-input-wrapper--".concat(type) : '', isMobile && !(listContext === null || listContext === void 0 ? void 0 : listContext.isInsideList) ? 'magneto-ui-field-input-wrapper--mobile' : '', !(listContext === null || listContext === void 0 ? void 0 : listContext.isInsideList) && hasList && isFocused && !isMobile
            ? 'magneto-ui-field-input-wrapper--list-opened'
            : '', className) }),
        prefix && (React.createElement("span", { ref: prefixRef, className: cx('magneto-ui-field-input-prefix', prefixClassName) }, typeof prefix === 'function'
            ? prefix({ inputRef: inputRef, prefixRef: prefixRef, opened: hasList === true && isFocused })
            : prefix)),
        React.createElement("input", __assign({}, props, { className: cx('magneto-ui-field-input', isMobile && !(listContext === null || listContext === void 0 ? void 0 : listContext.isInsideList) ? 'magneto-ui-field-input-wrapper--mobile' : '', align ? "magneto-ui-field-input--".concat(align) : '', type === FieldInputTypeEnum.BUTTON
                ? !value
                    ? 'magneto-ui-field-input--button-placeholder'
                    : 'magneto-ui-field-input--button-value'
                : '', inputClassName), disabled: disabled, onFocus: handleLocalOnFocus, placeholder: placeholder, readOnly: readOnly, ref: function (node) { return combineRefs(node, inputRef, ref); }, type: type, value: type === FieldInputTypeEnum.BUTTON ? (!value ? placeholder : value) : value })),
        suffix && (React.createElement("span", { ref: suffixRef, className: cx('magneto-ui-field-input-suffix', suffixClassName) }, typeof suffix === 'function'
            ? suffix({ inputRef: inputRef, suffixRef: suffixRef, opened: hasList === true && isFocused })
            : suffix))));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldInput = Object.assign(Component, {});

export { FieldInput };
//# sourceMappingURL=FieldInput.component.js.map
