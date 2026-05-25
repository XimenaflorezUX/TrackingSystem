import React, { useRef, useEffect } from 'react';
import withClickOut from '../../../../../hoc/withClickOut/index.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import More from '../../../../../../assets/More1.svg.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { stubUndefined } from '../../../../../../shared/utils/common/stub.util.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
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
import '../../../Actions/Actions.component.js';
import '../../../AlertJobModal/AlertJobModal.component.js';
import '../../../AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
import '../../../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../CandidateNav/CandidateNav.component.js';
import '../../../CandidateProfile/CandidateProfile.component.js';
import '../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../ExpandableInfo/ExpandableInfo.interface.js';
import '../../../SharePopover/SharePopover.js';
import '../JobCardLabelStatus/JobCardLabelStatus.constant.js';
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
import VacantOption from '../../../VacantOption/VacantOption.component.js';
import styles from './JobCardOption.module.scss.js';

var cx = classNames.bind(styles);
var JobCardOption = function (_a) {
    var _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? stubUndefined : _c, menu = _a.menu;
    var ref = useRef(null);
    var toggle = function () { return setClickOut(function (prev) { return !prev; }); };
    useEffect(function () {
        var _a;
        var onBlurWindow = function () {
            setClickOut(false);
        };
        (_a = window === null || window === void 0 ? void 0 : window.addEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        return function () {
            var _a;
            (_a = window === null || window === void 0 ? void 0 : window.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(window, 'blur', onBlurWindow);
        };
    }, [setClickOut]);
    return (React.createElement(Popover, { className: cx('popover', { 'popover--open': clickOut }), content: React.createElement("div", { onBlur: toggle, ref: ref }, menu.map(function (option) { return (React.createElement(VacantOption, { key: option.label, onClick: toggle, option: option })); })), show: clickOut, widthBase: 35, positionX: "left", positionY: "bottom" },
        React.createElement("button", { type: "button", className: cx('button'), onClick: function () {
                setClickOut(function (prev) {
                    var _a;
                    if (!prev) {
                        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
                    }
                    return !prev;
                });
            } },
            React.createElement(IconItem, { icon: More, size: 18 }))));
};
var JobCardOption$1 = withClickOut(JobCardOption);

export { JobCardOption$1 as default };
//# sourceMappingURL=JobCardOption.component.js.map
