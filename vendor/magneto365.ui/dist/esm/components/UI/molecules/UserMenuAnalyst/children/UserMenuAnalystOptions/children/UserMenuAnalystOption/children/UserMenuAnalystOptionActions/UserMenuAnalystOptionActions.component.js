import React, { useCallback } from 'react';
import { IconItem } from '../../../../../../../../atoms/Icon/Icon.component.js';
import '../../../../../../../../atoms/BarChart/enums.js';
import '../../../../../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../../../../atoms/Button/Button.component.js';
import '../../../../../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../../../../../constants/img.constants.js';
import '../../../../../../../../../../utils/date/dateInput.util.js';
import '../../../../../../../../atoms/Field/Field.component.js';
import '../../../../../../../../atoms/Typography/Typography.component.js';
import '../../../../../../../../atoms/Typography/Typography.interface.js';
import '../../../../../../../../atoms/InputFile/InputFile.component.js';
import '../../../../../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../../../../../atoms/Radio/Radio.interface.js';
import '../../../../../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../../../../../constants/jobDetails.constants.js';
import '../../../../../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../../../../../hooks/useMediaQuery/index.js';
import Tooltip from '../../../../../../../Tooltip/Tooltip.component.js';
import '../../../../../../../Actions/Actions.component.js';
import '../../../../../../../AlertJobModal/AlertJobModal.component.js';
import '../../../../../../../AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../../../../../../../context/container/container.context.js';
import '../../../../../../../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../../../../CandidateNav/CandidateNav.component.js';
import '../../../../../../../CandidateProfile/CandidateProfile.component.js';
import '../../../../../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../../../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../../../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../../../../../ExpandableInfo/ExpandableInfo.interface.js';
import '../../../../../../../SharePopover/SharePopover.js';
import '../../../../../../../JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../../../../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../../../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../../../../../Modal/Modal.component.js';
import '../../../../../../../SimilarCard/SimilarCard.component.js';
import '../../../../../../../SortMenu/SortMenu.component.js';
import '../../../../../../../TimelineEvent/TimelineEvent.interface.js';
import '../../../../../../../UserMenu/UserMenu.component.js';
import { userMenuAnalystIcons } from '../../../../../../UserMenuAnalyst.constants.js';
import '../../UserMenuAnalystOption.constants.js';
import '../UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../UserMenuAnalystOption.interface.js';
import '../../../../../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../../../../JobDetails/JobDetails.component.js';
import '../../../../../../../Chat/Chat.component.js';

var Component = function (_a) {
    var actions = _a.actions, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, getUrl = _a.getUrl, option = _a.option;
    return (React.createElement(React.Fragment, null, actions.map(function (action, index) { return (React.createElement(Tooltip, { key: "".concat(action.title, "-").concat(index), title: action.title || '', position: "bottom", width: "fit-content" },
        React.createElement(Action, { action: action, getUrl: getUrl, option: option, handleModal: handleModal, handleMenuOpen: handleMenuOpen },
            React.createElement(IconItem, { showDefaultFallback: false, size: 16, icon: action.icon && userMenuAnalystIcons[action.icon] ? userMenuAnalystIcons[action.icon] : action.icon })))); })));
};
var Action = function (_a) {
    var action = _a.action, children = _a.children, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, getUrl = _a.getUrl, option = _a.option;
    var handleOnClick = useCallback(function () {
        if (action.modal && handleModal && handleMenuOpen) {
            handleMenuOpen(false);
            return handleModal(action.modal.name, true, action.modal.data);
        }
        return action.data && action.data(option);
    }, [action, handleModal, handleMenuOpen, option]);
    return typeof action.data === 'function' || action.modal ? (React.createElement("button", { onClick: handleOnClick }, children)) : (React.createElement("a", { href: getUrl(action), rel: action.rel || 'noreferrer', target: action.target || '_self' }, children));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionActions = React.memo(Component);

export { UserMenuAnalystOptionActions };
//# sourceMappingURL=UserMenuAnalystOptionActions.component.js.map
