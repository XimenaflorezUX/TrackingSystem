import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { Drawer } from '../../molecules/Drawer/Drawer.component.js';
import { ListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.component.js';
import { ListIconLink } from '../../molecules/ListIconLink/ListIconLink.component.js';
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import { LoginHeader } from '../../organism/LoginHeader/LoginHeader.component.js';
import style from './loginTemplate.module.scss.js';
import { logoPropsLogin } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { ListIcon } from '../../../../constants/stories/drawer.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';

var Component = function (_a) {
    var listMenuProps = _a.listMenuProps, homeUrl = _a.homeUrl, _b = _a.onlyMenuUser, onlyMenuUser = _b === void 0 ? false : _b, props = __rest(_a, ["listMenuProps", "homeUrl", "onlyMenuUser"]);
    var _c = useState(false), toggleDrawer = _c[0], setToggleDrawer = _c[1];
    return (React.createElement("div", { className: style['magneto-ui-drawer-menu'] },
        React.createElement(LoginHeader, __assign({ homeUrl: homeUrl, onlyMenuUser: onlyMenuUser }, props, { onClick: function () { return setToggleDrawer(true); } })),
        React.createElement(Drawer, { isOpen: toggleDrawer, onClose: function () { return setToggleDrawer(false); } },
            React.createElement("a", { href: homeUrl },
                React.createElement(LogoComponent, __assign({}, logoPropsLogin))),
            React.createElement("div", { className: style['menu-container'] },
                React.createElement(ListMenuItems, __assign({}, listMenuProps))),
            React.createElement("div", { className: style.actionsContainer },
                React.createElement(ListIconLink, { size: 34, spacing: 20, listIcon: ListIcon })))));
};
var LoginTemplate = Component;

export { LoginTemplate };
//# sourceMappingURL=LoginTemplate.component.js.map
