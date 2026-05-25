import React from 'react';
import styles from './UserTermCheck.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, isChecked = _a.isChecked, onChange = _a.onChange;
    return (React.createElement("div", { className: cx('user-term-check', className) },
        React.createElement(Checkbox, { type: "box", display: "block", className: cx('select-list__checkbox'), checked: isChecked, onChange: onChange }, children)));
};
var UserTermCheck = Component;

export { UserTermCheck };
//# sourceMappingURL=UserTermCheck.component.js.map
