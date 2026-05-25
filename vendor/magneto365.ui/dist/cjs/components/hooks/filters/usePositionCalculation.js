'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var usePositionCalculation = function (_a) {
    var buttonRef = _a.buttonRef, _b = _a.popoverWidth, popoverWidth = _b === void 0 ? 280 : _b, _c = _a.tooltipWidth, tooltipWidth = _c === void 0 ? 100 : _c;
    var _d = React.useState({ top: 0, left: 0 }), popoverPosition = _d[0], setPopoverPosition = _d[1];
    var _e = React.useState({ top: 0, left: 0 }), tooltipPosition = _e[0], setTooltipPosition = _e[1];
    var calculatePositions = React.useCallback(function (buttonElement) {
        var element = buttonElement || buttonRef.current;
        if (!element)
            return;
        var rect = element.getBoundingClientRect();
        var viewportWidth = window.innerWidth;
        var popoverLeft = rect.left;
        if (rect.left + popoverWidth > viewportWidth) {
            popoverLeft = viewportWidth - popoverWidth - 16;
        }
        setPopoverPosition({
            top: rect.bottom + 2,
            left: popoverLeft
        });
        setTooltipPosition({
            top: rect.bottom + 2,
            left: rect.left + rect.width / 2 - tooltipWidth / 2
        });
    }, [popoverWidth, tooltipWidth, buttonRef]);
    return {
        popoverPosition: popoverPosition,
        tooltipPosition: tooltipPosition,
        calculatePositions: calculatePositions
    };
};

exports.usePositionCalculation = usePositionCalculation;
//# sourceMappingURL=usePositionCalculation.js.map
