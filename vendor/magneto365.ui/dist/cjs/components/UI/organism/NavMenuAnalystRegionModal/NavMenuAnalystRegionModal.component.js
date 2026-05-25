'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var index = require('../../../hooks/useMediaQuery/index.js');
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
var NavMenuAnalystRegionModalContent_component = require('./children/NavMenuAnalystRegionModalContent/NavMenuAnalystRegionModalContent.component.js');
var NavMenuAnalystRegionModal_module = require('./NavMenuAnalystRegionModal.module.scss.js');
var AnalystTemplate_context = require('../../template/AnalystTemplate/AnalystTemplate.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var defaultRegion = _a.defaultRegion, regions = _a.regions, regionModal = _a.regionModal;
    var _b = React.useState(null), selectedRegion = _b[0], setSelectedRegion = _b[1];
    var _c = AnalystTemplate_context.useAnalyst(), modalRegion = _c.modalRegion, handleRegionChange = _c.handleRegionChange;
    var handleClose = React.useCallback(function (region) {
        setSelectedRegion(null);
        handleRegionChange(region);
    }, [handleRegionChange]);
    var container = index.useMediaQuery(React__default["default"].createElement(Modal_component, { isOpen: modalRegion, onClose: function () { return handleClose(null); }, title: regionModal.title, description: "", className: classNameManager_util.get({ styles: NavMenuAnalystRegionModal_module, cls: ['nav-menu-analyst-region-modal'] }) },
        React__default["default"].createElement(NavMenuAnalystRegionModalContent_component.NavMenuAnalystRegionModalContent, { defaultRegion: defaultRegion, handleClose: handleClose, regionModal: regionModal, regions: regions, selectedRegion: selectedRegion, setSelectedRegion: setSelectedRegion })), {
        sm: (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: modalRegion, onClose: function () { return handleClose(null); }, className: classNameManager_util.get({ styles: NavMenuAnalystRegionModal_module, cls: ['nav-menu-analyst-region-modal'] }) },
            React__default["default"].createElement("h2", null, regionModal.title),
            React__default["default"].createElement(NavMenuAnalystRegionModalContent_component.NavMenuAnalystRegionModalContent, { defaultRegion: defaultRegion, handleClose: handleClose, regionModal: regionModal, regions: regions, selectedRegion: selectedRegion, setSelectedRegion: setSelectedRegion })))
    });
    return container;
};
/**
 * Organism UI child component of nav menu analyst
 */
var NavMenuAnalystRegionModal = Component;

exports.NavMenuAnalystRegionModal = NavMenuAnalystRegionModal;
//# sourceMappingURL=NavMenuAnalystRegionModal.component.js.map
