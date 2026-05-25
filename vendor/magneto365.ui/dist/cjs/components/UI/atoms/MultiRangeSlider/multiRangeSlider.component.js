'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var multiRangeSlider_module = require('./multiRangeSlider.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MultiRangeSlider = function (_a) {
    var min = _a.min, max = _a.max, currentMin = _a.currentMin, currentMax = _a.currentMax, _b = _a.showValues, showValues = _b === void 0 ? true : _b, onChange = _a.onChange, currency = _a.currency, _c = _a.steps, steps = _c === void 0 ? 0 : _c, _d = _a.size, size = _d === void 0 ? 260 : _d, defaultMin = _a.defaultMin, defaultMax = _a.defaultMax;
    var _e = React.useState(min), minVal = _e[0], setMinVal = _e[1];
    var _f = React.useState(max), maxVal = _f[0], setMaxVal = _f[1];
    React.useEffect(function () {
        if (currentMin) {
            setMinVal(currentMin);
        }
    }, [currentMin]);
    React.useEffect(function () {
        if (defaultMin) {
            setMinVal(defaultMin);
        }
    }, [defaultMin]);
    React.useEffect(function () {
        if (defaultMax) {
            setMaxVal(defaultMax);
        }
    }, [defaultMax]);
    React.useEffect(function () {
        if (currentMax) {
            setMaxVal(currentMax);
        }
    }, [currentMax]);
    var minValRef = React.useRef(null);
    var maxValRef = React.useRef(null);
    var range = React.useRef(null);
    var getPercent = React.useCallback(function (value) { return Math.round(((value - min) / (max - min)) * 100); }, [min, max]);
    var hasCurrency = React.useMemo(function () {
        if (currency) {
            return "".concat(currency.code).concat(minVal.toLocaleString(), " ").concat(currency.to, " ");
        }
        return minVal.toLocaleString();
    }, [currency, minVal]);
    React.useEffect(function () {
        if (maxValRef.current) {
            var minPercent = getPercent(minVal);
            var maxPercent = getPercent(+maxValRef.current.value);
            if (range.current) {
                range.current.style.left = "".concat(minPercent, "%");
                range.current.style.width = "".concat(maxPercent - minPercent, "%");
            }
        }
    }, [minVal, getPercent]);
    React.useEffect(function () {
        if (minValRef.current) {
            var minPercent = getPercent(+minValRef.current.value);
            var maxPercent = getPercent(maxVal);
            if (range.current) {
                range.current.style.width = "".concat(maxPercent - minPercent, "%");
            }
        }
    }, [maxVal, getPercent]);
    var handleMouseUpValues = React.useCallback(function () {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);
    return (React__default["default"].createElement("div", { className: multiRangeSlider_module.container },
        React__default["default"].createElement("input", { style: { width: size }, type: "range", min: min, max: max, step: steps, value: minVal, ref: minValRef, onMouseUp: handleMouseUpValues, onChange: function (event) {
                var value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
            }, className: "\n          ".concat(multiRangeSlider_module.thumb, " \n          ").concat(multiRangeSlider_module.zIndex_3, "  \n          ").concat(minVal > max - 100 ? multiRangeSlider_module.zIndex_5 : '', "\n        ") }),
        React__default["default"].createElement("input", { type: "range", style: { width: size }, min: min, max: max, step: steps, value: maxVal, ref: maxValRef, onMouseUp: handleMouseUpValues, onChange: function (event) {
                var value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
            }, className: "".concat(multiRangeSlider_module.thumb, " ").concat(multiRangeSlider_module.zIndex_4) }),
        React__default["default"].createElement("div", { style: { width: size }, className: multiRangeSlider_module.slider },
            React__default["default"].createElement("div", { className: multiRangeSlider_module.track }),
            React__default["default"].createElement("div", { ref: range, className: multiRangeSlider_module.range }),
            showValues && (React__default["default"].createElement("div", { className: multiRangeSlider_module.values },
                React__default["default"].createElement("div", { className: multiRangeSlider_module.left_value }, hasCurrency),
                React__default["default"].createElement("div", { className: multiRangeSlider_module.right_value }, maxVal.toLocaleString()))))));
};

exports.MultiRangeSlider = MultiRangeSlider;
//# sourceMappingURL=multiRangeSlider.component.js.map
