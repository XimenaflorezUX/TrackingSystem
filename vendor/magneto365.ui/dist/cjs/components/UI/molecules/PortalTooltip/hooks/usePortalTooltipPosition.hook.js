'use strict';

var React = require('react');

var usePortalTooltipPosition = function (open, offset, position) {
    var _a = React.useState({ top: 0, left: 0 }), coords = _a[0], setCoords = _a[1];
    var triggerRef = React.useRef(null);
    var tooltipRef = React.useRef(null);
    var updatePosition = React.useCallback(function () {
        if (!triggerRef.current || !tooltipRef.current)
            return;
        var triggerRect = triggerRef.current.getBoundingClientRect();
        var tooltipRect = tooltipRef.current.getBoundingClientRect();
        var scrollY = window.scrollY;
        var scrollX = window.scrollX;
        var top = 0;
        var left = 0;
        switch (position) {
            case 'top':
                top = triggerRect.top + scrollY - tooltipRect.height - offset;
                left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
                break;
            case 'bottom':
                top = triggerRect.bottom + scrollY + offset;
                left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
                break;
            case 'left':
                top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
                left = triggerRect.left + scrollX - tooltipRect.width - offset;
                break;
            case 'right':
                top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
                left = triggerRect.right + scrollX + offset;
                break;
        }
        setCoords({ top: top, left: left });
    }, [position, offset]);
    React.useEffect(function () {
        if (open)
            updatePosition();
    }, [open, updatePosition]);
    React.useEffect(function () {
        var handleResize = function () { return open && updatePosition(); };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [open, updatePosition]);
    return {
        coords: coords,
        triggerRef: triggerRef,
        tooltipRef: tooltipRef
    };
};

module.exports = usePortalTooltipPosition;
//# sourceMappingURL=usePortalTooltipPosition.hook.js.map
