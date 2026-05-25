'use strict';

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
var Breadcrumbs_component = require('../../molecules/Breadcrumbs/Breadcrumbs.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
var HeaderTabs_component = require('../../molecules/HeaderTabs/HeaderTabs.component.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var ListMenuIcons_component = require('../../molecules/ListMenuIcons/ListMenuIcons.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
var MobileSearchbar_component = require('../../molecules/MobileSearchbar/MobileSearchbar.component.js');
require('../../molecules/Modal/Modal.component.js');
var Searchbar_component = require('../../molecules/Searchbar/Searchbar.component.js');
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
var BrandMenu_component = require('../BrandMenu/BrandMenu.component.js');
var LoginJobsHeader_module = require('./LoginJobsHeader.module.scss.js');
var MegaMenuSearchBar_component = require('../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Muiclass = 'magneto-ui';
var LoginJobsHeader = function (_a) {
    var _b;
    var searchbar = _a.searchbar, mobileSearchbar = _a.mobileSearchbar, breadcrumbProps = _a.breadcrumbProps, onMenuClick = _a.onMenuClick, homeUrl = _a.homeUrl, profileImage = _a.profileImage, listMenuUserProps = _a.listMenuUserProps, brandMenuProps = _a.brandMenuProps, gif = _a.gif, jobsTabsProps = _a.jobsTabsProps, processTabsProps = _a.processTabsProps, curriculumTabProps = _a.curriculumTabProps;
    var companySlug = brandMenuProps.companySlug, companyLogo = brandMenuProps.companyLogo, companyUrl = brandMenuProps.companyUrl, brandsProps = brandMenuProps.brandsProps;
    var _c = React.useState(false), showSearchBar = _c[0], setShowSearchBar = _c[1];
    var _d = React.useState(false), toggleMobileDrawer = _d[0], setToggleMobileDrawer = _d[1];
    var haveGif = React.useMemo(function () {
        return gif ? LoginJobsHeader_module['have-gif'] : '';
    }, [gif]);
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var isLoginHeaderSearch = function (searchbar) {
        return typeof searchbar.occupation === 'object' && searchbar.occupation !== null;
    };
    var loginHeaderPopover = index.useMediaQuery(React__default["default"].createElement(UserMenu_component.UserMenu, { listMenuUserProps: listMenuUserProps, profileImage: profileImage }), {
        md: React__default["default"].createElement(Avatar_component.Avatar, tslib_es6.__assign({}, profileImage, { onClick: function () { return setToggleMobileDrawer(true); } }))
    });
    var LogoutHeaderMobileSearchbar = index.useMediaQuery(null, {
        md: (React__default["default"].createElement(MobileSearchbar_component.MobileSearchbar, tslib_es6.__assign({}, mobileSearchbar, { onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    var loginHeaderOptionTabs = index.useMediaQuery(React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(HeaderTabs_component.HeaderTabs, tslib_es6.__assign({}, jobsTabsProps)),
        React__default["default"].createElement(HeaderTabs_component.HeaderTabs, tslib_es6.__assign({}, processTabsProps)),
        React__default["default"].createElement(HeaderTabs_component.HeaderTabs, tslib_es6.__assign({}, curriculumTabProps))), {
        xl: null
    });
    var LoginHeaderMenuButton = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, headers_constants.MenuButtonProps, { onClick: onMenuClick })));
    var LogoutHeaderMobileSearchbarButton = index.useMediaQuery(null, {
        md: isLoginHeaderSearch(searchbar) ? (React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchbar.occupation.termValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps))) : (React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps)))
    });
    var LogoutHeaderSearchbar = index.useMediaQuery(isLoginHeaderSearch(searchbar) ? (React__default["default"].createElement(MegaMenuSearchBar_component, tslib_es6.__assign({}, searchbar))) : (React__default["default"].createElement(Searchbar_component.Searchbar, tslib_es6.__assign({}, searchbar, { searchButtonProps: headers_constants.searchPropsButton, removeButtonProps: headers_constants.removePropsButton }))), {
        md: null
    });
    // Breadcrumbs Component
    var LogoutHeaderBreadcrumbs = index.useMediaQuery(React__default["default"].createElement(Breadcrumbs_component.Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React__default["default"].createElement("header", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header")] },
        LogoutHeaderMobileSearchbar,
        React__default["default"].createElement("div", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--second-row")] },
            React__default["default"].createElement("div", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--second-row__left-section")] },
                LoginHeaderMenuButton,
                React__default["default"].createElement("a", { href: homeUrl },
                    React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps, { isoView: true }))),
                brandsProps.brands && ((_b = brandsProps.brands) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (React__default["default"].createElement(BrandMenu_component, tslib_es6.__assign({}, brandMenuProps))) : (React__default["default"].createElement("a", { href: companyUrl },
                    React__default["default"].createElement("img", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--second-row__left-section--company-logo")], src: companyLogo, alt: companySlug ? companySlug : '' }))),
                gif && (React__default["default"].createElement("img", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--second-row__left-section--gif")], alt: companySlug ? companySlug : '', src: gif })),
                LogoutHeaderMobileSearchbarButton),
            React__default["default"].createElement("div", { className: "".concat(LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--second-row__middle-section")], " ").concat(haveGif) }, LogoutHeaderSearchbar),
            React__default["default"].createElement("div", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--second-row__right-section")] },
                !gif && loginHeaderOptionTabs,
                " ",
                loginHeaderPopover)),
        React__default["default"].createElement("div", { className: LoginJobsHeader_module["".concat(Muiclass, "-login-jobs-header--third-row")] }, LogoutHeaderBreadcrumbs),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(false); } },
            React__default["default"].createElement(ListMenuIcons_component.ListMenuIcons, tslib_es6.__assign({}, listMenuUserProps)))));
};

module.exports = LoginJobsHeader;
//# sourceMappingURL=LoginJobsHeader.component.js.map
