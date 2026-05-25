import { __spreadArray } from '../../node_modules/tslib/tslib.es6.js';

var DateArray = /** @class */ (function () {
    function DateArray(array) {
        this.day = NaN;
        this.month = NaN;
        this.year = NaN;
        this.raw = {
            day: ['', ''],
            month: ['', ''],
            year: ['', '', '', '']
        };
        if (!array)
            return;
        this.fromArray(array);
    }
    DateArray.prototype.fromArray = function (array) {
        var _a = array.map(function (x) { return (x === '' ? NaN : Number(x)); }), d1 = _a[0], d2 = _a[1], m1 = _a[2], m2 = _a[3], y1 = _a[4], y2 = _a[5], y3 = _a[6], y4 = _a[7];
        this.day = d1 * 10 + d2;
        this.month = m1 * 10 + m2;
        this.year = y1 * 1000 + y2 * 100 + y3 * 10 + y4;
        this.setRaw(array);
    };
    DateArray.prototype.setRaw = function (array) {
        var _a = array[0], d1 = _a === void 0 ? '' : _a, _b = array[1], d2 = _b === void 0 ? '' : _b, _c = array[2], m1 = _c === void 0 ? '' : _c, _d = array[3], m2 = _d === void 0 ? '' : _d, year = array.slice(4);
        this.raw.day = [d1, d2];
        this.raw.month = [m1, m2];
        this.raw.year = year;
    };
    DateArray.prototype.getMonth = function () {
        if (isNaN(this.month)) {
            return this.raw.month;
        }
        return [Math.floor(this.month / 10), this.month % 10];
    };
    DateArray.prototype.getArray = function () {
        return __spreadArray(__spreadArray(__spreadArray([], this.raw.day, true), this.getMonth(), true), this.raw.year, true);
    };
    DateArray.prototype.setArray = function (array) {
        this.fromArray(array);
        return this;
    };
    DateArray.prototype.fixMonth = function () {
        if (!isNaN(this.month) && this.month > 12) {
            this.month = 12;
        }
        return this;
    };
    return DateArray;
}());
var dateArray = new DateArray();
var fixArrayDate = function (array) {
    return dateArray.setArray(array).fixMonth().getArray();
};

export { DateArray, fixArrayDate };
//# sourceMappingURL=dateInput.util.js.map
