'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
var ExpandableInfoDetails_module = require('./ExpandableInfoDetails.module.scss.js');
var ExpandableInfoAction_component = require('../ExpandableInfoAction/ExpandableInfoAction.component.js');
require('../ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
require('../../../Actions/Actions.component.js');
require('../../../AlertJobModal/AlertJobModal.component.js');
require('../../../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../CandidateNav/CandidateNav.component.js');
require('../../../CandidateProfile/CandidateProfile.component.js');
require('../../ExpandableInfo.interface.js');
require('../../../SharePopover/SharePopover.js');
require('../../../JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../Modal/Modal.component.js');
require('../../../SimilarCard/SimilarCard.component.js');
require('../../../SortMenu/SortMenu.component.js');
require('../../../TimelineEvent/TimelineEvent.interface.js');
require('../../../UserMenu/UserMenu.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../JobDetails/JobDetails.component.js');
require('../../../Chat/Chat.component.js');
require('../ExpandableInfoPopover/ExpandableInfoPopover.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var sections = _a.sections, footer = _a.footer;
    var sectionStyles = React.useCallback(function (multiple) {
        return classNameManager_util.get({
            styles: ExpandableInfoDetails_module,
            cls: ['expandable-info-details__section', multiple && 'expandable-info-details__section--multiple']
        });
    }, []);
    var subSectionStyles = React.useCallback(function (initial) {
        return classNameManager_util.get({
            styles: ExpandableInfoDetails_module,
            cls: ['expandable-info-details__sub-section', initial && 'expandable-info-details__sub-section--initial']
        });
    }, []);
    var itemStyles = React.useCallback(function (first) {
        return classNameManager_util.get({
            styles: ExpandableInfoDetails_module,
            cls: ['expandable-info-details__item', first && 'expandable-info-details__item--first']
        });
    }, []);
    var textStyles = React.useCallback(function (bold) {
        return classNameManager_util.get({
            styles: ExpandableInfoDetails_module,
            cls: ['expandable-info-details__text', bold && 'expandable-info-details__text--bold']
        });
    }, []);
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoDetails_module, cls: ['expandable-info-details'] }) },
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoDetails_module, cls: ['expandable-info-details__container'] }) }, sections === null || sections === void 0 ? void 0 :
            sections.map(function (section, index) {
                var _a, _b;
                return (React__default["default"].createElement("div", { key: "eids-".concat(index), className: sectionStyles(((_a = section === null || section === void 0 ? void 0 : section.children) === null || _a === void 0 ? void 0 : _a.length) > 1) }, (_b = section === null || section === void 0 ? void 0 : section.children) === null || _b === void 0 ? void 0 : _b.map(function (subSection, subIndex) {
                    var _a;
                    return (React__default["default"].createElement("div", { key: "eidss-".concat(subIndex), className: subSectionStyles(index === 0) },
                        React__default["default"].createElement("div", { className: itemStyles(index === 0) },
                            React__default["default"].createElement("span", { className: textStyles(true) }, subSection.title),
                            React__default["default"].createElement("span", { className: textStyles(false) }, subSection.summary)),
                        React__default["default"].createElement("div", null, (_a = subSection.content) === null || _a === void 0 ? void 0 : _a.map(function (content, lastIndex) { return (React__default["default"].createElement("div", { key: "eidsi-".concat(lastIndex), className: itemStyles(false) },
                            React__default["default"].createElement("span", { className: textStyles(false) }, content.title),
                            React__default["default"].createElement("span", { className: textStyles(false) }, content.summary))); }))));
                })));
            }),
            (footer === null || footer === void 0 ? void 0 : footer.title) && footer.onAction && (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ExpandableInfoDetails_module, cls: ['expandable-info-details__footer'] }) },
                React__default["default"].createElement(ExpandableInfoAction_component.ExpandableInfoAction, { variant: "white", title: footer === null || footer === void 0 ? void 0 : footer.title, onAction: footer === null || footer === void 0 ? void 0 : footer.onAction, className: classNameManager_util.get({ styles: ExpandableInfoDetails_module, cls: ['expandable-info-details__action'] }) }))))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoDetails = Component;

exports.ExpandableInfoDetails = ExpandableInfoDetails;
//# sourceMappingURL=ExpandableInfoDetails.component.js.map
