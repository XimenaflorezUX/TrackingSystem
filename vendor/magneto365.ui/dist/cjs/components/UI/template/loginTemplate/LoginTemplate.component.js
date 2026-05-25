'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Drawer_component = require('../../molecules/Drawer/Drawer.component.js');
var ListMenuItems_component = require('../../molecules/ListMenuItems/ListMenuItems.component.js');
var ListIconLink_component = require('../../molecules/ListIconLink/ListIconLink.component.js');
var Logo_component = require('../../atoms/Logo/Logo.component.js');
var LoginHeader_component = require('../../organism/LoginHeader/LoginHeader.component.js');
var loginTemplate_module = require('./loginTemplate.module.scss.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
var drawer_constants = require('../../../../constants/stories/drawer.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var listMenuProps = _a.listMenuProps, homeUrl = _a.homeUrl, _b = _a.onlyMenuUser, onlyMenuUser = _b === void 0 ? false : _b, props = tslib_es6.__rest(_a, ["listMenuProps", "homeUrl", "onlyMenuUser"]);
    var _c = React.useState(false), toggleDrawer = _c[0], setToggleDrawer = _c[1];
    return (React__default["default"].createElement("div", { className: loginTemplate_module['magneto-ui-drawer-menu'] },
        React__default["default"].createElement(LoginHeader_component.LoginHeader, tslib_es6.__assign({ homeUrl: homeUrl, onlyMenuUser: onlyMenuUser }, props, { onClick: function () { return setToggleDrawer(true); } })),
        React__default["default"].createElement(Drawer_component.Drawer, { isOpen: toggleDrawer, onClose: function () { return setToggleDrawer(false); } },
            React__default["default"].createElement("a", { href: homeUrl },
                React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoPropsLogin))),
            React__default["default"].createElement("div", { className: loginTemplate_module['menu-container'] },
                React__default["default"].createElement(ListMenuItems_component.ListMenuItems, tslib_es6.__assign({}, listMenuProps))),
            React__default["default"].createElement("div", { className: loginTemplate_module.actionsContainer },
                React__default["default"].createElement(ListIconLink_component.ListIconLink, { size: 34, spacing: 20, listIcon: drawer_constants.ListIcon })))));
};
var LoginTemplate = Component;

exports.LoginTemplate = LoginTemplate;
//# sourceMappingURL=LoginTemplate.component.js.map
