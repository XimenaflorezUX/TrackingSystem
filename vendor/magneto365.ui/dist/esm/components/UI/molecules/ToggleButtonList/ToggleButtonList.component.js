import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
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
import { ToggleButton } from '../../atoms/ToggleButton/ToggleButton.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './ToggleButtonList.module.scss.js';

var Component = function (_a) {
    var list = _a.list, toggleButtonProps = _a.toggleButtonProps, _b = _a.onChange, onChange = _b === void 0 ? function () { return ({}); } : _b, _c = _a.className, className = _c === void 0 ? '' : _c, currentSelect = _a.currentSelect;
    var _d = useState(), valueSelected = _d[0], setValueSelected = _d[1];
    useEffect(function () {
        if (currentSelect) {
            onChange(currentSelect);
        }
    }, [currentSelect, onChange]);
    var onHandleChange = function (value) {
        if (!(value === null || value === void 0 ? void 0 : value.name))
            return;
        onChange(value);
        setValueSelected(value);
    };
    var valueHasSelected = function (id) {
        if (valueSelected) {
            return valueSelected.id === id;
        }
        if (currentSelect) {
            return currentSelect.id === id;
        }
        return false;
    };
    return (React.createElement("div", { className: "".concat(className, " ").concat(styles['toggle-button-list']) }, list === null || list === void 0 ? void 0 : list.map(function (_a) {
        var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.name, name = _c === void 0 ? '' : _c, customIcon = _a.customIcon;
        return (React.createElement(ToggleButton, __assign({}, toggleButtonProps, { customIcon: customIcon, currentSelect: valueHasSelected(+id), key: id, id: id, name: name, onChange: onHandleChange })));
    })));
};
var ToggleButtonList = Component;

export { ToggleButtonList };
//# sourceMappingURL=ToggleButtonList.component.js.map
