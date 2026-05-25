import React, { useState, useEffect } from 'react';
import { DateDropdown } from '../../atoms/DateDropdown/DateDropdown.component.js';
import { monthOptionsValue } from '../../../../constants/stories/DatePicker.constants.js';
import { generateYearArray } from './utils/generateYearArray.util.js';
import { parseDate } from './utils/parseDate.util.js';
import styles from './DatePicker.module.scss.js';

var defaultValue = function (value) {
    return value ? parseDate(value) : { initialMonth: '', initialYear: '' };
};
var Component = function (_a) {
    var monthOptionsLabels = _a.monthOptionsLabels, monthPlaceholder = _a.monthPlaceholder, yearPlaceholder = _a.yearPlaceholder, value = _a.value, disabled = _a.disabled, onChange = _a.onChange, futureYears = _a.futureYears, pastYears = _a.pastYears;
    var _b = useState(defaultValue(value).initialMonth), selectedMonth = _b[0], setSelectedMonth = _b[1];
    var _c = useState(defaultValue(value).initialYear), selectedYear = _c[0], setSelectedYear = _c[1];
    var FIRST_OF_MONTH = 1;
    var _d = generateYearArray(futureYears, pastYears), yearsArrayToString = _d.yearsArrayToString, yearsArray = _d.yearsArray;
    var yearOptionsList = yearsArrayToString === null || yearsArrayToString === void 0 ? void 0 : yearsArrayToString.map(function (optionLabel, index) { return ({
        optionValue: yearsArray[index],
        optionLabel: optionLabel
    }); });
    var monthOptionsList = monthOptionsLabels === null || monthOptionsLabels === void 0 ? void 0 : monthOptionsLabels.map(function (optionLabel, index) { return ({
        optionValue: monthOptionsValue[index],
        optionLabel: optionLabel
    }); });
    var handleMonthChange = function (event) {
        setSelectedMonth(event.target.value);
        if (selectedYear != '') {
            onChange(new Date(Number(selectedYear), Number(event.target.value), FIRST_OF_MONTH));
        }
    };
    var handleYearChange = function (event) {
        setSelectedYear(event.target.value);
        if (selectedMonth != '') {
            onChange(new Date(Number(event.target.value), Number(selectedMonth), FIRST_OF_MONTH));
        }
    };
    useEffect(function () {
        if (disabled) {
            setSelectedMonth('');
            setSelectedYear('');
            onChange(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled]);
    return (React.createElement("div", { className: styles['magneto-ui--date-picker__wrapper'] },
        React.createElement(DateDropdown, { placeholderLabel: monthPlaceholder, dateOptions: monthOptionsList, selectedOption: selectedMonth, onOptionChanged: handleMonthChange, disabled: disabled }),
        React.createElement(DateDropdown, { placeholderLabel: yearPlaceholder, dateOptions: yearOptionsList, selectedOption: selectedYear, onOptionChanged: handleYearChange, disabled: disabled })));
};
var DatePicker = Component;

export { DatePicker };
//# sourceMappingURL=DatePicker.component.js.map
