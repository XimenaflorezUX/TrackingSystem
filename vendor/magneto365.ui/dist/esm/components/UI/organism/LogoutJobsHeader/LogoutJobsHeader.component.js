import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { SignInIcon, SignInStyles, SignUpButtonStyle, logoProps } from '../../../../constants/stories/common.constants.js';
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
import styles from './LogoutJobsHeader.module.scss.js';
import BrandMenu from '../BrandMenu/BrandMenu.component.js';
import MegaMenuSearchBar from '../../molecules/MegaMenuSearchBar/MegaMenuSearchBar.component.js';

var Muiclass = 'magneto-ui';
var LogoutJobsHeader = function (_a) {
    var _b;
    var searchbar = _a.searchbar, mobileSearchbar = _a.mobileSearchbar, signInLink = _a.signInLink, signUpButton = _a.signUpButton, breadcrumbProps = _a.breadcrumbProps, onMenuClick = _a.onMenuClick, homeUrl = _a.homeUrl, brandMenuProps = _a.brandMenuProps, gif = _a.gif, allJobsText = _a.allJobsText, allJobsLink = _a.allJobsLink;
    var type = signInLink.type, href = signInLink.href, text = signInLink.text;
    var buttonText = signUpButton.buttonText, loadingState = signUpButton.loadingState, onClick = signUpButton.onClick;
    var companySlug = brandMenuProps.companySlug, companyLogo = brandMenuProps.companyLogo, companyUrl = brandMenuProps.companyUrl, brandsProps = brandMenuProps.brandsProps;
    var _c = useState(false), showSearchBar = _c[0], setShowSearchBar = _c[1];
    var isMobileButton = useMediaQuery(false, {
        md: true
    });
    var toggleSearchBar = function () {
        setShowSearchBar(!showSearchBar);
    };
    var isLoginHeaderSearch = function (searchbar) {
        return typeof searchbar.occupation === 'object' && searchbar.occupation !== null;
    };
    var LogoutHeaderMobileSearchbar = useMediaQuery(null, {
        md: (React.createElement(MobileSearchbar, __assign({}, mobileSearchbar, { onClick: function () { return setShowSearchBar(false); }, showMobileSearchbar: showSearchBar, focusSearchInput: showSearchBar })))
    });
    var LogoutHeaderMenuButton = useMediaQuery(React.createElement(MainButton, __assign({}, MenuButtonProps, { onClick: onMenuClick })));
    var LogoutHeaderMobileSearchbarButton = useMediaQuery(null, {
        md: isLoginHeaderSearch(searchbar) ? (React.createElement(SearchButton, __assign({ searchValue: searchbar.occupation.termValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps))) : (React.createElement(SearchButton, __assign({ searchValue: searchbar.termValue, onClick: toggleSearchBar }, MobileSearchbarButtonProps)))
    });
    var LogoutHeaderSearchbar = useMediaQuery(isLoginHeaderSearch(searchbar) ? (React.createElement(MegaMenuSearchBar, __assign({}, searchbar))) : (React.createElement(Searchbar, __assign({}, searchbar, { searchButtonProps: searchPropsButton, removeButtonProps: removePropsButton }))), {
        md: null
    });
    var LogoutHeaderLinkSignIn = useMediaQuery(React.createElement(Link, { type: type, href: href, text: text, iconProps: SignInIcon, linkStyles: SignInStyles, isMobile: isMobileButton }));
    var LogoutHeaderButtonSignUp = useMediaQuery(React.createElement(MainButton, __assign({ buttonSize: "full" }, SignUpButtonStyle, { buttonText: buttonText, onClick: onClick, loadingState: loadingState, isMobile: isMobileButton })));
    var LogoutHeaderBreadcrumbs = useMediaQuery(React.createElement(Breadcrumbs, { breadcrumbProps: breadcrumbProps, homeUrl: homeUrl }), {
        md: null
    });
    return (React.createElement("header", { className: styles["".concat(Muiclass, "-logout-jobs-header")] },
        LogoutHeaderMobileSearchbar,
        React.createElement("div", { className: styles["".concat(Muiclass, "-logout-jobs-header--second-row")] },
            React.createElement("div", { className: styles["".concat(Muiclass, "-logout-jobs-header--second-row__left-section")] },
                LogoutHeaderMenuButton,
                React.createElement("a", { href: homeUrl },
                    React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))),
                brandsProps.brands && ((_b = brandsProps.brands) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (React.createElement(BrandMenu, __assign({}, brandMenuProps))) : (React.createElement("a", { href: companyUrl },
                    React.createElement("img", { className: styles["".concat(Muiclass, "-logout-jobs-header--second-row__left-section--company-logo")], src: companyLogo, alt: companySlug ? companySlug : '' }))),
                gif && (React.createElement("img", { className: styles["".concat(Muiclass, "-logout-jobs-header--second-row__left-section--gif")], alt: companySlug ? companySlug : '', src: gif })),
                LogoutHeaderMobileSearchbarButton),
            React.createElement("div", { className: styles["".concat(Muiclass, "-logout-jobs-header--second-row__middle-section")] },
                LogoutHeaderSearchbar,
                React.createElement(SearchItem, { tag: allJobsText, url: allJobsLink })),
            React.createElement("div", { className: styles["".concat(Muiclass, "-logout-jobs-header--second-row__right-section")] },
                LogoutHeaderLinkSignIn,
                LogoutHeaderButtonSignUp)),
        React.createElement("div", { className: styles["".concat(Muiclass, "-logout-jobs-header--third-row")] }, LogoutHeaderBreadcrumbs)));
};

export { LogoutJobsHeader as default };
//# sourceMappingURL=LogoutJobsHeader.component.js.map
