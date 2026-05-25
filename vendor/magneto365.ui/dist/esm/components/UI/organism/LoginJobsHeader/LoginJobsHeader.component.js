import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo } from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoProps } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { MenuButtonProps, MobileSearchbarButtonProps, searchPropsButton, removePropsButton } from '../../../../constants/stories/headers.constants.js';
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
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
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
import { Searchbar } from '../../molecules/Searchbar/Searchbar.component.js';
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
import BrandMenu from '../BrandMenu/BrandMenu.component.js';
import styles from './LoginJobsHeader.module.scss.js';
import MegaMenuSearchBar from '../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js';

var Muiclass = 'magneto-ui';
var LoginJobsHeader = function (_a) {
    var _b;
    var searchbar = _a.searchbar, mobileSearchbar = _a.mobileSearchbar, breadcrumbProps = _a.breadcrumbProps, onMenuClick = _a.onMenuClick, homeUrl = _a.homeUrl, profileImage = _a.profileImage, listMenuUserProps = _a.listMenuUserProps, brandMenuProps = _a.brandMenuProps, gif = _a.gif, jobsTabsProps = _a.jobsTabsProps, processTabsProps = _a.processTabsProps, curriculumTabProps = _a.curriculumTabProps;
    var companySlug = brandMenuProps.companySlug, companyLogo = brandMenuProps.companyLogo, companyUrl = brandMenuProps.companyUrl, brandsProps = brandMenuProps.brandsProps;
    var _c = useState(false), showSearchBar = _c[0], setShowSearchBar = _c[1];
    var _d = useState(false), toggleMobileDrawer = _d[0], setToggleMobileDrawer = _d[1];
    var haveGif = useMemo(function () {
        return gif ? styles['have-gif'] : '';
    }, [gif]);
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var isLoginHeaderSearch = function (searchbar) {
        return typeof searchbar.occupation === 'object' && searchbar.occupation !== null;
    };
    var loginHeaderPopover = useMediaQuery(React.createElement(UserMenu, { listMenuUserProps: listMenuUserProps, profileImage: profileImage }), {
        md: React.createElement(Avatar, __assign({}, profileImage, { onClick: function () { return setToggleMobileDrawer(true); } }))
    });
    var LogoutHeaderMobileSearchbar = useMediaQuery(null, {
        md: (React.createElement(MobileSearchbar, __assign({}, mobileSearchbar, { onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    var loginHeaderOptionTabs = useMediaQuery(React.createElement(React.Fragment, null,
        React.createElement(HeaderTabs, __assign({}, jobsTabsProps)),
        React.createElement(HeaderTabs, __assign({}, processTabsProps)),
        React.createElement(HeaderTabs, __assign({}, curriculumTabProps))), {
        xl: null
    });
    var LoginHeaderMenuButton = useMediaQuery(React.createElement(MainButton, __assign({}, MenuButtonProps, { onClick: onMenuClick })));
    var LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
        md: isLoginHeaderSearch(searchbar) ? (React.createElement(SearchButton, __assign({ searchValue: searchbar.occupation.termValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps))) : (React.createElement(SearchButton, __assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps)))
    });
    var LogoutHeaderSearchbar = useMediaQuery(isLoginHeaderSearch(searchbar) ? (React.createElement(MegaMenuSearchBar, __assign({}, searchbar))) : (React.createElement(Searchbar, __assign({}, searchbar, { searchButtonProps: searchPropsButton, removeButtonProps: removePropsButton }))), {
        md: null
    });
    // Breadcrumbs Component
    var LogoutHeaderBreadcrumbs = useMediaQuery(React.createElement(Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React.createElement("header", { className: styles["".concat(Muiclass, "-login-jobs-header")] },
        LogoutHeaderMobileSearchbar,
        React.createElement("div", { className: styles["".concat(Muiclass, "-login-jobs-header--second-row")] },
            React.createElement("div", { className: styles["".concat(Muiclass, "-login-jobs-header--second-row__left-section")] },
                LoginHeaderMenuButton,
                React.createElement("a", { href: homeUrl },
                    React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))),
                brandsProps.brands && ((_b = brandsProps.brands) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (React.createElement(BrandMenu, __assign({}, brandMenuProps))) : (React.createElement("a", { href: companyUrl },
                    React.createElement("img", { className: styles["".concat(Muiclass, "-login-jobs-header--second-row__left-section--company-logo")], src: companyLogo, alt: companySlug ? companySlug : '' }))),
                gif && (React.createElement("img", { className: styles["".concat(Muiclass, "-login-jobs-header--second-row__left-section--gif")], alt: companySlug ? companySlug : '', src: gif })),
                LogoutHeaderMobileSearchbarButton),
            React.createElement("div", { className: "".concat(styles["".concat(Muiclass, "-login-jobs-header--second-row__middle-section")], " ").concat(haveGif) }, LogoutHeaderSearchbar),
            React.createElement("div", { className: styles["".concat(Muiclass, "-login-jobs-header--second-row__right-section")] },
                !gif && loginHeaderOptionTabs,
                " ",
                loginHeaderPopover)),
        React.createElement("div", { className: styles["".concat(Muiclass, "-login-jobs-header--third-row")] }, LogoutHeaderBreadcrumbs),
        React.createElement(MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(false); } },
            React.createElement(ListMenuIcons, __assign({}, listMenuUserProps)))));
};

export { LoginJobsHeader as default };
//# sourceMappingURL=LoginJobsHeader.component.js.map
