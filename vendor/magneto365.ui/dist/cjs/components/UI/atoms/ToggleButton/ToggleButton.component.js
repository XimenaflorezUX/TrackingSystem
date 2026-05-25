'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var ToggleButton_module = require('./ToggleButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#001B38' : _b, _c = _a.onChange, onChange = _c === void 0 ? function () { return ({}); } : _c, id = _a.id, name = _a.name, currentSelect = _a.currentSelect, _d = _a.baseColor, baseColor = _d === void 0 ? 'transparent' : _d, _e = _a.customIcon, customIcon = _e === void 0 ? '' : _e;
    var isColorDark = function (color) {
        var hex = color.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminosity < 128;
    };
    var handleClick = React.useCallback(function (_a) {
        var id = _a.id, name = _a.name;
        if (currentSelect) {
            onChange({ id: id, name: undefined });
            return;
        }
        onChange({ id: id, name: name });
    }, [currentSelect, onChange]);
    var selectStyles = React.useMemo(function () {
        if (currentSelect) {
            return {
                backgroundColor: color,
                color: isColorDark(color || '#FFFFFF') ? '#FFFFFF' : '#000000',
                border: 'none'
            };
        }
        return {
            backgroundColor: baseColor,
            color: isColorDark(baseColor || '#FFFFFF') ? '#FFFFFF' : '#000000'
        };
    }, [baseColor, color, currentSelect]);
    return (React__default["default"].createElement("button", { className: "".concat(ToggleButton_module["".concat(common_constants.classMUI, "-toggle-button")], " ").concat(className || '', " ").concat(currentSelect ? ToggleButton_module['toggle-button-selected'] : ''), style: tslib_es6.__assign({}, selectStyles), onClick: function () { return handleClick({ id: id, name: name }); }, type: "button" },
        customIcon && (React__default["default"].createElement("img", { className: "".concat(ToggleButton_module["".concat(common_constants.classMUI, "-toggle-button__img")], " ").concat(currentSelect ? ToggleButton_module['toggle-image-selected'] : ''), src: customIcon, alt: "toogle-btn" })),
        name));
};
var ToggleButton = Component;

exports.ToggleButton = ToggleButton;
//# sourceMappingURL=ToggleButton.component.js.map
