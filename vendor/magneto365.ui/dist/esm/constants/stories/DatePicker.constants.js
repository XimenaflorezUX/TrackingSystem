import { generateYearArray } from '../../components/UI/molecules/DatePicker/utils/generateYearArray.util.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
var monthOptionsValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var _a = generateYearArray(), yearsArray = _a.yearsArray, yearsArrayToString = _a.yearsArrayToString;
//Story const
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var storyYears = [];
for (var i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
}
for (var i = 0; i < Math.min(yearsArray.length, yearsArrayToString.length); i++) {
    storyYears.push({ optionValue: yearsArray[i], optionLabel: yearsArrayToString[i] });
}

export { monthOptionsValue, months, storyYears };
//# sourceMappingURL=DatePicker.constants.js.map
