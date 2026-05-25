'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var index = require('../../../hooks/useMediaQuery/index.js');
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
var SearchBar_component = require('../../molecules/MegaMenuSearchBar/SearchBar.component.js');
var LoginHeader_modules = require('./LoginHeader.modules.scss.js');
var MegaMenuSearchBar_component = require('../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var isMegaSearchbar = function (searchbar) {
    return 'occupation' in searchbar;
};
var Component = function (_a) {
    var onClick = _a.onClick, listMenuUserProps = _a.listMenuUserProps, breadcrumbProps = _a.breadcrumbProps, profileImage = _a.profileImage, jobsTabsProps = _a.jobsTabsProps, processTabsProps = _a.processTabsProps, curriculumTabProps = _a.curriculumTabProps, searchbar = _a.searchbar, MobileSearchbarProps = _a.MobileSearchbarProps, homeUrl = _a.homeUrl, onlyMenuUser = _a.onlyMenuUser, renderHeaderUserMenu = _a.renderHeaderUserMenu;
    var _b = React.useState(false), showSearchBar = _b[0], setShowSearchBar = _b[1];
    var _c = React.useState(false), toggleMobileDrawer = _c[0], setToggleMobileDrawer = _c[1];
    var isMega = isMegaSearchbar(searchbar);
    var source = isMega ? searchbar.occupation : searchbar;
    var searchValue = source.termValue;
    var toggleSearchBar = React.useCallback(function () {
        setShowSearchBar(function (prev) { return !prev; });
        setToggleMobileDrawer(false);
    }, []);
    var mobileSearchbarValues = React.useMemo(function () {
        var termValue = source.termValue, placeholder = source.placeholder, onSearch = source.onSearch, options = source.options, onSelectOption = source.onSelectOption, onSubmit = source.onSubmit;
        return tslib_es6.__assign(tslib_es6.__assign({}, MobileSearchbarProps), { termValue: termValue, placeholder: placeholder, onSearch: onSearch, options: options, onSelectOption: onSelectOption, onSubmit: onSubmit });
    }, [source, MobileSearchbarProps]);
    var loginHeaderMobileSearchbar = index.useMediaQuery(null, {
        md: (React__default["default"].createElement(MobileSearchbar_component.MobileSearchbar, tslib_es6.__assign({}, mobileSearchbarValues, { onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    var loginHeaderMenuButton = index.useMediaQuery(React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, headers_constants.MenuButtonProps, { onClick: onClick })));
    var loginHeaderLogo = index.useMediaQuery(React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps)), {
        sm: React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, common_constants.logoProps, { isoView: true }))
    });
    var loginHeaderMobileSearchbarButton = index.useMediaQuery(null, {
        md: React__default["default"].createElement(SearchButton_component.SearchButton, tslib_es6.__assign({ searchValue: searchValue, onClick: toggleSearchBar }, headers_constants.MobileSearchbarButtonProps))
    });
    var loginHeaderSearchbar = index.useMediaQuery(isMega ? React__default["default"].createElement(MegaMenuSearchBar_component, tslib_es6.__assign({}, searchbar)) : React__default["default"].createElement(SearchBar_component, tslib_es6.__assign({}, searchbar)), { md: null });
    var loginHeaderOptionTabs = index.useMediaQuery(React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(HeaderTabs_component.HeaderTabs, tslib_es6.__assign({}, jobsTabsProps)),
        React__default["default"].createElement(HeaderTabs_component.HeaderTabs, tslib_es6.__assign({}, processTabsProps)),
        React__default["default"].createElement(HeaderTabs_component.HeaderTabs, tslib_es6.__assign({}, curriculumTabProps))), { xl: null });
    var loginHeaderPopover = index.useMediaQuery(React__default["default"].createElement(UserMenu_component.UserMenu, { listMenuUserProps: tslib_es6.__assign(tslib_es6.__assign({}, listMenuUserProps), { showAllItems: onlyMenuUser }), profileImage: profileImage, renderHeader: renderHeaderUserMenu }), { md: React__default["default"].createElement(Avatar_component.Avatar, tslib_es6.__assign({}, profileImage, { onClick: function () { return setToggleMobileDrawer(true); } })) });
    var loginHeaderBreadcrumbs = index.useMediaQuery(React__default["default"].createElement(Breadcrumbs_component.Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React__default["default"].createElement("header", { className: LoginHeader_modules.LoginHeaderComponent },
        loginHeaderMobileSearchbar,
        React__default["default"].createElement("div", { className: LoginHeader_modules['magneto-ui-first-row'] }),
        React__default["default"].createElement("div", { className: LoginHeader_modules['magneto-ui-second-row'] },
            React__default["default"].createElement("div", { className: LoginHeader_modules['magneto-ui-left-section'] },
                loginHeaderMenuButton,
                React__default["default"].createElement("a", { href: homeUrl }, loginHeaderLogo),
                loginHeaderMobileSearchbarButton),
            React__default["default"].createElement("div", { className: LoginHeader_modules['magneto-ui-searchbar-section'] }, loginHeaderSearchbar),
            React__default["default"].createElement("div", { className: LoginHeader_modules['magneto-ui-user-section'] },
                !onlyMenuUser && loginHeaderOptionTabs,
                loginHeaderPopover)),
        React__default["default"].createElement("div", { className: LoginHeader_modules['magneto-ui-third-row'] }, loginHeaderBreadcrumbs),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(false); } },
            renderHeaderUserMenu && renderHeaderUserMenu(),
            React__default["default"].createElement(ListMenuIcons_component.ListMenuIcons, tslib_es6.__assign({}, listMenuUserProps)))));
};
/**
 * UI Organism Component for LoginHeader
 */
var LoginHeader = Component;

exports.LoginHeader = LoginHeader;
//# sourceMappingURL=LoginHeader.component.js.map
