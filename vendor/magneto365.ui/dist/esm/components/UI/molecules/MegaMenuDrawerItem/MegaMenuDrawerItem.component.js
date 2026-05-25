import React, { useState, useCallback } from 'react';
import style from './MegaMenuDrawerItem.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowLeft2 from '../../../../assets/ArrowLeft2.svg.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import { Drawer } from '../Drawer/Drawer.component.js';

var Component = function (_a) {
    var _b = _a.url, url = _b === void 0 ? '#' : _b, _c = _a.text, text = _c === void 0 ? '' : _c, isActive = _a.isActive, icon = _a.icon, content = _a.content, onClickOption = _a.onClickOption;
    var _d = useState(false), openDrawer = _d[0], setOpenDrawer = _d[1];
    var menuActive = isActive ? style['is-active'] : '';
    var toggleDrawer = useCallback(function () {
        setOpenDrawer(!openDrawer);
    }, [openDrawer]);
    var anchorAction = useCallback(function (event) {
        onClickOption && onClickOption();
        if (content) {
            event.preventDefault();
            toggleDrawer();
        }
    }, [content, onClickOption, toggleDrawer]);
    return (React.createElement("div", { className: "".concat(style['mega-menu-drawer-item']) },
        React.createElement("a", { onClick: anchorAction, className: "".concat(style['mega-menu-drawer-item__content'], " ").concat(menuActive), href: url },
            React.createElement("div", { className: style['mega-menu-drawer-item__action'] },
                React.createElement(IconItem, { className: style['mega-menu-drawer-item__action--icon'], icon: icon, hover: false, size: 18 }),
                React.createElement("p", null, text)),
            React.createElement(IconItem, { icon: ArrowRight2, hover: false, className: style['mega-menu-drawer-item__arrow'], size: 18 })),
        content && (React.createElement(MegaMenuJobsDrawer, { content: content.child, isOpen: openDrawer, title: content.title, toggleDrawer: toggleDrawer }))));
};
var MegaMenuJobsDrawer = function (_a) {
    var title = _a.title, content = _a.content, isOpen = _a.isOpen, toggleDrawer = _a.toggleDrawer;
    return (React.createElement(Drawer, { isOpen: isOpen, onClose: function () { return null; }, customPadding: 0, isFull: true, hideButton: true, className: style['mega-menu-drawer'] },
        React.createElement("div", { className: style['item-drawer__header'] },
            React.createElement("button", { className: style['item-drawer__back'], onClick: toggleDrawer },
                React.createElement(IconItem, { icon: ArrowLeft2, hover: false, className: style['item-drawer__back-arrow'], size: 18 })),
            React.createElement("p", { className: style['item-drawer__title'] }, title)),
        React.createElement("div", { className: "".concat(style['item-drawer__content']) }, content)));
};
var MegaMenuDrawerItem = Object.assign(Component, {
    Drawer: MegaMenuJobsDrawer
});

export { MegaMenuDrawerItem };
//# sourceMappingURL=MegaMenuDrawerItem.component.js.map
