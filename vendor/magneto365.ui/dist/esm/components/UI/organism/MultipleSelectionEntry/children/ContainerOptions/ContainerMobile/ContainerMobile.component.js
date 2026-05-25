import React, { useState, useMemo, useEffect } from 'react';
import Close from '../../../../../../../assets/Close.svg.js';
import '../../../../../atoms/BarChart/enums.js';
import '../../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../atoms/Button/Button.component.js';
import '../../../../../atoms/Collapse/Collapse.component.js';
import { classMUI } from '../../../../../../../constants/stories/common.constants.js';
import '../../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../../constants/img.constants.js';
import '../../../../../../../utils/date/dateInput.util.js';
import '../../../../../atoms/Field/Field.component.js';
import '../../../../../atoms/Typography/Typography.component.js';
import '../../../../../atoms/Typography/Typography.interface.js';
import '../../../../../atoms/InputFile/InputFile.component.js';
import '../../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../../atoms/Radio/Radio.interface.js';
import '../../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../../constants/jobDetails.constants.js';
import Tags from '../../../../../atoms/Tag/Tag.component.js';
import '../../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../../hooks/useMediaQuery/index.js';
import SelectItem from '../../SelectItem/SelectItem.component.js';
import '../../../../../molecules/Actions/Actions.component.js';
import '../../../../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../../../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../../molecules/CandidateNav/CandidateNav.component.js';
import '../../../../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../../../../context/container/container.context.js';
import '../../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../../../../../molecules/ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../../../../../molecules/ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../../../../../molecules/ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../../../../../molecules/ExpandableInfo/ExpandableInfo.interface.js';
import '../../../../../molecules/SharePopover/SharePopover.js';
import '../../../../../molecules/JobCard/children/JobCardOption/JobCardOption.component.js';
import '../../../../../molecules/JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../../../../../molecules/MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../../../../template/MegaMenu/MegaMenu.context.js';
import '../../../../../molecules/Modal/Modal.component.js';
import '../../../../../molecules/SimilarCard/SimilarCard.component.js';
import '../../../../../molecules/SortMenu/SortMenu.component.js';
import '../../../../../molecules/TimelineEvent/TimelineEvent.interface.js';
import '../../../../../molecules/UserMenu/UserMenu.component.js';
import '../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../../../../../molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../../../../../molecules/UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../../../../../molecules/JobDetails/JobDetails.component.js';
import '../../../../../molecules/Chat/Chat.component.js';
import style from './ContainerMobile.module.scss.js';
import DropDownButton from '../../DropDownButton/DropDownButton.component.js';

var ContainerDesktop = function (_a) {
    var selectedValues = _a.selectedValues, listOptions = _a.listOptions, removeValueToArray = _a.removeValueToArray, addValueToArray = _a.addValueToArray, dropDownTitle = _a.dropDownTitle, numberOfSelectable = _a.numberOfSelectable;
    var _b = useState(false), openOptions = _b[0], setOpenOptions = _b[1];
    var limitOfSelectable = useMemo(function () {
        return selectedValues.length < numberOfSelectable;
    }, [numberOfSelectable, selectedValues.length]);
    useEffect(function () {
        if (!limitOfSelectable) {
            setOpenOptions(false);
        }
    }, [limitOfSelectable]);
    return (React.createElement(React.Fragment, null,
        limitOfSelectable && React.createElement(DropDownButton, { title: dropDownTitle, onClick: function () { return setOpenOptions(true); } }),
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options-tags-container")]) }, selectedValues.map(function (itemSelected) { return (React.createElement(Tags, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#FFF", onClick: function () { return removeValueToArray(itemSelected); } })); })),
        React.createElement("div", { style: { zIndex: 99999999 } },
            React.createElement(MobileDrawer, { isOpen: openOptions, onClose: function () { return setOpenOptions(false); } },
                React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options")]) },
                    React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options__menu")]) },
                        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options__menu--tags")]) }, selectedValues.map(function (itemSelected) { return (React.createElement(Tags, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#F4F4FA", onClick: function () { return removeValueToArray(itemSelected); } })); })),
                        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React.createElement(SelectItem, { disable: !limitOfSelectable || selectedValues.includes(value), key: value.id, onClick: function () { return addValueToArray(value); }, text: value.name })); }))))))));
};

export { ContainerDesktop as default };
//# sourceMappingURL=ContainerMobile.component.js.map
