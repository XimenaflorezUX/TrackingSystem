import React from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './MultipleSelectionEntry.module.scss.js';
import ContainerOptions from './children/ContainerOptions/ContainerOptions.component.js';
import { useMultipleSelectionEntry } from './hooks/useMultipleSelectionEntry.js';

var MultipleSelectionEntry = function (_a) {
    var dropDownTitle = _a.dropDownTitle, placeholder = _a.placeholder, listOptions = _a.listOptions, selectedValues = _a.selectedValues, _b = _a.numberOfSelectable, numberOfSelectable = _b === void 0 ? 3 : _b, onChange = _a.onChange;
    var _c = useMultipleSelectionEntry({ listOptions: listOptions, selectedValues: selectedValues, onChange: onChange, numberOfSelectable: numberOfSelectable }), addValueToArray = _c.addValueToArray, clearFilter = _c.clearFilter, handleInputChange = _c.handleInputChange, inputValue = _c.inputValue, localListOptions = _c.localListOptions, removeValueToArray = _c.removeValueToArray, localSelectedValues = _c.localSelectedValues;
    var inputSearchProps = {
        placeholder: placeholder,
        closeOnClick: clearFilter,
        inputValue: inputValue,
        onChange: handleInputChange
    };
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-multiple-selection-entry")]) },
        React.createElement(ContainerOptions, { removeValueToArray: removeValueToArray, dropDownTitle: dropDownTitle, numberOfSelectable: numberOfSelectable, inputSearchProps: inputSearchProps, addValueToArray: addValueToArray, listOptions: localListOptions, selectedValues: localSelectedValues })));
};

export { MultipleSelectionEntry as default };
//# sourceMappingURL=MultipleSelectionEntry.component.js.map
