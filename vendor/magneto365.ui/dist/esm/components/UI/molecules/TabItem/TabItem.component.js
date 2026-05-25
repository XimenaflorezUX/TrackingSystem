import React from 'react';
import styles from './TabItem.module.scss.js';

var Component = function (_a) {
    var text = _a.text, _b = _a.className, className = _b === void 0 ? '' : _b, onClick = _a.onClick, isDisabled = _a.isDisabled, isSelected = _a.isSelected;
    return (React.createElement("button", { className: "".concat(styles['magneto-ui-tab-item'], " ").concat(className), disabled: isDisabled, onClick: onClick, "aria-selected": isSelected, "aria-disabled": isDisabled, tabIndex: isDisabled ? -1 : 0, type: "button", role: "tab" }, text));
};
var TabItem = Component;

export { TabItem };
//# sourceMappingURL=TabItem.component.js.map
