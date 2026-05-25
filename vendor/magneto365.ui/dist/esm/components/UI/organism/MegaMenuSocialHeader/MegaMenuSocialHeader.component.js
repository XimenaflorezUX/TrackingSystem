import MegaMenuTabs from '../../molecules/MegaMenuSocialTabs/MegaMenuTabs.component.js';
import React, { useState, useMemo, useCallback } from 'react';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import ArrowDownWhite from '../../../../assets/arrowDownWhite.svg.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { ListMegaMenu } from '../../../../constants/stories/drawer.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import { megaMenuHelpIcons } from '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './MegaMenuSocialHeader.modules.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import { Popover } from '../../atoms/Popover/Popover.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
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
import { ListIconLink } from '../../molecules/ListIconLink/ListIconLink.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import { useMegaMenuSocialHeader } from '../../template/MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
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

var Component = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, promo = _a.promo, tabsPrefix = _a.tabsPrefix;
    var _c = useState(false), showHelpOptions = _c[0], setShowHelpOptions = _c[1];
    var _d = useMegaMenuSocialHeader(), helpOptions = _d.helpOptions, blog = _d.blog, helpAction = _d.helpAction;
    var isCandidate = variant === 'candidate';
    var variantClass = isCandidate ? styles['mega-menu-social-header--candidate'] : '';
    var arrowIcon = isCandidate ? ArrowDownWhite : ArrowDown2;
    var promoSection = useMemo(function () {
        return promo && (React.createElement("div", { className: styles['mega-menu-social-header__promo'] },
            React.createElement("span", null, promo.content),
            React.createElement("a", { href: promo.linkUrl, className: styles['mega-menu-social-header__promo-link'] }, promo.linkText)));
    }, [promo]);
    var linkButton = useMemo(function () {
        return blog && (React.createElement("a", { title: blog.label, className: "".concat(styles['mega-menu-social-header__blog'], " ").concat(isCandidate ? styles['mega-menu-social-header__blog--candidate'] : ''), href: blog.url, target: '_blank', rel: "noreferrer" },
            React.createElement("p", null, blog.label)));
    }, [blog, isCandidate]);
    var handleClickHelpOption = useCallback(function (show) { return function () {
        setShowHelpOptions(show);
    }; }, []);
    var makeHelpOption = useMemo(function () { return (React.createElement("ul", { className: styles['mega-menu-social-header__help--options'] }, helpOptions &&
        helpOptions.length > 0 &&
        helpOptions.map(function (option, key) { return (React.createElement("li", { key: key, className: styles['mega-menu-social-header__help--option'] },
            React.createElement("a", { href: option.url },
                React.createElement(IconItem, { alt: "arrow icon", hover: false, icon: megaMenuHelpIcons[key], size: 16 }),
                React.createElement("p", { className: styles['mega-menu-social-header__help--option-text'] }, option.label)))); }))); }, [helpOptions]);
    return (React.createElement("div", { className: "".concat(styles['mega-menu-social-header'], " ").concat(variantClass) },
        React.createElement("div", { className: "".concat(styles['mega-menu-social-header__tabs-wrapper'], " ").concat(isCandidate ? styles['mega-menu-social-header__tabs-wrapper--candidate'] : '') },
            isCandidate && tabsPrefix && (React.createElement("span", { className: styles['mega-menu-social-header__tabs-prefix'] }, tabsPrefix)),
            React.createElement(MegaMenuTabs, { className: isCandidate ? styles['mega-menu-social-header__tabs--candidate'] : '', showArrows: !isCandidate })),
        isCandidate && promoSection,
        React.createElement("div", { className: styles['mega-menu-social-header__options'] },
            React.createElement(ListIconLink, { listIcon: ListMegaMenu, size: 20, spacing: 10, className: isCandidate ? styles['mega-menu-social-header__icons--candidate'] : '' }),
            linkButton,
            React.createElement(Popover, { positionY: 'bottom', positionX: 'left', content: makeHelpOption, show: showHelpOptions, widthBase: 60, className: "".concat(styles['mega-menu-social-header__help'], " ").concat(showHelpOptions ? '' : styles['mega-menu-social-header__help--hidden']) },
                React.createElement(React.Fragment, null, helpAction && (React.createElement("button", { onClick: handleClickHelpOption(!showHelpOptions), onBlur: handleClickHelpOption(false), className: "".concat(styles['mega-menu-social-header__help--button'], " ").concat(isCandidate ? styles['mega-menu-social-header__help--button-candidate'] : '') },
                    React.createElement("p", null, helpAction.label),
                    React.createElement(IconItem, { alt: "arrow icon", hover: false, icon: arrowIcon, size: 14 }))))))));
};
var MegaMenuSocialHeader = Component;

export { MegaMenuSocialHeader };
//# sourceMappingURL=MegaMenuSocialHeader.component.js.map
