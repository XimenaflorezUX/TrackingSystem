'use strict';

var React = require('react');
var Tooltip_module = require('./Tooltip.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Tooltip = function (_a) {
    var title = _a.title, _b = _a.position, position = _b === void 0 ? 'top' : _b, children = _a.children, _c = _a.width, width = _c === void 0 ? '10rem' : _c, _d = _a.visible, visible = _d === void 0 ? true : _d;
    return (React__default["default"].createElement("div", { className: "".concat(Tooltip_module['tooltip-container'], " ").concat(Tooltip_module["tooltip-".concat(position)]) },
        React__default["default"].createElement("div", { className: "".concat(Tooltip_module['tooltip'], " ").concat(Tooltip_module["tooltip-".concat(position)]) },
            children,
            visible && (React__default["default"].createElement("span", { className: "".concat(Tooltip_module['tooltip-text'], " ").concat(Tooltip_module["tooltip-text-".concat(position)]), style: { width: width } }, title)))));
};

module.exports = Tooltip;
//# sourceMappingURL=Tooltip.component.js.map
