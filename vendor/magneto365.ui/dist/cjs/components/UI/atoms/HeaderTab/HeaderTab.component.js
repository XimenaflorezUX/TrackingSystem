'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var HeaderTab_modules = require('./HeaderTab.modules.scss.js');
var Badge_component = require('../Badge/Badge.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var tabType = _a.tabType, tabText = _a.tabText, url = _a.url, isActive = _a.isActive, _b = _a.count, count = _b === void 0 ? 0 : _b;
    var TabLink = tabType === 'tabOption' ? url : '';
    return (React__default["default"].createElement(React__default["default"].Fragment, null, tabType === 'tabTitle' ? (React__default["default"].createElement("div", { className: HeaderTab_modules.headerTabComponent, "data-tab-type": "tabTitle" },
        count > 0 && React__default["default"].createElement(Badge_component.Badge, { number: count, className: HeaderTab_modules['headerTabComponent__count'] }),
        React__default["default"].createElement("p", { className: HeaderTab_modules['headerTabComponent__text'] }, tabText))) : (React__default["default"].createElement("a", { className: HeaderTab_modules.headerTabComponent, href: TabLink, "data-tab-type": "tabOption", "data-is-active": isActive },
        count > 0 && React__default["default"].createElement(Badge_component.Badge, { number: count, className: HeaderTab_modules['headerTabComponent__count'] }),
        React__default["default"].createElement("p", { className: HeaderTab_modules['headerTabComponent__text'] }, tabText)))));
};
/**
 * UI Atom component for HeaderTab
 */
var HeaderTab = Component;

exports.HeaderTab = HeaderTab;
//# sourceMappingURL=HeaderTab.component.js.map
