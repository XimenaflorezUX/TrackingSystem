import { __awaiter, __generator, __spreadArray } from '../../../../../node_modules/tslib/tslib.es6.js';
import { useState, useCallback, useEffect } from 'react';

var useMultipleSelectionEntry = function (_a) {
    var selectedValues = _a.selectedValues, listOptions = _a.listOptions, onChange = _a.onChange, numberOfSelectable = _a.numberOfSelectable;
    var _b = useState(''), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState([]), localSelectedValues = _c[0], localSetSelectedValues = _c[1];
    var _d = useState([]), localListOptions = _d[0], localSetListOptions = _d[1];
    var getListOptions = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, listOptions];
                case 1:
                    options = _a.sent();
                    localSetListOptions(options);
                    return [2 /*return*/];
            }
        });
    }); }, [listOptions]);
    var getSaveOptions = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var saveOptionsFilter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!selectedValues) return [3 /*break*/, 2];
                    return [4 /*yield*/, listOptions.filter(function (options) { return selectedValues.includes(options.id); })];
                case 1:
                    saveOptionsFilter = _a.sent();
                    localSetSelectedValues(saveOptionsFilter);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [selectedValues, listOptions]);
    useEffect(function () {
        getListOptions();
    }, [getListOptions]);
    useEffect(function () {
        getSaveOptions();
    }, [getSaveOptions]);
    var addValueToArray = useCallback(function (value) {
        var valueExists = localSelectedValues.some(function (currentValues) { return currentValues.id === value.id; });
        if (valueExists)
            return;
        if (localSelectedValues.length === numberOfSelectable)
            return;
        localSetSelectedValues(function (prevValues) {
            onChange(__spreadArray(__spreadArray([], prevValues, true), [value], false));
            return __spreadArray(__spreadArray([], prevValues, true), [value], false);
        });
    }, [localSelectedValues, numberOfSelectable, onChange]);
    var removeValueToArray = useCallback(function (value) {
        var filterOptions = localSelectedValues.filter(function (options) { return options.id !== value.id; });
        localSetSelectedValues(filterOptions);
        onChange(filterOptions);
    }, [localSelectedValues, onChange]);
    var handleInputChange = useCallback(function (event) {
        event.preventDefault();
        var value = event.target.value;
        setInputValue(value);
        var filtered = listOptions.filter(function (option) {
            return option.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
        });
        localSetListOptions(filtered);
    }, [listOptions]);
    var clearFilter = function () {
        localSetListOptions(listOptions);
        setInputValue('');
    };
    return {
        addValueToArray: addValueToArray,
        removeValueToArray: removeValueToArray,
        handleInputChange: handleInputChange,
        clearFilter: clearFilter,
        inputValue: inputValue,
        localListOptions: localListOptions,
        localSelectedValues: localSelectedValues
    };
};

export { useMultipleSelectionEntry };
//# sourceMappingURL=useMultipleSelectionEntry.js.map
