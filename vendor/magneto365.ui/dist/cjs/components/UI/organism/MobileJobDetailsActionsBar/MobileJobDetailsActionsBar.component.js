'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var More1 = require('../../../../assets/More1.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
var vacancies_constants = require('../../../../constants/stories/vacancies.constants.js');
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
require('../../../hooks/useMediaQuery/index.js');
var Actions_component = require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../molecules/MobileDrawer/MobileDrawer.component.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
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
var MobileJobDetailsActionsBar_module = require('./MobileJobDetailsActionsBar.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var externalButtonChild = _a.externalButtonChild, actionsProps = _a.actionsProps, onClose = _a.onClose, isApplied = _a.isApplied;
    var _b = React.useState(false), toggleMobileDrawer = _b[0], setToggleMobileDrawer = _b[1];
    var onOpenClick = function () {
        setToggleMobileDrawer(!toggleMobileDrawer);
    };
    var showButtonContainer = onClose ? MobileJobDetailsActionsBar_module['showContainer'] : MobileJobDetailsActionsBar_module['hideContainer'];
    return (React__default["default"].createElement("div", { className: "".concat(MobileJobDetailsActionsBar_module.MobileJobDetailsActionsBarComponent, " ").concat(showButtonContainer) },
        React__default["default"].createElement("div", { id: MobileJobDetailsActionsBar_module['magneto-ui__external-child'] }, !isApplied && externalButtonChild),
        React__default["default"].createElement("div", { className: MobileJobDetailsActionsBar_module['DrawerButtonWrapper'] },
            React__default["default"].createElement("button", { type: "button", onClick: onOpenClick },
                React__default["default"].createElement(Icon_component.IconItem, { icon: More1, hover: false }))),
        React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: toggleMobileDrawer, onClose: function () { return setToggleMobileDrawer(!toggleMobileDrawer); } },
            React__default["default"].createElement(Actions_component.Actions, tslib_es6.__assign({ ActionsAnchorIcons: vacancies_constants.anchorIconList }, actionsProps, { isApplied: isApplied })))));
};
/**
 * UI Organism Component for Mobile Job Details Drawer
 */
var MobileJobDetailsActionsBar = Component;

exports.MobileJobDetailsActionsBar = MobileJobDetailsActionsBar;
//# sourceMappingURL=MobileJobDetailsActionsBar.component.js.map
