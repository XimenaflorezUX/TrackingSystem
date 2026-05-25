'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var Tab_component = require('../../molecules/Tab/Tab.component.js');
var TabButton_component = require('../../molecules/TabButton/TabButton.component.js');
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
var LogoutHeader_modules = require('./LogoutHeader.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var leftTabButton = _a.leftTabButton, rightTabButton = _a.rightTabButton, searchbar = _a.searchbar, mobileSearchbar = _a.mobileSearchbar, signInLink = _a.signInLink, signUpButton = _a.signUpButton, breadcrumbProps = _a.breadcrumbProps, onMenuClick = _a.onMenuClick, homeUrl = _a.homeUrl, allJobsText = _a.allJobsText, allJobsLink = _a.allJobsLink, _b = _a.hasMobileSearchBarButton, hasMobileSearchBarButton = _b === void 0 ? false : _b;
    var type = signInLink.type, href = signInLink.href, text = signInLink.text;
    var buttonText = signUpButton.buttonText, loadingState = signUpButton.loadingState, onClick = signUpButton.onClick;
    var _c = React.useState(false), showSearchBar = _c[0], setShowSearchBar = _c[1];
    var iconSize = index.useMediaQuery(25, {
        sm: 16
    });
    var isMobileButton = index.useMediaQuery(false, {
        md: true
    });
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var LogoutHeaderMobileSearchbar = index.useMediaQuery(null, {
        md: (React__default["default"].createElement(MobileSearchbar_component.MobileSearchbar, tslib_es6.__assign({}, mobileSearchbar, { termValue: searchbar.termValue, onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    // Tab Component
    var LogoutHeaderTab = index.useMediaQuery(React__default["default"].createElement(Tab_component.Tab, null,
        React__default["default"].createElement(TabButton_component.TabButton, { tabButtonLink: leftTabButton, tabButtonLinkStyles: headers_constants.LeftLinkStyles, tabButtonStyles: headers_constants.LeftTabStyles }),
        React__default["default"].createElement(TabButton_component.TabButton, { tabButtonLink: rightTabButton, tabButtonLinkStyles: headers_constants.RightLinkStyles, tabButtonStyles: headers_constants.RightTabStyles })), {
        md: null
    });
    // Menu Button Component
    var LogoutHeaderMenuButton = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, headers_constants.MenuButtonProps, { onClick: onMenuClick })));
    // Header Logo Component
    var LogoutHeaderLogo = index.useMediaQuery(React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps)), {
        sm: React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps, { isoView: true }))
    });
    // Mobile Searchbar Button Component
    var LogoutHeaderMobileSearchbarButton = index.useMediaQuery(null, {
        xs: hasMobileSearchBarButton ? (React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps))) : (React__default["default"].createElement(React.Fragment, null)),
        md: React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps))
    });
    // Searchbar Component
    var LogoutHeaderSearchbar = index.useMediaQuery(React__default["default"].createElement(Searchbar_component.Searchbar, tslib_es6.__assign({}, searchbar, { searchButtonProps: headers_constants.searchPropsButton, removeButtonProps: headers_constants.removePropsButton })), {
        md: null
    });
    // SignIn Link Component
    var LogoutHeaderLinkSignIn = index.useMediaQuery(React__default["default"].createElement(Link_component.Link, { type: type, href: href, text: text, iconProps: tslib_es6.__assign(tslib_es6.__assign({}, common_constants.SignInIcon), { size: iconSize }), linkStyles: common_constants.SignInStyles, isMobile: isMobileButton }));
    // SignUp Button Component
    var LogoutHeaderButtonSignUp = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, common_constants.SignUpButtonStyle, { buttonText: buttonText, iconProps: tslib_es6.__assign(tslib_es6.__assign({}, common_constants.SignUpButtonStyle.iconProps), { size: iconSize }), onClick: onClick, loadingState: loadingState, isMobile: isMobileButton })));
    // Breadcrumbs Component
    var LogoutHeaderBreadcrumbs = index.useMediaQuery(React__default["default"].createElement(Breadcrumbs_component.Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React__default["default"].createElement("header", { className: LogoutHeader_modules.LogoutHeaderComponent },
        LogoutHeaderMobileSearchbar,
        React__default["default"].createElement("div", { className: LogoutHeader_modules['magneto-ui-first-row'] }, LogoutHeaderTab),
        React__default["default"].createElement("div", { className: LogoutHeader_modules['magneto-ui-second-row'] },
            React__default["default"].createElement("div", { className: LogoutHeader_modules['magneto-ui-left-section'] },
                LogoutHeaderMenuButton,
                React__default["default"].createElement("a", { href: homeUrl }, LogoutHeaderLogo),
                LogoutHeaderMobileSearchbarButton),
            React__default["default"].createElement("div", { className: LogoutHeader_modules['magneto-ui-middle-section'] },
                LogoutHeaderSearchbar,
                " ",
                React__default["default"].createElement(SearchItem_component.SearchItem, { tag: allJobsText, url: allJobsLink })),
            React__default["default"].createElement("div", { className: LogoutHeader_modules['magneto-ui-right-section'] },
                LogoutHeaderLinkSignIn,
                LogoutHeaderButtonSignUp)),
        React__default["default"].createElement("div", { className: LogoutHeader_modules['magneto-ui-third-row'] }, LogoutHeaderBreadcrumbs)));
};
/**
 * UI Header Organisim for 1024 resolution/size
 */
var LogoutHeader = Component;

exports.LogoutHeader = LogoutHeader;
//# sourceMappingURL=LogoutHeader.component.js.map
