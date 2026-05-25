import React, { useMemo } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import ContainerOptions from './children/ContainerOptions/ContainerOptions.component.js';
import { useOneSelectionEntry } from './hooks/useOneSelectionEntry.js';
import style from './OneSelectionEntry.module.scss.js';

var OneSelectionEntry = function (_a) {
    var dropDownTitle = _a.dropDownTitle, listOptions = _a.listOptions, selectedValue = _a.selectedValue, onChange = _a.onChange, _b = _a.responsiveMenu, responsiveMenu = _b === void 0 ? true : _b;
    var _c = useOneSelectionEntry({
        listOptions: listOptions,
        selectedValue: selectedValue,
        onChange: onChange
    }), addValue = _c.addValue, localListOptions = _c.localListOptions, localSelectedValue = _c.localSelectedValue;
    var dropDownTitleSelection = useMemo(function () {
        if (localSelectedValue !== undefined && (localSelectedValue || Number.isInteger(localSelectedValue))) {
            return localSelectedValue.label;
        }
        return dropDownTitle;
    }, [dropDownTitle, localSelectedValue]);
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-one-selection-entry")]) },
        React.createElement(ContainerOptions, { responsiveMenu: responsiveMenu, dropDownTitle: dropDownTitleSelection, addValue: addValue, listOptions: localListOptions, selectedValue: localSelectedValue })));
};

export { OneSelectionEntry as default };
//# sourceMappingURL=OneSelectionEntry.component.js.map
