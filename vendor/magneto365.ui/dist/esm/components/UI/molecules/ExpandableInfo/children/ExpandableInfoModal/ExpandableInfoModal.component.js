import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback } from 'react';
import '../ExpandableInfoAction/ExpandableInfoAction.constants.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/BarChart/enums.js';
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
import '../../../../../hooks/useMediaQuery/index.js';
import '../ExpandableInfoAction/ExpandableInfoAction.interface.js';
import { ExpandableInfoDetails } from '../ExpandableInfoDetails/ExpandableInfoDetails.component.js';
import '../ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../Actions/Actions.component.js';
import '../../../AlertJobModal/AlertJobModal.component.js';
import '../../../AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../../MobileDrawer/MobileDrawer.component.js';
import '../../../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../CandidateNav/CandidateNav.component.js';
import '../../../CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../ExpandableInfo.interface.js';
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
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../JobDetails/JobDetails.component.js';
import '../../../Chat/Chat.component.js';
import styles from './ExpandableInfoModal.module.scss.js';
import '../ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import { ExpandableInfoToggler } from '../ExpandableInfoToggler/ExpandableInfoToggler.component.js';

var Component = function (_a) {
    var toggler = _a.toggler, details = _a.details;
    var _b = useState(false), visible = _b[0], setVisible = _b[1];
    var handleOnToggle = useCallback(function () {
        setVisible(function (prev) { return !prev; });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(ExpandableInfoToggler, __assign({}, toggler, { onToggle: handleOnToggle })),
        React.createElement(MobileDrawer, { isOpen: visible, onClose: handleOnToggle, className: CNM.get({ styles: styles, cls: ['expandable-info-modal'] }) },
            React.createElement(ExpandableInfoDetails, __assign({}, details)))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoModal = Component;

export { ExpandableInfoModal };
//# sourceMappingURL=ExpandableInfoModal.component.js.map
