'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var Paragraph_component = require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
var CreateAccountCTA_component = require('../../molecules/CreateAccountCTA/CreateAccountCTA.component.js');
var EmptyResults_component = require('../../molecules/EmptyResults/EmptyResults.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
var FilterContainerMenu_component = require('../../molecules/FilterContainerMenu/FilterContainerMenu.component.js');
var FrequentSearch_component = require('../../molecules/FrequentSearch/FrequentSearch.component.js');
require('../../molecules/SharePopover/SharePopover.js');
var JobCard_component = require('../../molecules/JobCard/JobCard.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var JobDetailContainer_component = require('../../molecules/JobDetailContainer/JobDetailContainer.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
var Pagination_component = require('../../molecules/Pagination/Pagination.component.js');
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
require('../../molecules/JobDetails/JobDetails.component.js');
require('../../molecules/Chat/Chat.component.js');
require('../../organism/AlertsPanel/AlertsPanel.component.js');
require('../../organism/ApplicationSummary/ApplicationSummary.component.js');
require('../../organism/CategoryMenuCard/CategoryMenuCard.component.js');
var JobDetailsDrawer_component = require('../../organism/JobDetailsDrawer/JobDetailsDrawer.component.js');
require('../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
var MobileJobDetailsDrawer_component = require('../../organism/MobileJobDetailsDrawer/MobileJobDetailsDrawer.component.js');
require('../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js');
require('../../template/AnalystTemplate/AnalystTemplate.context.js');
require('../../organism/ProcessesCard/ProcessesCard.component.js');
require('../../organism/Select/Select.component.js');
require('../../organism/Select2/Select2.component.js');
require('../../organism/UserTerms/UserTerms.component.js');
require('../../organism/Carousel/Carousel.component.js');
require('../../organism/Record/record.component.js');
require('../../template/CandidateProfileTemplate/CandidateProfileTemplate.component.js');
var Footer_component = require('../../template/Footer/Footer.component.js');
require('../../template/MegaMenu/MegaMenu.component.js');
var SideFilter_component = require('../../template/SideFilter/SideFilter.component.js');
var SortBar_component = require('../../template/SortBar/SortBar.component.js');
var HorizontalFilter_component = require('../../template/HorizontalFilter/HorizontalFilter.component.js');
require('../../template/TestsFormHandler/TestsFormHandler.context.js');
var showDetailByWindow_util = require('./utils/showDetailByWindow.util.js');
var JobsPage_module = require('./JobsPage.module.scss.js');
var JobCardSkeleton_component = require('../../molecules/JobCard/children/JobCardSkeleton.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobsPage = function (_a) {
    var jobDetailsDrawerProps = _a.jobDetailsDrawerProps, mobileJobDetailsDrawerProps = _a.mobileJobDetailsDrawerProps, sortBarProps = _a.sortBarProps, sideFilterProps = _a.sideFilterProps, frequentSearchProps = _a.frequentSearchProps, vacantProps = _a.vacantProps, footerProps = _a.footerProps, paginationProps = _a.paginationProps, setJobSelected = _a.setJobSelected, jobSelected = _a.jobSelected, isLoading = _a.isLoading, device = _a.device, emptyResultsProps = _a.emptyResultsProps, jobDetailAction = _a.jobDetailAction, customParagraph = _a.customParagraph, dynamicPaginationUrl = _a.dynamicPaginationUrl, displayAlwaysFilter = _a.displayAlwaysFilter, createAccountCTAProps = _a.createAccountCTAProps, _b = _a.typeFilters, typeFilters = _b === void 0 ? 'row' : _b;
    var _c = React.useState(false), isFiltersOpen = _c[0], setIsFiltersOpen = _c[1];
    var _d = React.useState(false), loadVideo = _d[0], setLoadVideo = _d[1];
    var _e = React.useState(device === 'desktop'), showDetail = _e[0], setShowDetail = _e[1];
    var _f = React.useState(null), selectedJobId = _f[0], setSelectedJobId = _f[1];
    var _g = dynamicPaginationUrl || {}, fullUrl = _g.fullUrl, fullJobsUrl = _g.fullJobsUrl;
    var emptyVacant = vacantProps.length === 0;
    var handleVacant = React.useCallback(function (id) {
        if (id) {
            setJobSelected(id);
            setShowDetail(true);
            return;
        }
    }, [setJobSelected]);
    var handleJobCardClick = React.useCallback(function (id) {
        setSelectedJobId(id);
        handleVacant(id);
        setLoadVideo(false);
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
    var JobDetailsDrawerComponent = index.useMediaQuery(React__default["default"].createElement(JobDetailContainer_component, { onClose: onClose, isOpen: showDetail && hasVacancies }, jobDetailAction ? (jobDetailAction) : (React__default["default"].createElement(JobDetailsDrawer_component.JobDetailsDrawer, tslib_es6.__assign({}, jobDetailsDrawerProps, { isLoading: isLoading || !jobSelected, selectedJobId: selectedJobId, loadVideo: loadVideo, setLoadVideo: setLoadVideo })))), {
        lg: (React__default["default"].createElement(MobileJobDetailsDrawer_component.MobileJobDetailsDrawer, tslib_es6.__assign({}, mobileJobDetailsDrawerProps, { onClose: onClose, isOpen: showDetail, jobDetailAction: jobDetailAction, isLoading: isLoading || !jobSelected, loadVideo: loadVideo, setLoadVideo: setLoadVideo })))
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
                    React__default["default"].createElement(Pagination_component.Pagination, tslib_es6.__assign({ dynamicUrl: fullUrl }, paginationProps)),
                    React__default["default"].createElement(FrequentSearch_component.FrequentSearch, tslib_es6.__assign({}, frequentSearchProps))),
                React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))) : (React__default["default"].createElement(React.Fragment, null,
            filterAltRender,
            React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--center-row")] },
                React__default["default"].createElement(SortBar_component, tslib_es6.__assign({}, sortBarProps, { isFiltersOpen: isFiltersOpen, setIsFiltersOpen: setIsFiltersOpen, emptyVacant: emptyVacant })),
                createAccountCTAProps && React__default["default"].createElement(CreateAccountCTA_component.CreateAccountCTA, tslib_es6.__assign({}, createAccountCTAProps)),
                mainTitleByMediaQuery,
                React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page--center-row__jobs-result")] }, cardsAltRender),
                customParagraph && React__default["default"].createElement(Paragraph_component.Paragraph, { paragraph: customParagraph }),
                React__default["default"].createElement(Pagination_component.Pagination, tslib_es6.__assign({ dynamicUrl: fullUrl }, paginationProps)),
                React__default["default"].createElement(FrequentSearch_component.FrequentSearch, tslib_es6.__assign({}, frequentSearchProps))),
            React__default["default"].createElement("div", { className: JobsPage_module["".concat(common_constants.classMUI, "-jobs-page__jobs-detail")] }, JobDetailsDrawerComponent)))),
        React__default["default"].createElement(Footer_component, tslib_es6.__assign({}, footerProps))));
};

module.exports = JobsPage;
//# sourceMappingURL=JobsPage.component.js.map
