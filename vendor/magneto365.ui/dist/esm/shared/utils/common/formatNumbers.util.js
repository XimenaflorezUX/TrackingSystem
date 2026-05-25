function formatNumber(num) {
    if (typeof num !== 'number')
        return num;
    return new Intl.NumberFormat().format(num);
}
var notNumberRegex = new RegExp('\\D*', 'g');

export { formatNumber, notNumberRegex };
//# sourceMappingURL=formatNumbers.util.js.map
