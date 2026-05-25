import React, { useMemo } from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar.component.js';
import '../../atoms/BarChart/enums.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import UserRoundedGray from '../../../../assets/userRoundedGray.svg.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { Link } from '../../atoms/Link/Link.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { userMenuAnalystIcons } from './UserMenuAnalyst.constants.js';
import { UserMenuAnalystOptions } from './children/UserMenuAnalystOptions/UserMenuAnalystOptions.component.js';
import './children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import './children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import './children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import './children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import './children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import './children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import styles from './UserMenuAnalyst.module.scss.js';

var Component = function (_a) {
    var action = _a.action, headerSections = _a.headerSections, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, _b = _a.isMenuOpen, isMenuOpen = _b === void 0 ? false : _b, footerSections = _a.footerSections, user = _a.user, _c = _a.queryString, queryString = _c === void 0 ? {} : _c;
    var avatar = useMemo(function () { return user.avatar || UserRoundedGray; }, [user]);
    var actionUrl = useMemo(function () {
        if (action && action.data && !Array.isArray(action.data) && typeof action.data === 'string') {
            var hasParams = action.data.includes('?');
            var delimiter = action.useQueryString !== false && queryString && hasParams ? '&' : '';
            var queryStringParams = Object.entries(queryString)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
            })
                .join('&');
            return action.useQueryString !== false && queryStringParams
                ? "".concat(action.data).concat(hasParams ? delimiter : '?').concat(queryStringParams)
                : action.data;
        }
    }, [action, queryString]);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst'] }) },
        React.createElement("header", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__header'] }) },
            React.createElement("div", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__user'] }) },
                React.createElement(Avatar, { userImage: avatar, fallbackImage: UserRoundedGray }),
                React.createElement("div", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__user-info'] }) },
                    React.createElement("span", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__user-info--name'] }) }, user.name),
                    React.createElement("span", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__user-info--mail'] }) }, user.email),
                    action ? (React.createElement("span", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__user-info--action'] }) },
                        React.createElement(IconItem, { showDefaultFallback: false, size: 14, icon: action.icon && userMenuAnalystIcons[action.icon] ? userMenuAnalystIcons[action.icon] : action.icon }),
                        typeof action.data === 'string' ? (React.createElement(Link, { text: action.title, href: actionUrl, rel: action.rel, target: action.target })) : (React.createElement("button", { onClick: action.data }, action.title)))) : (React.createElement("span", { className: CNM.get({ styles: styles, cls: ['user-menu-analyst__user-info--title'] }) }, user.title)))),
            headerSections && (React.createElement(UserMenuAnalystOptions, { options: headerSections || [], queryString: queryString, isMenuOpen: isMenuOpen, handleModal: handleModal, handleMenuOpen: handleMenuOpen, className: CNM.get({
                    styles: styles,
                    cls: ['user-menu-analyst__company', (headerSections === null || headerSections === void 0 ? void 0 : headerSections.length) === 0 && 'user-menu-analyst__company--empty']
                }), optionClassNames: {
                    link: CNM.get({ styles: styles, cls: ['user-menu-analyst__company-link'] }),
                    dropdown: CNM.get({ styles: styles, cls: ['user-menu-analyst__company-dropdown'] })
                } }))),
        footerSections && (footerSections === null || footerSections === void 0 ? void 0 : footerSections.length) > 0 && (React.createElement(UserMenuAnalystOptions, { handleModal: handleModal, handleMenuOpen: handleMenuOpen, options: footerSections || [], queryString: queryString }))));
};
/**
 * Molecule UI component for user menu
 */
var UserMenuAnalyst = Component;

export { UserMenuAnalyst };
//# sourceMappingURL=UserMenuAnalyst.component.js.map
