import React, { useMemo } from 'react';
import ArrowLeft2 from '../../../../../../assets/ArrowLeft2.svg.js';
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
import styles from './Select2Input.module.scss.js';

var Component = function (_a) {
    var _b, _c;
    var clickOut = _a.clickOut, placeholder = _a.placeholder, searchValue = _a.searchValue, disabled = _a.disabled, handleSearch = _a.handleSearch, setClickOut = _a.setClickOut, disableList = _a.disableList, icon = _a.icon, valueSelected = _a.valueSelected, isMultiple = _a.isMultiple, name = _a.name, setTerm = _a.setTerm;
    var arrowRotate = useMemo(function () {
        return CNM.get({
            styles: styles,
            cls: [
                'select2-input__suffix-icon',
                clickOut ? 'select2-input__suffix-icon--rotate-arrow' : 'select2-input__suffix-icon--static-arrow'
            ]
        });
    }, [clickOut]);
    var label = useMemo(function () {
        var _a, _b;
        if (isMultiple) {
            return React.createElement("span", null, placeholder);
        }
        if ((_a = valueSelected[0]) === null || _a === void 0 ? void 0 : _a.name) {
            return (React.createElement("span", { className: styles['select-label'] },
                React.createElement("span", null, placeholder),
                React.createElement("span", null, (_b = valueSelected[0]) === null || _b === void 0 ? void 0 : _b.name)));
        }
        return React.createElement("span", null, placeholder);
    }, [isMultiple, placeholder, valueSelected]);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['select2-input'] }) },
        React.createElement("div", { style: { display: clickOut ? 'block' : 'none' } },
            React.createElement(Input, { type: "text", value: searchValue, placeholder: placeholder, name: name || placeholder, hideIcon: true, onChange: handleSearch, disabled: disabled, autoFocus: clickOut })),
        React.createElement("button", { style: { display: clickOut ? 'none' : 'flex' }, type: "button", onClick: function () { return setClickOut(!clickOut); }, disabled: disableList || disabled, className: CNM.get({
                styles: styles,
                cls: ['select2-input__button', (disableList || disabled) && 'select2-input__button--disabled']
            }) },
            React.createElement("span", null,
                icon && React.createElement("img", { src: icon, alt: "select-icon" }),
                React.createElement("p", { className: CNM.get({
                        styles: styles,
                        cls: [
                            'select2-input__button-text',
                            valueSelected.length
                                ? 'select2-input__button-text--selected'
                                : 'select2-input__button-text--placeholder'
                        ]
                    }) },
                    ((_b = valueSelected[0]) === null || _b === void 0 ? void 0 : _b.img) && React.createElement("img", { src: (_c = valueSelected[0]) === null || _c === void 0 ? void 0 : _c.img, alt: "selected-img" }),
                    label)),
            !setTerm && React.createElement("img", { src: ArrowLeft2, alt: "arrow-icon", className: arrowRotate }))));
};
/**
 * Molecule UI child component of select 2
 */
var Select2Input = Component;

export { Select2Input };
//# sourceMappingURL=Select2Input.component.js.map
