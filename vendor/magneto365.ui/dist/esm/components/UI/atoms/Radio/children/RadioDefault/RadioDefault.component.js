import React from 'react';
import styles from './RadioDefault.module.scss.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';

var Component = function (_a) {
    var checked = _a.checked, children = _a.children, childrenClassName = _a.childrenClassName, className = _a.className, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, indicatorClassName = _a.indicatorClassName, onChange = _a.onChange;
    return (React.createElement("label", { className: CNM.get({ styles: styles, cls: ['radio-default', disabled && 'radio-default--disabled', className] }), htmlFor: id },
        React.createElement("input", { type: "radio", id: id, disabled: disabled, checked: !!checked || !!defaultChecked, onChange: onChange }),
        React.createElement("div", { className: CNM.get({
                styles: styles,
                cls: [
                    'radio-default__indicator',
                    (checked || defaultChecked) && 'radio-default__indicator--checked',
                    indicatorClassName
                ]
            }) }),
        children && (React.createElement("span", { className: CNM.get({ styles: styles, cls: ['radio-default-label', childrenClassName] }) }, children))));
};
/**
 * Molecule UI component for radio default
 */
var RadioDefault = Component;

export { RadioDefault };
//# sourceMappingURL=RadioDefault.component.js.map
