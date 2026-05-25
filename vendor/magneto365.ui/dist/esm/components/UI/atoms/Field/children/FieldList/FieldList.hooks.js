import { __spreadArray } from '../../../../../../node_modules/tslib/tslib.es6.js';
import { useState, useMemo, useCallback } from 'react';
import { useFieldContext } from '../../Field.context.js';

function useFieldList(_a) {
    var defaultValue = _a.defaultValue, multiple = _a.multiple, onChange = _a.onChange, controlledValue = _a.value;
    var _b = useState(defaultValue), selected = _b[0], setSelected = _b[1];
    var setIsFocused = useFieldContext().setIsFocused;
    var isControlled = useMemo(function () { return controlledValue !== undefined; }, [controlledValue]);
    var value = useMemo(function () { return (isControlled ? controlledValue : selected); }, [isControlled, controlledValue, selected]);
    var handleMultipleChange = useCallback(function (newValue) {
        if (!onChange)
            return;
        var multipleOnChange = onChange;
        multipleOnChange(newValue);
    }, [onChange]);
    var handleSingleChange = useCallback(function (newValue) {
        if (!onChange)
            return;
        var singleOnChange = onChange;
        singleOnChange(newValue);
    }, [onChange]);
    var toggleValue = useCallback(function (value) {
        var _a, _b;
        if (!value)
            return;
        if (multiple) {
            var prevArr = (_a = (isControlled ? controlledValue : selected)) !== null && _a !== void 0 ? _a : [];
            var exists = prevArr.some(function (v) { return v.id === value.id; });
            var next = exists ? prevArr.filter(function (v) { return v.id !== value.id; }) : __spreadArray(__spreadArray([], prevArr, true), [value], false);
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

export { useFieldList };
//# sourceMappingURL=FieldList.hooks.js.map
