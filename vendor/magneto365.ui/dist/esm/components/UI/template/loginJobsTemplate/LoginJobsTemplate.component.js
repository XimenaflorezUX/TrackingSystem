import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import '../../organism/AlertsPanel/AlertsPanel.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { logoProps } from '../../../../constants/stories/common.constants.js';
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
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import { Drawer } from '../../molecules/Drawer/Drawer.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { ListIconLink } from '../../molecules/ListIconLink/ListIconLink.component.js';
import { ListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../MegaMenu/MegaMenu.context.js';
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
import '../../organism/ApplicationSummary/ApplicationSummary.component.js';
import '../../organism/CategoryMenuCard/CategoryMenuCard.component.js';
import '../../../Domain/Jobs/SimilarJobs/index.js';
import '../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import LoginJobsHeader from '../../organism/LoginJobsHeader/LoginJobsHeader.component.js';
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
import style from './LoginJobsTemplate.module.scss.js';

var Muiclass = 'magneto-ui';
var LoginJobsTemplate = function (_a) {
    var LoginJobsHeaderProps = _a.LoginJobsHeaderProps, homeUrl = _a.homeUrl, listMenuProps = _a.listMenuProps, ListIcon = _a.ListIcon;
    var _b = LoginJobsHeaderProps.brandMenuProps, companyLogo = _b.companyLogo, companySlug = _b.companySlug, companyUrl = _b.companyUrl;
    var _c = useState(false), toggleDrawer = _c[0], setToggleDrawer = _c[1];
    return (React.createElement("div", { className: style["".concat(Muiclass, "-logout-jobs-template")] },
        React.createElement(LoginJobsHeader, __assign({}, LoginJobsHeaderProps, { onMenuClick: function () { return setToggleDrawer(true); } })),
        React.createElement(Drawer, { isOpen: toggleDrawer, onClose: function () { return setToggleDrawer(false); } },
            React.createElement("div", { className: style["".concat(Muiclass, "-logout-jobs-template--brands")] },
                React.createElement("a", { href: homeUrl },
                    React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))),
                React.createElement("a", { href: companyUrl },
                    React.createElement("img", { className: style["".concat(Muiclass, "-logout-jobs-template--company-logo")], src: companyLogo, alt: companySlug ? companySlug : '' }))),
            React.createElement("div", { className: style["".concat(Muiclass, "-logout-jobs-template--jobs-menu")] },
                React.createElement(ListMenuItems, __assign({}, listMenuProps))),
            React.createElement("div", { className: style["".concat(Muiclass, "-logout-jobs-template--social-media")] }, ListIcon && React.createElement(ListIconLink, { size: 34, spacing: 20, listIcon: ListIcon })))));
};

export { LoginJobsTemplate as default };
//# sourceMappingURL=LoginJobsTemplate.component.js.map
