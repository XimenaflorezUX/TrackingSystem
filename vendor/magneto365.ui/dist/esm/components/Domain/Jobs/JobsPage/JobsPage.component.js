import { __assign, __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, useEffect, useMemo, Fragment } from 'react';
import '../../../UI/atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../../UI/atoms/Button/Button.component.js';
import '../../../UI/atoms/Collapse/Collapse.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../../UI/atoms/Field/Field.component.js';
import '../../../UI/atoms/Typography/Typography.component.js';
import '../../../UI/atoms/Typography/Typography.interface.js';
import '../../../UI/atoms/InputFile/InputFile.component.js';
import { Paragraph } from '../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../UI/atoms/Radio/Radio.interface.js';
import '../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../../UI/atoms/Toggle/Toggle.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import '../../../UI/molecules/Actions/Actions.component.js';
import '../../../UI/molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../UI/molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../../UI/molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../UI/molecules/CandidateNav/CandidateNav.component.js';
import '../../../UI/molecules/CandidateProfile/CandidateProfile.component.js';
import { CreateAccountCTA } from '../../../UI/molecules/CreateAccountCTA/CreateAccountCTA.component.js';
import EmptyResult from '../../../UI/molecules/EmptyResults/EmptyResults.component.js';
import '../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js';
import FilterContainerMenu from '../../../UI/molecules/FilterContainerMenu/FilterContainerMenu.component.js';
import { FrequentSearch } from '../../../UI/molecules/FrequentSearch/FrequentSearch.component.js';
import '../../../UI/molecules/SharePopover/SharePopover.js';
import JobCard from '../../../UI/molecules/JobCard/JobCard.component.js';
import '../../../UI/molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../UI/molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../UI/template/MegaMenu/MegaMenu.context.js';
import '../../../UI/molecules/Modal/Modal.component.js';
import { Pagination } from '../../../UI/molecules/Pagination/Pagination.component.js';
import '../../../UI/molecules/SimilarCard/SimilarCard.component.js';
import '../../../UI/molecules/SortMenu/SortMenu.component.js';
import '../../../UI/molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../../UI/molecules/UserMenu/UserMenu.component.js';
import '../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../UI/molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../UI/molecules/JobDetails/JobDetails.component.js';
import '../../../UI/molecules/Chat/Chat.component.js';
import '../../../UI/template/AnalystTemplate/AnalystTemplate.context.js';
import '../../../UI/organism/AlertsPanel/AlertsPanel.component.js';
import '../../../UI/organism/ApplicationSummary/ApplicationSummary.component.js';
import '../../../UI/organism/CategoryMenuCard/CategoryMenuCard.component.js';
import '../SimilarJobs/index.js';
import '../../../UI/organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../../../UI/organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import '../../../UI/organism/Swipe/Swipe.interface.js';
import '../../../UI/organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js';
import '../../../UI/organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js';
import '../../../UI/organism/ProcessesCard/ProcessesCard.component.js';
import '../../../UI/organism/Select/Select.component.js';
import '../../../UI/organism/Select2/Select2.component.js';
import '../../../UI/organism/UserTerms/UserTerms.component.js';
import '../../../UI/organism/Carousel/Carousel.component.js';
import '../../../UI/organism/Record/record.component.js';
import '../../../UI/template/CandidateProfileTemplate/CandidateProfileTemplate.component.js';
import Footer from '../../../UI/template/Footer/Footer.component.js';
import '../../../UI/template/MegaMenu/MegaMenu.component.js';
import SideFilter from '../../../UI/template/SideFilter/SideFilter.component.js';
import SortBar from '../../../UI/template/SortBar/SortBar.component.js';
import HorizontalFilter from '../../../UI/template/HorizontalFilter/HorizontalFilter.component.js';
import '../../../UI/template/TestsFormHandler/TestsFormHandler.context.js';
import { JobDetails } from '../JobDetails/index.js';
import { showDetailByWindow } from './utils/showDetailByWindow.util.js';
import { JobDetailsDrawerContext } from '../JobDetails/children/JobDetailsDrawer/JobDetailsDrawer.context.js';
import JobCardSkeleton from '../../../UI/molecules/JobCard/children/JobCardSkeleton.component.js';
import style from './JobsPage.module.scss.js';

var JobsPage = function (_a) {
    var sortBarProps = _a.sortBarProps, sideFilterProps = _a.sideFilterProps, frequentSearchProps = _a.frequentSearchProps, vacantProps = _a.vacantProps, footerProps = _a.footerProps, paginationProps = _a.paginationProps, setJobSelected = _a.setJobSelected, jobSelected = _a.jobSelected, isLoading = _a.isLoading, device = _a.device, emptyResultsProps = _a.emptyResultsProps, jobDetailAction = _a.jobDetailAction, customParagraph = _a.customParagraph, dynamicPaginationUrl = _a.dynamicPaginationUrl, displayAlwaysFilter = _a.displayAlwaysFilter, createAccountCTAProps = _a.createAccountCTAProps, jobDetailsContent = _a.jobDetailsContent, _b = _a.typeFilters, typeFilters = _b === void 0 ? 'row' : _b, renderBelowPagination = _a.renderBelowPagination;
    var _c = useState(false), isFiltersOpen = _c[0], setIsFiltersOpen = _c[1];
    var _d = useState(device === 'desktop'), showDetail = _d[0], setShowDetail = _d[1];
    var _e = dynamicPaginationUrl || {}, fullUrl = _e.fullUrl, fullJobsUrl = _e.fullJobsUrl;
    var emptyVacant = vacantProps.length === 0;
    var handleVacant = useCallback(function (id) {
        if (id) {
            setJobSelected(id);
            setShowDetail(true);
            return;
        }
    }, [setJobSelected]);
    var handleJobCardClick = useCallback(function (id) {
        handleVacant(id);
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
    var JobDetailsDrawerComponent = useMediaQuery(React.createElement(JobDetailsDrawerContext.Provider, { value: { onClose: onClose } }, jobDetailAction ? jobDetailAction : jobDetailsContent), {
        lg: (React.createElement(JobDetails.Drawer, { className: style["".concat(classMUI, "-jobs-page--drawer")], isMobile: true, isOpen: showDetail && hasVacancies, onClose: onClose }, jobDetailsContent))
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
                    React.createElement(Pagination, __assign({ dynamicUrl: fullUrl }, paginationProps)), renderBelowPagination === null || renderBelowPagination === void 0 ? void 0 :
                    renderBelowPagination(),
                    React.createElement(FrequentSearch, __assign({}, frequentSearchProps))),
                React.createElement("div", { className: style["".concat(classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))) : (React.createElement(Fragment, null,
            filterAltRender,
            React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--center-row")] },
                React.createElement(SortBar, __assign({}, sortBarProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen, emptyVacant: emptyVacant })),
                createAccountCTAProps && React.createElement(CreateAccountCTA, __assign({}, createAccountCTAProps)),
                mainTitleByMediaQuery,
                React.createElement("div", { className: style["".concat(classMUI, "-jobs-page--center-row__jobs-result")] }, cardsAltRender),
                customParagraph && React.createElement(Paragraph, { paragraph: customParagraph }),
                React.createElement(Pagination, __assign({ dynamicUrl: fullUrl }, paginationProps)), renderBelowPagination === null || renderBelowPagination === void 0 ? void 0 :
                renderBelowPagination(),
                React.createElement(FrequentSearch, __assign({}, frequentSearchProps))),
            React.createElement("div", { className: style["".concat(classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))),
        React.createElement(Footer, __assign({}, footerProps))));
};

export { JobsPage as default };
//# sourceMappingURL=JobsPage.component.js.map
