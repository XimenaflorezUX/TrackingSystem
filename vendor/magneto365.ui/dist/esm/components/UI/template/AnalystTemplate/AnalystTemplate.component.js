import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback } from 'react';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import { AnalystProvider } from './AnalystTemplate.context.js';
import styles from './AnalystTemplate.module.scss.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { useAnalystModal } from './hooks/useAnalystModal.hook.js';
import '../../organism/AlertsPanel/AlertsPanel.component.js';
import '../../atoms/BarChart/enums.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../MegaMenu/MegaMenu.context.js';
import '../../molecules/Modal/Modal.component.js';
import '../../molecules/SimilarCard/SimilarCard.component.js';
import '../../molecules/SortMenu/SortMenu.component.js';
import '../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../molecules/UserMenu/UserMenu.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../molecules/JobDetails/JobDetails.component.js';
import '../../molecules/Chat/Chat.component.js';
import '../../organism/ApplicationSummary/ApplicationSummary.component.js';
import '../../organism/CategoryMenuCard/CategoryMenuCard.component.js';
import { HeaderAnalyst } from '../../organism/HeaderAnalyst/HeaderAnalyst.component.js';
import '../../../Domain/Jobs/SimilarJobs/index.js';
import '../../organism/JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../../organism/JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import '../../organism/Swipe/Swipe.interface.js';
import { ModalAnalyst } from '../../organism/ModalAnalyst/ModalAnalyst.component.js';
import { NavMenuAnalyst } from '../../organism/NavMenuAnalyst/NavMenuAnalyst.component.js';
import { NavMenuAnalystRegionModal } from '../../organism/NavMenuAnalystRegionModal/NavMenuAnalystRegionModal.component.js';
import { NavMenuDrawerAnalyst } from '../../organism/NavMenuDrawerAnalyst/NavMenuDrawerAnalyst.component.js';
import '../../organism/ProcessesCard/ProcessesCard.component.js';
import '../../organism/Select/Select.component.js';
import '../../organism/Select2/Select2.component.js';
import '../../organism/UserTerms/UserTerms.component.js';
import '../../organism/Carousel/Carousel.component.js';
import '../../organism/Record/record.component.js';

var Component = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children, _f = _a.childrenClassName, childrenClassName = _f === void 0 ? '' : _f, _g = _a.className, className = _g === void 0 ? '' : _g, _h = _a.containerClassName, containerClassName = _h === void 0 ? '' : _h, headerProps = _a.headerProps, navigationMenuProps = _a.navigationMenuProps, modals = _a.modals;
    var _j = useState(null), activeDropdown = _j[0], setActiveDropdown = _j[1];
    var _k = useState(false), isMenuScrollAnimated = _k[0], setIsMenuScrollAnimated = _k[1];
    var _l = useState(false), isOpenedFromHeader = _l[0], setIsOpenedFromHeader = _l[1];
    var _m = useState(false), isDrawerOpen = _m[0], setIsDrawerOpen = _m[1];
    var _o = useAnalystModal(modals), modal = _o.modal, handleModal = _o.handleModal;
    var toggleMenu = useCallback(function (open, drawerTriggered) {
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
    var handleDropdownClick = useCallback(function (option, drawerTriggered, isChangeOpenedFrom) {
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
    var sideMenu = useMediaQuery(React.createElement(NavMenuAnalyst, __assign({ onDropdownClick: handleDropdownClick }, navigationMenuProps)), {
        sm: null
    });
    return (React.createElement(AnalystProvider, { modals: modals, onRegionChange: navigationMenuProps.onRegionChange },
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['analyst-template', className] }) },
            React.createElement(ModalAnalyst, { isOpen: modal.some(function (modalLocal) { return modalLocal.visible === true; }), name: ((_b = modal.find(function (modalLocal) { return modalLocal.visible; })) === null || _b === void 0 ? void 0 : _b.name) || '', data: (_c = modal.find(function (modalLocal) { return modalLocal.visible; })) === null || _c === void 0 ? void 0 : _c.data, screens: (_e = (_d = modals === null || modals === void 0 ? void 0 : modals.find(function (modalLocal) { var _a; return modalLocal.name === ((_a = modal.find(function (modalLocal) { return modalLocal.visible; })) === null || _a === void 0 ? void 0 : _a.name); })) === null || _d === void 0 ? void 0 : _d.screens) !== null && _e !== void 0 ? _e : [], handleClose: handleModal }),
            React.createElement(NavMenuAnalystRegionModal, { defaultRegion: navigationMenuProps.defaultRegion, regionModal: navigationMenuProps.regionModal, regions: navigationMenuProps.regions }),
            React.createElement(HeaderAnalyst, __assign({ onMainMenuClick: function () { return toggleMenu(true, true); } }, headerProps, { handleModal: handleModal, className: CNM.get({ styles: styles, cls: ["analyst-template__header", headerProps.className] }) })),
            React.createElement("div", { className: CNM.get({ styles: styles, cls: ['analyst-template__container', containerClassName] }) },
                React.createElement(NavMenuDrawerAnalyst, __assign({ onDropdownClick: function (option) { return handleDropdownClick(option, true, true); }, activeDropdown: activeDropdown, isDrawerOpen: isDrawerOpen, onClose: function () { return toggleMenu(false); }, isScrollAnimated: isMenuScrollAnimated, isOpenedFromHeader: isOpenedFromHeader, setIsDrawerOpen: function (open) { return setIsDrawerOpen(open); }, logoProps: __assign({}, headerProps.logoProps) }, navigationMenuProps)),
                sideMenu,
                React.createElement("main", { className: CNM.get({ styles: styles, cls: ['analyst-template__children', childrenClassName] }) }, children)))));
};
/**
 * Template UI component of analyst template
 */
var AnalystTemplate = Component;

export { AnalystTemplate };
//# sourceMappingURL=AnalystTemplate.component.js.map
