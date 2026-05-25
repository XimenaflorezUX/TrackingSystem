import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoProps, SignInIcon, SignInStyles, SignUpButtonStyle } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { MobileSearchbarButtonProps, MenuButtonProps } from '../../../../constants/stories/headers.constants.js';
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
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { ListMenuIcons } from '../../molecules/ListMenuIcons/ListMenuIcons.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import MegaMenuJobsTabs from '../../molecules/MegaMenuJobsTabs/MegaMenuJobsTabs.component.js';
import MegaMenuPopover from '../../molecules/MegaMenuPopover/MegaMenuPopover.component.js';
import { MobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.component.js';
import '../../molecules/Modal/Modal.component.js';
import { SearchButton } from '../../molecules/SearchButton/SearchButton.component.js';
import '../../molecules/SimilarCard/SimilarCard.component.js';
import '../../molecules/SortMenu/SortMenu.component.js';
import '../../molecules/TimelineEvent/TimelineEvent.interface.js';
import { UserMenu } from '../../molecules/UserMenu/UserMenu.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../molecules/JobDetails/JobDetails.component.js';
import '../../molecules/Chat/Chat.component.js';
import styles from './MegaMenuMainHeader.modules.scss.js';
import { useMegaMenuMain, useMegaMenuJobs, useLoggedInUser } from '../../template/MegaMenu/MegaMenu.context.js';
import MegaMenuSearchBar from '../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js';
import { MegaMenuCountrySelector } from '../../molecules/MegaMenuCountrySelector/MegaMenuCountrySelector.component.js';

var Component = function (_a) {
    var toggleDrawerMenu = _a.toggleDrawerMenu, renderHeaderUserMenu = _a.renderHeaderUserMenu;
    var _b = useState(false), showSearchBar = _b[0], setShowSearchBar = _b[1];
    var _c = useState(false), toggleMobileDrawer = _c[0], setToggleMobileDrawer = _c[1];
    var _d = useMegaMenuMain(), homeUrl = _d.homeUrl, searchBarProps = _d.searchBarProps, loginProps = _d.loginProps, selectCountry = _d.selectCountry, mobileSearchBarProps = _d.mobileSearchBarProps;
    var popoverRef = useMegaMenuJobs().popoverRef;
    var listMenuUserProps = useLoggedInUser();
    var _e = listMenuUserProps.profileImage, profileImage = _e === void 0 ? {} : _e, isAuthenticated = listMenuUserProps.isAuthenticated;
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var isMobileButton = useMediaQuery(false, { md: true });
    var renderLogo = useMediaQuery(React.createElement(LogoComponent, __assign({}, logoProps)), {
        sm: React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))
    });
    var LogoutHeaderMobileSearchbar = useMediaQuery(null, {
        md: (React.createElement(React.Fragment, null, mobileSearchBarProps && (React.createElement(MobileSearchbar, __assign({}, mobileSearchBarProps, { termValue: mobileSearchBarProps === null || mobileSearchBarProps === void 0 ? void 0 : mobileSearchBarProps.termValue, onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))))
    });
    var renderSearchBar = useMediaQuery(React.createElement(React.Fragment, null,
        searchBarProps && React.createElement(MegaMenuSearchBar, __assign({}, searchBarProps)),
        React.createElement(MegaMenuPopover, { popoverRef: popoverRef },
            React.createElement(MegaMenuJobsTabs, null))), {
        md: searchBarProps && (React.createElement(SearchButton, __assign({ searchValue: searchBarProps.occupation.termValue, buttonSize: 'small', onClick: toggleSearchBar, className: styles['mega-menu-main-header__search-button'] }, MobileSearchbarButtonProps)))
    });
    var LogoutHeaderMenuButton = useMediaQuery(null, {
        md: React.createElement(MainButton, __assign({}, MenuButtonProps, { className: styles['mega-menu-main-header__menu'], onClick: toggleDrawerMenu }))
    });
    var loginAction = (React.createElement(Link, { type: 'button', href: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginUrl) || '', text: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginText) || '', iconProps: __assign(__assign({}, SignInIcon), { size: 15 }), linkStyles: __assign(__assign({}, SignInStyles), { buttonColor: '#FFFFFF' }), isMobile: isMobileButton }));
    var logoutAction = (React.createElement(MainButton, __assign({}, SignUpButtonStyle, { buttonText: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.signUpText) || '', onClick: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.onClickSignUp) || undefined, buttonSize: 'medium', iconProps: __assign(__assign({}, SignUpButtonStyle.iconProps), { size: 15 }), isMobile: isMobileButton })));
    var loginHeaderPopover = useMediaQuery(React.createElement(UserMenu, { listMenuUserProps: listMenuUserProps, profileImage: profileImage, renderHeader: renderHeaderUserMenu }), {
        md: React.createElement(Avatar, __assign({}, profileImage, { onClick: function () { return setToggleMobileDrawer(true); } }))
    });
    return (React.createElement("div", { className: styles['mega-menu-main-header'] },
        React.createElement("div", { className: styles['mega-menu-main-header__main'] },
            LogoutHeaderMobileSearchbar,
            LogoutHeaderMenuButton,
            React.createElement("a", { href: homeUrl }, renderLogo),
            selectCountry && React.createElement(MegaMenuCountrySelector, { selectCountry: selectCountry }),
            React.createElement("div", { className: styles['mega-menu-main-header__search'] }, renderSearchBar)),
        React.createElement("div", { className: styles['mega-menu-main-header__login'] }, isAuthenticated ? (loginHeaderPopover) : (React.createElement(React.Fragment, null,
            loginAction,
            logoutAction))),
        React.createElement(MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(false); } },
            React.createElement(React.Fragment, null,
                renderHeaderUserMenu && renderHeaderUserMenu(),
                React.createElement(ListMenuIcons, __assign({}, listMenuUserProps))))));
};
var MegaMenuMainHeader = Component;

export { MegaMenuMainHeader };
//# sourceMappingURL=MegaMenuMainHeader.component.js.map
