'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var JobSuggestedHeader_module = require('./JobSuggestedHeader.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
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
require('../../../../../hooks/useMediaQuery/index.js');
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
var JobCompanyHeader_component = require('../../../../molecules/JobCompanyHeader/JobCompanyHeader.component.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobSuggestedHeader_module);
var JobSuggestedHeader = function (jobCompanySuggestedHeaderProps) {
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-job-company-header', jobCompanySuggestedHeaderProps.className) },
        React__default["default"].createElement(JobCompanyHeader_component.JobCompanyHeader, tslib_es6.__assign({}, jobCompanySuggestedHeaderProps))));
};

exports.JobSuggestedHeader = JobSuggestedHeader;
//# sourceMappingURL=JobSuggestedHeader.component.js.map
