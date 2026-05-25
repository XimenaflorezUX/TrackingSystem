import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { createContext, useState, useRef, useMemo, useCallback, useContext } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './Field.module.scss.js';

var cx = classNames.bind(styles);
var FieldContext = createContext(null);
var FieldProvider = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, fieldRef = _a.fieldRef, props = __rest(_a, ["children", "className", "fieldRef"]);
    var _c = useState(null), breakpoint = _c[0], setBreakpoint = _c[1];
    var _d = useState(undefined), hasError = _d[0], setHasError = _d[1];
    var _e = useState(false), isFocused = _e[0], setIsFocused = _e[1];
    var _f = useState(false), hasList = _f[0], setHasList = _f[1];
    var wrapperRef = useRef(null);
    var isMobile = useMediaQuery(false, (_b = {}, _b[breakpoint || 'sm'] = true, _b));
    var isDesktop = useMemo(function () { return !isMobile; }, [isMobile]);
    var onFocus = useCallback(function () {
        setIsFocused(true);
    }, []);
    var onBlur = useCallback(function (evt) {
        var _a;
        if (isMobile)
            return;
        var nextTarget = (evt === null || evt === void 0 ? void 0 : evt.relatedTarget) || document.activeElement;
        if (nextTarget && ((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(nextTarget)))
            return;
        setIsFocused(false);
    }, [isMobile]);
    return (React.createElement(FieldContext.Provider, { value: {
            breakpoint: breakpoint,
            hasError: hasError,
            hasList: hasList,
            isDesktop: isDesktop,
            isFocused: isFocused,
            isMobile: isMobile,
            wrapperRef: wrapperRef,
            onBlur: onBlur,
            onFocus: onFocus,
            setBreakpoint: setBreakpoint,
            setHasError: setHasError,
            setHasList: setHasList,
            setIsFocused: setIsFocused
        } },
        React.createElement("div", __assign({}, props, { className: cx('magneto-ui-field', className), "data-lib": "magneto-ui", "data-slot": "field", "data-error": hasError, "data-focused": isFocused, ref: fieldRef }), children)));
};
var useFieldContext = function () {
    var context = useContext(FieldContext);
    if (!context) {
        throw new Error('useFieldContext must be used within a FieldProvider');
    }
    return context;
};

export { FieldProvider, useFieldContext };
//# sourceMappingURL=Field.context.js.map
