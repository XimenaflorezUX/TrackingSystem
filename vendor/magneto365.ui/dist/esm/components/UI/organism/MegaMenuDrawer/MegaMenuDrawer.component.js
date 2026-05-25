import { __spreadArray, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Add from '../../../../assets/Add.svg.js';
import Home2 from '../../../../assets/home.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { ButtonLink } from '../../atoms/ButtonLink/ButtonLink.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { LoginButton, logoProps } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { ListMegaMenu } from '../../../../constants/stories/drawer.constants.js';
import { CreateAccountButton } from '../../../../constants/stories/headers.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import { megaMenuJobsIcons, mobileSocialIcons } from '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import { Drawer } from '../../molecules/Drawer/Drawer.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { ListIconLink } from '../../molecules/ListIconLink/ListIconLink.component.js';
import { MegaMenuDrawerItem } from '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import { useMegaMenuMain, useMegaMenuJobs, useMegaMenu } from '../../template/MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
import '../../molecules/SimilarCard/SimilarCard.component.js';
import '../../molecules/SortMenu/SortMenu.component.js';
import '../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../molecules/UserMenu/UserMenu.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../molecules/JobDetails/JobDetails.component.js';
import '../../molecules/Chat/Chat.component.js';
import style from './MegaMenuDrawer.module.scss.js';
import MegaMenuTabs from '../../molecules/MegaMenuSocialTabs/MegaMenuTabs.component.js';

var Component = function (_a) {
    var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose, socialHeaderVariantProps = _a.socialHeaderVariantProps;
    var _c = useState(''), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = useMegaMenuMain(), homeUrl = _d.homeUrl, homeText = _d.homeText, loginProps = _d.loginProps;
    var _e = useMegaMenuJobs(), tabs = _e.tabs, allJobsAction = _e.allJobsAction, onChangeTab = _e.onChangeTab;
    var _f = useMegaMenu().socialHeaderProps, blog = _f.blog, helpOptions = _f.helpOptions;
    var isCandidate = (socialHeaderVariantProps === null || socialHeaderVariantProps === void 0 ? void 0 : socialHeaderVariantProps.variant) === 'candidate';
    var tabsPrefix = socialHeaderVariantProps === null || socialHeaderVariantProps === void 0 ? void 0 : socialHeaderVariantProps.tabsPrefix;
    var promo = socialHeaderVariantProps === null || socialHeaderVariantProps === void 0 ? void 0 : socialHeaderVariantProps.promo;
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
    };
    var onClickOption = useCallback(function (index) { return function () { return onChangeTab && onChangeTab(index); }; }, [onChangeTab]);
    var closeButton = useMemo(function () { return (React.createElement("button", { onClick: onClose },
        React.createElement(IconItem, { icon: Add, hover: false }))); }, [onClose]);
    var isActiveOption = useCallback(function (url) {
        return currentPage == url;
    }, [currentPage]);
    useEffect(function () {
        if (typeof window == 'undefined')
            return;
        setCurrentPage(window.location.href);
    }, []);
    var options = useMemo(function () {
        return tabs.map(function (tab, index) { return (React.createElement(MegaMenuDrawerItem, { text: tab.label, url: tab.url, content: {
                child: tab.content,
                title: tab.label
            }, onClickOption: onClickOption(index), isActive: isActiveOption(tab.url), key: index, icon: megaMenuJobsIcons[index] })); });
    }, [isActiveOption, onClickOption, tabs]);
    var socialOptions = useMemo(function () {
        return __spreadArray([blog], helpOptions, true).map(function (tab, index) {
            var _a, _b, _c;
            return (React.createElement(MegaMenuDrawerItem, { text: (_a = tab === null || tab === void 0 ? void 0 : tab.label) !== null && _a !== void 0 ? _a : '', url: (_b = tab === null || tab === void 0 ? void 0 : tab.url) !== null && _b !== void 0 ? _b : '', isActive: isActiveOption((_c = tab === null || tab === void 0 ? void 0 : tab.url) !== null && _c !== void 0 ? _c : ''), key: index, icon: mobileSocialIcons[index] }));
        });
    }, [blog, helpOptions, isActiveOption]);
    var signUpActions = useMemo(function () { return (React.createElement(React.Fragment, null,
        React.createElement(MainButton, __assign({ buttonSize: "full" }, CreateAccountButton, { buttonText: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.signUpText) || '', onClick: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.onClickSignUp) || undefined })),
        React.createElement(MainButton, __assign({ buttonSize: "full" }, LoginButton, { buttonText: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginText) || '', onClick: function () {
                var _a;
                window.location.replace((_a = loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginUrl) !== null && _a !== void 0 ? _a : '');
            }, buttonStyles: { buttonColor: '#f0f1f3' } })))); }, [loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginText, loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginUrl, loginProps === null || loginProps === void 0 ? void 0 : loginProps.onClickSignUp, loginProps === null || loginProps === void 0 ? void 0 : loginProps.signUpText]);
    return (React.createElement(Drawer, { isOpen: isOpen, onClose: handleClose, customPadding: 0, isFull: true, hideButton: true, className: "".concat(style['mega-menu-drawer'], " ").concat(isCandidate ? style['mega-menu-drawer--candidate'] : '') },
        React.createElement("div", { className: "".concat(style['mega-menu-drawer__header'], " ").concat(isCandidate ? style['mega-menu-drawer__header--candidate'] : '') },
            React.createElement("div", { className: "".concat(style['mega-menu-drawer__header-top'], " ").concat(isCandidate ? style['mega-menu-drawer__header-top--candidate'] : '') },
                isCandidate && tabsPrefix && React.createElement("span", { className: style['mega-menu-drawer__tabs-prefix'] }, tabsPrefix),
                React.createElement("div", { className: "".concat(style['mega-menu-drawer__close'], " ").concat(isCandidate ? style['mega-menu-drawer__close--candidate'] : '') }, closeButton)),
            React.createElement("div", { className: style['mega-menu-drawer__tabs-container'] },
                React.createElement(MegaMenuTabs, { className: "".concat(style['mega-menu-drawer__tabs'], " ").concat(isCandidate ? style['mega-menu-drawer__tabs--candidate'] : ''), showArrows: false }))),
        React.createElement("div", { className: style['mega-menu-drawer__content'] },
            React.createElement(LogoComponent, __assign({}, logoProps)),
            React.createElement("div", { className: style['mega-menu-drawer__options'] },
                React.createElement(MegaMenuDrawerItem, { text: homeText !== null && homeText !== void 0 ? homeText : 'Inicio', url: homeUrl || '', isActive: isActiveOption(homeUrl || ''), key: 'home-action', icon: Home2 }),
                options,
                React.createElement(ButtonLink, { buttonText: allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.label, href: allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.url, className: style['mega-menu-drawer__options--action'] }),
                socialOptions),
            React.createElement("div", { className: style['mega-menu-drawer__actions'] }, signUpActions)),
        isCandidate && promo && (React.createElement("div", { className: style['mega-menu-drawer__promo'] },
            React.createElement("span", null, promo.content),
            React.createElement("a", { href: promo.linkUrl, className: style['mega-menu-drawer__promo-link'] }, promo.linkText))),
        React.createElement(ListIconLink, { listIcon: ListMegaMenu, size: 34, spacing: 20, className: "".concat(style['mega-menu-drawer__links'], " ").concat(isCandidate ? style['mega-menu-drawer__links--candidate'] : '') })));
};
var MegaMenuDrawer = Component;

export { MegaMenuDrawer };
//# sourceMappingURL=MegaMenuDrawer.component.js.map
