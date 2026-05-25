import React, { useCallback } from 'react';
import { getOptionTypeStyles } from '../../UserMenuAnalystOption.constants.js';
import '../../../../../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../../../../../utils/classNameManager/classNameManager.util.js';
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
import { MenuIcon } from '../../../../../../../MenuIcon/MenuIcon.component.js';
import '../../../../../../../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../../../../../Modal/Modal.component.js';
import '../../../../../../../SimilarCard/SimilarCard.component.js';
import '../../../../../../../SortMenu/SortMenu.component.js';
import '../../../../../../../TimelineEvent/TimelineEvent.interface.js';
import '../../../../../../../UserMenu/UserMenu.component.js';
import { userMenuAnalystIcons } from '../../../../../../UserMenuAnalyst.constants.js';
import '../UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../UserMenuAnalystOption.interface.js';
import '../../../../../../../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../../../../JobDetails/JobDetails.component.js';
import '../../../../../../../Chat/Chat.component.js';
import styles from './UserMenuAnalystOptionDefault.module.scss.js';

var Component = function (_a) {
    var className = _a.className, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, option = _a.option, prefix = _a.prefix, suffix = _a.suffix, url = _a.url;
    var _b = option.rel, rel = _b === void 0 ? 'noreferrer' : _b, _c = option.target, target = _c === void 0 ? '_self' : _c;
    var handleOnClick = useCallback(function () {
        if (option.modal && handleModal && handleMenuOpen) {
            handleMenuOpen(false);
            return handleModal(option.modal.name, true, option.modal.data);
        }
        if (typeof option.data === 'function' && handleMenuOpen) {
            handleMenuOpen(false);
            return option.data(option);
        }
    }, [handleModal, handleMenuOpen, option]);
    return (React.createElement("span", { className: CNM.get({
            styles: styles,
            cls: [getOptionTypeStyles(option.type), 'user-menu-analyst-option-default', className]
        }) },
        prefix,
        React.createElement(MenuIcon, { className: CNM.get({
                styles: styles,
                cls: ['user-menu-analyst-option-default__container']
            }), text: option.title || '', icon: option.icon && userMenuAnalystIcons[option.icon] ? userMenuAnalystIcons[option.icon] : option.icon, iconProps: { showDefaultFallback: false }, iconSize: 18, url: url, type: typeof option.data === 'function' || option.modal ? 'button' : 'link', onClick: handleOnClick, target: target, rel: rel }),
        suffix));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionDefault = React.memo(Component);

export { UserMenuAnalystOptionDefault };
//# sourceMappingURL=UserMenuAnalystOptionDefault.component.js.map
