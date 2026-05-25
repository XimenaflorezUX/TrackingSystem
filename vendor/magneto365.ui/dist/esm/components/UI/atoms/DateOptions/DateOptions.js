import React from 'react';
import styles from './DateOptions.module.scss.js';

var Component = function (_a) {
    var optionsList = _a.optionsList, selected = _a.selected, handleOnClick = _a.handleOnClick;
    var handleOptionClick = function (optionValue) {
        handleOnClick(optionValue);
    };
    var parsedSelected = typeof selected === 'string' ? parseInt(selected, 10) : selected;
    return (React.createElement("div", { className: styles['magneto-ui--date-options'] },
        React.createElement("ul", { className: styles['magneto-ui--date-options--wrapper'] }, optionsList.map(function (_a) {
            var optionValue = _a.optionValue, optionLabel = _a.optionLabel;
            return (React.createElement("li", { className: "".concat(styles['magneto-ui--date-options__btn'], " ").concat(parsedSelected === optionValue ? styles['magneto-ui--date-options__btn-selected'] : ''), key: optionValue, value: optionValue, onClick: function () { return handleOptionClick(optionValue); } }, optionLabel));
        }))));
};
/**
 * UI Atom component of Date Option
 */
var DateOptions = Component;

export { DateOptions };
//# sourceMappingURL=DateOptions.js.map
