function parseDate(value) {
    var initialMonth = value.getMonth().toString();
    var initialYear = value.getFullYear().toString();
    return { initialMonth: initialMonth, initialYear: initialYear };
}

export { parseDate };
//# sourceMappingURL=parseDate.util.js.map
