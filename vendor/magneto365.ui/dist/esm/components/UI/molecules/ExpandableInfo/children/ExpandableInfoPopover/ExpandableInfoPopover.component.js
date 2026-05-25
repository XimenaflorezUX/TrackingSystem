import { __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
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
import { Popover } from '../../../../atoms/Popover/Popover.component.js';
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
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../CandidateNav/CandidateNav.component.js';
import '../../../CandidateProfile/CandidateProfile.component.js';
import { EExpandableInfoSize } from '../../ExpandableInfo.interface.js';
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
import { ExpandableInfoToggler } from '../ExpandableInfoToggler/ExpandableInfoToggler.component.js';
import styles from './ExpandableInfoPopover.module.scss.js';
import withClickOut from '../../../../../hoc/withClickOut/index.js';

var Component = function (_a) {
    var details = _a.details, toggler = _a.toggler, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c;
    return (React.createElement(Popover, { widthBase: 'auto', show: clickOut, positionX: "right", positionY: toggler.size === EExpandableInfoSize.LARGE ? 'top' : 'bottom', className: CNM.get({
            styles: styles,
            cls: [
                'expandable-info-popover',
                "expandable-info-popover--".concat(toggler.size),
                "expandable-info-popover--".concat(toggler.variant)
            ]
        }), content: React.createElement(React.Fragment, null,
            React.createElement("span", { className: CNM.get({
                    styles: styles,
                    cls: ['expandable-info-popover__arrow', "expandable-info-popover__arrow--".concat(toggler.size)]
                }) }),
            React.createElement(ExpandableInfoDetails, __assign({}, details))) },
        React.createElement(ExpandableInfoToggler, __assign({}, toggler, { onToggle: function (value) { return setClickOut(value || !clickOut); } }))));
};
/**
 * Molecule UI child component of expandable info
 */
var ExpandableInfoPopover = withClickOut(Component);

export { ExpandableInfoPopover };
//# sourceMappingURL=ExpandableInfoPopover.component.js.map
