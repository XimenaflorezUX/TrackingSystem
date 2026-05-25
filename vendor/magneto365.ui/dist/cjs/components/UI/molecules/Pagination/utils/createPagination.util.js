'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../node_modules/tslib/tslib.es6.js');

var createPagination = function (_a) {
    var total = _a.total, current = _a.current, _b = _a.pageSize, pageSize = _b === void 0 ? 10 : _b, _c = _a.numberOfButtons, numberOfButtons = _c === void 0 ? 3 : _c;
    var numberOfPages = Math.ceil(total / pageSize);
    if (current > numberOfPages || current < 1 || !total || !current)
        return {
            buttons: [],
            current: current,
            first: 1,
            last: numberOfPages
        };
    var totalButtons = Array(numberOfPages)
        .fill(1)
        .map(function (e, i) { return e + i; });
    var sideButtons = numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2;
    var calculateLeft = function (rest) {
        if (rest === void 0) { rest = 0; }
        return {
            left: totalButtons
                .slice(0, current - 1)
                .reverse()
                .slice(0, sideButtons + rest)
                .reverse(),
            rest: function () {
                return sideButtons - this.left.length;
            }
        };
    };
    var calculateRight = function (rest) {
        if (rest === void 0) { rest = 0; }
        return {
            right: totalButtons.slice(current).slice(0, sideButtons + rest),
            rest: function () {
                return sideButtons - this.right.length;
            }
        };
    };
    var leftButtons = calculateLeft(calculateRight().rest()).left;
    var rightButtons = calculateRight(calculateLeft().rest()).right;
    return {
        buttons: tslib_es6.__spreadArray(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], leftButtons, true), [current], false), rightButtons, true),
        current: current,
        first: 1,
        last: numberOfPages
    };
};

exports.createPagination = createPagination;
//# sourceMappingURL=createPagination.util.js.map
