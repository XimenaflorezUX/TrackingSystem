import React, { useMemo } from 'react';
import { useMediaQuery } from '../../../../../hooks/useMediaQuery/index.js';
import styles from './ModalAnalystContainer.module.scss.js';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../molecules/Actions/Actions.component.js';
import '../../../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../molecules/CandidateNav/CandidateNav.component.js';
import '../../../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../../../molecules/SharePopover/SharePopover.js';
import '../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../template/MegaMenu/MegaMenu.context.js';
import Modal from '../../../../molecules/Modal/Modal.component.js';
import '../../../../molecules/SimilarCard/SimilarCard.component.js';
import '../../../../molecules/SortMenu/SortMenu.component.js';
import '../../../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../../../molecules/UserMenu/UserMenu.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../molecules/JobDetails/JobDetails.component.js';
import '../../../../molecules/Chat/Chat.component.js';
import { ModalAnalystContent } from '../ModalAnalystContent/ModalAnalystContent.component.js';
import { ModalAnalystFooter } from '../ModalAnalystFooter/ModalAnalystFooter.component.js';
import '../ModalAnalystFooter/ModalAnalystFooter.interface.js';
import { ModalAnalystHeader } from '../ModalAnalystHeader/ModalAnalystHeader.component.js';

var Component = function (_a) {
    var handleClose = _a.handleClose, isOpen = _a.isOpen, name = _a.name, data = _a.data, screens = _a.screens, step = _a.step, setStep = _a.setStep;
    var component = useMemo(function () {
        var _a, _b, _c;
        return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['modal-analyst-container'] }) },
            React.createElement(ModalAnalystHeader, { header: (_a = screens[step]) === null || _a === void 0 ? void 0 : _a.header }),
            React.createElement(ModalAnalystContent, { content: (_b = screens[step]) === null || _b === void 0 ? void 0 : _b.content }),
            React.createElement(ModalAnalystFooter, { footer: (_c = screens[step]) === null || _c === void 0 ? void 0 : _c.footer, name: name, data: data, setStep: setStep, handleClose: handleClose })));
    }, [handleClose, name, data, screens, step, setStep]);
    var container = useMediaQuery(React.createElement(Modal, { isOpen: isOpen, onClose: function () { return handleClose(name, false, undefined); }, className: CNM.get({ styles: styles, cls: ['modal-analyst-container--desktop'] }) }, component), {
        sm: (React.createElement(MobileDrawer, { isOpen: isOpen, onClose: function () { return handleClose(name, false, undefined); }, className: CNM.get({ styles: styles, cls: ['modal-analyst-container--mobile'] }) }, component))
    });
    return container;
};
/**
 * Molecule UI child component of modal analyst
 */
var ModalAnalystContainer = Component;

export { ModalAnalystContainer };
//# sourceMappingURL=ModalAnalystContainer.component.js.map
