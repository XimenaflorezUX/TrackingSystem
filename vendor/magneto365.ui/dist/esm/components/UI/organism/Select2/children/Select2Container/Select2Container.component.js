import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useMediaQuery } from '../../../../../hooks/useMediaQuery/index.js';
import { Select2Desktop } from '../Select2Desktop/Select2Desktop.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
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
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../molecules/CandidateNav/CandidateNav.component.js';
import '../../../../molecules/CandidateProfile/CandidateProfile.component.js';
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
import '../../../../molecules/Modal/Modal.component.js';
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
import { Select2Mobile } from '../Select2Mobile/Select2Mobile.component.js';

var Component = function (_a) {
    var props = __rest(_a, []);
    var container = useMediaQuery(React.createElement(Select2Desktop, __assign({}, props)), {
        sm: React.createElement(Select2Mobile, __assign({}, props))
    });
    if (!props.isMobile)
        return React.createElement(Select2Desktop, __assign({}, props));
    return container;
};
/**
 * Molecule UI child component of select 2
 */
var Select2Container = Component;

export { Select2Container };
//# sourceMappingURL=Select2Container.component.js.map
