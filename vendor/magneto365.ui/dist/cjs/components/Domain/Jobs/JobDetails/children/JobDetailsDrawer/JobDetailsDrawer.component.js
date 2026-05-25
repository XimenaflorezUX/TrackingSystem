'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
require('../../../../../../constants/jobDetails.constants.js');
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
var Drawer_component = require('../../../../../UI/molecules/Drawer/Drawer.component.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../../UI/molecules/SharePopover/SharePopover.js');
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
var JobDetailsDrawer_context = require('./JobDetailsDrawer.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobDetailsDrawer = function (props) {
    var value = React.useMemo(function () { return ({ onClose: props.onClose }); }, [props.onClose]);
    return (React__default["default"].createElement(JobDetailsDrawer_context.JobDetailsDrawerContext.Provider, { value: value },
        React__default["default"].createElement(Drawer_component.Drawer, tslib_es6.__assign({}, props, { customPadding: 0, className: props.className, hideButton: true, direction: "right", drawerWidth: "fit-content" }), props.children)));
};

exports.JobDetailsDrawer = JobDetailsDrawer;
//# sourceMappingURL=JobDetailsDrawer.component.js.map
