'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Add = require('../../../../assets/Add.svg.js');
var home = require('../../../../assets/home.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var ButtonLink_component = require('../../atoms/ButtonLink/ButtonLink.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
var drawer_constants = require('../../../../constants/stories/drawer.constants.js');
var headers_constants = require('../../../../constants/stories/headers.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
var megaMenu_constants = require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var Logo_component = require('../../atoms/Logo/Logo.component.js');
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
var Drawer_component = require('../../molecules/Drawer/Drawer.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var ListIconLink_component = require('../../molecules/ListIconLink/ListIconLink.component.js');
var MegaMenuDrawerItem_component = require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
var MegaMenu_context = require('../../template/MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
require('../../molecules/SimilarCard/SimilarCard.component.js');
require('../../molecules/SortMenu/SortMenu.component.js');
require('../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../molecules/UserMenu/UserMenu.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
var MegaMenuDrawer_module = require('./MegaMenuDrawer.module.scss.js');
var MegaMenuTabs_component = require('../../molecules/MegaMenuSocialTabs/MegaMenuTabs.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose, socialHeaderVariantProps = _a.socialHeaderVariantProps;
    var _c = React.useState(''), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = MegaMenu_context.useMegaMenuMain(), homeUrl = _d.homeUrl, homeText = _d.homeText, loginProps = _d.loginProps;
    var _e = MegaMenu_context.useMegaMenuJobs(), tabs = _e.tabs, allJobsAction = _e.allJobsAction, onChangeTab = _e.onChangeTab;
    var _f = MegaMenu_context.useMegaMenu().socialHeaderProps, blog = _f.blog, helpOptions = _f.helpOptions;
    var isCandidate = (socialHeaderVariantProps === null || socialHeaderVariantProps === void 0 ? void 0 : socialHeaderVariantProps.variant) === 'candidate';
    var tabsPrefix = socialHeaderVariantProps === null || socialHeaderVariantProps === void 0 ? void 0 : socialHeaderVariantProps.tabsPrefix;
    var promo = socialHeaderVariantProps === null || socialHeaderVariantProps === void 0 ? void 0 : socialHeaderVariantProps.promo;
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
    };
    var onClickOption = React.useCallback(function (index) { return function () { return onChangeTab && onChangeTab(index); }; }, [onChangeTab]);
    var closeButton = React.useMemo(function () { return (React__default["default"].createElement("button", { onClick: onClose },
        React__default["default"].createElement(Icon_component.IconItem, { icon: Add, hover: false }))); }, [onClose]);
    var isActiveOption = React.useCallback(function (url) {
        return currentPage == url;
    }, [currentPage]);
    React.useEffect(function () {
        if (typeof window == 'undefined')
            return;
        setCurrentPage(window.location.href);
    }, []);
    var options = React.useMemo(function () {
        return tabs.map(function (tab, index) { return (React__default["default"].createElement(MegaMenuDrawerItem_component.MegaMenuDrawerItem, { text: tab.label, url: tab.url, content: {
                child: tab.content,
                title: tab.label
            }, onClickOption: onClickOption(index), isActive: isActiveOption(tab.url), key: index, icon: megaMenu_constants.megaMenuJobsIcons[index] })); });
    }, [isActiveOption, onClickOption, tabs]);
    var socialOptions = React.useMemo(function () {
        return tslib_es6.__spreadArray([blog], helpOptions, true).map(function (tab, index) {
            var _a, _b, _c;
            return (React__default["default"].createElement(MegaMenuDrawerItem_component.MegaMenuDrawerItem, { text: (_a = tab === null || tab === void 0 ? void 0 : tab.label) !== null && _a !== void 0 ? _a : '', url: (_b = tab === null || tab === void 0 ? void 0 : tab.url) !== null && _b !== void 0 ? _b : '', isActive: isActiveOption((_c = tab === null || tab === void 0 ? void 0 : tab.url) !== null && _c !== void 0 ? _c : ''), key: index, icon: megaMenu_constants.mobileSocialIcons[index] }));
        });
    }, [blog, helpOptions, isActiveOption]);
    var signUpActions = React.useMemo(function () { return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ buttonSize: "full" }, headers_constants.CreateAccountButton, { buttonText: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.signUpText) || '', onClick: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.onClickSignUp) || undefined })),
        React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ buttonSize: "full" }, common_constants.LoginButton, { buttonText: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginText) || '', onClick: function () {
                var _a;
                window.location.replace((_a = loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginUrl) !== null && _a !== void 0 ? _a : '');
            }, buttonStyles: { buttonColor: '#f0f1f3' } })))); }, [loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginText, loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginUrl, loginProps === null || loginProps === void 0 ? void 0 : loginProps.onClickSignUp, loginProps === null || loginProps === void 0 ? void 0 : loginProps.signUpText]);
    return (React__default["default"].createElement(Drawer_component.Drawer, { isOpen: isOpen, onClose: handleClose, customPadding: 0, isFull: true, hideButton: true, className: "".concat(MegaMenuDrawer_module['mega-menu-drawer'], " ").concat(isCandidate ? MegaMenuDrawer_module['mega-menu-drawer--candidate'] : '') },
        React__default["default"].createElement("div", { className: "".concat(MegaMenuDrawer_module['mega-menu-drawer__header'], " ").concat(isCandidate ? MegaMenuDrawer_module['mega-menu-drawer__header--candidate'] : '') },
            React__default["default"].createElement("div", { className: "".concat(MegaMenuDrawer_module['mega-menu-drawer__header-top'], " ").concat(isCandidate ? MegaMenuDrawer_module['mega-menu-drawer__header-top--candidate'] : '') },
                isCandidate && tabsPrefix && React__default["default"].createElement("span", { className: MegaMenuDrawer_module['mega-menu-drawer__tabs-prefix'] }, tabsPrefix),
                React__default["default"].createElement("div", { className: "".concat(MegaMenuDrawer_module['mega-menu-drawer__close'], " ").concat(isCandidate ? MegaMenuDrawer_module['mega-menu-drawer__close--candidate'] : '') }, closeButton)),
            React__default["default"].createElement("div", { className: MegaMenuDrawer_module['mega-menu-drawer__tabs-container'] },
                React__default["default"].createElement(MegaMenuTabs_component, { className: "".concat(MegaMenuDrawer_module['mega-menu-drawer__tabs'], " ").concat(isCandidate ? MegaMenuDrawer_module['mega-menu-drawer__tabs--candidate'] : ''), showArrows: false }))),
        React__default["default"].createElement("div", { className: MegaMenuDrawer_module['mega-menu-drawer__content'] },
            React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps)),
            React__default["default"].createElement("div", { className: MegaMenuDrawer_module['mega-menu-drawer__options'] },
                React__default["default"].createElement(MegaMenuDrawerItem_component.MegaMenuDrawerItem, { text: homeText !== null && homeText !== void 0 ? homeText : 'Inicio', url: homeUrl || '', isActive: isActiveOption(homeUrl || ''), key: 'home-action', icon: home }),
                options,
                React__default["default"].createElement(ButtonLink_component.ButtonLink, { buttonText: allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.label, href: allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.url, className: MegaMenuDrawer_module['mega-menu-drawer__options--action'] }),
                socialOptions),
            React__default["default"].createElement("div", { className: MegaMenuDrawer_module['mega-menu-drawer__actions'] }, signUpActions)),
        isCandidate && promo && (React__default["default"].createElement("div", { className: MegaMenuDrawer_module['mega-menu-drawer__promo'] },
            React__default["default"].createElement("span", null, promo.content),
            React__default["default"].createElement("a", { href: promo.linkUrl, className: MegaMenuDrawer_module['mega-menu-drawer__promo-link'] }, promo.linkText))),
        React__default["default"].createElement(ListIconLink_component.ListIconLink, { listIcon: drawer_constants.ListMegaMenu, size: 34, spacing: 20, className: "".concat(MegaMenuDrawer_module['mega-menu-drawer__links'], " ").concat(isCandidate ? MegaMenuDrawer_module['mega-menu-drawer__links--candidate'] : '') })));
};
var MegaMenuDrawer = Component;

exports.MegaMenuDrawer = MegaMenuDrawer;
//# sourceMappingURL=MegaMenuDrawer.component.js.map
