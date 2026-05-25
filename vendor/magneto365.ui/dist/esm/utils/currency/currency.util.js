var numberToCurrency = function (currency, withSymbol) {
    if (withSymbol === void 0) { withSymbol = true; }
    return "".concat(withSymbol ? '$' : '').concat(currency.toLocaleString('es-CO', {
        maximumFractionDigits: 3
    }));
};

export { numberToCurrency };
//# sourceMappingURL=currency.util.js.map
