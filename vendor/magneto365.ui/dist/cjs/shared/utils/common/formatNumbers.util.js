'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function formatNumber(num) {
    if (typeof num !== 'number')
        return num;
    return new Intl.NumberFormat().format(num);
}
var notNumberRegex = new RegExp('\\D*', 'g');

exports.formatNumber = formatNumber;
exports.notNumberRegex = notNumberRegex;
//# sourceMappingURL=formatNumbers.util.js.map
