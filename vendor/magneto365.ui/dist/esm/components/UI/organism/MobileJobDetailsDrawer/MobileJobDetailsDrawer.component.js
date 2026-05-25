import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback, useMemo, Fragment } from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import { anchorIconListJobsActions2, iconDetailList, iconFooterList } from '../../../../constants/stories/vacancies.constants.js';
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
import { Drawer } from '../../molecules/Drawer/Drawer.component.js';
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
import { MobileJobDetailsHeader } from '../../molecules/MobileJobDetailsHeader/MobileJobDetailsHeader.component.js';
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
import { MobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar/MobileJobDetailsActionsBar.component.js';
import { MobileJobDetailsDrawerSkeleton } from './children/MobileJobDetailsDrawerSkeleton.component.js';
import Swipe from '../Swipe/Swipe.component.js';
import styles from './MobileJobDetailsDrawer.module.scss.js';
import { ActionLinkCard } from '../../molecules/ActionLinkCard/ActionLinkCard.component.js';
import { SimilarJobs } from '../../../Domain/Jobs/SimilarJobs/index.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var jobCompanyLogoProps = _a.jobCompanyLogoProps, jobDetailsHeaderText = _a.jobDetailsHeaderText, jobDetailsProps = _a.jobDetailsProps, jobDetailCardProps = _a.jobDetailCardProps, jobSkillsCardProps = _a.jobSkillsCardProps, jobApplyCardProps = _a.jobApplyCardProps, jobFooterCardProps = _a.jobFooterCardProps, mobileJobDetailsBarProps = _a.mobileJobDetailsBarProps, jobDetailAction = _a.jobDetailAction, modalPendingInfoComponent = _a.modalPendingInfoComponent, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, isLoading = _a.isLoading, onClose = _a.onClose, similarJobsProps = _a.similarJobsProps, jobVideo = _a.jobVideo, loadVideo = _a.loadVideo, setLoadVideo = _a.setLoadVideo, swipeProps = _a.swipeProps, cities = _a.cities, isRemote = _a.isRemote, textRemote = _a.textRemote, fraudCardJobProps = _a.fraudCardJobProps, isApplied = _a.isApplied, alertJobStatusProps = _a.alertJobStatusProps, canApply = _a.canApply, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, actionLinkCardProps = _a.actionLinkCardProps, jobActionsProps = _a.jobActionsProps, alert = _a.alert;
    var isDetailedVariant = variant === 'detailed';
    var handleClose = useCallback(function () {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    var renderContent = useMemo(function () {
        return jobDetailAction ? (jobDetailAction) : isLoading ? (React.createElement(MobileJobDetailsDrawerSkeleton, null)) : (React.createElement(Fragment, null,
            React.createElement(MobileJobDetailsHeader, { returnText: jobDetailsHeaderText, onClick: handleClose }),
            React.createElement(JobCompanyHeader, __assign({}, jobCompanyLogoProps)),
            (canApply === null || canApply === void 0 ? void 0 : canApply.isApplicable) === false && (React.createElement(Alert, { type: "info", text: canApply === null || canApply === void 0 ? void 0 : canApply.message, className: cx('job-locked-alert') })),
            isApplied && React.createElement(AlertJobStatus, __assign({}, alertJobStatusProps)),
            jobActionsProps && (React.createElement(JobActions, __assign({ actionsAnchorIcons: anchorIconListJobsActions2 }, jobActionsProps, { isApplied: isApplied, variant: variant, className: cx('job-actions-card'), externalChildClass: cx('external-buttons') }))),
            alert && (React.createElement("div", { className: styles['CompletionAlertWrapper'] },
                React.createElement(Alert, __assign({}, alert)))),
            jobDetailsProps && (React.createElement(JobDetails, { iconList: iconDetailList, offerDetailsList: jobDetailsProps, cities: cities, isRemote: isRemote, textRemote: textRemote })),
            jobVideo && React.createElement(JobVideo, __assign({}, jobVideo, { loadVideo: loadVideo, setLoadVideo: setLoadVideo })),
            React.createElement(JobDetailCard, __assign({}, jobDetailCardProps)),
            jobSkillsCardProps && React.createElement(JobSkillsCard, __assign({}, jobSkillsCardProps)),
            actionLinkCardProps && React.createElement(ActionLinkCard, __assign({}, actionLinkCardProps)),
            fraudCardJobProps && React.createElement(FraudCardJob, __assign({}, fraudCardJobProps)),
            React.createElement(JobApplyCard, __assign({}, jobApplyCardProps, { isApplied: isApplied })),
            React.createElement(JobFooterCard, __assign({ iconList: iconFooterList }, jobFooterCardProps, { className: cx('job-footer-card') })),
            similarJobsProps ? React.createElement(SimilarJobs, __assign({}, similarJobsProps)) : null));
    }, [
        jobDetailAction,
        isLoading,
        jobDetailsHeaderText,
        handleClose,
        canApply === null || canApply === void 0 ? void 0 : canApply.isApplicable,
        canApply === null || canApply === void 0 ? void 0 : canApply.message,
        jobCompanyLogoProps,
        isApplied,
        alertJobStatusProps,
        jobDetailsProps,
        cities,
        isRemote,
        textRemote,
        jobVideo,
        loadVideo,
        setLoadVideo,
        jobDetailCardProps,
        jobSkillsCardProps,
        fraudCardJobProps,
        jobApplyCardProps,
        jobFooterCardProps,
        similarJobsProps,
        actionLinkCardProps,
        jobActionsProps,
        variant,
        alert
    ]);
    var content = useMemo(function () {
        return swipeProps ? (React.createElement(Swipe, __assign({}, swipeProps, { openModal: isOpen && swipeProps.openModal }), renderContent)) : (renderContent);
    }, [isOpen, renderContent, swipeProps]);
    return (React.createElement(Fragment, null,
        React.createElement(Drawer, { isOpen: isOpen, isFull: true, onClose: handleClose, direction: "right", customPadding: 0, hideButton: true, isMobile: true },
            content,
            !jobDetailAction && !isDetailedVariant && (React.createElement(MobileJobDetailsActionsBar, __assign({}, mobileJobDetailsBarProps, { onClose: isOpen, isApplied: isApplied })))),
        modalPendingInfoComponent));
};
/**
 * UI Organism Component for Mobile JobDetailsDrawer
 */
var MobileJobDetailsDrawer = Component;

export { MobileJobDetailsDrawer };
//# sourceMappingURL=MobileJobDetailsDrawer.component.js.map
