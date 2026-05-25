import React, { useState, useEffect, useCallback } from 'react';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
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
import '../../../../molecules/Actions/Actions.component.js';
import '../../../../molecules/AlertJobModal/AlertJobModal.component.js';
import '../../../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../../../../molecules/MobileDrawer/MobileDrawer.component.js';
import '../../../../molecules/BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../../../../molecules/CandidateNav/CandidateNav.component.js';
import '../../../../molecules/CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../../../context/container/container.context.js';
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
import { Select2Input } from '../Select2Input/Select2Input.component.js';
import { Select2List } from '../Select2List/Select2List.component.js';
import styles from './Select2Mobile.module.scss.js';
import { Select2Tags } from '../Select2Tags/Select2Tags.component.js';

var Component = function (_a) {
    var className = _a.className, disabled = _a.disabled, disableList = _a.disableList, handleChange = _a.handleChange, handleSearch = _a.handleSearch, haveTags = _a.haveTags, icon = _a.icon, isMobile = _a.isMobile, isMultiple = _a.isMultiple, limitSelections = _a.limitSelections, list = _a.list, placeholder = _a.placeholder, removeValue = _a.removeValue, searchValue = _a.searchValue, _b = _a.setClickOut, setClickOut = _b === void 0 ? function () { return ({}); } : _b, valueSelected = _a.valueSelected, render = _a.render, setTerm = _a.setTerm;
    var _c = useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    useEffect(function () {
        if ((isMultiple && limitSelections === valueSelected.length) || valueSelected.length) {
            setIsModalOpen(false);
        }
    }, [disableList, isMultiple, limitSelections, valueSelected]);
    var handleVisible = useCallback(function (visible) {
        setIsModalOpen(visible);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Select2Input, { searchValue: searchValue, placeholder: placeholder, clickOut: false, disabled: disabled, handleSearch: handleSearch, setClickOut: function () { return handleVisible(true); }, disableList: disableList, isMultiple: isMultiple, icon: icon, valueSelected: valueSelected, setTerm: setTerm }),
        React.createElement(Select2Tags, { onRemove: removeValue, tags: valueSelected, visible: haveTags }),
        React.createElement(MobileDrawer, { isOpen: isModalOpen && !disableList, onClose: function () { return handleVisible(false); }, className: CNM.get({ styles: styles, cls: ['select2-desktop', className] }) },
            React.createElement(Select2Input, { searchValue: searchValue, placeholder: placeholder, clickOut: true, disabled: disabled, handleSearch: handleSearch, setClickOut: setClickOut, disableList: disableList, icon: icon, valueSelected: valueSelected, name: "".concat(placeholder, "-mobile"), isMultiple: isMultiple, setTerm: setTerm }),
            React.createElement(Select2Tags, { onRemove: removeValue, tags: valueSelected, visible: haveTags }),
            React.createElement(Select2List, { disabledList: disableList, isMobile: isMobile, list: list, onSelected: handleChange, selected: valueSelected, render: render, visible: true }))));
};
/**
 * Molecule UI child component of select 2
 */
var Select2Mobile = Component;

export { Select2Mobile };
//# sourceMappingURL=Select2Mobile.component.js.map
