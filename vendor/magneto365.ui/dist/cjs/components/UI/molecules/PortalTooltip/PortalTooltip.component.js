'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var PortalTooltip_module = require('./PortalTooltip.module.scss.js');
var usePortalTooltip_hook = require('./hooks/usePortalTooltip.hook.js');
var usePortalTooltipPosition_hook = require('./hooks/usePortalTooltipPosition.hook.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var Component = function (_a) {
    var children = _a.children, title = _a.title, _b = _a.position, position = _b === void 0 ? 'bottom' : _b, enterDelay = _a.enterDelay, leaveDelay = _a.leaveDelay, _c = _a.offset, offset = _c === void 0 ? 8 : _c, _d = _a.hasArrow, hasArrow = _d === void 0 ? true : _d, _e = _a.visible, visible = _e === void 0 ? true : _e, _f = _a.width, width = _f === void 0 ? 'fit-content' : _f;
    var _g = usePortalTooltip_hook(visible, enterDelay, leaveDelay), open = _g.open, hideTooltip = _g.hideTooltip, showTooltip = _g.showTooltip, tooltipContainer = _g.tooltipContainer;
    var _h = usePortalTooltipPosition_hook(open, offset, position), coords = _h.coords, tooltipRef = _h.tooltipRef, triggerRef = _h.triggerRef;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { ref: triggerRef, className: PortalTooltip_module['portal-tooltip__trigger'], onMouseEnter: showTooltip, onMouseLeave: hideTooltip, onFocus: showTooltip, onBlur: hideTooltip, role: "tooltip" }, children),
        open &&
            visible &&
            ReactDOM__default["default"].createPortal(React__default["default"].createElement("div", { ref: tooltipRef, className: PortalTooltip_module['portal-tooltip'], style: {
                    top: "".concat(coords.top, "px"),
                    left: "".concat(coords.left, "px"),
                    width: width
                } },
                React__default["default"].createElement("div", { className: PortalTooltip_module['portal-tooltip__inner'] },
                    hasArrow && React__default["default"].createElement("div", { className: PortalTooltip_module['portal-tooltip__inner-arrow'], "data-position": position }),
                    title)), tooltipContainer)));
};
var PortalTooltip = Component;

exports.PortalTooltip = PortalTooltip;
//# sourceMappingURL=PortalTooltip.component.js.map
