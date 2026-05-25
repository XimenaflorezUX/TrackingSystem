'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var ToggleButton_component = require('../../atoms/ToggleButton/ToggleButton.component.js');
require('../../../hooks/useMediaQuery/index.js');
var ToggleButtonList_module = require('./ToggleButtonList.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var list = _a.list, toggleButtonProps = _a.toggleButtonProps, _b = _a.onChange, onChange = _b === void 0 ? function () { return ({}); } : _b, _c = _a.className, className = _c === void 0 ? '' : _c, currentSelect = _a.currentSelect;
    var _d = React.useState(), valueSelected = _d[0], setValueSelected = _d[1];
    React.useEffect(function () {
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
    return (React__default["default"].createElement("div", { className: "".concat(className, " ").concat(ToggleButtonList_module['toggle-button-list']) }, list === null || list === void 0 ? void 0 : list.map(function (_a) {
        var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.name, name = _c === void 0 ? '' : _c, customIcon = _a.customIcon;
        return (React__default["default"].createElement(ToggleButton_component.ToggleButton, tslib_es6.__assign({}, toggleButtonProps, { customIcon: customIcon, currentSelect: valueHasSelected(+id), key: id, id: id, name: name, onChange: onHandleChange })));
    })));
};
var ToggleButtonList = Component;

exports.ToggleButtonList = ToggleButtonList;
//# sourceMappingURL=ToggleButtonList.component.js.map
