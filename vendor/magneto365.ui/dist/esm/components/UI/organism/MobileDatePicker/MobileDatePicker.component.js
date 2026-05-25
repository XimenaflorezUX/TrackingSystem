import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import ArrowDown3 from '../../../../assets/ArrowDown3.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { monthOptionsValue } from '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { DateSelection } from '../../molecules/DateSelection/DateSelection.component.js';
import styles from './MobileDatePicker.module.scss.js';
import { generateYearArray } from '../../molecules/DatePicker/utils/generateYearArray.util.js';
import { parseDate } from '../../molecules/DatePicker/utils/parseDate.util.js';

var defaultValue = function (value) {
    return value ? parseDate(value) : { initialMonth: '', initialYear: '' };
};
var Component = function (_a) {
    var applyLabel = _a.applyLabel, cancelLabel = _a.cancelLabel, disabled = _a.disabled, monthsLabels = _a.monthsLabels, monthPlaceholder = _a.monthPlaceholder, yearPlaceholder = _a.yearPlaceholder, onChange = _a.onChange, selectionMonthHeader = _a.selectionMonthHeader, selectionYearHeader = _a.selectionYearHeader, value = _a.value, futureYears = _a.futureYears, pastYears = _a.pastYears;
    var mainClass = 'magneto-ui--mobile-date-picker__container';
    var valueClass = '-value';
    var disabledClass = '-disabled';
    var _b = useState(false), isMonthPickerOpen = _b[0], setIsMonthPickerOpen = _b[1];
    var _c = useState(false), isYearPickerOpen = _c[0], setIsYearPickerOpen = _c[1];
    var _d = useState(defaultValue(value).initialMonth), monthSelected = _d[0], setMonthSelected = _d[1];
    var _e = useState(defaultValue(value).initialYear), yearSelected = _e[0], setYearSelected = _e[1];
    var _f = generateYearArray(futureYears, pastYears), yearsArrayToString = _f.yearsArrayToString, yearsArray = _f.yearsArray;
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
        optionValue: monthOptionsValue[index],
        optionLabel: optionLabel
    }); });
    var getMonthName = function (monthIndex) {
        return monthsLabels[monthIndex];
    };
    var toggleMonthPicker = useCallback(function () {
        if (!disabled) {
            setIsMonthPickerOpen(true);
        }
    }, [disabled]);
    var toggleYearPicker = useCallback(function () {
        if (!disabled) {
            setIsYearPickerOpen(true);
        }
    }, [disabled]);
    var onClose = useCallback(function () {
        setIsMonthPickerOpen(false);
        setIsYearPickerOpen(false);
    }, []);
    var disabledArrow = useMemo(function () {
        if (disabled)
            return React.createElement(IconItem, { icon: ArrowDown2, alt: "arrow-icon", size: 24 });
        return React.createElement(IconItem, { icon: ArrowDown3, alt: "arrow-icon", size: 24 });
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
    useEffect(function () {
        if (disabled) {
            setMonthSelected('');
            setYearSelected('');
            onChange(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled]);
    return (React.createElement("section", { className: styles['magneto-ui--mobile-date-picker'] },
        React.createElement("div", { className: styles["".concat(componentClass)], onClick: toggleMonthPicker },
            React.createElement("div", { className: styles['magneto-ui--mobile-date-picker__input'] },
                React.createElement("span", { className: styles["".concat(placeholderClass)] }, monthPlaceholder),
                React.createElement("p", { className: styles['magneto-ui--mobile-date-picker__value'] }, monthSelected !== null ? getMonthName(monthSelected) : '')),
            React.createElement("span", { className: styles["".concat(iconClass)] }, disabledArrow)),
        React.createElement(DateSelection, { applyLabel: applyLabel, cancelLabel: cancelLabel, dateOptions: monthDateOptions, disabled: disabled, isOpen: isMonthPickerOpen, selectionHeader: selectionMonthHeader, onClose: onClose, onApplyCallback: handleMonthDateSelection, initialValue: monthSelected }),
        React.createElement("div", { className: styles["".concat(componentClass)], onClick: toggleYearPicker },
            React.createElement("div", { className: styles['magneto-ui--mobile-date-picker__input'] },
                React.createElement("span", { className: styles["".concat(placeholderClass)] }, yearPlaceholder),
                React.createElement("p", { className: styles['magneto-ui--mobile-date-picker__value'] }, yearSelected)),
            React.createElement("span", { className: styles["".concat(iconClass)] }, disabledArrow)),
        React.createElement(DateSelection, { applyLabel: applyLabel, cancelLabel: cancelLabel, dateOptions: yearDateOptions, disabled: disabled, isOpen: isYearPickerOpen, selectionHeader: selectionYearHeader, onClose: onClose, onApplyCallback: handleYearDateSelection, initialValue: yearSelected })));
};
var MobileDatePicker = Component;

export { MobileDatePicker };
//# sourceMappingURL=MobileDatePicker.component.js.map
