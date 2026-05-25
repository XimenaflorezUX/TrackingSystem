'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
require('../../atoms/Paragraph/Paragraph.component.js');
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
var EmptyResults_component = require('../../molecules/EmptyResults/EmptyResults.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
var JobCard_component = require('../../molecules/JobCard/JobCard.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var JobDetailContainer_component = require('../../molecules/JobDetailContainer/JobDetailContainer.component.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../../molecules/Modal/Modal.component.js');
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
var JobCardSkeleton_component = require('../../molecules/JobCard/children/JobCardSkeleton.component.js');
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
var SuggestedJobsPage_module = require('./SuggestedJobsPage.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var device = _a.device, emptyResultsProps = _a.emptyResultsProps, isLoading = _a.isLoading, jobDetailAction = _a.jobDetailAction, jobDetailsDrawerProps = _a.jobDetailsDrawerProps, jobSelected = _a.jobSelected, mobileJobDetailsDrawerProps = _a.mobileJobDetailsDrawerProps, paginationProps = _a.paginationProps, setJobSelected = _a.setJobSelected, vacantProps = _a.vacantProps;
    var _b = React.useState(false), isBottomPage = _b[0], setIsBottomPage = _b[1];
    var _c = React.useState(device === 'desktop'), showDetail = _c[0], setShowDetail = _c[1];
    var _d = React.useState(null), selectedJobId = _d[0], setSelectedJobId = _d[1];
    var _e = React.useMemo(function () { return paginationProps; }, [paginationProps]), totalVacants = _e.total, onChangePage = _e.onChange, currentPage = _e.current, pageSize = _e.pageSize;
    var hasVacancies = React.useMemo(function () { return !!(vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length) || isLoading; }, [isLoading, vacantProps === null || vacantProps === void 0 ? void 0 : vacantProps.length]);
    var vacantsLength = React.useMemo(function () { return vacantProps.length; }, [vacantProps.length]);
    var fetchMoredata = React.useMemo(function () { return isBottomPage && !isLoading && totalVacants > vacantsLength && pageSize * currentPage == vacantsLength; }, [currentPage, isBottomPage, isLoading, pageSize, totalVacants, vacantsLength]);
    var cardsAltRender = React.useMemo(function () {
        if (isLoading) {
            return currentPage == 1 ? React__default["default"].createElement(JobCardSkeleton_component, { numCard: 20 }) : null;
        }
        return React__default["default"].createElement(EmptyResults_component, tslib_es6.__assign({}, emptyResultsProps));
    }, [isLoading, emptyResultsProps, currentPage]);
    React.useEffect(function () {
        var element = document.getElementsByTagName('body')[0];
        element.style.overflowY = 'hidden';
        return function () {
            element.style.overflowY = 'auto';
        };
    }, []);
    React.useEffect(function () {
        if (!fetchMoredata)
            return;
        setIsBottomPage(false);
        onChangePage(currentPage + 1, pageSize);
    }, [currentPage, fetchMoredata, onChangePage, pageSize]);
    React.useEffect(function () {
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
    var handleVacant = React.useCallback(function (id) {
        if (id) {
            setJobSelected(id);
            setShowDetail(true);
            return;
        }
    }, [setJobSelected]);
    var onClose = React.useCallback(function () {
        setShowDetail(false);
        setJobSelected(null);
    }, [setJobSelected]);
    var JobDetailsDrawerComponent = index.useMediaQuery(React__default["default"].createElement(JobDetailContainer_component, { onClose: onClose, isOpen: showDetail && hasVacancies }, jobDetailAction ? (jobDetailAction) : (React__default["default"].createElement(JobDetailsDrawer_component.JobDetailsDrawer, tslib_es6.__assign({}, jobDetailsDrawerProps, { isLoading: !jobSelected, selectedJobId: selectedJobId })))), {
        md: (React__default["default"].createElement(MobileJobDetailsDrawer_component.MobileJobDetailsDrawer, tslib_es6.__assign({}, mobileJobDetailsDrawerProps, { onClose: onClose, isOpen: showDetail, jobDetailAction: jobDetailAction, isLoading: !jobSelected })))
    });
    var handleJobCardClick = function (id) {
        setSelectedJobId(id);
        handleVacant(id);
    };
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement("div", { id: "magneto-ui-suggestedJobs-page", className: SuggestedJobsPage_module["".concat(common_constants.classMUI, "-suggestedJobs-page")] },
            React__default["default"].createElement("div", { className: SuggestedJobsPage_module["".concat(common_constants.classMUI, "-suggestedJobs-page--center-row")] },
                React__default["default"].createElement("div", { className: SuggestedJobsPage_module["".concat(common_constants.classMUI, "-suggestedJobs-page--center-row__jobs-result")] },
                    vacantProps.length <= 0 || (isLoading && currentPage == 1)
                        ? cardsAltRender
                        : vacantProps.map(function (_a) {
                            var id = _a.id, props = tslib_es6.__rest(_a, ["id"]);
                            return (React__default["default"].createElement(React__default["default"].Fragment, null,
                                React__default["default"].createElement(JobCard_component, tslib_es6.__assign({ isLoading: isLoading, isActive: id === (jobSelected === null || jobSelected === void 0 ? void 0 : jobSelected.id), id: id, showDetail: function () { return handleJobCardClick(id); }, key: "".concat(id, "-JobsPage") }, props))));
                        }),
                    isLoading && currentPage > 1 && React__default["default"].createElement(JobCardSkeleton_component, { numCard: 1, goToBottom: true }))),
            React__default["default"].createElement("div", { className: SuggestedJobsPage_module["".concat(common_constants.classMUI, "-suggestedJobs-page__jobs-detail")] }, JobDetailsDrawerComponent))));
};
var SuggestedJobsPage = Component;

exports.SuggestedJobsPage = SuggestedJobsPage;
//# sourceMappingURL=SuggestedJobsPage.component.js.map
