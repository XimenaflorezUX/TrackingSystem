'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var MegaMenuCards_module = require('./MegaMenuCards.module.scss.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var ArrowRightWhite = require('../../../../assets/ArrowRightWhite.svg.js');
var ButtonLink_component = require('../../atoms/ButtonLink/ButtonLink.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
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
var index = require('../../../hooks/useMediaQuery/index.js');
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
var MegaMenuCard_component = require('../../molecules/MegaMenuCard/MegaMenuCard.component.js');
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
require('../AlertsPanel/AlertsPanel.component.js');
var AlphabetFilter_component = require('../AlphabetFilter/AlphabetFilter.component.js');
require('../ApplicationSummary/ApplicationSummary.component.js');
require('../CategoryMenuCard/CategoryMenuCard.component.js');
require('../../../Domain/Jobs/SimilarJobs/index.js');
require('../JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
require('../Swipe/Swipe.interface.js');
require('../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js');
require('../../template/AnalystTemplate/AnalystTemplate.context.js');
require('../ProcessesCard/ProcessesCard.component.js');
require('../Select/Select.component.js');
require('../Select2/Select2.component.js');
require('../UserTerms/UserTerms.component.js');
require('../Carousel/Carousel.component.js');
require('../Record/record.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuCards = function (_a) {
    var _b;
    var jobs = _a.jobs, action = _a.action, title = _a.title, actionTitle = _a.actionTitle, className = _a.className, filterProps = _a.filterProps, _c = _a.maxCards, maxCards = _c === void 0 ? 39 : _c, renderRight = _a.renderRight;
    var renderTitle = index.useMediaQuery(title && (React__default["default"].createElement("div", { className: "".concat(MegaMenuCards_module["mega-menu-cards__title"]) },
        React__default["default"].createElement("p", null, title),
        actionTitle && (React__default["default"].createElement(ButtonLink_component.ButtonLink, { href: actionTitle.url, buttonText: actionTitle.label, onClick: actionTitle.onClick, prefixIcon: ArrowRight2, iconSize: 14, className: "".concat(MegaMenuCards_module["mega-menu-cards__action--grey"]) })))), {
        md: title && actionTitle && (React__default["default"].createElement(ButtonLink_component.ButtonLink, { href: actionTitle.url, buttonText: actionTitle.label, onClick: actionTitle.onClick, prefixIcon: ArrowRight2, iconSize: 14, className: "".concat(MegaMenuCards_module["mega-menu-cards__action--grey"]) }))
    });
    return (React__default["default"].createElement("nav", { className: className },
        renderTitle,
        filterProps && React__default["default"].createElement(AlphabetFilter_component, tslib_es6.__assign({ className: MegaMenuCards_module["mega-menu-cards__filter"] }, filterProps)),
        React__default["default"].createElement("section", { className: "".concat(MegaMenuCards_module['mega-menu-cards__container']) },
            React__default["default"].createElement("ul", { className: "".concat(MegaMenuCards_module["mega-menu-cards"]) }, jobs &&
                jobs.slice(0, maxCards).map(function (job, key) { return (React__default["default"].createElement("li", { key: key },
                    React__default["default"].createElement(MegaMenuCard_component, tslib_es6.__assign({}, job)))); })), renderRight === null || renderRight === void 0 ? void 0 :
            renderRight()),
        action && (React__default["default"].createElement(ButtonLink_component.ButtonLink, { buttonText: action.label, href: action.url, onClick: action.onClick, target: (_b = action.target) !== null && _b !== void 0 ? _b : '_self', prefixIcon: ArrowRightWhite, className: "".concat(MegaMenuCards_module["mega-menu-cards__action"]) }))));
};

module.exports = MegaMenuCards;
//# sourceMappingURL=MegaMenuCards.component.js.map
