import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useEffect } from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import ArrowDown2 from '../../../../../../assets/ArrowDown2.svg.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { stubTrue, stubUndefined } from '../../../../../../shared/utils/common/stub.util.js';
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
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
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
import Input from '../../../../molecules/Input/Input.component.js';
import '../../../../molecules/SharePopover/SharePopover.js';
import '../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../../molecules/Modal/Modal.component.js';
import { generateID } from '../../../../../../utils/generateID/generateID.util.js';
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
import styles from './SelectInput.module.scss.js';

var cx = classNames.bind(styles);
var getDefaulSelected = function (selected) {
    return selected.map(function (select) { return select.value; }).join(', ');
};
var Component = function (_a) {
    var _b = _a.onChange, onChange = _b === void 0 ? stubTrue : _b, _c = _a.value, value = _c === void 0 ? '' : _c, className = _a.className, _d = _a.onClick, onClick = _d === void 0 ? stubUndefined : _d, _e = _a.open, open = _e === void 0 ? false : _e, _f = _a.actionIcon, actionIcon = _f === void 0 ? ArrowDown2 : _f, _g = _a.selected, selected = _g === void 0 ? [] : _g, _h = _a.getLabel, getLabel = _h === void 0 ? getDefaulSelected : _h, readOnly = _a.readOnly, disabled = _a.disabled, _j = _a.placeholder, placeholder = _j === void 0 ? '' : _j, _k = _a.type, type = _k === void 0 ? 'text' : _k, rest = __rest(_a, ["onChange", "value", "className", "onClick", "open", "actionIcon", "selected", "getLabel", "readOnly", "disabled", "placeholder", "type"]);
    var ref = useRef({ onChange: onChange, id: generateID() });
    useEffect(function () {
        ref.current.onChange = onChange;
    }, [onChange]);
    useEffect(function () {
        if (!open)
            ref.current.onChange({
                target: {
                    value: ''
                }
            });
    }, [open]);
    if (!readOnly) {
        return (React.createElement("div", { className: cx('select-input', className, {
                'select-input--with-icon': actionIcon !== undefined,
                'select-input--no-placeholder': placeholder.length === 0,
                'select-input--disabled': disabled
            }), onClick: function () { return (disabled ? null : onClick()); }, "data-name": "select-input", "data-selected": selected.length > 0, "data-is-open": open },
            React.createElement(Input, __assign({ name: ref.current.id, disabled: disabled, value: open ? value : getLabel(selected), onChange: onChange, actionIcon: actionIcon, placeholder: placeholder, type: type }, rest))));
    }
    return (React.createElement("button", { className: cx('select-button', { 'select-button--disabled': disabled }, className), disabled: disabled, onClick: onClick, "data-name": "select-button", "data-selected": selected.length > 0, "data-is-open": open, type: "button" },
        React.createElement("div", { className: cx('select-button__input') },
            placeholder.length > 0 ? (React.createElement("span", { className: cx('select-button__placeholder', {
                    'select-button__placeholder--open': open,
                    'select-button__placeholder--selected': selected.length > 0
                }) }, placeholder)) : null,
            selected.length > 0 ? (React.createElement("span", { className: cx('select-button__value', {
                    'select-button__placeholder--open': open
                }) }, getLabel(selected))) : null),
        actionIcon ? React.createElement(IconItem, { icon: actionIcon, size: 20 }) : null));
};
var SelectInput = Component;

export { SelectInput };
//# sourceMappingURL=SelectInput.component.js.map
