import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styles from './multiRangeSlider.module.scss.js';

var MultiRangeSlider = function (_a) {
    var min = _a.min, max = _a.max, currentMin = _a.currentMin, currentMax = _a.currentMax, _b = _a.showValues, showValues = _b === void 0 ? true : _b, onChange = _a.onChange, currency = _a.currency, _c = _a.steps, steps = _c === void 0 ? 0 : _c, _d = _a.size, size = _d === void 0 ? 260 : _d, defaultMin = _a.defaultMin, defaultMax = _a.defaultMax;
    var _e = useState(min), minVal = _e[0], setMinVal = _e[1];
    var _f = useState(max), maxVal = _f[0], setMaxVal = _f[1];
    useEffect(function () {
        if (currentMin) {
            setMinVal(currentMin);
        }
    }, [currentMin]);
    useEffect(function () {
        if (defaultMin) {
            setMinVal(defaultMin);
        }
    }, [defaultMin]);
    useEffect(function () {
        if (defaultMax) {
            setMaxVal(defaultMax);
        }
    }, [defaultMax]);
    useEffect(function () {
        if (currentMax) {
            setMaxVal(currentMax);
        }
    }, [currentMax]);
    var minValRef = useRef(null);
    var maxValRef = useRef(null);
    var range = useRef(null);
    var getPercent = useCallback(function (value) { return Math.round(((value - min) / (max - min)) * 100); }, [min, max]);
    var hasCurrency = useMemo(function () {
        if (currency) {
            return "".concat(currency.code).concat(minVal.toLocaleString(), " ").concat(currency.to, " ");
        }
        return minVal.toLocaleString();
    }, [currency, minVal]);
    useEffect(function () {
        if (maxValRef.current) {
            var minPercent = getPercent(minVal);
            var maxPercent = getPercent(+maxValRef.current.value);
            if (range.current) {
                range.current.style.left = "".concat(minPercent, "%");
                range.current.style.width = "".concat(maxPercent - minPercent, "%");
            }
        }
    }, [minVal, getPercent]);
    useEffect(function () {
        if (minValRef.current) {
            var minPercent = getPercent(+minValRef.current.value);
            var maxPercent = getPercent(maxVal);
            if (range.current) {
                range.current.style.width = "".concat(maxPercent - minPercent, "%");
            }
        }
    }, [maxVal, getPercent]);
    var handleMouseUpValues = useCallback(function () {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);
    return (React.createElement("div", { className: styles.container },
        React.createElement("input", { style: { width: size }, type: "range", min: min, max: max, step: steps, value: minVal, ref: minValRef, onMouseUp: handleMouseUpValues, onChange: function (event) {
                var value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
            }, className: "\n          ".concat(styles.thumb, " \n          ").concat(styles.zIndex_3, "  \n          ").concat(minVal > max - 100 ? styles.zIndex_5 : '', "\n        ") }),
        React.createElement("input", { type: "range", style: { width: size }, min: min, max: max, step: steps, value: maxVal, ref: maxValRef, onMouseUp: handleMouseUpValues, onChange: function (event) {
                var value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
            }, className: "".concat(styles.thumb, " ").concat(styles.zIndex_4) }),
        React.createElement("div", { style: { width: size }, className: styles.slider },
            React.createElement("div", { className: styles.track }),
            React.createElement("div", { ref: range, className: styles.range }),
            showValues && (React.createElement("div", { className: styles.values },
                React.createElement("div", { className: styles.left_value }, hasCurrency),
                React.createElement("div", { className: styles.right_value }, maxVal.toLocaleString()))))));
};

export { MultiRangeSlider };
//# sourceMappingURL=multiRangeSlider.component.js.map
