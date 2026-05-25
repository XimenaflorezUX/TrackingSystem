'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MegaMenuDrawerItem_module = require('./MegaMenuDrawerItem.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var Drawer_component = require('../Drawer/Drawer.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.url, url = _b === void 0 ? '#' : _b, _c = _a.text, text = _c === void 0 ? '' : _c, isActive = _a.isActive, icon = _a.icon, content = _a.content, onClickOption = _a.onClickOption;
    var _d = React.useState(false), openDrawer = _d[0], setOpenDrawer = _d[1];
    var menuActive = isActive ? MegaMenuDrawerItem_module['is-active'] : '';
    var toggleDrawer = React.useCallback(function () {
        setOpenDrawer(!openDrawer);
    }, [openDrawer]);
    var anchorAction = React.useCallback(function (event) {
        onClickOption && onClickOption();
        if (content) {
            event.preventDefault();
            toggleDrawer();
        }
    }, [content, onClickOption, toggleDrawer]);
    return (React__default["default"].createElement("div", { className: "".concat(MegaMenuDrawerItem_module['mega-menu-drawer-item']) },
        React__default["default"].createElement("a", { onClick: anchorAction, className: "".concat(MegaMenuDrawerItem_module['mega-menu-drawer-item__content'], " ").concat(menuActive), href: url },
            React__default["default"].createElement("div", { className: MegaMenuDrawerItem_module['mega-menu-drawer-item__action'] },
                React__default["default"].createElement(Icon_component.IconItem, { className: MegaMenuDrawerItem_module['mega-menu-drawer-item__action--icon'], icon: icon, hover: false, size: 18 }),
                React__default["default"].createElement("p", null, text)),
            React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowRight2, hover: false, className: MegaMenuDrawerItem_module['mega-menu-drawer-item__arrow'], size: 18 })),
        content && (React__default["default"].createElement(MegaMenuJobsDrawer, { content: content.child, isOpen: openDrawer, title: content.title, toggleDrawer: toggleDrawer }))));
};
var MegaMenuJobsDrawer = function (_a) {
    var title = _a.title, content = _a.content, isOpen = _a.isOpen, toggleDrawer = _a.toggleDrawer;
    return (React__default["default"].createElement(Drawer_component.Drawer, { isOpen: isOpen, onClose: function () { return null; }, customPadding: 0, isFull: true, hideButton: true, className: MegaMenuDrawerItem_module['mega-menu-drawer'] },
        React__default["default"].createElement("div", { className: MegaMenuDrawerItem_module['item-drawer__header'] },
            React__default["default"].createElement("button", { className: MegaMenuDrawerItem_module['item-drawer__back'], onClick: toggleDrawer },
                React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowLeft2, hover: false, className: MegaMenuDrawerItem_module['item-drawer__back-arrow'], size: 18 })),
            React__default["default"].createElement("p", { className: MegaMenuDrawerItem_module['item-drawer__title'] }, title)),
        React__default["default"].createElement("div", { className: "".concat(MegaMenuDrawerItem_module['item-drawer__content']) }, content)));
};
var MegaMenuDrawerItem = Object.assign(Component, {
    Drawer: MegaMenuJobsDrawer
});

exports.MegaMenuDrawerItem = MegaMenuDrawerItem;
//# sourceMappingURL=MegaMenuDrawerItem.component.js.map
