'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function generateYearArray(additionalYears, pastYears) {
    if (additionalYears === void 0) { additionalYears = 26; }
    if (pastYears === void 0) { pastYears = 74; }
    var currentYear = new Date().getFullYear();
    var startYear = currentYear - pastYears;
    var endYear = currentYear + additionalYears;
    var yearsCount = endYear - startYear + 1;
    var yearsArray = Array.from({ length: yearsCount }, function (_, index) { return startYear + index; }).reverse();
    if (currentYear > endYear) {
        var difference = currentYear - endYear;
        yearsArray = yearsArray.slice(difference);
        var newYears = Array.from({ length: difference }, function (_, index) { return endYear + 1 + index; });
        yearsArray = yearsArray.concat(newYears);
    }
    var yearsArrayToString = yearsArray.map(function (year) { return year.toString(); });
    return { yearsArray: yearsArray, yearsArrayToString: yearsArrayToString };
}

exports.generateYearArray = generateYearArray;
//# sourceMappingURL=generateYearArray.util.js.map
