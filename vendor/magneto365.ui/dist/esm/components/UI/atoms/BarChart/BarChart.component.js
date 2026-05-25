import React, { useRef, useState, useMemo, useEffect } from 'react';
import styles from './BarChart.module.scss.js';
import { numberToCurrency } from '../../../../utils/currency/currency.util.js';
import { EPositions } from './enums.js';

var Component = function (_a) {
    var range = _a.bin, percentage = _a.heightPercentage, jobText = _a.jobText, point = _a.point, _b = _a.maxHeight, maxHeight = _b === void 0 ? 400 : _b, _c = _a.maxPercentage, maxPercentage = _c === void 0 ? 1 : _c;
    var barRef = useRef(null);
    var _d = useState(false), isHover = _d[0], setIsHover = _d[1];
    var _e = useMemo(function () { return range; }, [range]), minRange = _e[0], maxRange = _e[1];
    var _f = useState(EPositions.center), popoverPosition = _f[0], setPopoverPosition = _f[1];
    useEffect(function () {
        if (isHover && barRef.current) {
            var rect = barRef.current.getBoundingClientRect();
            var screenWidth = window.innerWidth;
            if (rect.right > screenWidth - 50) {
                setPopoverPosition(EPositions.left);
            }
            else if (rect.left < 50) {
                setPopoverPosition(EPositions.right);
            }
            else {
                setPopoverPosition(EPositions.center);
            }
        }
    }, [isHover]);
    var popoverContent = useMemo(function () {
        return isHover && (React.createElement("div", { className: "".concat(styles['magneto-ui-chart-bar__popover'], " ").concat(styles["popover-".concat(popoverPosition)]) },
            React.createElement("div", null, "".concat(numberToCurrency(minRange), " - ").concat(numberToCurrency(maxRange))),
            React.createElement("div", null, "".concat(Math.round(percentage * 100), "% ").concat(jobText))));
    }, [isHover, jobText, maxRange, minRange, percentage, popoverPosition]);
    return (React.createElement("div", { style: {
            height: Math.max((percentage / maxPercentage) * maxHeight, 1)
        }, ref: barRef, className: styles['magneto-ui-chart-bar'], onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
        React.createElement("div", { className: styles['magneto-ui-chart-bar__point'], style: { backgroundColor: point } }),
        popoverContent));
};
var BarChart = Component;

export { BarChart };
//# sourceMappingURL=BarChart.component.js.map
