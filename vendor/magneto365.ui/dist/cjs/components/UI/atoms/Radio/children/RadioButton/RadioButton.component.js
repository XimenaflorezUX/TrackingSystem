'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../../Icon/Icon.component.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var RadioButton_module = require('./RadioButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var checked = _a.checked, children = _a.children, childrenClassName = _a.childrenClassName, className = _a.className, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, onChange = _a.onChange, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon;
    return (React__default["default"].createElement("label", { className: classNameManager_util.get({
            styles: RadioButton_module,
            cls: [
                'radio-button',
                (checked || defaultChecked) && 'radio-button--checked',
                disabled && 'radio-button--disabled',
                className
            ]
        }), htmlFor: id },
        prefixIcon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 18 }, prefixIcon)),
        React__default["default"].createElement("input", { type: "radio", disabled: disabled, id: id, checked: !!checked || !!defaultChecked, onChange: onChange }),
        children && (React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: RadioButton_module, cls: ['radio-button__children', childrenClassName] }) }, children)),
        suffixIcon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 18 }, suffixIcon))));
};
/**
 * Atom UI component of radio button
 */
var RadioButton = Component;

exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.component.js.map
