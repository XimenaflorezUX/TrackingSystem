'use strict';

var React = require('react');
var container_context = require('../../../../context/container/container.context.js');

var usePortalTooltip = function (visible, enterDelay, leaveDelay) {
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    var container = React.useContext(container_context.ContainerContext).container;
    var timeoutRef = React.useRef(null);
    var tooltipContainer = container || document.body;
    var showTooltip = function () {
        if (!visible)
            return;
        timeoutRef.current && clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(function () {
            setOpen(true);
        }, enterDelay);
    };
    var hideTooltip = function () {
        if (!visible)
            return;
        timeoutRef.current && clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(function () {
            setOpen(false);
        }, leaveDelay);
    };
    React.useEffect(function () {
        var timeout = timeoutRef.current;
        return function () {
            timeout && clearTimeout(timeout);
        };
    }, []);
    return { open: open, tooltipContainer: tooltipContainer, showTooltip: showTooltip, hideTooltip: hideTooltip };
};

module.exports = usePortalTooltip;
//# sourceMappingURL=usePortalTooltip.hook.js.map
