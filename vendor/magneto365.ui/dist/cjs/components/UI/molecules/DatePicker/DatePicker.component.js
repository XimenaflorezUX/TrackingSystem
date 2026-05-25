'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DateDropdown_component = require('../../atoms/DateDropdown/DateDropdown.component.js');
var DatePicker_constants = require('../../../../constants/stories/DatePicker.constants.js');
var generateYearArray_util = require('./utils/generateYearArray.util.js');
var parseDate_util = require('./utils/parseDate.util.js');
var DatePicker_module = require('./DatePicker.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var defaultValue = function (value) {
    return value ? parseDate_util.parseDate(value) : { initialMonth: '', initialYear: '' };
};
var Component = function (_a) {
    var monthOptionsLabels = _a.monthOptionsLabels, monthPlaceholder = _a.monthPlaceholder, yearPlaceholder = _a.yearPlaceholder, value = _a.value, disabled = _a.disabled, onChange = _a.onChange, futureYears = _a.futureYears, pastYears = _a.pastYears;
    var _b = React.useState(defaultValue(value).initialMonth), selectedMonth = _b[0], setSelectedMonth = _b[1];
    var _c = React.useState(defaultValue(value).initialYear), selectedYear = _c[0], setSelectedYear = _c[1];
    var FIRST_OF_MONTH = 1;
    var _d = generateYearArray_util.generateYearArray(futureYears, pastYears), yearsArrayToString = _d.yearsArrayToString, yearsArray = _d.yearsArray;
    var yearOptionsList = yearsArrayToString === null || yearsArrayToString === void 0 ? void 0 : yearsArrayToString.map(function (optionLabel, index) { return ({
        optionValue: yearsArray[index],
        optionLabel: optionLabel
    }); });
    var monthOptionsList = monthOptionsLabels === null || monthOptionsLabels === void 0 ? void 0 : monthOptionsLabels.map(function (optionLabel, index) { return ({
        optionValue: DatePicker_constants.monthOptionsValue[index],
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
    React.useEffect(function () {
        if (disabled) {
            setSelectedMonth('');
            setSelectedYear('');
            onChange(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled]);
    return (React__default["default"].createElement("div", { className: DatePicker_module['magneto-ui--date-picker__wrapper'] },
        React__default["default"].createElement(DateDropdown_component.DateDropdown, { placeholderLabel: monthPlaceholder, dateOptions: monthOptionsList, selectedOption: selectedMonth, onOptionChanged: handleMonthChange, disabled: disabled }),
        React__default["default"].createElement(DateDropdown_component.DateDropdown, { placeholderLabel: yearPlaceholder, dateOptions: yearOptionsList, selectedOption: selectedYear, onOptionChanged: handleYearChange, disabled: disabled })));
};
var DatePicker = Component;

exports.DatePicker = DatePicker;
//# sourceMappingURL=DatePicker.component.js.map
