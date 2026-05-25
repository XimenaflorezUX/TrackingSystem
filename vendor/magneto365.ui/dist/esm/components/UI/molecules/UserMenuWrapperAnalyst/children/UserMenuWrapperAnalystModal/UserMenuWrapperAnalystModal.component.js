import React from 'react';
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
import { UserMenuButtonAnalyst } from '../../../../atoms/UserMenuButtonAnalyst/UserMenuButtonAnalyst.component.js';
import '../../../Actions/Actions.component.js';
import '../../../AlertJobModal/AlertJobModal.component.js';
import '../../../AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../../MobileDrawer/MobileDrawer.component.js';
import '../../../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../CandidateNav/CandidateNav.component.js';
import '../../../CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../ExpandableInfo/ExpandableInfo.interface.js';
import '../../../../../hooks/useMediaQuery/index.js';
import '../../../SharePopover/SharePopover.js';
import '../../../JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../Modal/Modal.component.js';
import '../../../SimilarCard/SimilarCard.component.js';
import '../../../SortMenu/SortMenu.component.js';
import '../../../TimelineEvent/TimelineEvent.interface.js';
import '../../../UserMenu/UserMenu.component.js';
import { UserMenuAnalyst } from '../../../UserMenuAnalyst/UserMenuAnalyst.component.js';
import '../UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import styles from './UserMenuWrapperAnalystModal.module.scss.js';
import '../../../JobDetails/JobDetails.component.js';
import '../../../Chat/Chat.component.js';

var Component = function (_a) {
    var action = _a.action, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, footerSections = _a.footerSections, headerSections = _a.headerSections, handleModal = _a.handleModal, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c, user = _a.user;
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileDrawer, { isOpen: clickOut, onClose: function () { return setClickOut(!clickOut); }, className: CNM.get({ styles: styles, cls: ['user-menu-wrapper-analyst-modal'] }) },
            React.createElement(UserMenuAnalyst, { isMenuOpen: clickOut, user: user, action: action, handleModal: handleModal, handleMenuOpen: setClickOut, headerSections: headerSections, footerSections: footerSections })),
        React.createElement(UserMenuButtonAnalyst, { user: user.name, title: user.title, onClick: function () { return setClickOut(true); } })));
};
/**
 * Molecule UI child component of user menu analyst wrapper
 */
var UserMenuWrapperAnalystModal = Component;

export { UserMenuWrapperAnalystModal };
//# sourceMappingURL=UserMenuWrapperAnalystModal.component.js.map
