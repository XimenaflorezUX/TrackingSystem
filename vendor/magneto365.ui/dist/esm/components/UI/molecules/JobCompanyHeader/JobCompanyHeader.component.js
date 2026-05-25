import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import { anchorIconList } from '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { JobHeader } from '../../atoms/JobHeader/JobHeader.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './JobCompanyHeader.module.scss.js';
import '../Actions/Actions.component.js';
import '../AlertJobModal/AlertJobModal.component.js';
import '../AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../CandidateNav/CandidateNav.component.js';
import '../CandidateProfile/CandidateProfile.component.js';
import '../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../ExpandableInfo/ExpandableInfo.interface.js';
import { JobActions } from '../JobActions/JobActions.component.js';
import '../JobCard/children/JobCardOption/JobCardOption.component.js';
import '../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { JobCompanyLogo } from '../../../Domain/Jobs/JobCompanyLogo/JobCompanyLogo.component.js';
import '../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import '../Modal/Modal.component.js';
import '../SharePopover/SharePopover.js';
import '../SimilarCard/SimilarCard.component.js';
import '../SortMenu/SortMenu.component.js';
import '../TimelineEvent/TimelineEvent.interface.js';
import '../UserMenu/UserMenu.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../JobDetails/JobDetails.component.js';
import '../Chat/Chat.component.js';

var Component = function (_a) {
    var jobCompanyLogoProps = _a.jobCompanyLogoProps, jobHeaderProps = _a.jobHeaderProps, jobActionsProps = _a.jobActionsProps, isApplied = _a.isApplied;
    return (React.createElement("div", { className: styles['magneto-ui-job-company-header'] },
        React.createElement(JobCompanyLogo, __assign({}, jobCompanyLogoProps)),
        React.createElement("div", { className: styles['magneto-ui-job-company-header__data-actions'] },
            React.createElement(JobHeader, __assign({}, jobHeaderProps)),
            isApplied && jobActionsProps && (React.createElement(JobActions, __assign({ isApplied: isApplied, actionsAnchorIcons: anchorIconList }, jobActionsProps))))));
};
/**
 * UI Molecule component for Company Job Header
 */
var JobCompanyHeader = Component;

export { JobCompanyHeader };
//# sourceMappingURL=JobCompanyHeader.component.js.map
