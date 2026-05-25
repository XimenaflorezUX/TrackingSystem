'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../../../hooks/useMediaQuery/index.js');
var ModalAnalystContainer_module = require('./ModalAnalystContainer.module.scss.js');
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
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../molecules/Actions/Actions.component.js');
require('../../../../molecules/AlertJobModal/AlertJobModal.component.js');
require('../../../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var MobileDrawer_component = require('../../../../molecules/MobileDrawer/MobileDrawer.component.js');
require('../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../../../molecules/CandidateNav/CandidateNav.component.js');
require('../../../../molecules/CandidateProfile/CandidateProfile.component.js');
require('react-dom');
require('../../../../../context/container/container.context.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../../../molecules/SharePopover/SharePopover.js');
require('../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../../../../template/MegaMenu/MegaMenu.context.js');
var Modal_component = require('../../../../molecules/Modal/Modal.component.js');
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
var ModalAnalystContent_component = require('../ModalAnalystContent/ModalAnalystContent.component.js');
var ModalAnalystFooter_component = require('../ModalAnalystFooter/ModalAnalystFooter.component.js');
require('../ModalAnalystFooter/ModalAnalystFooter.interface.js');
var ModalAnalystHeader_component = require('../ModalAnalystHeader/ModalAnalystHeader.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var handleClose = _a.handleClose, isOpen = _a.isOpen, name = _a.name, data = _a.data, screens = _a.screens, step = _a.step, setStep = _a.setStep;
    var component = React.useMemo(function () {
        var _a, _b, _c;
        return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: ModalAnalystContainer_module, cls: ['modal-analyst-container'] }) },
            React__default["default"].createElement(ModalAnalystHeader_component.ModalAnalystHeader, { header: (_a = screens[step]) === null || _a === void 0 ? void 0 : _a.header }),
            React__default["default"].createElement(ModalAnalystContent_component.ModalAnalystContent, { content: (_b = screens[step]) === null || _b === void 0 ? void 0 : _b.content }),
            React__default["default"].createElement(ModalAnalystFooter_component.ModalAnalystFooter, { footer: (_c = screens[step]) === null || _c === void 0 ? void 0 : _c.footer, name: name, data: data, setStep: setStep, handleClose: handleClose })));
    }, [handleClose, name, data, screens, step, setStep]);
    var container = index.useMediaQuery(React__default["default"].createElement(Modal_component, { isOpen: isOpen, onClose: function () { return handleClose(name, false, undefined); }, className: classNameManager_util.get({ styles: ModalAnalystContainer_module, cls: ['modal-analyst-container--desktop'] }) }, component), {
        sm: (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: isOpen, onClose: function () { return handleClose(name, false, undefined); }, className: classNameManager_util.get({ styles: ModalAnalystContainer_module, cls: ['modal-analyst-container--mobile'] }) }, component))
    });
    return container;
};
/**
 * Molecule UI child component of modal analyst
 */
var ModalAnalystContainer = Component;

exports.ModalAnalystContainer = ModalAnalystContainer;
//# sourceMappingURL=ModalAnalystContainer.component.js.map
