'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var RadioDefault_module = require('./RadioDefault.module.scss.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var checked = _a.checked, children = _a.children, childrenClassName = _a.childrenClassName, className = _a.className, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, indicatorClassName = _a.indicatorClassName, onChange = _a.onChange;
    return (React__default["default"].createElement("label", { className: classNameManager_util.get({ styles: RadioDefault_module, cls: ['radio-default', disabled && 'radio-default--disabled', className] }), htmlFor: id },
        React__default["default"].createElement("input", { type: "radio", id: id, disabled: disabled, checked: !!checked || !!defaultChecked, onChange: onChange }),
        React__default["default"].createElement("div", { className: classNameManager_util.get({
                styles: RadioDefault_module,
                cls: [
                    'radio-default__indicator',
                    (checked || defaultChecked) && 'radio-default__indicator--checked',
                    indicatorClassName
                ]
            }) }),
        children && (React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: RadioDefault_module, cls: ['radio-default-label', childrenClassName] }) }, children))));
};
/**
 * Molecule UI component for radio default
 */
var RadioDefault = Component;

exports.RadioDefault = RadioDefault;
//# sourceMappingURL=RadioDefault.component.js.map
