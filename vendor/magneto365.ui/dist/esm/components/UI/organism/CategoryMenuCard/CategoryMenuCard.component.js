import React from 'react';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import styles from './CategoryMenuCard.module.scss.js';
import { CategoryMenuList } from './children/CategoryMenuList/CategoryMenuList.component.js';
import withClickOut from '../../../hoc/withClickOut/index.js';
import '../../../hooks/useMediaQuery/index.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import { programaticIcons } from '../../../../constants/stories/vacantPositionsCategory.constants.js';
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
import { getIcon } from '../../../../utils/icons/getIcons.util.js';
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

var CategoryMenuCard = function (_a) {
    var name = _a.name, icon = _a.icon, clickOut = _a.clickOut, _b = _a.setClickOut, setClickOut = _b === void 0 ? function () { return ({}); } : _b, list = _a.list;
    var downArrow = (React.createElement("div", { className: "".concat(styles["magneto-ui-category-menu-container-card__arrow"], "\n       ").concat(clickOut ? styles["magneto-ui-category-menu-container-card__arrow--rotate-arrow"] : '') },
        React.createElement(IconItem, { icon: ArrowDown2, size: 16 })));
    var handleToggle = function () {
        setClickOut(!clickOut);
    };
    return (React.createElement("div", { className: styles['magneto-ui-category-menu-container'], onClick: handleToggle },
        React.createElement("div", { className: "".concat(styles["magneto-ui-category-menu-container-card"], " \n        ").concat(clickOut ? styles["magneto-ui-category-menu-container-card--is-open"] : '') },
            icon && (React.createElement("div", { className: styles["magneto-ui-category-menu-container-card__icon"] },
                React.createElement(IconItem, { icon: getIcon(programaticIcons, icon), size: 16 }))),
            React.createElement("div", { className: styles["magneto-ui-category-menu-container-card__content"] },
                React.createElement("div", { className: styles["magneto-ui-category-menu-container-card__title"] }, name)),
            downArrow),
        React.createElement(CategoryMenuList, { list: list, isOpen: clickOut })));
};
var CategoryMenuCard_component = withClickOut(CategoryMenuCard);

export { CategoryMenuCard_component as default };
//# sourceMappingURL=CategoryMenuCard.component.js.map
