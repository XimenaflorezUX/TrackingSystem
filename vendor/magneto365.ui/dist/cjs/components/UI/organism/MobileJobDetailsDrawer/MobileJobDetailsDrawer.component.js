'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
var vacancies_constants = require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
var Alert_component = require('../../molecules/Alert/Alert.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
var AlertJobStatus_component = require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
var Drawer_component = require('../../molecules/Drawer/Drawer.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
var FraudCardJob_component = require('../../molecules/FraudCardJob/FraudCardJob.component.js');
var JobActions_component = require('../../molecules/JobActions/JobActions.component.js');
var JobApplyCard_component = require('../../molecules/JobApplyCard/JobApplyCard.component.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var JobCompanyHeader_component = require('../../molecules/JobCompanyHeader/JobCompanyHeader.component.js');
var JobDetailCard_component = require('../../molecules/JobDetailCard/JobDetailCard.component.js');
var JobFooterCard_component = require('../../molecules/JobFooterCard/JobFooterCard.component.js');
var JobSkillsCard_component = require('../../molecules/JobSkillsCard/JobSkillsCard.component.js');
var JobVideo_component = require('../../molecules/JobVideo/JobVideo.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
var MobileJobDetailsHeader_component = require('../../molecules/MobileJobDetailsHeader/MobileJobDetailsHeader.component.js');
require('../../molecules/Modal/Modal.component.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/SimilarCard/SimilarCard.component.js');
require('../../molecules/SortMenu/SortMenu.component.js');
require('../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../molecules/UserMenu/UserMenu.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
var JobDetails_component = require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
var MobileJobDetailsActionsBar_component = require('../MobileJobDetailsActionsBar/MobileJobDetailsActionsBar.component.js');
var MobileJobDetailsDrawerSkeleton_component = require('./children/MobileJobDetailsDrawerSkeleton.component.js');
var Swipe_component = require('../Swipe/Swipe.component.js');
var MobileJobDetailsDrawer_module = require('./MobileJobDetailsDrawer.module.scss.js');
var ActionLinkCard_component = require('../../molecules/ActionLinkCard/ActionLinkCard.component.js');
var index = require('../../../Domain/Jobs/SimilarJobs/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(MobileJobDetailsDrawer_module);
var Component = function (_a) {
    var jobCompanyLogoProps = _a.jobCompanyLogoProps, jobDetailsHeaderText = _a.jobDetailsHeaderText, jobDetailsProps = _a.jobDetailsProps, jobDetailCardProps = _a.jobDetailCardProps, jobSkillsCardProps = _a.jobSkillsCardProps, jobApplyCardProps = _a.jobApplyCardProps, jobFooterCardProps = _a.jobFooterCardProps, mobileJobDetailsBarProps = _a.mobileJobDetailsBarProps, jobDetailAction = _a.jobDetailAction, modalPendingInfoComponent = _a.modalPendingInfoComponent, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, isLoading = _a.isLoading, onClose = _a.onClose, similarJobsProps = _a.similarJobsProps, jobVideo = _a.jobVideo, loadVideo = _a.loadVideo, setLoadVideo = _a.setLoadVideo, swipeProps = _a.swipeProps, cities = _a.cities, isRemote = _a.isRemote, textRemote = _a.textRemote, fraudCardJobProps = _a.fraudCardJobProps, isApplied = _a.isApplied, alertJobStatusProps = _a.alertJobStatusProps, canApply = _a.canApply, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, actionLinkCardProps = _a.actionLinkCardProps, jobActionsProps = _a.jobActionsProps, alert = _a.alert;
    var isDetailedVariant = variant === 'detailed';
    var handleClose = React.useCallback(function () {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    var renderContent = React.useMemo(function () {
        return jobDetailAction ? (jobDetailAction) : isLoading ? (React__default["default"].createElement(MobileJobDetailsDrawerSkeleton_component.MobileJobDetailsDrawerSkeleton, null)) : (React__default["default"].createElement(React.Fragment, null,
            React__default["default"].createElement(MobileJobDetailsHeader_component.MobileJobDetailsHeader, { returnText: jobDetailsHeaderText, onClick: handleClose }),
            React__default["default"].createElement(JobCompanyHeader_component.JobCompanyHeader, tslib_es6.__assign({}, jobCompanyLogoProps)),
            (canApply === null || canApply === void 0 ? void 0 : canApply.isApplicable) === false && (React__default["default"].createElement(Alert_component.Alert, { type: "info", text: canApply === null || canApply === void 0 ? void 0 : canApply.message, className: cx('job-locked-alert') })),
            isApplied && React__default["default"].createElement(AlertJobStatus_component.AlertJobStatus, tslib_es6.__assign({}, alertJobStatusProps)),
            jobActionsProps && (React__default["default"].createElement(JobActions_component.JobActions, tslib_es6.__assign({ actionsAnchorIcons: vacancies_constants.anchorIconListJobsActions2 }, jobActionsProps, { isApplied: isApplied, variant: variant, className: cx('job-actions-card'), externalChildClass: cx('external-buttons') }))),
            alert && (React__default["default"].createElement("div", { className: MobileJobDetailsDrawer_module['CompletionAlertWrapper'] },
                React__default["default"].createElement(Alert_component.Alert, tslib_es6.__assign({}, alert)))),
            jobDetailsProps && (React__default["default"].createElement(JobDetails_component.JobDetails, { iconList: vacancies_constants.iconDetailList, offerDetailsList: jobDetailsProps, cities: cities, isRemote: isRemote, textRemote: textRemote })),
            jobVideo && React__default["default"].createElement(JobVideo_component, tslib_es6.__assign({}, jobVideo, { loadVideo: loadVideo, setLoadVideo: setLoadVideo })),
            React__default["default"].createElement(JobDetailCard_component.JobDetailCard, tslib_es6.__assign({}, jobDetailCardProps)),
            jobSkillsCardProps && React__default["default"].createElement(JobSkillsCard_component.JobSkillsCard, tslib_es6.__assign({}, jobSkillsCardProps)),
            actionLinkCardProps && React__default["default"].createElement(ActionLinkCard_component.ActionLinkCard, tslib_es6.__assign({}, actionLinkCardProps)),
            fraudCardJobProps && React__default["default"].createElement(FraudCardJob_component.FraudCardJob, tslib_es6.__assign({}, fraudCardJobProps)),
            React__default["default"].createElement(JobApplyCard_component.JobApplyCard, tslib_es6.__assign({}, jobApplyCardProps, { isApplied: isApplied })),
            React__default["default"].createElement(JobFooterCard_component.JobFooterCard, tslib_es6.__assign({ iconList: vacancies_constants.iconFooterList }, jobFooterCardProps, { className: cx('job-footer-card') })),
            similarJobsProps ? React__default["default"].createElement(index.SimilarJobs, tslib_es6.__assign({}, similarJobsProps)) : null));
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
    var content = React.useMemo(function () {
        return swipeProps ? (React__default["default"].createElement(Swipe_component, tslib_es6.__assign({}, swipeProps, { openModal: isOpen && swipeProps.openModal }), renderContent)) : (renderContent);
    }, [isOpen, renderContent, swipeProps]);
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement(Drawer_component.Drawer, { isOpen: isOpen, isFull: true, onClose: handleClose, direction: "right", customPadding: 0, hideButton: true, isMobile: true },
            content,
            !jobDetailAction && !isDetailedVariant && (React__default["default"].createElement(MobileJobDetailsActionsBar_component.MobileJobDetailsActionsBar, tslib_es6.__assign({}, mobileJobDetailsBarProps, { onClose: isOpen, isApplied: isApplied })))),
        modalPendingInfoComponent));
};
/**
 * UI Organism Component for Mobile JobDetailsDrawer
 */
var MobileJobDetailsDrawer = Component;

exports.MobileJobDetailsDrawer = MobileJobDetailsDrawer;
//# sourceMappingURL=MobileJobDetailsDrawer.component.js.map
