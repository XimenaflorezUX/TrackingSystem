import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import LogoMagneto from '../../../../assets/logo-magneto.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
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
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import '../../organism/AlertsPanel/AlertsPanel.component.js';
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
import MagnetoResolution from '../../molecules/MagnetoResolution/MagnetoResolution.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
import RightsReservedText from '../../molecules/RightsReservedText/RightsReservedText.component.js';
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
import '../../organism/ApplicationSummary/ApplicationSummary.component.js';
import '../../organism/CategoryMenuCard/CategoryMenuCard.component.js';
import FooterMenuLinks from '../../organism/FooterMenuLinks/FooterMenuLinks.component.js';
import '../../../Domain/Jobs/SimilarJobs/index.js';
import '../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import MagnetoSocialMedia from '../../organism/MagnetoSocialMedia/MagnetoSocialMedia.component.js';
import '../../organism/Swipe/Swipe.interface.js';
import '../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js';
import '../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js';
import '../AnalystTemplate/AnalystTemplate.context.js';
import '../../organism/ProcessesCard/ProcessesCard.component.js';
import '../../organism/Select/Select.component.js';
import '../../organism/Select2/Select2.component.js';
import '../../organism/UserTerms/UserTerms.component.js';
import '../../organism/Carousel/Carousel.component.js';
import '../../organism/Record/record.component.js';
import style from './Footer.module.scss.js';

var Footer = function (_a) {
    var followText = _a.followText, magnetoResolutionProps = _a.magnetoResolutionProps, rightsReservedProps = _a.rightsReservedProps, menuFooterLink = _a.menuFooterLink, showFooter = _a.showFooter;
    return (React.createElement(React.Fragment, null, showFooter !== false ? (React.createElement("footer", { className: "".concat(style["".concat(classMUI, "-footer")]) },
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-footer__row1")]) },
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-footer__row1--column1")]) },
                React.createElement(LogoComponent, { alt: "magneto logo", logo: LogoMagneto }),
                React.createElement(MagnetoSocialMedia, { followText: followText }),
                React.createElement(RightsReservedText, __assign({}, rightsReservedProps))),
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-footer__row1--column2")]) },
                React.createElement(FooterMenuLinks, __assign({}, menuFooterLink)))),
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-footer__resolution")]) },
            React.createElement(MagnetoResolution, __assign({}, magnetoResolutionProps))))) : (React.createElement(Fragment, null))));
};

export { Footer as default };
//# sourceMappingURL=Footer.component.js.map
