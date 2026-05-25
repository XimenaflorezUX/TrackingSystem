'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var ArrowDown3 = require('../../../../assets/ArrowDown3.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var DatePicker_constants = require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var DateSelection_component = require('../../molecules/DateSelection/DateSelection.component.js');
var MobileDatePicker_module = require('./MobileDatePicker.module.scss.js');
var generateYearArray_util = require('../../molecules/DatePicker/utils/generateYearArray.util.js');
var parseDate_util = require('../../molecules/DatePicker/utils/parseDate.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var defaultValue = function (value) {
    return value ? parseDate_util.parseDate(value) : { initialMonth: '', initialYear: '' };
};
var Component = function (_a) {
    var applyLabel = _a.applyLabel, cancelLabel = _a.cancelLabel, disabled = _a.disabled, monthsLabels = _a.monthsLabels, monthPlaceholder = _a.monthPlaceholder, yearPlaceholder = _a.yearPlaceholder, onChange = _a.onChange, selectionMonthHeader = _a.selectionMonthHeader, selectionYearHeader = _a.selectionYearHeader, value = _a.value, futureYears = _a.futureYears, pastYears = _a.pastYears;
    var mainClass = 'magneto-ui--mobile-date-picker__container';
    var valueClass = '-value';
    var disabledClass = '-disabled';
    var _b = React.useState(false), isMonthPickerOpen = _b[0], setIsMonthPickerOpen = _b[1];
    var _c = React.useState(false), isYearPickerOpen = _c[0], setIsYearPickerOpen = _c[1];
    var _d = React.useState(defaultValue(value).initialMonth), monthSelected = _d[0], setMonthSelected = _d[1];
    var _e = React.useState(defaultValue(value).initialYear), yearSelected = _e[0], setYearSelected = _e[1];
    var _f = generateYearArray_util.generateYearArray(futureYears, pastYears), yearsArrayToString = _f.yearsArrayToString, yearsArray = _f.yearsArray;
    var yearDateOptions = yearsArrayToString === null || yearsArrayToString === void 0 ? void 0 : yearsArrayToString.map(function (optionLabel, index) { return ({
        optionValue: yearsArray[index],
        optionLabel: optionLabel
    }); });
    var FIRST_OF_MONTH = 1;
    var FALSY_VALUE_VALIDATION = monthSelected === 0 || monthSelected || yearSelected;
    var componentClass = "".concat(mainClass).concat(FALSY_VALUE_VALIDATION ? valueClass : '').concat(disabled ? disabledClass : '').trim();
    var placeholderClass = "".concat(mainClass).concat(FALSY_VALUE_VALIDATION ? '-value--placeholder-shrink' : '--placeholder');
    var iconClass = "".concat(mainClass).concat(FALSY_VALUE_VALIDATION ? '-value__icon' : '__icon').concat(disabled ? '--disabled' : '');
    var monthDateOptions = monthsLabels === null || monthsLabels === void 0 ? void 0 : monthsLabels.map(function (optionLabel, index) { return ({
        optionValue: DatePicker_constants.monthOptionsValue[index],
        optionLabel: optionLabel
    }); });
    var getMonthName = function (monthIndex) {
        return monthsLabels[monthIndex];
    };
    var toggleMonthPicker = React.useCallback(function () {
        if (!disabled) {
            setIsMonthPickerOpen(true);
        }
    }, [disabled]);
    var toggleYearPicker = React.useCallback(function () {
        if (!disabled) {
            setIsYearPickerOpen(true);
        }
    }, [disabled]);
    var onClose = React.useCallback(function () {
        setIsMonthPickerOpen(false);
        setIsYearPickerOpen(false);
    }, []);
    var disabledArrow = React.useMemo(function () {
        if (disabled)
            return React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown2, alt: "arrow-icon", size: 24 });
        return React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown3, alt: "arrow-icon", size: 24 });
    }, [disabled]);
    var handleMonthDateSelection = function (monthSelected) {
        setMonthSelected(monthSelected);
        if (yearSelected != '') {
            onChange(new Date(Number(yearSelected), Number(monthSelected), FIRST_OF_MONTH));
        }
    };
    var handleYearDateSelection = function (yearSelected) {
        setYearSelected(yearSelected);
        if (monthSelected !== '') {
            onChange(new Date(Number(yearSelected), Number(monthSelected), FIRST_OF_MONTH));
        }
    };
    React.useEffect(function () {
        if (disabled) {
            setMonthSelected('');
            setYearSelected('');
            onChange(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled]);
    return (React__default["default"].createElement("section", { className: MobileDatePicker_module['magneto-ui--mobile-date-picker'] },
        React__default["default"].createElement("div", { className: MobileDatePicker_module["".concat(componentClass)], onClick: toggleMonthPicker },
            React__default["default"].createElement("div", { className: MobileDatePicker_module['magneto-ui--mobile-date-picker__input'] },
                React__default["default"].createElement("span", { className: MobileDatePicker_module["".concat(placeholderClass)] }, monthPlaceholder),
                React__default["default"].createElement("p", { className: MobileDatePicker_module['magneto-ui--mobile-date-picker__value'] }, monthSelected !== null ? getMonthName(monthSelected) : '')),
            React__default["default"].createElement("span", { className: MobileDatePicker_module["".concat(iconClass)] }, disabledArrow)),
        React__default["default"].createElement(DateSelection_component.DateSelection, { applyLabel: applyLabel, cancelLabel: cancelLabel, dateOptions: monthDateOptions, disabled: disabled, isOpen: isMonthPickerOpen, selectionHeader: selectionMonthHeader, onClose: onClose, onApplyCallback: handleMonthDateSelection, initialValue: monthSelected }),
        React__default["default"].createElement("div", { className: MobileDatePicker_module["".concat(componentClass)], onClick: toggleYearPicker },
            React__default["default"].createElement("div", { className: MobileDatePicker_module['magneto-ui--mobile-date-picker__input'] },
                React__default["default"].createElement("span", { className: MobileDatePicker_module["".concat(placeholderClass)] }, yearPlaceholder),
                React__default["default"].createElement("p", { className: MobileDatePicker_module['magneto-ui--mobile-date-picker__value'] }, yearSelected)),
            React__default["default"].createElement("span", { className: MobileDatePicker_module["".concat(iconClass)] }, disabledArrow)),
        React__default["default"].createElement(DateSelection_component.DateSelection, { applyLabel: applyLabel, cancelLabel: cancelLabel, dateOptions: yearDateOptions, disabled: disabled, isOpen: isYearPickerOpen, selectionHeader: selectionYearHeader, onClose: onClose, onApplyCallback: handleYearDateSelection, initialValue: yearSelected })));
};
var MobileDatePicker = Component;

exports.MobileDatePicker = MobileDatePicker;
//# sourceMappingURL=MobileDatePicker.component.js.map
