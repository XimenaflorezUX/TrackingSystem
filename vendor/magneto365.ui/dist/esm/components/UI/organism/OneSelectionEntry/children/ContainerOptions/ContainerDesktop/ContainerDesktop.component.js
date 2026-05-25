import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import SelectItem from '../../SelectItem/SelectItem.component.js';
import { classMUI } from '../../../../../../../constants/stories/common.constants.js';
import '../../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../../constants/img.constants.js';
import { ContainerContext } from '../../../../../../context/container/container.context.js';
import DropDownButton from '../../DropDownButton/DropDownButton.component.js';
import style from './ContainerDesktop.module.scss.js';
import useContainerDesktop from './hooks/useContainerDesktop.js';

var ContainerDesktop = function (_a) {
    var listOptions = _a.listOptions, addValue = _a.addValue, dropDownTitle = _a.dropDownTitle, selectedValue = _a.selectedValue;
    var _b = useContainerDesktop({ addValue: addValue }), containerOptions = _b.containerOptions, menuPosition = _b.menuPosition, toggleDropdown = _b.toggleDropdown, isOpen = _b.isOpen, dropdownRef = _b.dropdownRef, inputRef = _b.inputRef, selectValue = _b.selectValue;
    var container = useContext(ContainerContext).container;
    return (React.createElement("div", { style: { zIndex: 999999 } },
        React.createElement("div", { ref: inputRef },
            React.createElement(DropDownButton, { title: dropDownTitle, onClick: toggleDropdown })),
        React.createElement("div", { ref: containerOptions, className: "".concat(style["".concat(classMUI, "-container-options")]) }, isOpen &&
            container &&
            ReactDOM.createPortal(React.createElement("div", { style: {
                    position: 'absolute',
                    top: "".concat(menuPosition.top - 8, "px "),
                    left: "".concat(menuPosition.left, "px"),
                    width: "".concat(menuPosition.width, "px"),
                    zIndex: 999999
                }, ref: dropdownRef, className: "".concat(style["".concat(classMUI, "-container-options__menu")]) },
                React.createElement("div", { className: "".concat(style["".concat(classMUI, "-container-options__menu--list")]) }, listOptions.map(function (value) { return (React.createElement(SelectItem, { selected: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.id) === value.id, disable: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.id) === value.id, key: value.id, onClick: function () { return selectValue(value.id); }, text: value.label })); }))), container))));
};

export { ContainerDesktop as default };
//# sourceMappingURL=ContainerDesktop.component.js.map
