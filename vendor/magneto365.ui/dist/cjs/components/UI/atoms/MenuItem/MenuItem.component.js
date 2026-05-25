'use strict';

var React = require('react');
var menuItems_module = require('./menuItems.module.scss.js');
var Icon_component = require('../Icon/Icon.component.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MenuItem = function (_a) {
    var _b = _a.url, url = _b === void 0 ? '#' : _b, _c = _a.text, text = _c === void 0 ? '' : _c, isActive = _a.isActive;
    var menuActive = isActive ? menuItems_module['is-active'] : '';
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("a", { href: url, className: "".concat(menuItems_module['magneto-ui-menu-item'], " ").concat(menuActive) },
            React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowRight2, hover: false }),
            React__default["default"].createElement("p", null, text))));
};

module.exports = MenuItem;
//# sourceMappingURL=MenuItem.component.js.map
