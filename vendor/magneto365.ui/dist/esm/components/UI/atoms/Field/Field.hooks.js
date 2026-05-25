import { useEffect, useCallback } from 'react';
import { useFieldContext } from './Field.context.js';

var useFieldError = function (error) {
    var _a = useFieldContext(), hasError = _a.hasError, setHasError = _a.setHasError;
    useEffect(function () {
        setHasError(error);
    }, [error, hasError, setHasError]);
};
function useFieldFocus(_a) {
    var disabled = _a.disabled, readOnly = _a.readOnly, ref = _a.ref, controlledOnBlur = _a.onBlur, controlledOnFocus = _a.onFocus;
    var _b = useFieldContext(), onBlur = _b.onBlur, onFocus = _b.onFocus, isFocused = _b.isFocused, isMobile = _b.isMobile;
    var handleOnBlur = useCallback(function (evt, ref) {
        onBlur(evt, ref);
        controlledOnBlur === null || controlledOnBlur === void 0 ? void 0 : controlledOnBlur(evt);
    }, [controlledOnBlur, onBlur]);
    var handleOnFocus = useCallback(function (evt) {
        if (disabled || readOnly)
            return;
        onFocus(evt);
        controlledOnFocus === null || controlledOnFocus === void 0 ? void 0 : controlledOnFocus(evt);
    }, [controlledOnFocus, disabled, onFocus, readOnly]);
    useEffect(function () {
        var _a;
        if (!isMobile && isFocused) {
            (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [isFocused, isMobile, ref]);
    return { handleOnFocus: handleOnFocus, handleOnBlur: handleOnBlur };
}

export { useFieldError, useFieldFocus };
//# sourceMappingURL=Field.hooks.js.map
