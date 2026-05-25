'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Field_context = require('../../Field.context.js');

function useFieldList(_a) {
    var defaultValue = _a.defaultValue, multiple = _a.multiple, onChange = _a.onChange, controlledValue = _a.value;
    var _b = React.useState(defaultValue), selected = _b[0], setSelected = _b[1];
    var setIsFocused = Field_context.useFieldContext().setIsFocused;
    var isControlled = React.useMemo(function () { return controlledValue !== undefined; }, [controlledValue]);
    var value = React.useMemo(function () { return (isControlled ? controlledValue : selected); }, [isControlled, controlledValue, selected]);
    var handleMultipleChange = React.useCallback(function (newValue) {
        if (!onChange)
            return;
        var multipleOnChange = onChange;
        multipleOnChange(newValue);
    }, [onChange]);
    var handleSingleChange = React.useCallback(function (newValue) {
        if (!onChange)
            return;
        var singleOnChange = onChange;
        singleOnChange(newValue);
    }, [onChange]);
    var toggleValue = React.useCallback(function (value) {
        var _a, _b;
        if (!value)
            return;
        if (multiple) {
            var prevArr = (_a = (isControlled ? controlledValue : selected)) !== null && _a !== void 0 ? _a : [];
            var exists = prevArr.some(function (v) { return v.id === value.id; });
            var next = exists ? prevArr.filter(function (v) { return v.id !== value.id; }) : tslib_es6.__spreadArray(tslib_es6.__spreadArray([], prevArr, true), [value], false);
            handleMultipleChange(next);
            if (!isControlled)
                setSelected(next);
        }
        else {
            var finalValue = ((_b = controlledValue) === null || _b === void 0 ? void 0 : _b.id) === value.id ? undefined : value;
            setIsFocused(false);
            handleSingleChange(finalValue);
            if (!isControlled)
                setSelected(finalValue);
        }
    }, [controlledValue, isControlled, multiple, handleMultipleChange, handleSingleChange, selected, setIsFocused]);
    return { toggleValue: toggleValue, value: value };
}

exports.useFieldList = useFieldList;
//# sourceMappingURL=FieldList.hooks.js.map
