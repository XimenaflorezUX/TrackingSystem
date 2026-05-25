// eslint-disable-next-line @typescript-eslint/no-explicit-any
var toCSSVariables = function (input) {
    var output = {};
    if (typeof input !== 'object') {
        return output;
    }
    for (var key in input) {
        var cssVar = "--".concat(key.replace(/[A-Z]/g, function (letter) { return "-".concat(letter.toLowerCase()); }));
        if (typeof input[key] !== 'boolean')
            output[cssVar] = input[key];
    }
    return output;
};

export { toCSSVariables };
//# sourceMappingURL=Function.js.map
