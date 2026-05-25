'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
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
var Popover_component = require('../../../../atoms/Popover/Popover.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
var UserMenuButtonAnalyst_component = require('../../../../atoms/UserMenuButtonAnalyst/UserMenuButtonAnalyst.component.js');
require('../../../Actions/Actions.component.js');
require('../../../AlertJobModal/AlertJobModal.component.js');
require('../../../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../CandidateNav/CandidateNav.component.js');
require('../../../CandidateProfile/CandidateProfile.component.js');
require('../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../../hooks/useMediaQuery/index.js');
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
var UserMenuAnalyst_component = require('../../../UserMenuAnalyst/UserMenuAnalyst.component.js');
require('../../../JobDetails/JobDetails.component.js');
require('../../../Chat/Chat.component.js');
var index = require('../../../../../hoc/withClickOut/index.js');
var UserMenuWrapperAnalystDropdown_module = require('./UserMenuWrapperAnalystDropdown.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var action = _a.action, user = _a.user, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, handleModal = _a.handleModal, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c, footerSections = _a.footerSections, headerSections = _a.headerSections;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: UserMenuWrapperAnalystDropdown_module, cls: ['user-menu-wrapper-analyst-dropdown'] }) },
        React__default["default"].createElement(Popover_component.Popover, { widthBase: 'auto', show: clickOut, content: React__default["default"].createElement(UserMenuAnalyst_component.UserMenuAnalyst, { isMenuOpen: clickOut, user: user, action: action, handleModal: handleModal, handleMenuOpen: setClickOut, headerSections: headerSections, footerSections: footerSections }), positionX: "left", positionY: "bottom" },
            React__default["default"].createElement(UserMenuButtonAnalyst_component.UserMenuButtonAnalyst, { user: user.name, title: user.title, onClick: function () { return setClickOut(!clickOut); } }))));
};
/**
 * Molecule UI child component of user menu analyst wrapper
 */
var UserMenuWrapperAnalystDropdown = index(Component);

exports.UserMenuWrapperAnalystDropdown = UserMenuWrapperAnalystDropdown;
//# sourceMappingURL=UserMenuWrapperAnalystDropdown.component.js.map
