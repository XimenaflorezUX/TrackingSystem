'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../hooks/useMediaQuery/index.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
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
require('../../molecules/Actions/Actions.component.js');
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
var Modal_component = require('../../molecules/Modal/Modal.component.js');
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
var UserTermCheck_component = require('./children/UserTermCheck/UserTermCheck.component.js');
var UserTermContent_component = require('./children/UserTermContent/UserTermContent.component.js');
var UserTermSubtitle_component = require('./children/UserTermSubtitle/UserTermSubtitle.component.js');
var UserTermTitle_component = require('./children/UserTermTitle/UserTermTitle.component.js');
var UserTermSubmit_component = require('./children/UserTermSubmit/UserTermSubmit.component.js');
var UserTermHighlight_component = require('./children/UserTermHighlight/UserTermHighlight.component.js');
var UserTermText_component = require('./children/UserTermText/UserTermText.component.js');
var UserTerms_module = require('./UserTerms.module.scss.js');
var UserTermUList_component = require('./children/UserTermUList/UserTermUList.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(UserTerms_module);
var Component = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? function () { return ({}); } : _b;
    var container = index.useMediaQuery(React__default["default"].createElement(Modal_component, { className: cx('user-term-modal'), blockBackgroundClose: true, isOpen: isOpen, onClose: onClose }, children), {
        sm: (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { className: cx('user-term-drawer'), blockBackgroundClose: true, isOpen: isOpen, onClose: onClose }, children))
    });
    return container;
};
var UserTerms = Object.assign(Component, {
    Title: UserTermTitle_component.UserTermTitle,
    Subtitle: UserTermSubtitle_component.UserTermSubTitle,
    Content: UserTermContent_component.UserTermContent,
    Check: UserTermCheck_component.UserTermCheck,
    Submit: UserTermSubmit_component.UserTermSubmit,
    Highlight: UserTermHighlight_component.UserTermHighlight,
    Text: UserTermText_component.UserTermText,
    UlList: UserTermUList_component.UserTermUList
});

exports.UserTerms = UserTerms;
//# sourceMappingURL=UserTerms.component.js.map
