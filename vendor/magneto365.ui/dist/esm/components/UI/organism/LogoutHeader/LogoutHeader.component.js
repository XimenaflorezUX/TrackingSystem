import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, Fragment } from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoProps, SignInIcon, SignInStyles, SignUpButtonStyle } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { LeftLinkStyles, LeftTabStyles, RightLinkStyles, RightTabStyles, MenuButtonProps, MobileSearchbarButtonProps, searchPropsButton, removePropsButton } from '../../../../constants/stories/headers.constants.js';
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
import { SearchItem } from '../../atoms/SearchItem/SearchItem.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import { Breadcrumbs } from '../../molecules/Breadcrumbs/Breadcrumbs.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import { Tab } from '../../molecules/Tab/Tab.component.js';
import { TabButton } from '../../molecules/TabButton/TabButton.component.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import { MobileSearchbar } from '../../molecules/MobileSearchbar/MobileSearchbar.component.js';
import '../../molecules/Modal/Modal.component.js';
import { Searchbar } from '../../molecules/Searchbar/Searchbar.component.js';
import { SearchButton } from '../../molecules/SearchButton/SearchButton.component.js';
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
import styles from './LogoutHeader.modules.scss.js';

var Component = function (_a) {
    var leftTabButton = _a.leftTabButton, rightTabButton = _a.rightTabButton, searchbar = _a.searchbar, mobileSearchbar = _a.mobileSearchbar, signInLink = _a.signInLink, signUpButton = _a.signUpButton, breadcrumbProps = _a.breadcrumbProps, onMenuClick = _a.onMenuClick, homeUrl = _a.homeUrl, allJobsText = _a.allJobsText, allJobsLink = _a.allJobsLink, _b = _a.hasMobileSearchBarButton, hasMobileSearchBarButton = _b === void 0 ? false : _b;
    var type = signInLink.type, href = signInLink.href, text = signInLink.text;
    var buttonText = signUpButton.buttonText, loadingState = signUpButton.loadingState, onClick = signUpButton.onClick;
    var _c = useState(false), showSearchBar = _c[0], setShowSearchBar = _c[1];
    var iconSize = useMediaQuery(25, {
        sm: 16
    });
    var isMobileButton = useMediaQuery(false, {
        md: true
    });
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var LogoutHeaderMobileSearchbar = useMediaQuery(null, {
        md: (React.createElement(MobileSearchbar, __assign({}, mobileSearchbar, { termValue: searchbar.termValue, onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    // Tab Component
    var LogoutHeaderTab = useMediaQuery(React.createElement(Tab, null,
        React.createElement(TabButton, { tabButtonLink: leftTabButton, tabButtonLinkStyles: LeftLinkStyles, tabButtonStyles: LeftTabStyles }),
        React.createElement(TabButton, { tabButtonLink: rightTabButton, tabButtonLinkStyles: RightLinkStyles, tabButtonStyles: RightTabStyles })), {
        md: null
    });
    // Menu Button Component
    var LogoutHeaderMenuButton = useMediaQuery(React.createElement(MainButton, __assign({}, MenuButtonProps, { onClick: onMenuClick })));
    // Header Logo Component
    var LogoutHeaderLogo = useMediaQuery(React.createElement(LogoComponent, __assign({}, logoProps)), {
        sm: React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))
    });
    // Mobile Searchbar Button Component
    var LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
        xs: hasMobileSearchBarButton ? (React.createElement(SearchButton, __assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps))) : (React.createElement(Fragment, null)),
        md: React.createElement(SearchButton, __assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps))
    });
    // Searchbar Component
    var LogoutHeaderSearchbar = useMediaQuery(React.createElement(Searchbar, __assign({}, searchbar, { searchButtonProps: searchPropsButton, removeButtonProps: removePropsButton })), {
        md: null
    });
    // SignIn Link Component
    var LogoutHeaderLinkSignIn = useMediaQuery(React.createElement(Link, { type: type, href: href, text: text, iconProps: __assign(__assign({}, SignInIcon), { size: iconSize }), linkStyles: SignInStyles, isMobile: isMobileButton }));
    // SignUp Button Component
    var LogoutHeaderButtonSignUp = useMediaQuery(React.createElement(MainButton, __assign({}, SignUpButtonStyle, { buttonText: buttonText, iconProps: __assign(__assign({}, SignUpButtonStyle.iconProps), { size: iconSize }), onClick: onClick, loadingState: loadingState, isMobile: isMobileButton })));
    // Breadcrumbs Component
    var LogoutHeaderBreadcrumbs = useMediaQuery(React.createElement(Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React.createElement("header", { className: styles.LogoutHeaderComponent },
        LogoutHeaderMobileSearchbar,
        React.createElement("div", { className: styles['magneto-ui-first-row'] }, LogoutHeaderTab),
        React.createElement("div", { className: styles['magneto-ui-second-row'] },
            React.createElement("div", { className: styles['magneto-ui-left-section'] },
                LogoutHeaderMenuButton,
                React.createElement("a", { href: homeUrl }, LogoutHeaderLogo),
                LogoutHeaderMobileSearchbarButton),
            React.createElement("div", { className: styles['magneto-ui-middle-section'] },
                LogoutHeaderSearchbar,
                " ",
                React.createElement(SearchItem, { tag: allJobsText, url: allJobsLink })),
            React.createElement("div", { className: styles['magneto-ui-right-section'] },
                LogoutHeaderLinkSignIn,
                LogoutHeaderButtonSignUp)),
        React.createElement("div", { className: styles['magneto-ui-third-row'] }, LogoutHeaderBreadcrumbs)));
};
/**
 * UI Header Organisim for 1024 resolution/size
 */
var LogoutHeader = Component;

export { LogoutHeader };
//# sourceMappingURL=LogoutHeader.component.js.map
