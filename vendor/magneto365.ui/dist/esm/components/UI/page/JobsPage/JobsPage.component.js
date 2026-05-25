import { __assign, __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, useEffect, useMemo, Fragment } from 'react';
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
import { Paragraph } from '../../atoms/Paragraph/Paragraph.component.js';
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
import { CreateAccountCTA } from '../../molecules/CreateAccountCTA/CreateAccountCTA.component.js';
import EmptyResult from '../../molecules/EmptyResults/EmptyResults.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import FilterContainerMenu from '../../molecules/FilterContainerMenu/FilterContainerMenu.component.js';
import { FrequentSearch } from '../../molecules/FrequentSearch/FrequentSearch.component.js';
import '../../molecules/SharePopover/SharePopover.js';
import JobCard from '../../molecules/JobCard/JobCard.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import JobDetailContainer from '../../molecules/JobDetailContainer/JobDetailContainer.component.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
import { Pagination } from '../../molecules/Pagination/Pagination.component.js';
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
import '../../template/CandidateProfileTemplate/CandidateProfileTemplate.component.js';
import Footer from '../../template/Footer/Footer.component.js';
import '../../template/MegaMenu/MegaMenu.component.js';
import SideFilter from '../../template/SideFilter/SideFilter.component.js';
import SortBar from '../../template/SortBar/SortBar.component.js';
import HorizontalFilter from '../../template/HorizontalFilter/HorizontalFilter.component.js';
import '../../template/TestsFormHandler/TestsFormHandler.context.js';
import { showDetailByWindow } from './utils/showDetailByWindow.util.js';
import style from './JobsPage.module.scss.js';
import JobCardSkeleton from '../../molecules/JobCard/children/JobCardSkeleton.component.js';

var JobsPage = function (_a) {
    var jobDetailsDrawerProps = _a.jobDetailsDrawerProps, mobileJobDetailsDrawerProps = _a.mobileJobDetailsDrawerProps, sortBarProps = _a.sortBarProps, sideFilterProps = _a.sideFilterProps, frequentSearchProps = _a.frequentSearchProps, vacantProps = _a.vacantProps, footerProps = _a.footerProps, paginationProps = _a.paginationProps, setJobSelected = _a.setJobSelected, jobSelected = _a.jobSelected, isLoading = _a.isLoading, device = _a.device, emptyResultsProps = _a.emptyResultsProps, jobDetailAction = _a.jobDetailAction, customParagraph = _a.customParagraph, dynamicPaginationUrl = _a.dynamicPaginationUrl, displayAlwaysFilter = _a.displayAlwaysFilter, createAccountCTAProps = _a.createAccountCTAProps, _b = _a.typeFilters, typeFilters = _b === void 0 ? 'row' : _b;
    var _c = useState(false), isFiltersOpen = _c[0], setIsFiltersOpen = _c[1];
    var _d = useState(false), loadVideo = _d[0], setLoadVideo = _d[1];
    var _e = useState(device === 'desktop'), showDetail = _e[0], setShowDetail = _e[1];
    var _f = useState(null), selectedJobId = _f[0], setSelectedJobId = _f[1];
    var _g = dynamicPaginationUrl || {}, fullUrl = _g.fullUrl, fullJobsUrl = _g.fullJobsUrl;
    var emptyVacant = vacantProps.length === 0;
    var handleVacant = useCallback(function (id) {
        if (id) {
            setJobSelected(id);
            setShowDetail(true);
            return;
        }
    }, [setJobSelected]);
    var handleJobCardClick = useCallback(function (id) {
        setSelectedJobId(id);
        handleVacant(id);
        setLoadVideo(false);
    }, [handleVacant]);
    useEffect(function () {
        setShowDetail(showDetailByWindow('magneto-ui-jobs-page'));
    }, []);
    var onClose = useCallback(function () {
        setShowDetail(false);
        setJobSelected(null);
    }, [setJobSelected]);
    var hasVacancies = useMemo(function () { return !!(vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length) || isLoading; }, [isLoading, vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length]);
    useEffect(function () {
        if (!jobSelected && showDetail && device === 'mobile') {
            onClose();
        }
    }, [device, jobSelected, onClose, showDetail]);
    var JobDetailsDrawerComponent = useMediaQuery(React.createElement(JobDetailContainer, { onClose: onClose, isOpen: showDetail && hasVacancies }, jobDetailAction ? (jobDetailAction) : (React.createElement(JobDetailsDrawer, __assign({}, jobDetailsDrawerProps, { isLoading: isLoading || !jobSelected, selectedJobId: selectedJobId, loadVideo: loadVideo, setLoadVideo: setLoadVideo })))), {
        lg: (React.createElement(MobileJobDetailsDrawer, __assign({}, mobileJobDetailsDrawerProps, { onClose: onClose, isOpen: showDetail, jobDetailAction: jobDetailAction, isLoading: isLoading || !jobSelected, loadVideo: loadVideo, setLoadVideo: setLoadVideo })))
    });
    var mainTitleByMediaQuery = useMediaQuery(React.createElement(Fragment, null), {
        md: React.createElement("h1", { className: style["".concat(classMUI, "-jobs-page--title")] }, sortBarProps === null || sortBarProps === void 0 ? void 0 : sortBarProps.mainTitle)
    });
    var cardsAltRender = useMemo(function () {
        if (isLoading) {
            return React.createElement(JobCardSkeleton, { numCard: 20 });
        }
        if (emptyVacant) {
            return React.createElement(EmptyResult, __assign({}, emptyResultsProps));
        }
        return vacantProps.map(function (vacant) {
            if (typeof vacant === 'function')
                return vacant();
            var id = vacant.id, props = __rest(vacant, ["id"]);
            return (React.createElement(JobCard, __assign({ isLoading: isLoading, isActive: id === (jobSelected === null || jobSelected === void 0 ? void 0 : jobSelected.id), id: id, showDetail: function () { return handleJobCardClick(id); }, dynamicUrl: fullJobsUrl, key: "".concat(id, "-JobsPage") }, props)));
        });
    }, [isLoading, emptyVacant, emptyResultsProps, vacantProps, jobSelected, fullJobsUrl, handleJobCardClick]);
    var filterAltRender = useMemo(function () {
        if (!displayAlwaysFilter && emptyVacant)
            return;
        if (typeFilters === 'side') {
            return (React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--filter-row")] },
                React.createElement(FilterContainerMenu, null,
                    React.createElement(SideFilter, __assign({}, sideFilterProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen })))));
        }
        return React.createElement(HorizontalFilter, __assign({}, sideFilterProps, { isFiltersOpen: isFiltersOpen }));
    }, [displayAlwaysFilter, sideFilterProps, typeFilters, isFiltersOpen, emptyVacant]);
    return (React.createElement(Fragment, null,
        React.createElement("div", { id: "magneto-ui-jobs-page", className: "".concat(style["".concat(classMUI, "-jobs-page")], " ").concat(typeFilters === 'row' ? style["".concat(classMUI, "-jobs-page--column")] : '') }, typeFilters === 'row' ? (React.createElement(Fragment, null,
            filterAltRender,
            React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--row-content")] },
                React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--center-row")] },
                    React.createElement(SortBar, __assign({}, sortBarProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen, emptyVacant: emptyVacant, horizontal: typeFilters === 'row' })),
                    createAccountCTAProps && React.createElement(CreateAccountCTA, __assign({}, createAccountCTAProps)),
                    mainTitleByMediaQuery,
                    React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--center-row__jobs-result")] }, cardsAltRender),
                    customParagraph && React.createElement(Paragraph, { paragraph: customParagraph }),
                    React.createElement(Pagination, __assign({ dynamicUrl: fullUrl }, paginationProps)),
                    React.createElement(FrequentSearch, __assign({}, frequentSearchProps))),
                React.createElement("div", { className: style["".concat(classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))) : (React.createElement(Fragment, null,
            filterAltRender,
            React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--center-row")] },
                React.createElement(SortBar, __assign({}, sortBarProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen, emptyVacant: emptyVacant })),
                createAccountCTAProps && React.createElement(CreateAccountCTA, __assign({}, createAccountCTAProps)),
                mainTitleByMediaQuery,
                React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--center-row__jobs-result")] }, cardsAltRender),
                customParagraph && React.createElement(Paragraph, { paragraph: customParagraph }),
                React.createElement(Pagination, __assign({ dynamicUrl: fullUrl }, paginationProps)),
                React.createElement(FrequentSearch, __assign({}, frequentSearchProps))),
            React.createElement("div", { className: style["".concat(classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))),
        React.createElement(Footer, __assign({}, footerProps))));
};

export { JobsPage as default };
//# sourceMappingURL=JobsPage.component.js.map
