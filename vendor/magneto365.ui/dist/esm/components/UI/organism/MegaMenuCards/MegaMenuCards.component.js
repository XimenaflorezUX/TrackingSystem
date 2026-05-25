import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import style from './MegaMenuCards.module.scss.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import ArrowRightWhite from '../../../../assets/ArrowRightWhite.svg.js';
import { ButtonLink } from '../../atoms/ButtonLink/ButtonLink.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
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
import MegaMenuCard from '../../molecules/MegaMenuCard/MegaMenuCard.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
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
import '../AlertsPanel/AlertsPanel.component.js';
import AlphabetFilter from '../AlphabetFilter/AlphabetFilter.component.js';
import '../ApplicationSummary/ApplicationSummary.component.js';
import '../CategoryMenuCard/CategoryMenuCard.component.js';
import '../../../Domain/Jobs/SimilarJobs/index.js';
import '../JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import '../Swipe/Swipe.interface.js';
import '../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js';
import '../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js';
import '../../template/AnalystTemplate/AnalystTemplate.context.js';
import '../ProcessesCard/ProcessesCard.component.js';
import '../Select/Select.component.js';
import '../Select2/Select2.component.js';
import '../UserTerms/UserTerms.component.js';
import '../Carousel/Carousel.component.js';
import '../Record/record.component.js';

var MegaMenuCards = function (_a) {
    var _b;
    var jobs = _a.jobs, action = _a.action, title = _a.title, actionTitle = _a.actionTitle, className = _a.className, filterProps = _a.filterProps, _c = _a.maxCards, maxCards = _c === void 0 ? 39 : _c, renderRight = _a.renderRight;
    var renderTitle = useMediaQuery(title && (React.createElement("div", { className: "".concat(style["mega-menu-cards__title"]) },
        React.createElement("p", null, title),
        actionTitle && (React.createElement(ButtonLink, { href: actionTitle.url, buttonText: actionTitle.label, onClick: actionTitle.onClick, prefixIcon: ArrowRight2, iconSize: 14, className: "".concat(style["mega-menu-cards__action--grey"]) })))), {
        md: title && actionTitle && (React.createElement(ButtonLink, { href: actionTitle.url, buttonText: actionTitle.label, onClick: actionTitle.onClick, prefixIcon: ArrowRight2, iconSize: 14, className: "".concat(style["mega-menu-cards__action--grey"]) }))
    });
    return (React.createElement("nav", { className: className },
        renderTitle,
        filterProps && React.createElement(AlphabetFilter, __assign({ className: style["mega-menu-cards__filter"] }, filterProps)),
        React.createElement("section", { className: "".concat(style['mega-menu-cards__container']) },
            React.createElement("ul", { className: "".concat(style["mega-menu-cards"]) }, jobs &&
                jobs.slice(0, maxCards).map(function (job, key) { return (React.createElement("li", { key: key },
                    React.createElement(MegaMenuCard, __assign({}, job)))); })), renderRight === null || renderRight === void 0 ? void 0 :
            renderRight()),
        action && (React.createElement(ButtonLink, { buttonText: action.label, href: action.url, onClick: action.onClick, target: (_b = action.target) !== null && _b !== void 0 ? _b : '_self', prefixIcon: ArrowRightWhite, className: "".concat(style["mega-menu-cards__action"]) }))));
};

export { MegaMenuCards as default };
//# sourceMappingURL=MegaMenuCards.component.js.map
