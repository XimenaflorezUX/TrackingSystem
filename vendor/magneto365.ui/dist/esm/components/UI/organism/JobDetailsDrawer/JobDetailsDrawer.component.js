import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useEffect, Fragment } from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import { anchorIconListJobsActions2, anchorIconList, altList, iconDetailList, iconFooterList } from '../../../../constants/stories/vacancies.constants.js';
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
import '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import { Alert } from '../../molecules/Alert/Alert.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import { AlertJobStatus } from '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
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
import { FraudCardJob } from '../../molecules/FraudCardJob/FraudCardJob.component.js';
import { JobActions } from '../../molecules/JobActions/JobActions.component.js';
import { JobApplyCard } from '../../molecules/JobApplyCard/JobApplyCard.component.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import { JobCompanyHeader } from '../../molecules/JobCompanyHeader/JobCompanyHeader.component.js';
import { JobDetailCard } from '../../molecules/JobDetailCard/JobDetailCard.component.js';
import { JobFooterCard } from '../../molecules/JobFooterCard/JobFooterCard.component.js';
import { JobSkillsCard } from '../../molecules/JobSkillsCard/JobSkillsCard.component.js';
import JobVideo from '../../molecules/JobVideo/JobVideo.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
import '../../molecules/SharePopover/SharePopover.js';
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
import { JobDetails } from '../../molecules/JobDetails/JobDetails.component.js';
import '../../molecules/Chat/Chat.component.js';
import styles from './JobDetailsDrawer.module.scss.js';
import { JobDetailsSkeleton } from './children/JobDetailsSkeleton.component.js';
import { ActionLinkCard } from '../../molecules/ActionLinkCard/ActionLinkCard.component.js';
import { SimilarJobs } from '../../../Domain/Jobs/SimilarJobs/index.js';

var Component = function (_a) {
    var jobCompanyLogoProps = _a.jobCompanyLogoProps, jobActionsProps = _a.jobActionsProps, jobDetailsProps = _a.jobDetailsProps, jobDetailCardProps = _a.jobDetailCardProps, jobSkillsCardProps = _a.jobSkillsCardProps, jobApplyCardProps = _a.jobApplyCardProps, jobFooterCardProps = _a.jobFooterCardProps, jobDetailAction = _a.jobDetailAction, modalPendingInfoComponent = _a.modalPendingInfoComponent, isLoading = _a.isLoading, selectedJobId = _a.selectedJobId, similarJobsProps = _a.similarJobsProps, jobVideo = _a.jobVideo, loadVideo = _a.loadVideo, setLoadVideo = _a.setLoadVideo, cities = _a.cities, isRemote = _a.isRemote, textRemote = _a.textRemote, fraudCardJobProps = _a.fraudCardJobProps, alertJobStatusProps = _a.alertJobStatusProps, isApplied = _a.isApplied, canApply = _a.canApply, variant = _a.variant, isJobDetailPage = _a.isJobDetailPage, actionLinkCardProps = _a.actionLinkCardProps, alert = _a.alert;
    var jobDetailsRef = useRef(null);
    var isDetailVariant = variant === 'detailed';
    useEffect(function () {
        if (jobDetailsRef.current) {
            jobDetailsRef.current.scrollTop = 0;
        }
    }, [selectedJobId]);
    if (isLoading)
        return React.createElement(JobDetailsSkeleton, null);
    console.log('alert', alert);
    return (React.createElement(Fragment, null,
        jobDetailAction ? (jobDetailAction) : (React.createElement("section", { className: styles.JobDetailsDrawerComponent },
            alert && (React.createElement("div", { className: styles['CompletionAlertWrapper'] },
                React.createElement(Alert, __assign({}, alert)))),
            React.createElement("div", { className: styles['JobHeaderCardWrapper'] },
                React.createElement(JobCompanyHeader, __assign({}, jobCompanyLogoProps, { isApplied: isApplied, jobActionsProps: jobActionsProps })),
                (canApply === null || canApply === void 0 ? void 0 : canApply.isApplicable) === false && (React.createElement(Alert, { type: "info", text: canApply === null || canApply === void 0 ? void 0 : canApply.message, className: styles.JobLockedAlert })),
                isApplied ? (React.createElement(AlertJobStatus, __assign({}, alertJobStatusProps))) : (React.createElement(JobActions, __assign({ actionsAnchorIcons: isDetailVariant ? anchorIconListJobsActions2 : anchorIconList }, jobActionsProps, { isApplied: isApplied, isJobDetailPage: isJobDetailPage, variant: variant })))),
            React.createElement("div", { className: styles['JobBodyCardWrapper'], ref: jobDetailsRef },
                jobDetailsProps && (React.createElement(JobDetails, { altList: altList, iconList: iconDetailList, offerDetailsList: jobDetailsProps, cities: cities, isRemote: isRemote, textRemote: textRemote })),
                jobVideo && React.createElement(JobVideo, __assign({}, jobVideo, { loadVideo: loadVideo, setLoadVideo: setLoadVideo })),
                React.createElement(JobDetailCard, __assign({}, jobDetailCardProps)),
                React.createElement(JobSkillsCard, __assign({}, jobSkillsCardProps)),
                actionLinkCardProps && React.createElement(ActionLinkCard, __assign({}, actionLinkCardProps)),
                fraudCardJobProps && React.createElement(FraudCardJob, __assign({}, fraudCardJobProps)),
                React.createElement(JobApplyCard, __assign({}, jobApplyCardProps)),
                React.createElement(JobFooterCard, __assign({ iconList: iconFooterList }, jobFooterCardProps, { variant: variant })),
                similarJobsProps ? React.createElement(SimilarJobs, __assign({}, similarJobsProps)) : null))),
        modalPendingInfoComponent));
};
/**
 * UI Organism Component for JobDetailsDrawer
 */
var JobDetailsDrawer = Component;

export { JobDetailsDrawer };
//# sourceMappingURL=JobDetailsDrawer.component.js.map
