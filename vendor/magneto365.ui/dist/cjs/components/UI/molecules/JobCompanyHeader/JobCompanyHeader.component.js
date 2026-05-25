'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
var JobHeader_component = require('../../atoms/JobHeader/JobHeader.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var JobCompanyHeader_module = require('./JobCompanyHeader.module.scss.js');
require('../Actions/Actions.component.js');
require('../AlertJobModal/AlertJobModal.component.js');
require('../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../CandidateNav/CandidateNav.component.js');
require('../CandidateProfile/CandidateProfile.component.js');
require('../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../ExpandableInfo/ExpandableInfo.interface.js');
var JobActions_component = require('../JobActions/JobActions.component.js');
require('../JobCard/children/JobCardOption/JobCardOption.component.js');
require('../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
var JobCompanyLogo_component = require('../../../Domain/Jobs/JobCompanyLogo/JobCompanyLogo.component.js');
require('../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../Modal/Modal.component.js');
require('../SharePopover/SharePopover.js');
require('../SimilarCard/SimilarCard.component.js');
require('../SortMenu/SortMenu.component.js');
require('../TimelineEvent/TimelineEvent.interface.js');
require('../UserMenu/UserMenu.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../JobDetails/JobDetails.component.js');
require('../Chat/Chat.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var jobCompanyLogoProps = _a.jobCompanyLogoProps, jobHeaderProps = _a.jobHeaderProps, jobActionsProps = _a.jobActionsProps, isApplied = _a.isApplied;
    return (React__default["default"].createElement("div", { className: JobCompanyHeader_module['magneto-ui-job-company-header'] },
        React__default["default"].createElement(JobCompanyLogo_component.JobCompanyLogo, tslib_es6.__assign({}, jobCompanyLogoProps)),
        React__default["default"].createElement("div", { className: JobCompanyHeader_module['magneto-ui-job-company-header__data-actions'] },
            React__default["default"].createElement(JobHeader_component.JobHeader, tslib_es6.__assign({}, jobHeaderProps)),
            isApplied && jobActionsProps && (React__default["default"].createElement(JobActions_component.JobActions, tslib_es6.__assign({ isApplied: isApplied, actionsAnchorIcons: vacancies_constants.anchorIconList }, jobActionsProps))))));
};
/**
 * UI Molecule component for Company Job Header
 */
var JobCompanyHeader = Component;

exports.JobCompanyHeader = JobCompanyHeader;
//# sourceMappingURL=JobCompanyHeader.component.js.map
