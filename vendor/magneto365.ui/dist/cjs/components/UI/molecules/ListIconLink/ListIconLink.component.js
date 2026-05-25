'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var listIconLink_module = require('./listIconLink.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var listIcon = _a.listIcon, size = _a.size, _b = _a.hover, hover = _b === void 0 ? true : _b, spacing = _a.spacing, _c = _a.className, className = _c === void 0 ? '' : _c;
    return (React__default["default"].createElement("div", { style: { gap: "".concat(spacing, "px") }, className: "".concat(listIconLink_module['magneto-ui-list-icon'], " ").concat(className) }, listIcon.map(function (_a, index) {
        var icon = _a.icon, url = _a.url, title = _a.title;
        return url && (React__default["default"].createElement("a", { key: index, href: url, target: "_blank", rel: "noopener noreferrer" },
            React__default["default"].createElement(Icon_component.IconItem, { alt: title, hover: hover, size: size, icon: icon })));
    })));
};
var ListIconLink = Component;

exports.ListIconLink = ListIconLink;
//# sourceMappingURL=ListIconLink.component.js.map
