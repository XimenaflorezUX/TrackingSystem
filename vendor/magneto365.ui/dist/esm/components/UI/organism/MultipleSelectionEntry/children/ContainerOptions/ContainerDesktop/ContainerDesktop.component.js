import { __assign } from '../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useContext, useMemo } from 'react';
import ReactDOM from 'react-dom';
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
import InputSearch from '../../../../../atoms/InputSearch/InputSearch.component.js';
import '../../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../../atoms/Radio/Radio.interface.js';
import '../../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../../constants/jobDetails.constants.js';
import Tags from '../../../../../atoms/Tag/Tag.component.js';
import '../../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../../hooks/useMediaQuery/index.js';
import { ContainerContext } from '../../../../../../context/container/container.context.js';
import SelectItem from '../../SelectItem/SelectItem.component.js';
import DropDownButton from '../../DropDownButton/DropDownButton.component.js';
import style from './ContainerDesktop.module.scss.js';
import useContainerDesktop from './hooks/useContainerDesktop.js';

var ContainerDesktop = function (_a) {
    var inputSearchProps = _a.inputSearchProps, selectedValues = _a.selectedValues, listOptions = _a.listOptions, removeValueToArray = _a.removeValueToArray, addValueToArray = _a.addValueToArray, numberOfSelectable = _a.numberOfSelectable, dropDownTitle = _a.dropDownTitle;
    var _b = useContainerDesktop({ numberOfSelectable: numberOfSelectable, selectedValues: selectedValues }), containerOptions = _b.containerOptions, menuPosition = _b.menuPosition, toggleDropdown = _b.toggleDropdown, limitOfSelectable = _b.limitOfSelectable, inputRef = _b.inputRef, isOpen = _b.isOpen, dropdownRef = _b.dropdownRef;
    var container = useContext(ContainerContext).container;
    var hideComponent = useMemo(function () {
        return isOpen ? style['hide'] : '';
    }, [isOpen]);
    return (React.createElement("div", { style: { zIndex: 999999 } },
        limitOfSelectable && (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options-drop-down-container")], " ").concat(hideComponent, " "), ref: inputRef },
            React.createElement(DropDownButton, { title: dropDownTitle, onClick: toggleDropdown }))),
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options-tags-container")], " ").concat(hideComponent) }, selectedValues.map(function (itemSelected) { return (React.createElement(Tags, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#FFF", onClick: function () { return removeValueToArray(itemSelected); } })); })),
        React.createElement("div", { ref: containerOptions, className: "".concat(style["".concat(classMUI, "-container-options")]) }, isOpen &&
            container &&
            ReactDOM.createPortal(React.createElement("div", { style: {
                    position: 'absolute',
                    top: "".concat(menuPosition.top - 60, "px "),
                    left: "".concat(menuPosition.left, "px"),
                    width: "".concat(menuPosition.width, "px"),
                    zIndex: 999999
                }, ref: dropdownRef, className: "".concat(style["".concat(classMUI, "-container-options__menu")]) },
                inputSearchProps && React.createElement(InputSearch, __assign({}, inputSearchProps)),
                React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options__menu--tags")]) }, selectedValues.map(function (itemSelected) { return (React.createElement(Tags, { key: itemSelected.id, text: itemSelected.name, icon: Close, bgColor: "#F4F4FA", onClick: function () { return removeValueToArray(itemSelected); } })); })),
                React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React.createElement(SelectItem, { disable: !limitOfSelectable || selectedValues.includes(value), key: value.id, onClick: function () { return addValueToArray(value); }, text: value.name })); }))), container))));
};

export { ContainerDesktop as default };
//# sourceMappingURL=ContainerDesktop.component.js.map
