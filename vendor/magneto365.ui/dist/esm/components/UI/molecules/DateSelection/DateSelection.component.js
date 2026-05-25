import React, { useState, useEffect } from 'react';
import { DateOptions } from '../../atoms/DateOptions/DateOptions.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
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
import '../../../hooks/useMediaQuery/index.js';
import '../Actions/Actions.component.js';
import '../AlertJobModal/AlertJobModal.component.js';
import '../AlertJobStatus/AlertJobStatus.component.js';
import { MobileDrawer } from '../MobileDrawer/MobileDrawer.component.js';
import '../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../CandidateNav/CandidateNav.component.js';
import '../CandidateProfile/CandidateProfile.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../ExpandableInfo/ExpandableInfo.interface.js';
import '../SharePopover/SharePopover.js';
import '../JobCard/children/JobCardOption/JobCardOption.component.js';
import '../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import '../Modal/Modal.component.js';
import '../SimilarCard/SimilarCard.component.js';
import '../SortMenu/SortMenu.component.js';
import '../TimelineEvent/TimelineEvent.interface.js';
import '../UserMenu/UserMenu.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../JobDetails/JobDetails.component.js';
import '../Chat/Chat.component.js';
import styles from './DateSelection.module.scss.js';

var Component = function (_a) {
    var applyLabel = _a.applyLabel, cancelLabel = _a.cancelLabel, dateOptions = _a.dateOptions, disabled = _a.disabled, isOpen = _a.isOpen, onClose = _a.onClose, onApplyCallback = _a.onApplyCallback, selectionHeader = _a.selectionHeader, initialValue = _a.initialValue;
    var _b = useState(initialValue), initialSelectedOption = _b[0], setInitialSelectedOption = _b[1];
    var _c = useState(initialValue), selectedOption = _c[0], setSelectedOption = _c[1];
    var handleOptionClick = function (optionValue) {
        setSelectedOption(optionValue);
    };
    var onCancelClick = function () {
        setSelectedOption(initialSelectedOption);
        onClose();
    };
    var onApplyClick = function () {
        setInitialSelectedOption(selectedOption);
        onApplyCallback(selectedOption);
        onClose();
    };
    useEffect(function () {
        if (disabled) {
            setSelectedOption(null);
            setInitialSelectedOption(null);
        }
    }, [disabled]);
    return (React.createElement(MobileDrawer, { isOpen: isOpen, onClose: onClose, className: styles['magneto-ui--date-selection'] },
        React.createElement("div", { className: styles['magneto-ui--date-selection__header'] },
            React.createElement("h2", null, selectionHeader)),
        React.createElement("div", { className: styles['magneto-ui--date-selection__options'] },
            React.createElement(DateOptions, { handleOnClick: handleOptionClick, optionsList: dateOptions, selected: selectedOption })),
        React.createElement("div", { className: styles['magneto-ui--date-selection__btn--wrapper'] },
            React.createElement("button", { className: styles['magneto-ui--date-selection__cancel-btn'], onClick: onCancelClick }, cancelLabel),
            React.createElement("button", { className: styles['magneto-ui--date-selection__apply-btn'], onClick: onApplyClick }, applyLabel))));
};
var DateSelection = Component;

export { DateSelection };
//# sourceMappingURL=DateSelection.component.js.map
