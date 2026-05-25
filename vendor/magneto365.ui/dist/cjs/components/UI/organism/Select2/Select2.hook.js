'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var normalizeString_util = require('../../../../utils/string/normalizeString.util.js');

var useSelect2 = function (_a) {
    var setTerm = _a.setTerm, _b = _a.currentFields, currentFields = _b === void 0 ? [] : _b, limitSelections = _a.limitSelections, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c, onChange = _a.onChange, isMultiple = _a.isMultiple, selectList = _a.selectList;
    var _d = React.useState([]), valueSelected = _d[0], setValueSelected = _d[1];
    var _e = React.useState(''), searchValue = _e[0], setSearchValue = _e[1];
    var _f = React.useState(false), disableList = _f[0], setDisableList = _f[1];
    React.useEffect(function () {
        if (setTerm && searchValue.length) {
            setTerm(searchValue);
        }
    }, [searchValue, setTerm]);
    React.useEffect(function () {
        if (!currentFields) {
            if (valueSelected.length !== 0) {
                setValueSelected([]);
            }
            return;
        }
        if (!Array.isArray(currentFields)) {
            if ('id' in currentFields && 'name' in currentFields) {
                var newValue = [currentFields];
                if (JSON.stringify(valueSelected) !== JSON.stringify(newValue)) {
                    setValueSelected(newValue);
                }
            }
            return;
        }
        if (currentFields.length === 0) {
            if (valueSelected.length !== 0) {
                setValueSelected([]);
            }
            return;
        }
        setValueSelected(function (prev) {
            if (currentFields.map(function (field) { return field.id; }).join() === prev.map(function (p) { return p.id; }).join()) {
                return prev;
            }
            return currentFields;
        });
    }, [currentFields, valueSelected]);
    React.useEffect(function () {
        if (limitSelections && valueSelected.length >= limitSelections) {
            setDisableList(true);
            setClickOut(false);
            return;
        }
        setDisableList(false);
    }, [limitSelections, setClickOut, valueSelected.length]);
    var handleSearch = React.useCallback(function (event) {
        setSearchValue(event.target.value);
    }, []);
    var list = React.useMemo(function () {
        var normalizedSearch = normalizeString_util.normalizeString(searchValue.toLowerCase());
        if (normalizedSearch.length > 1 && !setTerm) {
            return selectList.filter(function (_a) {
                var name = _a.name;
                return normalizeString_util.normalizeString(name.toLowerCase()).includes(normalizedSearch);
            });
        }
        return selectList;
    }, [searchValue, selectList, setTerm]);
    var handleSelected = function (value) {
        if (Array.isArray(value)) {
            setValueSelected(value);
            onChange(value);
            return;
        }
        setValueSelected(function (prev) {
            var result = value(prev);
            onChange(result);
            return result;
        });
    };
    var handleChange = function (selectedValue) {
        setClickOut(false);
        setSearchValue('');
        if (isMultiple) {
            handleSelected(function (prev) { return tslib_es6.__spreadArray(tslib_es6.__spreadArray([], prev, true), [selectedValue], false); });
            return;
        }
        handleSelected([selectedValue]);
    };
    var removeValue = function (id) {
        handleSelected(function (prev) { return prev.filter(function (p) { return p.id !== id; }); });
    };
    return { list: list, removeValue: removeValue, handleChange: handleChange, disableList: disableList, handleSearch: handleSearch, searchValue: searchValue, valueSelected: valueSelected };
};

module.exports = useSelect2;
//# sourceMappingURL=Select2.hook.js.map
