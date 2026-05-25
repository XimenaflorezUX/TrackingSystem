'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
var jobDetails_constants = require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
require('../../../../../UI/molecules/Actions/Actions.component.js');
require('../../../../../UI/molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../../../UI/molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../../../UI/molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../../UI/molecules/CandidateNav/CandidateNav.component.js');
require('../../../../../UI/molecules/CandidateProfile/CandidateProfile.component.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js');
var SharePopover$1 = require('../../../../../UI/molecules/SharePopover/SharePopover.js');
require('../../../../../UI/molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../../UI/molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../../../UI/molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../../UI/template/MegaMenu/MegaMenu.context.js');
require('../../../../../UI/molecules/Modal/Modal.component.js');
require('../../../../../UI/molecules/SimilarCard/SimilarCard.component.js');
require('../../../../../UI/molecules/SortMenu/SortMenu.component.js');
require('../../../../../UI/molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../../../../UI/molecules/UserMenu/UserMenu.component.js');
require('../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../../../UI/molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../../UI/molecules/JobDetails/JobDetails.component.js');
require('../../../../../UI/molecules/Chat/Chat.component.js');
var JobDetailsAction_module = require('./JobDetailsAction.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobDetailsAction_module);
var Button = function (_a) {
    var icon = _a.icon, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'transparent' : _b, _c = _a.rounded, rounded = _c === void 0 ? false : _c, iconSize = _a.iconSize, iconAlt = _a.iconAlt, rest = tslib_es6.__rest(_a, ["icon", "children", "variant", "rounded", "iconSize", "iconAlt"]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, rest, { className: cx('action', "action--".concat(variant), { 'action--rounded': rounded }, rest.className) }),
        icon && React__default["default"].createElement(Icon_component.IconItem, { icon: jobDetails_constants.iconJobDetailsAction[icon], size: iconSize !== null && iconSize !== void 0 ? iconSize : 18, alt: iconAlt !== null && iconAlt !== void 0 ? iconAlt : 'icon' }),
        children));
};
var Link = function (_a) {
    var children = _a.children, icon = _a.icon, iconSize = _a.iconSize, iconAlt = _a.iconAlt, variant = _a.variant, rounded = _a.rounded, rest = tslib_es6.__rest(_a, ["children", "icon", "iconSize", "iconAlt", "variant", "rounded"]);
    return (React__default["default"].createElement("a", tslib_es6.__assign({}, rest, { className: cx('action', "action--".concat(variant), { 'action--rounded': rounded }, rest.className) }),
        icon && React__default["default"].createElement(Icon_component.IconItem, { icon: jobDetails_constants.iconJobDetailsAction[icon], size: iconSize !== null && iconSize !== void 0 ? iconSize : 18, alt: iconAlt !== null && iconAlt !== void 0 ? iconAlt : 'icon' }),
        children));
};
var SharePopover = function (_a) {
    var icon = _a.icon, iconPopoverSize = _a.iconPopoverSize, variant = _a.variant, rounded = _a.rounded, rest = tslib_es6.__rest(_a, ["icon", "iconPopoverSize", "variant", "rounded"]);
    return (React__default["default"].createElement(SharePopover$1.SharePopover, tslib_es6.__assign({}, rest, { classNameButton: cx('action', "action--".concat(variant), { 'action--rounded': rounded }, rest.classNameButton), iconPopoverSize: iconPopoverSize !== null && iconPopoverSize !== void 0 ? iconPopoverSize : 18, iconPopover: icon && jobDetails_constants.iconJobDetailsAction[icon], classNameContent: cx(rest.classNameContent) })));
};
var JobDetailsAction = { Button: Button, Link: Link, SharePopover: SharePopover };

exports.JobDetailsAction = JobDetailsAction;
//# sourceMappingURL=JobDetailsAction.component.js.map
