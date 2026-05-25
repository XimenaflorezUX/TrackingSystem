import React, { useState, useCallback } from 'react';
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
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import '../../molecules/Actions/Actions.component.js';
import '../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../molecules/CandidateNav/CandidateNav.component.js';
import '../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
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
import Modal from '../../molecules/Modal/Modal.component.js';
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
import { NavMenuAnalystRegionModalContent } from './children/NavMenuAnalystRegionModalContent/NavMenuAnalystRegionModalContent.component.js';
import styles from './NavMenuAnalystRegionModal.module.scss.js';
import { useAnalyst } from '../../template/AnalystTemplate/AnalystTemplate.context.js';

var Component = function (_a) {
    var defaultRegion = _a.defaultRegion, regions = _a.regions, regionModal = _a.regionModal;
    var _b = useState(null), selectedRegion = _b[0], setSelectedRegion = _b[1];
    var _c = useAnalyst(), modalRegion = _c.modalRegion, handleRegionChange = _c.handleRegionChange;
    var handleClose = useCallback(function (region) {
        setSelectedRegion(null);
        handleRegionChange(region);
    }, [handleRegionChange]);
    var container = useMediaQuery(React.createElement(Modal, { isOpen: modalRegion, onClose: function () { return handleClose(null); }, title: regionModal.title, description: "", className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-region-modal'] }) },
        React.createElement(NavMenuAnalystRegionModalContent, { defaultRegion: defaultRegion, handleClose: handleClose, regionModal: regionModal, regions: regions, selectedRegion: selectedRegion, setSelectedRegion: setSelectedRegion })), {
        sm: (React.createElement(MobileDrawer, { isOpen: modalRegion, onClose: function () { return handleClose(null); }, className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-region-modal'] }) },
            React.createElement("h2", null, regionModal.title),
            React.createElement(NavMenuAnalystRegionModalContent, { defaultRegion: defaultRegion, handleClose: handleClose, regionModal: regionModal, regions: regions, selectedRegion: selectedRegion, setSelectedRegion: setSelectedRegion })))
    });
    return container;
};
/**
 * Organism UI child component of nav menu analyst
 */
var NavMenuAnalystRegionModal = Component;

export { NavMenuAnalystRegionModal };
//# sourceMappingURL=NavMenuAnalystRegionModal.component.js.map
