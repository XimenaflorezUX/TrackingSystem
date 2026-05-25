import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback } from 'react';
import '../../atoms/BarChart/enums.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
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
import '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import { Drawer } from '../../molecules/Drawer/Drawer.component.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../molecules/SharePopover/SharePopover.js';
import '../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
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
import '../AlertsPanel/AlertsPanel.component.js';
import '../ApplicationSummary/ApplicationSummary.component.js';
import '../CategoryMenuCard/CategoryMenuCard.component.js';
import '../../../Domain/Jobs/SimilarJobs/index.js';
import '../JobSuggestedDrawer/JobSuggestedDrawer.component.js';
import '../JobSuggestedDrawer/children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import '../Swipe/Swipe.interface.js';
import '../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.constants.js';
import '../ModalAnalyst/children/ModalAnalystFooter/ModalAnalystFooter.interface.js';
import { NavMenuAnalyst } from '../NavMenuAnalyst/NavMenuAnalyst.component.js';
import '../../template/AnalystTemplate/AnalystTemplate.context.js';
import styles from './NavMenuDrawerAnalyst.module.scss.js';
import '../ProcessesCard/ProcessesCard.component.js';
import '../Select/Select.component.js';
import '../Select2/Select2.component.js';
import '../UserTerms/UserTerms.component.js';
import '../Carousel/Carousel.component.js';
import '../Record/record.component.js';

var Component = function (_a) {
    var _b = _a.isDrawerOpen, isDrawerOpen = _b === void 0 ? false : _b, onClose = _a.onClose, props = __rest(_a, ["isDrawerOpen", "onClose"]);
    var handleClose = useCallback(function () {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    return (React.createElement(Drawer, { isOpen: isDrawerOpen, onClose: handleClose, customPadding: 0, className: CNM.get({ styles: styles, cls: ['nav-menu-drawer-analyst__drawer'] }) },
        React.createElement(NavMenuAnalyst, __assign({ isDrawerOpen: isDrawerOpen, isFullWidth: true }, props))));
};
/**
 * Organism UI component of navigation menu analyst
 */
var NavMenuDrawerAnalyst = Component;

export { NavMenuDrawerAnalyst };
//# sourceMappingURL=NavMenuDrawerAnalyst.component.js.map
