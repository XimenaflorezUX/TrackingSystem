import { useState, useContext, useRef, useEffect } from 'react';
import { ContainerContext } from '../../../../context/container/container.context.js';

var usePortalTooltip = function (visible, enterDelay, leaveDelay) {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var container = useContext(ContainerContext).container;
    var timeoutRef = useRef(null);
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
    useEffect(function () {
        var timeout = timeoutRef.current;
        return function () {
            timeout && clearTimeout(timeout);
        };
    }, []);
    return { open: open, tooltipContainer: tooltipContainer, showTooltip: showTooltip, hideTooltip: hideTooltip };
};

export { usePortalTooltip as default };
//# sourceMappingURL=usePortalTooltip.hook.js.map
