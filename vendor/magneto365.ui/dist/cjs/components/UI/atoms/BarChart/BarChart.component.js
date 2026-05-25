'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var BarChart_module = require('./BarChart.module.scss.js');
var currency_util = require('../../../../utils/currency/currency.util.js');
var enums = require('./enums.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var range = _a.bin, percentage = _a.heightPercentage, jobText = _a.jobText, point = _a.point, _b = _a.maxHeight, maxHeight = _b === void 0 ? 400 : _b, _c = _a.maxPercentage, maxPercentage = _c === void 0 ? 1 : _c;
    var barRef = React.useRef(null);
    var _d = React.useState(false), isHover = _d[0], setIsHover = _d[1];
    var _e = React.useMemo(function () { return range; }, [range]), minRange = _e[0], maxRange = _e[1];
    var _f = React.useState(enums.EPositions.center), popoverPosition = _f[0], setPopoverPosition = _f[1];
    React.useEffect(function () {
        if (isHover && barRef.current) {
            var rect = barRef.current.getBoundingClientRect();
            var screenWidth = window.innerWidth;
            if (rect.right > screenWidth - 50) {
                setPopoverPosition(enums.EPositions.left);
            }
            else if (rect.left < 50) {
                setPopoverPosition(enums.EPositions.right);
            }
            else {
                setPopoverPosition(enums.EPositions.center);
            }
        }
    }, [isHover]);
    var popoverContent = React.useMemo(function () {
        return isHover && (React__default["default"].createElement("div", { className: "".concat(BarChart_module['magneto-ui-chart-bar__popover'], " ").concat(BarChart_module["popover-".concat(popoverPosition)]) },
            React__default["default"].createElement("div", null, "".concat(currency_util.numberToCurrency(minRange), " - ").concat(currency_util.numberToCurrency(maxRange))),
            React__default["default"].createElement("div", null, "".concat(Math.round(percentage * 100), "% ").concat(jobText))));
    }, [isHover, jobText, maxRange, minRange, percentage, popoverPosition]);
    return (React__default["default"].createElement("div", { style: {
            height: Math.max((percentage / maxPercentage) * maxHeight, 1)
        }, ref: barRef, className: BarChart_module['magneto-ui-chart-bar'], onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
        React__default["default"].createElement("div", { className: BarChart_module['magneto-ui-chart-bar__point'], style: { backgroundColor: point } }),
        popoverContent));
};
var BarChart = Component;

exports.BarChart = BarChart;
//# sourceMappingURL=BarChart.component.js.map
