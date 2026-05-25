import { __assign, __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo, useEffect, useCallback, Fragment } from 'react';
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
import EmptyResult from '../../molecules/EmptyResults/EmptyResults.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import JobCard from '../../molecules/JobCard/JobCard.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import JobDetailContainer from '../../molecules/JobDetailContainer/JobDetailContainer.component.js';
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
import JobCardSkeleton from '../../molecules/JobCard/children/JobCardSkeleton.component.js';
import '../../organism/AlertsPanel/AlertsPanel.component.js';
import '../../organism/ApplicationSummary/ApplicationSummary.component.js';
import '../../organism/CategoryMenuCard/CategoryMenuCard.component.js';
import { JobDetailsDrawer } from '../../organism/JobDetailsDrawer/JobDetailsDrawer.component.js';
import '../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import { MobileJobDetailsDrawer } from '../../organism/MobileJobDetailsDrawer/MobileJobDetailsDrawer.component.js';
import '../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js';
import '../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js';
import '../../template/AnalystTemplate/AnalystTemplate.context.js';
import '../../organism/ProcessesCard/ProcessesCard.component.js';
import '../../organism/Select/Select.component.js';
import '../../organism/Select2/Select2.component.js';
import '../../organism/UserTerms/UserTerms.component.js';
import '../../organism/Carousel/Carousel.component.js';
import '../../organism/Record/record.component.js';
import style from './SuggestedJobsPage.module.scss.js';

var Component = function (_a) {
    var device = _a.device, emptyResultsProps = _a.emptyResultsProps, isLoading = _a.isLoading, jobDetailAction = _a.jobDetailAction, jobDetailsDrawerProps = _a.jobDetailsDrawerProps, jobSelected = _a.jobSelected, mobileJobDetailsDrawerProps = _a.mobileJobDetailsDrawerProps, paginationProps = _a.paginationProps, setJobSelected = _a.setJobSelected, vacantProps = _a.vacantProps;
    var _b = useState(false), isBottomPage = _b[0], setIsBottomPage = _b[1];
    var _c = useState(device === 'desktop'), showDetail = _c[0], setShowDetail = _c[1];
    var _d = useState(null), selectedJobId = _d[0], setSelectedJobId = _d[1];
    var _e = useMemo(function () { return paginationProps; }, [paginationProps]), totalVacants = _e.total, onChangePage = _e.onChange, currentPage = _e.current, pageSize = _e.pageSize;
    var hasVacancies = useMemo(function () { return !!(vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length) || isLoading; }, [isLoading, vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length]);
    var vacantsLength = useMemo(function () { return vacantProps.length; }, [vacantProps.length]);
    var fetchMoredata = useMemo(function () { return isBottomPage && !isLoading && totalVacants > vacantsLength && pageSize * currentPage == vacantsLength; }, [currentPage, isBottomPage, isLoading, pageSize, totalVacants, vacantsLength]);
    var cardsAltRender = useMemo(function () {
        if (isLoading) {
            return currentPage == 1 ? React.createElement(JobCardSkeleton, { numCard: 20 }) : null;
        }
        return React.createElement(EmptyResult, __assign({}, emptyResultsProps));
    }, [isLoading, emptyResultsProps, currentPage]);
    useEffect(function () {
        var element = document.getElementsByTagName('body')[0];
        element.style.overflowY = 'hidden';
        return function () {
            element.style.overflowY = 'auto';
        };
    }, []);
    useEffect(function () {
        if (!fetchMoredata)
            return;
        setIsBottomPage(false);
        onChangePage(currentPage + 1, pageSize);
    }, [currentPage, fetchMoredata, onChangePage, pageSize]);
    useEffect(function () {
        var element = document.getElementById('magneto-ui-suggestedJobs-page');
        if (!element)
            return;
        var handleScroll = function () {
            var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
            var isBottom = scrollTop + clientHeight >= scrollHeight;
            if (isBottomPage != isBottom)
                setIsBottomPage(isBottom);
        };
        element.addEventListener('scroll', handleScroll);
        return function () {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [isBottomPage]);
    var handleVacant = useCallback(function (id) {
        if (id) {
            setJobSelected(id);
            setShowDetail(true);
            return;
        }
    }, [setJobSelected]);
    var onClose = useCallback(function () {
        setShowDetail(false);
        setJobSelected(null);
    }, [setJobSelected]);
    var JobDetailsDrawerComponent = useMediaQuery(React.createElement(JobDetailContainer, { onClose: onClose, isOpen: showDetail && hasVacancies }, jobDetailAction ? (jobDetailAction) : (React.createElement(JobDetailsDrawer, __assign({}, jobDetailsDrawerProps, { isLoading: !jobSelected, selectedJobId: selectedJobId })))), {
        md: (React.createElement(MobileJobDetailsDrawer, __assign({}, mobileJobDetailsDrawerProps, { onClose: onClose, isOpen: showDetail, jobDetailAction: jobDetailAction, isLoading: !jobSelected })))
    });
    var handleJobCardClick = function (id) {
        setSelectedJobId(id);
        handleVacant(id);
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { id: "magneto-ui-suggestedJobs-page", className: style["".concat(classMUI, "-suggestedJobs-page")] },
            React.createElement("div", { className: style["".concat(classMUI, "-suggestedJobs-page--center-row")] },
                React.createElement("div", { className: style["".concat(classMUI, "-suggestedJobs-page--center-row__jobs-result")] },
                    vacantProps.length <= 0 || (isLoading && currentPage == 1)
                        ? cardsAltRender
                        : vacantProps.map(function (_a) {
                            var id = _a.id, props = __rest(_a, ["id"]);
                            return (React.createElement(React.Fragment, null,
                                React.createElement(JobCard, __assign({ isLoading: isLoading, isActive: id === (jobSelected === null || jobSelected === void 0 ? void 0 : jobSelected.id), id: id, showDetail: function () { return handleJobCardClick(id); }, key: "".concat(id, "-JobsPage") }, props))));
                        }),
                    isLoading && currentPage > 1 && React.createElement(JobCardSkeleton, { numCard: 1, goToBottom: true }))),
            React.createElement("div", { className: style["".concat(classMUI, "-suggestedJobs-page__jobs-detail")] }, JobDetailsDrawerComponent))));
};
var SuggestedJobsPage = Component;

export { SuggestedJobsPage };
//# sourceMappingURL=SuggestedJobsPage.component.js.map
