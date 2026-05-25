var refreshChildren = function (params, setAppliedOptions) {
    if (!params)
        return;
    var parents = [];
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var parent_1 = params_1[_i];
        if (typeof parent_1 !== 'string')
            return;
        var parentId = parent_1.split('@')[0];
        parents.push(parentId);
    }
    setAppliedOptions(function (current) {
        return current.filter(function (option) {
            return parents.find(function (parent) { return String(parent) === String(option.parentId); });
        });
    });
};
var refreshParents = function (filtersApplied, setAppliedOptions) {
    setAppliedOptions(function (current) {
        return current.filter(function (opt) { return filtersApplied === null || filtersApplied === void 0 ? void 0 : filtersApplied.find(function (optApplied) { return String(optApplied) === String(opt.id); }); });
    });
};
var cleanSearch = function (refInput, setOptions, time) {
    setTimeout(function () {
        setOptions([]);
        if (refInput === null || refInput === void 0 ? void 0 : refInput.current) {
            refInput.current.value = '';
        }
    }, time || 0);
};
var getValues = function (filtersApplied) {
    return filtersApplied === null || filtersApplied === void 0 ? void 0 : filtersApplied.map(function (item) {
        if (typeof item === 'string' || typeof item === 'number')
            return item;
        return '';
    });
};

export { cleanSearch, getValues, refreshChildren, refreshParents };
//# sourceMappingURL=filterCardOnSearch.component.util.js.map
