var classNames = {
    bind: function (stylesObj) {
        return function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return params
                // avoid nullish
                .filter(function (param) { return param != null; })
                .map(function (cls) {
                var _a;
                if (typeof cls === 'string')
                    return (_a = stylesObj[cls]) !== null && _a !== void 0 ? _a : cls;
                return Object.entries(cls)
                    .filter(function (_a) {
                    var value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var _b;
                    var key = _a[0];
                    return (_b = stylesObj[key]) !== null && _b !== void 0 ? _b : key;
                })
                    .join(' ');
            })
                .join(' ');
        };
    }
};

export { classNames };
//# sourceMappingURL=classNames.util.js.map
