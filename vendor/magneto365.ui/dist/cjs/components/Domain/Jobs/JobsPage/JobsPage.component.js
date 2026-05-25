'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../../UI/atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../../UI/atoms/Button/Button.component.js');
require('../../../UI/atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../../UI/atoms/Field/Field.component.js');
require('../../../UI/atoms/Typography/Typography.component.js');
require('../../../UI/atoms/Typography/Typography.interface.js');
require('../../../UI/atoms/InputFile/InputFile.component.js');
var Paragraph_component = require('../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../UI/atoms/Radio/Radio.interface.js');
require('../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../../UI/atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
require('../../../UI/molecules/Actions/Actions.component.js');
require('../../../UI/molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../UI/molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../../UI/molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../UI/molecules/CandidateNav/CandidateNav.component.js');
require('../../../UI/molecules/CandidateProfile/CandidateProfile.component.js');
var CreateAccountCTA_component = require('../../../UI/molecules/CreateAccountCTA/CreateAccountCTA.component.js');
var EmptyResults_component = require('../../../UI/molecules/EmptyResults/EmptyResults.component.js');
require('../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js');
var FilterContainerMenu_component = require('../../../UI/molecules/FilterContainerMenu/FilterContainerMenu.component.js');
var FrequentSearch_component = require('../../../UI/molecules/FrequentSearch/FrequentSearch.component.js');
require('../../../UI/molecules/SharePopover/SharePopover.js');
var JobCard_component = require('../../../UI/molecules/JobCard/JobCard.component.js');
require('../../../UI/molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../UI/molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../UI/template/MegaMenu/MegaMenu.context.js');
require('../../../UI/molecules/Modal/Modal.component.js');
var Pagination_component = require('../../../UI/molecules/Pagination/Pagination.component.js');
require('../../../UI/molecules/SimilarCard/SimilarCard.component.js');
require('../../../UI/molecules/SortMenu/SortMenu.component.js');
require('../../../UI/molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../../UI/molecules/UserMenu/UserMenu.component.js');
require('../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../UI/molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../UI/molecules/JobDetails/JobDetails.component.js');
require('../../../UI/molecules/Chat/Chat.component.js');
require('../../../UI/template/AnalystTemplate/AnalystTemplate.context.js');
require('../../../UI/organism/AlertsPanel/AlertsPanel.component.js');
require('../../../UI/organism/ApplicationSummary/ApplicationSummary.component.js');
require('../../../UI/organism/CategoryMenuCard/CategoryMenuCard.component.js');
require('../SimilarJobs/index.js');
require('../../../UI/organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../../../UI/organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
require('../../../UI/organism/Swipe/Swipe.interface.js');
require('../../../UI/organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('../../../UI/organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js');
require('../../../UI/organism/ProcessesCard/ProcessesCard.component.js');
require('../../../UI/organism/Select/Select.component.js');
require('../../../UI/organism/Select2/Select2.component.js');
require('../../../UI/organism/UserTerms/UserTerms.component.js');
require('../../../UI/organism/Carousel/Carousel.component.js');
require('../../../UI/organism/Record/record.component.js');
require('../../../UI/template/CandidateProfileTemplate/CandidateProfileTemplate.component.js');
var Footer_component = require('../../../UI/template/Footer/Footer.component.js');
require('../../../UI/template/MegaMenu/MegaMenu.component.js');
var SideFilter_component = require('../../../UI/template/SideFilter/SideFilter.component.js');
var SortBar_component = require('../../../UI/template/SortBar/SortBar.component.js');
var HorizontalFilter_component = require('../../../UI/template/HorizontalFilter/HorizontalFilter.component.js');
require('../../../UI/template/TestsFormHandler/TestsFormHandler.context.js');
var index$1 = require('../JobDetails/index.js');
var showDetailByWindow_util = require('./utils/showDetailByWindow.util.js');
var JobDetailsDrawer_context = require('../JobDetails/children/JobDetailsDrawer/JobDetailsDrawer.context.js');
var JobCardSkeleton_component = require('../../../UI/molecules/JobCard/children/JobCardSkeleton.component.js');
var JobsPage_module = require('./JobsPage.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobsPage = function (_a) {
    var sortBarProps = _a.sortBarProps, sideFilterProps = _a.sideFilterProps, frequentSearchProps = _a.frequentSearchProps, vacantProps = _a.vacantProps, footerProps = _a.footerProps, paginationProps = _a.paginationProps, setJobSelected = _a.setJobSelected, jobSelected = _a.jobSelected, isLoading = _a.isLoading, device = _a.device, emptyResultsProps = _a.emptyResultsProps, jobDetailAction = _a.jobDetailAction, customParagraph = _a.customParagraph, dynamicPaginationUrl = _a.dynamicPaginationUrl, displayAlwaysFilter = _a.displayAlwaysFilter, createAccountCTAProps = _a.createAccountCTAProps, jobDetailsContent = _a.jobDetailsContent, _b = _a.typeFilters, typeFilters = _b === void 0 ? 'row' : _b, renderBelowPagination = _a.renderBelowPagination;
    var _c = React.useState(false), isFiltersOpen = _c[0], setIsFiltersOpen = _c[1];
    var _d = React.useState(device === 'desktop'), showDetail = _d[0], setShowDetail = _d[1];
    var _e = dynamicPaginationUrl || {}, fullUrl = _e.fullUrl, fullJobsUrl = _e.fullJobsUrl;
    var emptyVacant = vacantProps.length === 0;
    var handleVacant = React.useCallback(function (id) {
        if (id) {
            setJobSelected(id);
            setShowDetail(true);
            return;
        }
    }, [setJobSelected]);
    var handleJobCardClick = React.useCallback(function (id) {
        handleVacant(id);
    }, [handleVacant]);
    React.useEffect(function () {
        setShowDetail(showDetailByWindow_util.showDetailByWindow('magneto-ui-jobs-page'));
    }, []);
    var onClose = React.useCallback(function () {
        setShowDetail(false);
        setJobSelected(null);
    }, [setJobSelected]);
    var hasVacancies = React.useMemo(function () { return !!(vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length) || isLoading; }, [isLoading, vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length]);
    React.useEffect(function () {
        if (!jobSelected && showDetail && device === 'mobile') {
            onClose();
        }
    }, [device, jobSelected, onClose, showDetail]);
    var JobDetailsDrawerComponent = index.useMediaQuery(React__default["default"].createElement(JobDetailsDrawer_context.JobDetailsDrawerContext.Provider, { value: { onClose: onClose } }, jobDetailAction ? jobDetailAction : jobDetailsContent), {
        lg: (React__default["default"].createElement(index$1.JobDetails.Drawer, { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--drawer")], isMobile: true, isOpen: showDetail && hasVacancies, onClose: onClose }, jobDetailsContent))
    });
    var mainTitleByMediaQuery = index.useMediaQuery(React__default["default"].createElement(React.Fragment, null), {
        md: React__default["default"].createElement("h1", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--title")] }, sortBarProps === null || sortBarProps === void 0 ? void 0 : sortBarProps.mainTitle)
    });
    var cardsAltRender = React.useMemo(function () {
        if (isLoading) {
            return React__default["default"].createElement(JobCardSkeleton_component, { numCard: 20 });
        }
        if (emptyVacant) {
            return React__default["default"].createElement(EmptyResults_component, tslib_es6.__assign({}, emptyResultsProps));
        }
        return vacantProps.map(function (vacant) {
            if (typeof vacant === 'function')
                return vacant();
            var id = vacant.id, props = tslib_es6.__rest(vacant, ["id"]);
            return (React__default["default"].createElement(JobCard_component, tslib_es6.__assign({ isLoading: isLoading, isActive: id === (jobSelected === null || jobSelected === void 0 ? void 0 : jobSelected.id), id: id, showDetail: function () { return handleJobCardClick(id); }, dynamicUrl: fullJobsUrl, key: "".concat(id, "-JobsPage") }, props)));
        });
    }, [isLoading, emptyVacant, emptyResultsProps, vacantProps, jobSelected, fullJobsUrl, handleJobCardClick]);
    var filterAltRender = React.useMemo(function () {
        if (!displayAlwaysFilter && emptyVacant)
            return;
        if (typeFilters === 'side') {
            return (React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--filter-row")] },
                React__default["default"].createElement(FilterContainerMenu_component, null,
                    React__default["default"].createElement(SideFilter_component, tslib_es6.__assign({}, sideFilterProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen })))));
        }
        return React__default["default"].createElement(HorizontalFilter_component, tslib_es6.__assign({}, sideFilterProps, { isFiltersOpen: isFiltersOpen }));
    }, [displayAlwaysFilter, sideFilterProps, typeFilters, isFiltersOpen, emptyVacant]);
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement("div", { id: "magneto-ui-jobs-page", className: "".concat(JobsPage_module["".concat(common_constants.classMUI, "-jobs-page")], " ").concat(typeFilters === 'row' ? JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--column")] : '') }, typeFilters === 'row' ? (React__default["default"].createElement(React.Fragment, null,
            filterAltRender,
            React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--row-content")] },
                React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--center-row")] },
                    React__default["default"].createElement(SortBar_component, tslib_es6.__assign({}, sortBarProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen, emptyVacant: emptyVacant, horizontal: typeFilters === 'row' })),
                    createAccountCTAProps && React__default["default"].createElement(CreateAccountCTA_component.CreateAccountCTA, tslib_es6.__assign({}, createAccountCTAProps)),
                    mainTitleByMediaQuery,
                    React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--center-row__jobs-result")] }, cardsAltRender),
                    customParagraph && React__default["default"].createElement(Paragraph_component.Paragraph, { paragraph: customParagraph }),
                    React__default["default"].createElement(Pagination_component.Pagination, tslib_es6.__assign({ dynamicUrl: fullUrl }, paginationProps)), renderBelowPagination === null || renderBelowPagination === void 0 ? void 0 :
                    renderBelowPagination(),
                    React__default["default"].createElement(FrequentSearch_component.FrequentSearch, tslib_es6.__assign({}, frequentSearchProps))),
                React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))) : (React__default["default"].createElement(React.Fragment, null,
            filterAltRender,
            React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--center-row")] },
                React__default["default"].createElement(SortBar_component, tslib_es6.__assign({}, sortBarProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen, emptyVacant: emptyVacant })),
                createAccountCTAProps && React__default["default"].createElement(CreateAccountCTA_component.CreateAccountCTA, tslib_es6.__assign({}, createAccountCTAProps)),
                mainTitleByMediaQuery,
                React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--center-row__jobs-result")] }, cardsAltRender),
                customParagraph && React__default["default"].createElement(Paragraph_component.Paragraph, { paragraph: customParagraph }),
                React__default["default"].createElement(Pagination_component.Pagination, tslib_es6.__assign({ dynamicUrl: fullUrl }, paginationProps)), renderBelowPagination === null || renderBelowPagination === void 0 ? void 0 :
                renderBelowPagination(),
                React__default["default"].createElement(FrequentSearch_component.FrequentSearch, tslib_es6.__assign({}, frequentSearchProps))),
            React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))),
        React__default["default"].createElement(Footer_component, tslib_es6.__assign({}, footerProps))));
};

module.exports = JobsPage;
//# sourceMappingURL=JobsPage.component.js.map
