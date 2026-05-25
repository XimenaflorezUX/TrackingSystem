'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../../../../../../../atoms/Icon/Icon.component.js');
require('../../../../../../../../atoms/BarChart/enums.js');
require('../../../../../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../../../../atoms/Button/Button.component.js');
require('../../../../../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../../../../constants/img.constants.js');
require('../../../../../../../../../../utils/date/dateInput.util.js');
require('../../../../../../../../atoms/Field/Field.component.js');
require('../../../../../../../../atoms/Typography/Typography.component.js');
require('../../../../../../../../atoms/Typography/Typography.interface.js');
require('../../../../../../../../atoms/InputFile/InputFile.component.js');
require('../../../../../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../../../../../atoms/Radio/Radio.interface.js');
require('../../../../../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../../../../../constants/jobDetails.constants.js');
require('../../../../../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../../../../../hooks/useMediaQuery/index.js');
var Tooltip_component = require('../../../../../../../Tooltip/Tooltip.component.js');
require('../../../../../../../Actions/Actions.component.js');
require('../../../../../../../AlertJobModal/AlertJobModal.component.js');
require('../../../../../../../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../../../../../context/container/container.context.js');
require('../../../../../../../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../../../../CandidateNav/CandidateNav.component.js');
require('../../../../../../../CandidateProfile/CandidateProfile.component.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../../../../ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../../../../SharePopover/SharePopover.js');
require('../../../../../../../JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../../../../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../../../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../../../../../template/MegaMenu/MegaMenu.context.js');
require('../../../../../../../Modal/Modal.component.js');
require('../../../../../../../SimilarCard/SimilarCard.component.js');
require('../../../../../../../SortMenu/SortMenu.component.js');
require('../../../../../../../TimelineEvent/TimelineEvent.interface.js');
require('../../../../../../../UserMenu/UserMenu.component.js');
var UserMenuAnalyst_constants = require('../../../../../../UserMenuAnalyst.constants.js');
require('../../UserMenuAnalystOption.constants.js');
require('../UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../../UserMenuAnalystOption.interface.js');
require('../../../../../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../../../../../../../JobDetails/JobDetails.component.js');
require('../../../../../../../Chat/Chat.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var actions = _a.actions, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, getUrl = _a.getUrl, option = _a.option;
    return (React__default["default"].createElement(React__default["default"].Fragment, null, actions.map(function (action, index) { return (React__default["default"].createElement(Tooltip_component, { key: "".concat(action.title, "-").concat(index), title: action.title || '', position: "bottom", width: "fit-content" },
        React__default["default"].createElement(Action, { action: action, getUrl: getUrl, option: option, handleModal: handleModal, handleMenuOpen: handleMenuOpen },
            React__default["default"].createElement(Icon_component.IconItem, { showDefaultFallback: false, size: 16, icon: action.icon && UserMenuAnalyst_constants.userMenuAnalystIcons[action.icon] ? UserMenuAnalyst_constants.userMenuAnalystIcons[action.icon] : action.icon })))); })));
};
var Action = function (_a) {
    var action = _a.action, children = _a.children, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, getUrl = _a.getUrl, option = _a.option;
    var handleOnClick = React.useCallback(function () {
        if (action.modal && handleModal && handleMenuOpen) {
            handleMenuOpen(false);
            return handleModal(action.modal.name, true, action.modal.data);
        }
        return action.data && action.data(option);
    }, [action, handleModal, handleMenuOpen, option]);
    return typeof action.data === 'function' || action.modal ? (React__default["default"].createElement("button", { onClick: handleOnClick }, children)) : (React__default["default"].createElement("a", { href: getUrl(action), rel: action.rel || 'noreferrer', target: action.target || '_self' }, children));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionActions = React__default["default"].memo(Component);

exports.UserMenuAnalystOptionActions = UserMenuAnalystOptionActions;
//# sourceMappingURL=UserMenuAnalystOptionActions.component.js.map
