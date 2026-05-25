'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var ArrowDown3 = require('../../../../assets/ArrowDown3.svg.js');
require('../BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../Button/Button.component.js');
require('../Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var DateDropdown_module = require('./DateDropdown.module.scss.js');
require('../../../../utils/date/dateInput.util.js');
require('../Field/Field.component.js');
require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');
require('../InputFile/InputFile.component.js');
require('../Paragraph/Paragraph.component.js');
require('../Radio/Radio.interface.js');
require('../Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var placeholderLabel = _a.placeholderLabel, dateOptions = _a.dateOptions, _b = _a.selectedOption, selectedOption = _b === void 0 ? '' : _b, onOptionChanged = _a.onOptionChanged, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    var disabledArrow = React.useMemo(function () {
        if (disabled)
            return (React__default["default"].createElement(Icon_component.IconItem, { className: DateDropdown_module['magneto-ui--date-dropdown__icon'], icon: ArrowDown2, alt: "arrow-icon", size: 24 }));
        return React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowDown3, alt: "arrow-icon", size: 24 });
    }, [disabled]);
    return (React__default["default"].createElement("div", { className: DateDropdown_module['magneto-ui--date-dropdown__wrapper'] },
        React__default["default"].createElement("select", { className: DateDropdown_module["magneto-ui--date-dropdown__select"], value: selectedOption, onChange: onOptionChanged, disabled: disabled },
            React__default["default"].createElement("option", { className: DateDropdown_module['magneto-ui--date-dropdown__option'], value: "", disabled: true, hidden: true }, placeholderLabel), dateOptions === null || dateOptions === void 0 ? void 0 :
            dateOptions.map(function (_a) {
                var optionValue = _a.optionValue, optionLabel = _a.optionLabel;
                return (React__default["default"].createElement("option", { className: DateDropdown_module['magneto-ui--date-dropdown__option'], key: optionValue, value: optionValue }, optionLabel));
            })),
        React__default["default"].createElement("span", { className: DateDropdown_module['magneto-ui--date-dropdown__icon'] }, disabledArrow)));
};
var DateDropdown = Component;

exports.DateDropdown = DateDropdown;
//# sourceMappingURL=DateDropdown.component.js.map
