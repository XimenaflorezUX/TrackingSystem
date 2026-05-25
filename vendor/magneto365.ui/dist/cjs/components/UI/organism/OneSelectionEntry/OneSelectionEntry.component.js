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
var ContainerOptions_component = require('./children/ContainerOptions/ContainerOptions.component.js');
var useOneSelectionEntry = require('./hooks/useOneSelectionEntry.js');
var OneSelectionEntry_module = require('./OneSelectionEntry.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OneSelectionEntry = function (_a) {
    var dropDownTitle = _a.dropDownTitle, listOptions = _a.listOptions, selectedValue = _a.selectedValue, onChange = _a.onChange, _b = _a.responsiveMenu, responsiveMenu = _b === void 0 ? true : _b;
    var _c = useOneSelectionEntry.useOneSelectionEntry({
        listOptions: listOptions,
        selectedValue: selectedValue,
        onChange: onChange
    }), addValue = _c.addValue, localListOptions = _c.localListOptions, localSelectedValue = _c.localSelectedValue;
    var dropDownTitleSelection = React.useMemo(function () {
        if (localSelectedValue !== undefined && (localSelectedValue || Number.isInteger(localSelectedValue))) {
            return localSelectedValue.label;
        }
        return dropDownTitle;
    }, [dropDownTitle, localSelectedValue]);
    return (React__default["default"].createElement("div", { className: "".concat(OneSelectionEntry_module["".concat(common_constants.classMUI, "-one-selection-entry")]) },
        React__default["default"].createElement(ContainerOptions_component, { responsiveMenu: responsiveMenu, dropDownTitle: dropDownTitleSelection, addValue: addValue, listOptions: localListOptions, selectedValue: localSelectedValue })));
};

module.exports = OneSelectionEntry;
//# sourceMappingURL=OneSelectionEntry.component.js.map
