'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var index = require('../../../../../hooks/useMediaQuery/index.js');
var Select2Desktop_component = require('../Select2Desktop/Select2Desktop.component.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
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
require('../../../../molecules/Actions/Actions.component.js');
require('../../../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../molecules/CandidateNav/CandidateNav.component.js');
require('../../../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../molecules/SharePopover/SharePopover.js');
require('../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../../molecules/Modal/Modal.component.js');
require('../../../../molecules/SimilarCard/SimilarCard.component.js');
require('../../../../molecules/SortMenu/SortMenu.component.js');
require('../../../../molecules/TimelineEvent/TimelineEvent.interface.js');
require('../../../../molecules/UserMenu/UserMenu.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../molecules/JobDetails/JobDetails.component.js');
require('../../../../molecules/Chat/Chat.component.js');
var Select2Mobile_component = require('../Select2Mobile/Select2Mobile.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var props = tslib_es6.__rest(_a, []);
    var container = index.useMediaQuery(React__default["default"].createElement(Select2Desktop_component.Select2Desktop, tslib_es6.__assign({}, props)), {
        sm: React__default["default"].createElement(Select2Mobile_component.Select2Mobile, tslib_es6.__assign({}, props))
    });
    if (!props.isMobile)
        return React__default["default"].createElement(Select2Desktop_component.Select2Desktop, tslib_es6.__assign({}, props));
    return container;
};
/**
 * Molecule UI child component of select 2
 */
var Select2Container = Component;

exports.Select2Container = Select2Container;
//# sourceMappingURL=Select2Container.component.js.map
