'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');

var useOneSelectionEntry = function (_a) {
    var selectedValue = _a.selectedValue, listOptions = _a.listOptions, onChange = _a.onChange;
    var _b = React.useState(), localSelectedValue = _b[0], localSetSelectedValue = _b[1];
    var _c = React.useState([]), localListOptions = _c[0], localSetListOptions = _c[1];
    var getListOptions = React.useCallback(function () { return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
        var options;
        return tslib_es6.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, listOptions];
                case 1:
                    options = _a.sent();
                    localSetListOptions(options);
                    return [2 /*return*/];
            }
        });
    }); }, [listOptions]);
    var getSaveOptions = React.useCallback(function () { return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
        var saveOptionsFilter;
        return tslib_es6.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(selectedValue !== undefined && (selectedValue || Number.isInteger(selectedValue)))) return [3 /*break*/, 2];
                    return [4 /*yield*/, listOptions.filter(function (options) { return options.id === selectedValue; })];
                case 1:
                    saveOptionsFilter = _a.sent();
                    localSetSelectedValue(saveOptionsFilter[0]);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [selectedValue, listOptions]);
    React.useEffect(function () {
        getListOptions();
    }, [getListOptions]);
    React.useEffect(function () {
        getSaveOptions();
    }, [getSaveOptions]);
    var addValue = React.useCallback(function (value) {
        var selectedValue = listOptions.filter(function (options) { return options.id === value; });
        localSetSelectedValue(selectedValue[0]);
        onChange(value);
    }, [onChange, listOptions]);
    var handleInputChange = React.useCallback(function (event) {
        event.preventDefault();
        var value = event.target.value;
        var filtered = listOptions.filter(function (option) {
            return option.label.toLocaleLowerCase().includes(value.toLocaleLowerCase());
        });
        localSetListOptions(filtered);
    }, [listOptions]);
    var clearFilter = function () {
        localSetListOptions(listOptions);
    };
    return {
        addValue: addValue,
        handleInputChange: handleInputChange,
        clearFilter: clearFilter,
        localListOptions: localListOptions,
        localSelectedValue: localSelectedValue
    };
};

exports.useOneSelectionEntry = useOneSelectionEntry;
//# sourceMappingURL=useOneSelectionEntry.js.map
