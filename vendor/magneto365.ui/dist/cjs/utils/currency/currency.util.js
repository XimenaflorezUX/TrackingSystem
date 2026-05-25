'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var numberToCurrency = function (currency, withSymbol) {
    if (withSymbol === void 0) { withSymbol = true; }
    return "".concat(withSymbol ? '$' : '').concat(currency.toLocaleString('es-CO', {
        maximumFractionDigits: 3
    }));
};

exports.numberToCurrency = numberToCurrency;
//# sourceMappingURL=currency.util.js.map
