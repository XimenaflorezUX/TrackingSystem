'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var index = require('../../../hooks/useMediaQuery/index.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Field_module = require('./Field.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Field_module);
var FieldContext = React.createContext(null);
var FieldProvider = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, fieldRef = _a.fieldRef, props = tslib_es6.__rest(_a, ["children", "className", "fieldRef"]);
    var _c = React.useState(null), breakpoint = _c[0], setBreakpoint = _c[1];
    var _d = React.useState(undefined), hasError = _d[0], setHasError = _d[1];
    var _e = React.useState(false), isFocused = _e[0], setIsFocused = _e[1];
    var _f = React.useState(false), hasList = _f[0], setHasList = _f[1];
    var wrapperRef = React.useRef(null);
    var isMobile = index.useMediaQuery(false, (_b = {}, _b[breakpoint || 'sm'] = true, _b));
    var isDesktop = React.useMemo(function () { return !isMobile; }, [isMobile]);
    var onFocus = React.useCallback(function () {
        setIsFocused(true);
    }, []);
    var onBlur = React.useCallback(function (evt) {
        var _a;
        if (isMobile)
            return;
        var nextTarget = (evt === null || evt === void 0 ? void 0 : evt.relatedTarget) || document.activeElement;
        if (nextTarget && ((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(nextTarget)))
            return;
        setIsFocused(false);
    }, [isMobile]);
    return (React__default["default"].createElement(FieldContext.Provider, { value: {
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
        React__default["default"].createElement("div", tslib_es6.__assign({}, props, { className: cx('magneto-ui-field', className), "data-lib": "magneto-ui", "data-slot": "field", "data-error": hasError, "data-focused": isFocused, ref: fieldRef }), children)));
};
var useFieldContext = function () {
    var context = React.useContext(FieldContext);
    if (!context) {
        throw new Error('useFieldContext must be used within a FieldProvider');
    }
    return context;
};

exports.FieldProvider = FieldProvider;
exports.useFieldContext = useFieldContext;
//# sourceMappingURL=Field.context.js.map
