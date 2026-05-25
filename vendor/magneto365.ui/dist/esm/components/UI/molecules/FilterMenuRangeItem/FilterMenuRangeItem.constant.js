var MAPPER_RANGE_TYPE = {
    number: {
        validator: function (from, to) {
            var fromNum = Number(from);
            var toNum = Number(to);
            var result = {
                from: isNaN(fromNum),
                to: isNaN(toNum) || toNum <= fromNum
            };
            if (!result.from && !result.to)
                return null;
            return result;
        },
        transformDefaultValue: function (val) {
            return val !== undefined && val !== null ? "".concat(val) : '0';
        }
    },
    date: {
        validator: function (from, to) {
            var fromDate = new Date(from);
            var toDate = new Date(to);
            !isNaN(fromDate.getTime()) && !isNaN(toDate.getTime()) && toDate.getTime() >= fromDate.getTime();
            var result = {
                from: isNaN(fromDate.getTime()),
                to: isNaN(toDate.getTime()) || toDate.getTime() < fromDate.getTime()
            };
            if (!result.from && !result.to)
                return null;
            return result;
        },
        transformDefaultValue: function (val) {
            return val !== undefined && val !== null ? "".concat(val) : '';
        }
    }
};
var DEFAULT_RANGE_ERRORS = { from: false, to: false };

export { DEFAULT_RANGE_ERRORS, MAPPER_RANGE_TYPE };
//# sourceMappingURL=FilterMenuRangeItem.constant.js.map
