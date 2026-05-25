'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Avatar_component = require('../../atoms/Avatar/Avatar.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
var headers_constants = require('../../../../constants/stories/headers.constants.js');
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
var Logo_component = require('../../atoms/Logo/Logo.component.js');
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../molecules/MobileDrawer/MobileDrawer.component.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var ListMenuIcons_component = require('../../molecules/ListMenuIcons/ListMenuIcons.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
var MegaMenuJobsTabs_component = require('../../molecules/MegaMenuJobsTabs/MegaMenuJobsTabs.component.js');
var MegaMenuPopover_component = require('../../molecules/MegaMenuPopover/MegaMenuPopover.component.js');
var MobileSearchbar_component = require('../../molecules/MobileSearchbar/MobileSearchbar.component.js');
require('../../molecules/Modal/Modal.component.js');
var SearchButton_component = require('../../molecules/SearchButton/SearchButton.component.js');
require('../../molecules/SimilarCard/SimilarCard.component.js');
require('../../molecules/SortMenu/SortMenu.component.js');
require('../../molecules/TimelineEvent/TimelineEvent.interface.js');
var UserMenu_component = require('../../molecules/UserMenu/UserMenu.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
var MegaMenuMainHeader_modules = require('./MegaMenuMainHeader.modules.scss.js');
var MegaMenu_context = require('../../template/MegaMenu/MegaMenu.context.js');
var MegaMenuSearchBar_component = require('../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js');
var MegaMenuCountrySelector_component = require('../../molecules/MegaMenuCountrySelector/MegaMenuCountrySelector.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var toggleDrawerMenu = _a.toggleDrawerMenu, renderHeaderUserMenu = _a.renderHeaderUserMenu;
    var _b = React.useState(false), showSearchBar = _b[0], setShowSearchBar = _b[1];
    var _c = React.useState(false), toggleMobileDrawer = _c[0], setToggleMobileDrawer = _c[1];
    var _d = MegaMenu_context.useMegaMenuMain(), homeUrl = _d.homeUrl, searchBarProps = _d.searchBarProps, loginProps = _d.loginProps, selectCountry = _d.selectCountry, mobileSearchBarProps = _d.mobileSearchBarProps;
    var popoverRef = MegaMenu_context.useMegaMenuJobs().popoverRef;
    var listMenuUserProps = MegaMenu_context.useLoggedInUser();
    var _e = listMenuUserProps.profileImage, profileImage = _e === void 0 ? {} : _e, isAuthenticated = listMenuUserProps.isAuthenticated;
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var isMobileButton = index.useMediaQuery(false, { md: true });
    var renderLogo = index.useMediaQuery(React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps)), {
        sm: React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps, { isoView: true }))
    });
    var LogoutHeaderMobileSearchbar = index.useMediaQuery(null, {
        md: (React__default["default"].createElement(React__default["default"].Fragment, null, mobileSearchBarProps && (React__default["default"].createElement(MobileSearchbar_component.MobileSearchbar, tslib_es6.__assign({}, mobileSearchBarProps, { termValue: mobileSearchBarProps === null || mobileSearchBarProps === void 0 ? void 0 : mobileSearchBarProps.termValue, onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))))
    });
    var renderSearchBar = index.useMediaQuery(React__default["default"].createElement(React__default["default"].Fragment, null,
        searchBarProps && React__default["default"].createElement(MegaMenuSearchBar_component, tslib_es6.__assign({}, searchBarProps)),
        React__default["default"].createElement(MegaMenuPopover_component, { popoverRef: popoverRef },
            React__default["default"].createElement(MegaMenuJobsTabs_component, null))), {
        md: searchBarProps && (React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchBarProps.occupation.termValue, buttonSize: 'small', onClick: toggleSearchBar, className: MegaMenuMainHeader_modules['mega-menu-main-header__search-button'] }, headers_constants.MobileSearchbarButtonProps)))
    });
    var LogoutHeaderMenuButton = index.useMediaQuery(null, {
        md: React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, headers_constants.MenuButtonProps, { className: MegaMenuMainHeader_modules['mega-menu-main-header__menu'], onClick: toggleDrawerMenu }))
    });
    var loginAction = (React__default["default"].createElement(Link_component.Link, { type: 'button', href: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginUrl) || '', text: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.loginText) || '', iconProps: tslib_es6.__assign(tslib_es6.__assign({}, common_constants.SignInIcon), { size: 15 }), linkStyles: tslib_es6.__assign(tslib_es6.__assign({}, common_constants.SignInStyles), { buttonColor: '#FFFFFF' }), isMobile: isMobileButton }));
    var logoutAction = (React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, common_constants.SignUpButtonStyle, { buttonText: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.signUpText) || '', onClick: (loginProps === null || loginProps === void 0 ? void 0 : loginProps.onClickSignUp) || undefined, buttonSize: 'medium', iconProps: tslib_es6.__assign(tslib_es6.__assign({}, common_constants.SignUpButtonStyle.iconProps), { size: 15 }), isMobile: isMobileButton })));
    var loginHeaderPopover = index.useMediaQuery(React__default["default"].createElement(UserMenu_component.UserMenu, { listMenuUserProps: listMenuUserProps, profileImage: profileImage, renderHeader: renderHeaderUserMenu }), {
        md: React__default["default"].createElement(Avatar_component.Avatar, tslib_es6.__assign({}, profileImage, { onClick: function () { return setToggleMobileDrawer(true); } }))
    });
    return (React__default["default"].createElement("div", { className: MegaMenuMainHeader_modules['mega-menu-main-header'] },
        React__default["default"].createElement("div", { className: MegaMenuMainHeader_modules['mega-menu-main-header__main'] },
            LogoutHeaderMobileSearchbar,
            LogoutHeaderMenuButton,
            React__default["default"].createElement("a", { href: homeUrl }, renderLogo),
            selectCountry && React__default["default"].createElement(MegaMenuCountrySelector_component.MegaMenuCountrySelector, { selectCountry: selectCountry }),
            React__default["default"].createElement("div", { className: MegaMenuMainHeader_modules['mega-menu-main-header__search'] }, renderSearchBar)),
        React__default["default"].createElement("div", { className: MegaMenuMainHeader_modules['mega-menu-main-header__login'] }, isAuthenticated ? (loginHeaderPopover) : (React__default["default"].createElement(React__default["default"].Fragment, null,
            loginAction,
            logoutAction))),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(false); } },
            React__default["default"].createElement(React__default["default"].Fragment, null,
                renderHeaderUserMenu && renderHeaderUserMenu(),
                React__default["default"].createElement(ListMenuIcons_component.ListMenuIcons, tslib_es6.__assign({}, listMenuUserProps))))));
};
var MegaMenuMainHeader = Component;

exports.MegaMenuMainHeader = MegaMenuMainHeader;
//# sourceMappingURL=MegaMenuMainHeader.component.js.map
