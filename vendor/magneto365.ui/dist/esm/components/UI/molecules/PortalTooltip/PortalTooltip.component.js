import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PortalTooltip.module.scss.js';
import usePortalTooltip from './hooks/usePortalTooltip.hook.js';
import usePortalTooltipPosition from './hooks/usePortalTooltipPosition.hook.js';

var Component = function (_a) {
    var children = _a.children, title = _a.title, _b = _a.position, position = _b === void 0 ? 'bottom' : _b, enterDelay = _a.enterDelay, leaveDelay = _a.leaveDelay, _c = _a.offset, offset = _c === void 0 ? 8 : _c, _d = _a.hasArrow, hasArrow = _d === void 0 ? true : _d, _e = _a.visible, visible = _e === void 0 ? true : _e, _f = _a.width, width = _f === void 0 ? 'fit-content' : _f;
    var _g = usePortalTooltip(visible, enterDelay, leaveDelay), open = _g.open, hideTooltip = _g.hideTooltip, showTooltip = _g.showTooltip, tooltipContainer = _g.tooltipContainer;
    var _h = usePortalTooltipPosition(open, offset, position), coords = _h.coords, tooltipRef = _h.tooltipRef, triggerRef = _h.triggerRef;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: triggerRef, className: styles['portal-tooltip__trigger'], onMouseEnter: showTooltip, onMouseLeave: hideTooltip, onFocus: showTooltip, onBlur: hideTooltip, role: "tooltip" }, children),
        open &&
            visible &&
            ReactDOM.createPortal(React.createElement("div", { ref: tooltipRef, className: styles['portal-tooltip'], style: {
                    top: "".concat(coords.top, "px"),
                    left: "".concat(coords.left, "px"),
                    width: width
                } },
                React.createElement("div", { className: styles['portal-tooltip__inner'] },
                    hasArrow && React.createElement("div", { className: styles['portal-tooltip__inner-arrow'], "data-position": position }),
                    title)), tooltipContainer)));
};
var PortalTooltip = Component;

export { PortalTooltip };
//# sourceMappingURL=PortalTooltip.component.js.map
