'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
var SearchItem_component = require('../../atoms/SearchItem/SearchItem.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
var Breadcrumbs_component = require('../../molecules/Breadcrumbs/Breadcrumbs.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
var MobileSearchbar_component = require('../../molecules/MobileSearchbar/MobileSearchbar.component.js');
require('../../molecules/Modal/Modal.component.js');
var Searchbar_component = require('../../molecules/Searchbar/Searchbar.component.js');
var SearchButton_component = require('../../molecules/SearchButton/SearchButton.component.js');
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
var LogoutJobsHeader_module = require('./LogoutJobsHeader.module.scss.js');
var BrandMenu_component = require('../BrandMenu/BrandMenu.component.js');
var MegaMenuSearchBar_component = require('../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Muiclass = 'magneto-ui';
var LogoutJobsHeader = function (_a) {
    var _b;
    var searchbar = _a.searchbar, mobileSearchbar = _a.mobileSearchbar, signInLink = _a.signInLink, signUpButton = _a.signUpButton, breadcrumbProps = _a.breadcrumbProps, onMenuClick = _a.onMenuClick, homeUrl = _a.homeUrl, brandMenuProps = _a.brandMenuProps, gif = _a.gif, allJobsText = _a.allJobsText, allJobsLink = _a.allJobsLink;
    var type = signInLink.type, href = signInLink.href, text = signInLink.text;
    var buttonText = signUpButton.buttonText, loadingState = signUpButton.loadingState, onClick = signUpButton.onClick;
    var companySlug = brandMenuProps.companySlug, companyLogo = brandMenuProps.companyLogo, companyUrl = brandMenuProps.companyUrl, brandsProps = brandMenuProps.brandsProps;
    var _c = React.useState(false), showSearchBar = _c[0], setShowSearchBar = _c[1];
    var isMobileButton = index.useMediaQuery(false, {
        md: true
    });
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var isLoginHeaderSearch = function (searchbar) {
        return typeof searchbar.occupation === 'object' && searchbar.occupation !== null;
    };
    var LogoutHeaderMobileSearchbar = index.useMediaQuery(null, {
        md: (React__default["default"].createElement(MobileSearchbar_component.MobileSearchbar, tslib_es6.__assign({}, mobileSearchbar, { onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    var LogoutHeaderMenuButton = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, headers_constants.MenuButtonProps, { onClick: onMenuClick })));
    var LogoutHeaderMobileSearchbarButton = index.useMediaQuery(null, {
        md: isLoginHeaderSearch(searchbar) ? (React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchbar.occupation.termValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps))) : (React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps)))
    });
    var LogoutHeaderSearchbar = index.useMediaQuery(isLoginHeaderSearch(searchbar) ? (React__default["default"].createElement(MegaMenuSearchBar_component, tslib_es6.__assign({}, searchbar))) : (React__default["default"].createElement(Searchbar_component.Searchbar, tslib_es6.__assign({}, searchbar, { searchButtonProps: headers_constants.searchPropsButton, removeButtonProps: headers_constants.removePropsButton }))), {
        md: null
    });
    var LogoutHeaderLinkSignIn = index.useMediaQuery(React__default["default"].createElement(Link_component.Link, { type: type, href: href, text: text, iconProps: common_constants.SignInIcon, linkStyles: common_constants.SignInStyles, isMobile: isMobileButton }));
    var LogoutHeaderButtonSignUp = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ buttonSize: "full" }, common_constants.SignUpButtonStyle, { buttonText: buttonText, onClick: onClick, loadingState: loadingState, isMobile: isMobileButton })));
    var LogoutHeaderBreadcrumbs = index.useMediaQuery(React__default["default"].createElement(Breadcrumbs_component.Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React__default["default"].createElement("header", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header")] },
        LogoutHeaderMobileSearchbar,
        React__default["default"].createElement("div", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--second-row")] },
            React__default["default"].createElement("div", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--second-row__left-section")] },
                LogoutHeaderMenuButton,
                React__default["default"].createElement("a", { href: homeUrl },
                    React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps, { isoView: true }))),
                brandsProps.brands && ((_b = brandsProps.brands) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (React__default["default"].createElement(BrandMenu_component, tslib_es6.__assign({}, brandMenuProps))) : (React__default["default"].createElement("a", { href: companyUrl },
                    React__default["default"].createElement("img", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--second-row__left-section--company-logo")], src: companyLogo, alt: companySlug ? companySlug : '' }))),
                gif && (React__default["default"].createElement("img", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--second-row__left-section--gif")], alt: companySlug ? companySlug : '', src: gif })),
                LogoutHeaderMobileSearchbarButton),
            React__default["default"].createElement("div", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--second-row__middle-section")] },
                LogoutHeaderSearchbar,
                React__default["default"].createElement(SearchItem_component.SearchItem, { tag: allJobsText, url: allJobsLink })),
            React__default["default"].createElement("div", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--second-row__right-section")] },
                LogoutHeaderLinkSignIn,
                LogoutHeaderButtonSignUp)),
        React__default["default"].createElement("div", { className: LogoutJobsHeader_module["".concat(Muiclass, "-logout-jobs-header--third-row")] }, LogoutHeaderBreadcrumbs)));
};

module.exports = LogoutJobsHeader;
//# sourceMappingURL=LogoutJobsHeader.component.js.map
