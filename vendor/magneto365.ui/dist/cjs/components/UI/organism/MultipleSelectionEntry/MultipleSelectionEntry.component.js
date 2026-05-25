'use strict';

var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var MultipleSelectionEntry_module = require('./MultipleSelectionEntry.module.scss.js');
var ContainerOptions_component = require('./children/ContainerOptions/ContainerOptions.component.js');
var useMultipleSelectionEntry = require('./hooks/useMultipleSelectionEntry.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MultipleSelectionEntry = function (_a) {
    var dropDownTitle = _a.dropDownTitle, placeholder = _a.placeholder, listOptions = _a.listOptions, selectedValues = _a.selectedValues, _b = _a.numberOfSelectable, numberOfSelectable = _b === void 0 ? 3 : _b, onChange = _a.onChange;
    var _c = useMultipleSelectionEntry.useMultipleSelectionEntry({ listOptions: listOptions, selectedValues: selectedValues, onChange: onChange, numberOfSelectable: numberOfSelectable }), addValueToArray = _c.addValueToArray, clearFilter = _c.clearFilter, handleInputChange = _c.handleInputChange, inputValue = _c.inputValue, localListOptions = _c.localListOptions, removeValueToArray = _c.removeValueToArray, localSelectedValues = _c.localSelectedValues;
    var inputSearchProps = {
        placeholder: placeholder,
        closeOnClick: clearFilter,
        inputValue: inputValue,
        onChange: handleInputChange
    };
    return (React__default["default"].createElement("div", { className: "".concat(MultipleSelectionEntry_module["".concat(common_constants.classMUI, "-multiple-selection-entry")]) },
        React__default["default"].createElement(ContainerOptions_component, { removeValueToArray: removeValueToArray, dropDownTitle: dropDownTitle, numberOfSelectable: numberOfSelectable, inputSearchProps: inputSearchProps, addValueToArray: addValueToArray, listOptions: localListOptions, selectedValues: localSelectedValues })));
};

module.exports = MultipleSelectionEntry;
//# sourceMappingURL=MultipleSelectionEntry.component.js.map
