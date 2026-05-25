import React, { useMemo } from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import ArrowDown3 from '../../../../assets/ArrowDown3.svg.js';
import '../BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../Button/Button.component.js';
import '../Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './DateDropdown.module.scss.js';
import '../../../../utils/date/dateInput.util.js';
import '../Field/Field.component.js';
import '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';
import '../InputFile/InputFile.component.js';
import '../Paragraph/Paragraph.component.js';
import '../Radio/Radio.interface.js';
import '../Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var placeholderLabel = _a.placeholderLabel, dateOptions = _a.dateOptions, _b = _a.selectedOption, selectedOption = _b === void 0 ? '' : _b, onOptionChanged = _a.onOptionChanged, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    var disabledArrow = useMemo(function () {
        if (disabled)
            return (React.createElement(IconItem, { className: styles['magneto-ui--date-dropdown__icon'], icon: ArrowDown2, alt: "arrow-icon", size: 24 }));
        return React.createElement(IconItem, { icon: ArrowDown3, alt: "arrow-icon", size: 24 });
    }, [disabled]);
    return (React.createElement("div", { className: styles['magneto-ui--date-dropdown__wrapper'] },
        React.createElement("select", { className: styles["magneto-ui--date-dropdown__select"], value: selectedOption, onChange: onOptionChanged, disabled: disabled },
            React.createElement("option", { className: styles['magneto-ui--date-dropdown__option'], value: "", disabled: true, hidden: true }, placeholderLabel), dateOptions === null || dateOptions === void 0 ? void 0 :
            dateOptions.map(function (_a) {
                var optionValue = _a.optionValue, optionLabel = _a.optionLabel;
                return (React.createElement("option", { className: styles['magneto-ui--date-dropdown__option'], key: optionValue, value: optionValue }, optionLabel));
            })),
        React.createElement("span", { className: styles['magneto-ui--date-dropdown__icon'] }, disabledArrow)));
};
var DateDropdown = Component;

export { DateDropdown };
//# sourceMappingURL=DateDropdown.component.js.map
