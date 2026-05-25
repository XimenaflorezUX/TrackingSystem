import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import LogoutIcon from '../../../../assets/logout.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import { megaMenuUserLoggedIcons } from '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import { Divider } from '../../atoms/Divider/Divider.component.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { MenuIcon } from '../MenuIcon/MenuIcon.component.js';
import style from './listMenuIcons.module.scss.js';
import { getIcon } from '../../../../utils/icons/getIcons.util.js';

var Component = function (_a) {
    var menuItems1440 = _a.menuItems1440, haveGif = _a.haveGif, urlParam = _a.urlParam, menuItems = _a.menuItems, logout = _a.logout, _b = _a.showAllItems, showAllItems = _b === void 0 ? false : _b;
    var logoutText = logout.logoutText, onClick = logout.onClick;
    var userMenuData = menuItems1440 && !haveGif ? menuItems1440 : menuItems;
    var userMenuResult = useMediaQuery(userMenuData, { xl: menuItems });
    var userMenu = showAllItems ? menuItems : userMenuResult;
    return (React.createElement("div", { className: style['mangeto-ui-list-menu-icons'] },
        React.createElement("div", null, userMenu === null || userMenu === void 0 ? void 0 : userMenu.map(function (_a, i) {
            var _b = _a.title, title = _b === void 0 ? '' : _b, items = _a.items;
            return (React.createElement("div", { key: i },
                React.createElement("p", null, title ? title : null),
                items.map(function (_a, i) {
                    var slug = _a.slug, icon = _a.icon, props = __rest(_a, ["slug", "icon"]);
                    return (React.createElement(Fragment, { key: i },
                        React.createElement(MenuIcon, __assign({ icon: icon && icon in megaMenuUserLoggedIcons ? getIcon(megaMenuUserLoggedIcons, icon) : icon, isActive: Array.isArray(slug) ? slug.includes(urlParam) : urlParam === slug }, props))));
                }),
                React.createElement(Divider, { spacing: 30 })));
        })),
        React.createElement(MenuIcon, { type: "button", onClick: onClick, icon: LogoutIcon, text: logoutText })));
};
var ListMenuIcons = Component;

export { ListMenuIcons };
//# sourceMappingURL=ListMenuIcons.component.js.map
