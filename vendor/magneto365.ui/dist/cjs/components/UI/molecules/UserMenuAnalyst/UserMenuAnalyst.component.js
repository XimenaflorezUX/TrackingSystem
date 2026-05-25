'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Avatar_component = require('../../atoms/Avatar/Avatar.component.js');
require('../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var userRoundedGray = require('../../../../assets/userRoundedGray.svg.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var Link_component = require('../../atoms/Link/Link.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var UserMenuAnalyst_constants = require('./UserMenuAnalyst.constants.js');
var UserMenuAnalystOptions_component = require('./children/UserMenuAnalystOptions/UserMenuAnalystOptions.component.js');
require('./children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('./children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('./children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('./children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('./children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('./children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
var UserMenuAnalyst_module = require('./UserMenuAnalyst.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var action = _a.action, headerSections = _a.headerSections, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, _b = _a.isMenuOpen, isMenuOpen = _b === void 0 ? false : _b, footerSections = _a.footerSections, user = _a.user, _c = _a.queryString, queryString = _c === void 0 ? {} : _c;
    var avatar = React.useMemo(function () { return user.avatar || userRoundedGray; }, [user]);
    var actionUrl = React.useMemo(function () {
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
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst'] }) },
        React__default["default"].createElement("header", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__header'] }) },
            React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__user'] }) },
                React__default["default"].createElement(Avatar_component.Avatar, { userImage: avatar, fallbackImage: userRoundedGray }),
                React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__user-info'] }) },
                    React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__user-info--name'] }) }, user.name),
                    React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__user-info--mail'] }) }, user.email),
                    action ? (React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__user-info--action'] }) },
                        React__default["default"].createElement(Icon_component.IconItem, { showDefaultFallback: false, size: 14, icon: action.icon && UserMenuAnalyst_constants.userMenuAnalystIcons[action.icon] ? UserMenuAnalyst_constants.userMenuAnalystIcons[action.icon] : action.icon }),
                        typeof action.data === 'string' ? (React__default["default"].createElement(Link_component.Link, { text: action.title, href: actionUrl, rel: action.rel, target: action.target })) : (React__default["default"].createElement("button", { onClick: action.data }, action.title)))) : (React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__user-info--title'] }) }, user.title)))),
            headerSections && (React__default["default"].createElement(UserMenuAnalystOptions_component.UserMenuAnalystOptions, { options: headerSections || [], queryString: queryString, isMenuOpen: isMenuOpen, handleModal: handleModal, handleMenuOpen: handleMenuOpen, className: classNameManager_util.get({
                    styles: UserMenuAnalyst_module,
                    cls: ['user-menu-analyst__company', (headerSections === null || headerSections === void 0 ? void 0 : headerSections.length) === 0 && 'user-menu-analyst__company--empty']
                }), optionClassNames: {
                    link: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__company-link'] }),
                    dropdown: classNameManager_util.get({ styles: UserMenuAnalyst_module, cls: ['user-menu-analyst__company-dropdown'] })
                } }))),
        footerSections && (footerSections === null || footerSections === void 0 ? void 0 : footerSections.length) > 0 && (React__default["default"].createElement(UserMenuAnalystOptions_component.UserMenuAnalystOptions, { handleModal: handleModal, handleMenuOpen: handleMenuOpen, options: footerSections || [], queryString: queryString }))));
};
/**
 * Molecule UI component for user menu
 */
var UserMenuAnalyst = Component;

exports.UserMenuAnalyst = UserMenuAnalyst;
//# sourceMappingURL=UserMenuAnalyst.component.js.map
