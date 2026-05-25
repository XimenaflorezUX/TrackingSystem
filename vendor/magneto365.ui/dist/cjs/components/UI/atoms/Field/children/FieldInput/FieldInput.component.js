'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FieldInput_interface = require('./FieldInput.interface.js');
var FieldList_context = require('../FieldList/FieldList.context.js');
var Field_hooks = require('../../Field.hooks.js');
var Field_context = require('../../Field.context.js');
var Field_constant = require('../../Field.constant.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var FieldInput_module = require('./FieldInput.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldInput_module);
var BaseComponent = function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? 'left' : _b, className = _a.className, disabled = _a.disabled, error = _a.error, inputClassName = _a.inputClassName, controlledOnFocus = _a.onFocus, placeholder = _a.placeholder, prefix = _a.prefix, prefixClassName = _a.prefixClassName, preserveFocus = _a.preserveFocus, readOnly = _a.readOnly, size = _a.size, suffix = _a.suffix, suffixClassName = _a.suffixClassName, type = _a.type, value = _a.value, wrapper = _a.wrapper, props = tslib_es6.__rest(_a, ["align", "className", "disabled", "error", "inputClassName", "onFocus", "placeholder", "prefix", "prefixClassName", "preserveFocus", "readOnly", "size", "suffix", "suffixClassName", "type", "value", "wrapper"]);
    var prefixRef = React.useRef(null);
    var suffixRef = React.useRef(null);
    var inputRef = React.useRef(null);
    var _c = Field_context.useFieldContext(), hasList = _c.hasList, setIsFocused = _c.setIsFocused, isFocused = _c.isFocused, isMobile = _c.isMobile;
    var listContext = FieldList_context.useFieldListContext();
    var handleOnFocus = Field_hooks.useFieldFocus({
        disabled: disabled,
        readOnly: readOnly,
        ref: inputRef,
        onFocus: controlledOnFocus
    }).handleOnFocus;
    Field_hooks.useFieldError(error);
    var handleLocalOnFocus = React.useCallback(function (evt) {
        if (isMobile && !preserveFocus && hasList)
            evt.target.blur();
        if (hasList)
            handleOnFocus(evt);
        controlledOnFocus === null || controlledOnFocus === void 0 ? void 0 : controlledOnFocus(evt);
    }, [controlledOnFocus, hasList, handleOnFocus, isMobile, preserveFocus]);
    var handleOnWrapperMouseDown = React.useCallback(function (evt) {
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
        if (input && typeof input.value === 'string' && type !== FieldInput_interface.FieldInputTypeEnum.BUTTON) {
            var len = input.value.length;
            input.setSelectionRange(len, len);
        }
    }, [disabled, hasList, readOnly, setIsFocused, type]);
    if (type && !Object.values(FieldInput_interface.FieldInputTypeEnum).includes(type))
        return null;
    return (React__default["default"].createElement("span", tslib_es6.__assign({}, wrapper, { onMouseDown: handleOnWrapperMouseDown, "data-lib": "magneto-ui", "data-slot": "field-input", "data-disabled": !!disabled, "data-readonly": !!readOnly, "data-error": !!error, "data-size": size, "data-type": type, className: cx('magneto-ui-field-input-wrapper', disabled ? 'magneto-ui-field-input-wrapper--disabled' : '', readOnly ? 'magneto-ui-field-input-wrapper--readonly' : '', error ? 'magneto-ui-field-input-wrapper--error' : '', size ? "magneto-ui-field-input-wrapper--".concat(size) : '', type ? "magneto-ui-field-input-wrapper--".concat(type) : '', isMobile && !(listContext === null || listContext === void 0 ? void 0 : listContext.isInsideList) ? 'magneto-ui-field-input-wrapper--mobile' : '', !(listContext === null || listContext === void 0 ? void 0 : listContext.isInsideList) && hasList && isFocused && !isMobile
            ? 'magneto-ui-field-input-wrapper--list-opened'
            : '', className) }),
        prefix && (React__default["default"].createElement("span", { ref: prefixRef, className: cx('magneto-ui-field-input-prefix', prefixClassName) }, typeof prefix === 'function'
            ? prefix({ inputRef: inputRef, prefixRef: prefixRef, opened: hasList === true && isFocused })
            : prefix)),
        React__default["default"].createElement("input", tslib_es6.__assign({}, props, { className: cx('magneto-ui-field-input', isMobile && !(listContext === null || listContext === void 0 ? void 0 : listContext.isInsideList) ? 'magneto-ui-field-input-wrapper--mobile' : '', align ? "magneto-ui-field-input--".concat(align) : '', type === FieldInput_interface.FieldInputTypeEnum.BUTTON
                ? !value
                    ? 'magneto-ui-field-input--button-placeholder'
                    : 'magneto-ui-field-input--button-value'
                : '', inputClassName), disabled: disabled, onFocus: handleLocalOnFocus, placeholder: placeholder, readOnly: readOnly, ref: function (node) { return Field_constant.combineRefs(node, inputRef, ref); }, type: type, value: type === FieldInput_interface.FieldInputTypeEnum.BUTTON ? (!value ? placeholder : value) : value })),
        suffix && (React__default["default"].createElement("span", { ref: suffixRef, className: cx('magneto-ui-field-input-suffix', suffixClassName) }, typeof suffix === 'function'
            ? suffix({ inputRef: inputRef, suffixRef: suffixRef, opened: hasList === true && isFocused })
            : suffix))));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldInput = Object.assign(Component, {});

exports.FieldInput = FieldInput;
//# sourceMappingURL=FieldInput.component.js.map
