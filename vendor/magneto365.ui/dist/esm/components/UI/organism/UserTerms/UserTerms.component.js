import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
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
import { UserTermCheck } from './children/UserTermCheck/UserTermCheck.component.js';
import { UserTermContent } from './children/UserTermContent/UserTermContent.component.js';
import { UserTermSubTitle } from './children/UserTermSubtitle/UserTermSubtitle.component.js';
import { UserTermTitle } from './children/UserTermTitle/UserTermTitle.component.js';
import { UserTermSubmit } from './children/UserTermSubmit/UserTermSubmit.component.js';
import { UserTermHighlight } from './children/UserTermHighlight/UserTermHighlight.component.js';
import { UserTermText } from './children/UserTermText/UserTermText.component.js';
import styles from './UserTerms.module.scss.js';
import { UserTermUList } from './children/UserTermUList/UserTermUList.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? function () { return ({}); } : _b;
    var container = useMediaQuery(React.createElement(Modal, { className: cx('user-term-modal'), blockBackgroundClose: true, isOpen: isOpen, onClose: onClose }, children), {
        sm: (React.createElement(MobileDrawer, { className: cx('user-term-drawer'), blockBackgroundClose: true, isOpen: isOpen, onClose: onClose }, children))
    });
    return container;
};
var UserTerms = Object.assign(Component, {
    Title: UserTermTitle,
    Subtitle: UserTermSubTitle,
    Content: UserTermContent,
    Check: UserTermCheck,
    Submit: UserTermSubmit,
    Highlight: UserTermHighlight,
    Text: UserTermText,
    UlList: UserTermUList
});

export { UserTerms };
//# sourceMappingURL=UserTerms.component.js.map
