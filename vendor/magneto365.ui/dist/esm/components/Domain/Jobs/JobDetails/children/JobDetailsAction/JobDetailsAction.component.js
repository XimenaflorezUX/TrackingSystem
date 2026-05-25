import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import '../../../../../UI/atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../../UI/atoms/Field/Field.component.js';
import '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import { iconJobDetailsAction } from '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import '../../../../../UI/molecules/Actions/Actions.component.js';
import '../../../../../UI/molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../../../UI/molecules/AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../../../UI/molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../../UI/molecules/CandidateNav/CandidateNav.component.js';
import '../../../../../UI/molecules/CandidateProfile/CandidateProfile.component.js';
import '../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../../UI/molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../../../UI/molecules/ExpandableInfo/ExpandableInfo.interface.js';
import { SharePopover as SharePopover$1 } from '../../../../../UI/molecules/SharePopover/SharePopover.js';
import '../../../../../UI/molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../../UI/molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../../../UI/molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../../UI/template/MegaMenu/MegaMenu.context.js';
import '../../../../../UI/molecules/Modal/Modal.component.js';
import '../../../../../UI/molecules/SimilarCard/SimilarCard.component.js';
import '../../../../../UI/molecules/SortMenu/SortMenu.component.js';
import '../../../../../UI/molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../../../../UI/molecules/UserMenu/UserMenu.component.js';
import '../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../../../UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../../../UI/molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../../UI/molecules/JobDetails/JobDetails.component.js';
import '../../../../../UI/molecules/Chat/Chat.component.js';
import styles from './JobDetailsAction.module.scss.js';

var cx = classNames.bind(styles);
var Button = function (_a) {
    var icon = _a.icon, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'transparent' : _b, _c = _a.rounded, rounded = _c === void 0 ? false : _c, iconSize = _a.iconSize, iconAlt = _a.iconAlt, rest = __rest(_a, ["icon", "children", "variant", "rounded", "iconSize", "iconAlt"]);
    return (React.createElement("button", __assign({}, rest, { className: cx('action', "action--".concat(variant), { 'action--rounded': rounded }, rest.className) }),
        icon && React.createElement(IconItem, { icon: iconJobDetailsAction[icon], size: iconSize !== null && iconSize !== void 0 ? iconSize : 18, alt: iconAlt !== null && iconAlt !== void 0 ? iconAlt : 'icon' }),
        children));
};
var Link = function (_a) {
    var children = _a.children, icon = _a.icon, iconSize = _a.iconSize, iconAlt = _a.iconAlt, variant = _a.variant, rounded = _a.rounded, rest = __rest(_a, ["children", "icon", "iconSize", "iconAlt", "variant", "rounded"]);
    return (React.createElement("a", __assign({}, rest, { className: cx('action', "action--".concat(variant), { 'action--rounded': rounded }, rest.className) }),
        icon && React.createElement(IconItem, { icon: iconJobDetailsAction[icon], size: iconSize !== null && iconSize !== void 0 ? iconSize : 18, alt: iconAlt !== null && iconAlt !== void 0 ? iconAlt : 'icon' }),
        children));
};
var SharePopover = function (_a) {
    var icon = _a.icon, iconPopoverSize = _a.iconPopoverSize, variant = _a.variant, rounded = _a.rounded, rest = __rest(_a, ["icon", "iconPopoverSize", "variant", "rounded"]);
    return (React.createElement(SharePopover$1, __assign({}, rest, { classNameButton: cx('action', "action--".concat(variant), { 'action--rounded': rounded }, rest.classNameButton), iconPopoverSize: iconPopoverSize !== null && iconPopoverSize !== void 0 ? iconPopoverSize : 18, iconPopover: icon && iconJobDetailsAction[icon], classNameContent: cx(rest.classNameContent) })));
};
var JobDetailsAction = { Button: Button, Link: Link, SharePopover: SharePopover };

export { JobDetailsAction };
//# sourceMappingURL=JobDetailsAction.component.js.map
