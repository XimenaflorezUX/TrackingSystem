'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
var AnalystTemplate_context = require('./AnalystTemplate.context.js');
var AnalystTemplate_module = require('./AnalystTemplate.module.scss.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var useAnalystModal_hook = require('./hooks/useAnalystModal.hook.js');
require('../../organism/AlertsPanel/AlertsPanel.component.js');
require('../../atoms/BarChart/enums.js');
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
require('react-dom');
require('../../../context/container/container.context.js');
require('../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../../molecules/CandidateNav/CandidateNav.component.js');
require('../../molecules/CandidateProfile/CandidateProfile.component.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../../molecules/ExpandableInfo/ExpandableInfo.interface.js');
require('../../molecules/SharePopover/SharePopover.js');
require('../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js');
require('../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
require('../MegaMenu/MegaMenu.context.js');
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
require('../../organism/ApplicationSummary/ApplicationSummary.component.js');
require('../../organism/CategoryMenuCard/CategoryMenuCard.component.js');
var HeaderAnalyst_component = require('../../organism/HeaderAnalyst/HeaderAnalyst.component.js');
require('../../../Domain/Jobs/SimilarJobs/index.js');
require('../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js');
require('../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
require('../../organism/Swipe/Swipe.interface.js');
var ModalAnalyst_component = require('../../organism/ModalAnalyst/ModalAnalyst.component.js');
var NavMenuAnalyst_component = require('../../organism/NavMenuAnalyst/NavMenuAnalyst.component.js');
var NavMenuAnalystRegionModal_component = require('../../organism/NavMenuAnalystRegionModal/NavMenuAnalystRegionModal.component.js');
var NavMenuDrawerAnalyst_component = require('../../organism/NavMenuDrawerAnalyst/NavMenuDrawerAnalyst.component.js');
require('../../organism/ProcessesCard/ProcessesCard.component.js');
require('../../organism/Select/Select.component.js');
require('../../organism/Select2/Select2.component.js');
require('../../organism/UserTerms/UserTerms.component.js');
require('../../organism/Carousel/Carousel.component.js');
require('../../organism/Record/record.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, _f = _a.childrenClassName, childrenClassName = _f === void 0 ? '' : _f, _g = _a.className, className = _g === void 0 ? '' : _g, _h = _a.containerClassName, containerClassName = _h === void 0 ? '' : _h, headerProps = _a.headerProps, navigationMenuProps = _a.navigationMenuProps, modals = _a.modals;
    var _j = React.useState(null), activeDropdown = _j[0], setActiveDropdown = _j[1];
    var _k = React.useState(false), isMenuScrollAnimated = _k[0], setIsMenuScrollAnimated = _k[1];
    var _l = React.useState(false), isOpenedFromHeader = _l[0], setIsOpenedFromHeader = _l[1];
    var _m = React.useState(false), isDrawerOpen = _m[0], setIsDrawerOpen = _m[1];
    var _o = useAnalystModal_hook.useAnalystModal(modals), modal = _o.modal, handleModal = _o.handleModal;
    var toggleMenu = React.useCallback(function (open, drawerTriggered) {
        setIsDrawerOpen(open !== null && open !== void 0 ? open : !isDrawerOpen);
        setActiveDropdown(null);
        if (drawerTriggered) {
            setIsMenuScrollAnimated(false);
            setIsOpenedFromHeader(true);
        }
        else {
            setIsMenuScrollAnimated(true);
            setIsOpenedFromHeader(false);
        }
    }, [isDrawerOpen]);
    var handleDropdownClick = React.useCallback(function (option, drawerTriggered, isChangeOpenedFrom) {
        if (isChangeOpenedFrom) {
            setIsMenuScrollAnimated(false);
        }
        else {
            if (drawerTriggered) {
                toggleMenu(true, true);
            }
            else {
                toggleMenu(true, false);
            }
        }
        setActiveDropdown(option);
    }, [toggleMenu]);
    var sideMenu = index.useMediaQuery(React__default["default"].createElement(NavMenuAnalyst_component.NavMenuAnalyst, tslib_es6.__assign({ onDropdownClick: handleDropdownClick }, navigationMenuProps)), {
        sm: null
    });
    return (React__default["default"].createElement(AnalystTemplate_context.AnalystProvider, { modals: modals, onRegionChange: navigationMenuProps.onRegionChange },
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: AnalystTemplate_module, cls: ['analyst-template', className] }) },
            React__default["default"].createElement(ModalAnalyst_component.ModalAnalyst, { isOpen: modal.some(function (modalLocal) { return modalLocal.visible === true; }), name: ((_b = modal.find(function (modalLocal) { return modalLocal.visible; })) === null || _b === void 0 ? void 0 : _b.name) || '', data: (_c = modal.find(function (modalLocal) { return modalLocal.visible; })) === null || _c === void 0 ? void 0 : _c.data, screens: (_e = (_d = modals === null || modals === void 0 ? void 0 : modals.find(function (modalLocal) { var _a; return modalLocal.name === ((_a = modal.find(function (modalLocal) { return modalLocal.visible; })) === null || _a === void 0 ? void 0 : _a.name); })) === null || _d === void 0 ? void 0 : _d.screens) !== null && _e !== void 0 ? _e : [], handleClose: handleModal }),
            React__default["default"].createElement(NavMenuAnalystRegionModal_component.NavMenuAnalystRegionModal, { defaultRegion: navigationMenuProps.defaultRegion, regionModal: navigationMenuProps.regionModal, regions: navigationMenuProps.regions }),
            React__default["default"].createElement(HeaderAnalyst_component.HeaderAnalyst, tslib_es6.__assign({ onMainMenuClick: function () { return toggleMenu(true, true); } }, headerProps, { handleModal: handleModal, className: classNameManager_util.get({ styles: AnalystTemplate_module, cls: ["analyst-template__header", headerProps.className] }) })),
            React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: AnalystTemplate_module, cls: ['analyst-template__container', containerClassName] }) },
                React__default["default"].createElement(NavMenuDrawerAnalyst_component.NavMenuDrawerAnalyst, tslib_es6.__assign({ onDropdownClick: function (option) { return handleDropdownClick(option, true, true); }, activeDropdown: activeDropdown, isDrawerOpen: isDrawerOpen, onClose: function () { return toggleMenu(false); }, isScrollAnimated: isMenuScrollAnimated, isOpenedFromHeader: isOpenedFromHeader, setIsDrawerOpen: function (open) { return setIsDrawerOpen(open); }, logoProps: tslib_es6.__assign({}, headerProps.logoProps) }, navigationMenuProps)),
                sideMenu,
                React__default["default"].createElement("main", { className: classNameManager_util.get({ styles: AnalystTemplate_module, cls: ['analyst-template__children', childrenClassName] }) }, children)))));
};
/**
 * Template UI component of analyst template
 */
var AnalystTemplate = Component;

exports.AnalystTemplate = AnalystTemplate;
//# sourceMappingURL=AnalystTemplate.component.js.map
