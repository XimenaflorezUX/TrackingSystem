'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
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
require('../../../hooks/useMediaQuery/index.js');
require('../../molecules/Actions/Actions.component.js');
require('../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
var Drawer_component = require('../../molecules/Drawer/Drawer.component.js');
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
require('../AlertsPanel/AlertsPanel.component.js');
require('../ApplicationSummary/ApplicationSummary.component.js');
require('../CategoryMenuCard/CategoryMenuCard.component.js');
require('../../../Domain/Jobs/SimilarJobs/index.js');
require('../JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
require('../Swipe/Swipe.interface.js');
require('../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js');
require('../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js');
var NavMenuAnalyst_component = require('../NavMenuAnalyst/NavMenuAnalyst.component.js');
require('../../template/AnalystTemplate/AnalystTemplate.context.js');
var NavMenuDrawerAnalyst_module = require('./NavMenuDrawerAnalyst.module.scss.js');
require('../ProcessesCard/ProcessesCard.component.js');
require('../Select/Select.component.js');
require('../Select2/Select2.component.js');
require('../UserTerms/UserTerms.component.js');
require('../Carousel/Carousel.component.js');
require('../Record/record.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.isDrawerOpen, isDrawerOpen = _b === void 0 ? false : _b, onClose = _a.onClose, props = tslib_es6.__rest(_a, ["isDrawerOpen", "onClose"]);
    var handleClose = React.useCallback(function () {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    return (React__default["default"].createElement(Drawer_component.Drawer, { isOpen: isDrawerOpen, onClose: handleClose, customPadding: 0, className: classNameManager_util.get({ styles: NavMenuDrawerAnalyst_module, cls: ['nav-menu-drawer-analyst__drawer'] }) },
        React__default["default"].createElement(NavMenuAnalyst_component.NavMenuAnalyst, tslib_es6.__assign({ isDrawerOpen: isDrawerOpen, isFullWidth: true }, props))));
};
/**
 * Organism UI component of navigation menu analyst
 */
var NavMenuDrawerAnalyst = Component;

exports.NavMenuDrawerAnalyst = NavMenuDrawerAnalyst;
//# sourceMappingURL=NavMenuDrawerAnalyst.component.js.map
