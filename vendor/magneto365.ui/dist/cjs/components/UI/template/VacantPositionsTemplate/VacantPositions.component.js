'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../organism/AlertsPanel/AlertsPanel.component.js');
var AlphabetFilter_component = require('../../organism/AlphabetFilter/AlphabetFilter.component.js');
require('../../organism/ApplicationSummary/ApplicationSummary.component.js');
require('../../../hooks/useMediaQuery/index.js');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
var ArrowRightWhite = require('../../../../assets/ArrowRightWhite.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var ButtonLink_component = require('../../atoms/ButtonLink/ButtonLink.component.js');
require('../../atoms/Collapse/Collapse.component.js');
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
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../MegaMenu/MegaMenu.context.js');
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
require('../../organism/CategoryMenuCard/CategoryMenuCard.component.js');
require('../../../Domain/Jobs/SimilarJobs/index.js');
require('../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
require('../../organism/Swipe/Swipe.interface.js');
require('../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('../../organism/ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js');
require('../AnalystTemplate/AnalystTemplate.context.js');
require('../../organism/ProcessesCard/ProcessesCard.component.js');
require('../../organism/Select/Select.component.js');
require('../../organism/Select2/Select2.component.js');
require('../../organism/UserTerms/UserTerms.component.js');
require('../../organism/Carousel/Carousel.component.js');
require('../../organism/Record/record.component.js');
var VacantPositions_module = require('./VacantPositions.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Muiclass = 'magneto-ui';
var VacantPositions = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, banner = _a.banner, filterProps = _a.filterProps, backButtonProps = _a.backButtonProps, viewMoreProps = _a.viewMoreProps, children = _a.children;
    return (React__default["default"].createElement("section", { className: VacantPositions_module["".concat(Muiclass, "-vacant-positions-layout")] },
        React__default["default"].createElement("div", { className: VacantPositions_module["".concat(Muiclass, "-vacant-positions-layout-top-container")] },
            banner && banner,
            filterProps && React__default["default"].createElement(AlphabetFilter_component, tslib_es6.__assign({}, filterProps)),
            backButtonProps && (React__default["default"].createElement(ButtonLink_component.ButtonLink, tslib_es6.__assign({ suffixIcon: ArrowLeft2, className: VacantPositions_module["".concat(Muiclass, "-vacant-positions-layout-top-container__back-button")], iconSize: 16 }, backButtonProps))),
            (title || subtitle) && (React__default["default"].createElement("div", { className: VacantPositions_module["".concat(Muiclass, "-vacant-positions-layout-top-container--description")] },
                title && React__default["default"].createElement("h2", null, title),
                subtitle && React__default["default"].createElement("h3", null, subtitle)))),
        children,
        viewMoreProps && (React__default["default"].createElement("div", { className: VacantPositions_module["".concat(Muiclass, "-vacant-positions-layout-view-more-container")] },
            React__default["default"].createElement(ButtonLink_component.ButtonLink, tslib_es6.__assign({ className: VacantPositions_module["".concat(Muiclass, "-vacant-positions-layout-view-more-container__button")], prefixIcon: ArrowRightWhite, iconSize: 18 }, viewMoreProps))))));
};

module.exports = VacantPositions;
//# sourceMappingURL=VacantPositions.component.js.map
