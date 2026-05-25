import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { IconItem } from '../../../Icon/Icon.component.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './RadioButton.module.scss.js';

var Component = function (_a) {
    var checked = _a.checked, children = _a.children, childrenClassName = _a.childrenClassName, className = _a.className, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, onChange = _a.onChange, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon;
    return (React.createElement("label", { className: CNM.get({
            styles: styles,
            cls: [
                'radio-button',
                (checked || defaultChecked) && 'radio-button--checked',
                disabled && 'radio-button--disabled',
                className
            ]
        }), htmlFor: id },
        prefixIcon && React.createElement(IconItem, __assign({ size: 18 }, prefixIcon)),
        React.createElement("input", { type: "radio", disabled: disabled, id: id, checked: !!checked || !!defaultChecked, onChange: onChange }),
        children && (React.createElement("span", { className: CNM.get({ styles: styles, cls: ['radio-button__children', childrenClassName] }) }, children)),
        suffixIcon && React.createElement(IconItem, __assign({ size: 18 }, suffixIcon))));
};
/**
 * Atom UI component of radio button
 */
var RadioButton = Component;

export { RadioButton };
//# sourceMappingURL=RadioButton.component.js.map
