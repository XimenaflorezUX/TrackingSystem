'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var DrawerMenu_component = require('../../organism/DrawerMenu/DrawerMenu.component.js');
var LogoutHeader_component = require('../../organism/LogoutHeader/LogoutHeader.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var logoutHeaderProps = _a.logoutHeaderProps, headerDrawerMenuProps = _a.headerDrawerMenuProps;
    var _b = React.useState(false), toggleModal = _b[0], setToggleModal = _b[1];
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(LogoutHeader_component.LogoutHeader, tslib_es6.__assign({}, logoutHeaderProps, { onMenuClick: function () { return setToggleModal(true); } })),
        React__default["default"].createElement(DrawerMenu_component.DrawerMenu, tslib_es6.__assign({}, headerDrawerMenuProps, { isOpen: toggleModal, onClose: function () { return setToggleModal(false); } }))));
};
var LogoutTemplate = Component;

exports.LogoutTemplate = LogoutTemplate;
//# sourceMappingURL=LogoutTemplate.component.js.map
