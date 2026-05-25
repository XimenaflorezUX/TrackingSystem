'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var logout = require('../../../../assets/logout.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
var megaMenu_constants = require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
var Divider_component = require('../../atoms/Divider/Divider.component.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var MenuIcon_component = require('../MenuIcon/MenuIcon.component.js');
var listMenuIcons_module = require('./listMenuIcons.module.scss.js');
var getIcons_util = require('../../../../utils/icons/getIcons.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var menuItems1440 = _a.menuItems1440, haveGif = _a.haveGif, urlParam = _a.urlParam, menuItems = _a.menuItems, logout$1 = _a.logout, _b = _a.showAllItems, showAllItems = _b === void 0 ? false : _b;
    var logoutText = logout$1.logoutText, onClick = logout$1.onClick;
    var userMenuData = menuItems1440 && !haveGif ? menuItems1440 : menuItems;
    var userMenuResult = index.useMediaQuery(userMenuData, { xl: menuItems });
    var userMenu = showAllItems ? menuItems : userMenuResult;
    return (React__default["default"].createElement("div", { className: listMenuIcons_module['mangeto-ui-list-menu-icons'] },
        React__default["default"].createElement("div", null, userMenu === null || userMenu === void 0 ? void 0 : userMenu.map(function (_a, i) {
            var _b = _a.title, title = _b === void 0 ? '' : _b, items = _a.items;
            return (React__default["default"].createElement("div", { key: i },
                React__default["default"].createElement("p", null, title ? title : null),
                items.map(function (_a, i) {
                    var slug = _a.slug, icon = _a.icon, props = tslib_es6.__rest(_a, ["slug", "icon"]);
                    return (React__default["default"].createElement(React.Fragment, { key: i },
                        React__default["default"].createElement(MenuIcon_component.MenuIcon, tslib_es6.__assign({ icon: icon && icon in megaMenu_constants.megaMenuUserLoggedIcons ? getIcons_util.getIcon(megaMenu_constants.megaMenuUserLoggedIcons, icon) : icon, isActive: Array.isArray(slug) ? slug.includes(urlParam) : urlParam === slug }, props))));
                }),
                React__default["default"].createElement(Divider_component.Divider, { spacing: 30 })));
        })),
        React__default["default"].createElement(MenuIcon_component.MenuIcon, { type: "button", onClick: onClick, icon: logout, text: logoutText })));
};
var ListMenuIcons = Component;

exports.ListMenuIcons = ListMenuIcons;
//# sourceMappingURL=ListMenuIcons.component.js.map
