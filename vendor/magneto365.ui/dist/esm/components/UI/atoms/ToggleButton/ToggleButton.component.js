import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback, useMemo } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './ToggleButton.module.scss.js';

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
    var handleClick = useCallback(function (_a) {
        var id = _a.id, name = _a.name;
        if (currentSelect) {
            onChange({ id: id, name: undefined });
            return;
        }
        onChange({ id: id, name: name });
    }, [currentSelect, onChange]);
    var selectStyles = useMemo(function () {
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
    return (React.createElement("button", { className: "".concat(styles["".concat(classMUI, "-toggle-button")], " ").concat(className || '', " ").concat(currentSelect ? styles['toggle-button-selected'] : ''), style: __assign({}, selectStyles), onClick: function () { return handleClick({ id: id, name: name }); }, type: "button" },
        customIcon && (React.createElement("img", { className: "".concat(styles["".concat(classMUI, "-toggle-button__img")], " ").concat(currentSelect ? styles['toggle-image-selected'] : ''), src: customIcon, alt: "toogle-btn" })),
        name));
};
var ToggleButton = Component;

export { ToggleButton };
//# sourceMappingURL=ToggleButton.component.js.map
