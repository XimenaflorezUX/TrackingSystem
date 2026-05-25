import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, useMemo } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { Avatar } from '../../atoms/Avatar/Avatar.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoProps } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { MenuButtonProps, MobileSearchbarButtonProps } from '../../../../constants/stories/headers.constants.js';
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
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import { Breadcrumbs } from '../../molecules/Breadcrumbs/Breadcrumbs.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import { HeaderTabs } from '../../molecules/HeaderTabs/HeaderTabs.component.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { ListMenuIcons } from '../../molecules/ListMenuIcons/ListMenuIcons.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
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
import SearchBar from '../../molecules/MegaMenuSearchBar/SearchBar.component.js';
import styles from './LoginHeader.modules.scss.js';
import MegaMenuSearchBar from '../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js';

var isMegaSearchbar = function (searchbar) {
    return 'occupation' in searchbar;
};
var Component = function (_a) {
    var onClick = _a.onClick, listMenuUserProps = _a.listMenuUserProps, breadcrumbProps = _a.breadcrumbProps, profileImage = _a.profileImage, jobsTabsProps = _a.jobsTabsProps, processTabsProps = _a.processTabsProps, curriculumTabProps = _a.curriculumTabProps, searchbar = _a.searchbar, MobileSearchbarProps = _a.MobileSearchbarProps, homeUrl = _a.homeUrl, onlyMenuUser = _a.onlyMenuUser, renderHeaderUserMenu = _a.renderHeaderUserMenu;
    var _b = useState(false), showSearchBar = _b[0], setShowSearchBar = _b[1];
    var _c = useState(false), toggleMobileDrawer = _c[0], setToggleMobileDrawer = _c[1];
    var isMega = isMegaSearchbar(searchbar);
    var source = isMega ? searchbar.occupation : searchbar;
    var searchValue = source.termValue;
    var toggleSearchBar = useCallback(function () {
        setShowSearchBar(function (prev) { return !prev; });
        setToggleMobileDrawer(false);
    }, []);
    var mobileSearchbarValues = useMemo(function () {
        var termValue = source.termValue, placeholder = source.placeholder, onSearch = source.onSearch, options = source.options, onSelectOption = source.onSelectOption, onSubmit = source.onSubmit;
        return __assign(__assign({}, MobileSearchbarProps), { termValue: termValue, placeholder: placeholder, onSearch: onSearch, options: options, onSelectOption: onSelectOption, onSubmit: onSubmit });
    }, [source, MobileSearchbarProps]);
    var loginHeaderMobileSearchbar = useMediaQuery(null, {
        md: (React.createElement(MobileSearchbar, __assign({}, mobileSearchbarValues, { onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    var loginHeaderMenuButton = useMediaQuery(React.createElement(MainButton, __assign({}, MenuButtonProps, { onClick: onClick })));
    var loginHeaderLogo = useMediaQuery(React.createElement(LogoComponent, __assign({}, logoProps)), {
        sm: React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))
    });
    var loginHeaderMobileSearchbarButton = useMediaQuery(null, {
        md: React.createElement(SearchButton, __assign({ searchValue: searchValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps))
    });
    var loginHeaderSearchbar = useMediaQuery(isMega ? React.createElement(MegaMenuSearchBar, __assign({}, searchbar)) : React.createElement(SearchBar, __assign({}, searchbar)), { md: null });
    var loginHeaderOptionTabs = useMediaQuery(React.createElement(React.Fragment, null,
        React.createElement(HeaderTabs, __assign({}, jobsTabsProps)),
        React.createElement(HeaderTabs, __assign({}, processTabsProps)),
        React.createElement(HeaderTabs, __assign({}, curriculumTabProps))), { xl: null });
    var loginHeaderPopover = useMediaQuery(React.createElement(UserMenu, { listMenuUserProps: __assign(__assign({}, listMenuUserProps), { showAllItems: onlyMenuUser }), profileImage: profileImage, renderHeader: renderHeaderUserMenu }), { md: React.createElement(Avatar, __assign({}, profileImage, { onClick: function () { return setToggleMobileDrawer(true); } })) });
    var loginHeaderBreadcrumbs = useMediaQuery(React.createElement(Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React.createElement("header", { className: styles.LoginHeaderComponent },
        loginHeaderMobileSearchbar,
        React.createElement("div", { className: styles['magneto-ui-first-row'] }),
        React.createElement("div", { className: styles['magneto-ui-second-row'] },
            React.createElement("div", { className: styles['magneto-ui-left-section'] },
                loginHeaderMenuButton,
                React.createElement("a", { href: homeUrl }, loginHeaderLogo),
                loginHeaderMobileSearchbarButton),
            React.createElement("div", { className: styles['magneto-ui-searchbar-section'] }, loginHeaderSearchbar),
            React.createElement("div", { className: styles['magneto-ui-user-section'] },
                !onlyMenuUser && loginHeaderOptionTabs,
                loginHeaderPopover)),
        React.createElement("div", { className: styles['magneto-ui-third-row'] }, loginHeaderBreadcrumbs),
        React.createElement(MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(false); } },
            renderHeaderUserMenu && renderHeaderUserMenu(),
            React.createElement(ListMenuIcons, __assign({}, listMenuUserProps)))));
};
/**
 * UI Organism Component for LoginHeader
 */
var LoginHeader = Component;

export { LoginHeader };
//# sourceMappingURL=LoginHeader.component.js.map
