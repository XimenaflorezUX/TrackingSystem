'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function parseDate(value) {
    var initialMonth = value.getMonth().toString();
    var initialYear = value.getFullYear().toString();
    return { initialMonth: initialMonth, initialYear: initialYear };
}

exports.parseDate = parseDate;
//# sourceMappingURL=parseDate.util.js.map
