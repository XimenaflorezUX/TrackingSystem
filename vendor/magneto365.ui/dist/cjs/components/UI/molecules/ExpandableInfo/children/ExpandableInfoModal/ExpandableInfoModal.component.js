'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../ExpandableInfoAction/ExpandableInfoAction.constants.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
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
require('../ExpandableInfoAction/ExpandableInfoAction.interface.js');
var ExpandableInfoDetails_component = require('../ExpandableInfoDetails/ExpandableInfoDetails.component.js');
require('../ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../Actions/Actions.component.js');
require('../../../AlertJobModal/AlertJobModal.component.js');
require('../../../AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../../MobileDrawer/MobileDrawer.component.js');
require('../../../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../CandidateNav/CandidateNav.component.js');
require('../../../CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
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
var ExpandableInfoModal_module = require('./ExpandableInfoModal.module.scss.js');
require('../ExpandableInfoPopover/ExpandableInfoPopover.component.js');
var ExpandableInfoToggler_component = require('../ExpandableInfoToggler/ExpandableInfoToggler.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var toggler = _a.toggler, details = _a.details;
    var _b = React.useState(false), visible = _b[0], setVisible = _b[1];
    var handleOnToggle = React.useCallback(function () {
        setVisible(function (prev) { return !prev; });
    }, []);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ExpandableInfoToggler_component.ExpandableInfoToggler, tslib_es6.__assign({}, toggler, { onToggle: handleOnToggle })),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: visible, onClose: handleOnToggle, className: classNameManager_util.get({ styles: ExpandableInfoModal_module, cls: ['expandable-info-modal'] }) },
            React__default["default"].createElement(ExpandableInfoDetails_component.ExpandableInfoDetails, tslib_es6.__assign({}, details)))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoModal = Component;

exports.ExpandableInfoModal = ExpandableInfoModal;
//# sourceMappingURL=ExpandableInfoModal.component.js.map
