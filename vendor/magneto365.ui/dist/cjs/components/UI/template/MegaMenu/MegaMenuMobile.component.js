'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var MegaMenu_context = require('./MegaMenu.context.js');
var MegaMenuMainHeader_component = require('../../organism/MegaMenuMainHeader/MegaMenuMainHeader.component.js');
var MegaMenu_module = require('./MegaMenu.module.scss.js');
var MegaMenuDrawer_component = require('../../organism/MegaMenuDrawer/MegaMenuDrawer.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var socialHeaderVariantProps = _a.socialHeaderVariantProps, renderHeaderUserMenu = _a.renderHeaderUserMenu, props = tslib_es6.__rest(_a, ["socialHeaderVariantProps", "renderHeaderUserMenu"]);
    var _b = React.useState(false), showDrawer = _b[0], setShowDrawer = _b[1];
    var toogleDrawer = React.useCallback(function () {
        setShowDrawer(!showDrawer);
    }, [showDrawer]);
    return (React__default["default"].createElement(MegaMenu_context.MegaMenuProvider, tslib_es6.__assign({}, props),
        React__default["default"].createElement("header", { className: MegaMenu_module['mega-menu'] },
            React__default["default"].createElement("div", { className: MegaMenu_module['mega-menu__main-header'] },
                React__default["default"].createElement(MegaMenuMainHeader_component.MegaMenuMainHeader, { toggleDrawerMenu: toogleDrawer, renderHeaderUserMenu: renderHeaderUserMenu }),
                React__default["default"].createElement(MegaMenuDrawer_component.MegaMenuDrawer, { isOpen: showDrawer, onClose: toogleDrawer, socialHeaderVariantProps: socialHeaderVariantProps })))));
};
var MegaMenuMobile = Component;

exports.MegaMenuMobile = MegaMenuMobile;
//# sourceMappingURL=MegaMenuMobile.component.js.map
