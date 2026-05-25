import React, { useMemo } from 'react';
import style from './Alert.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Close from '../../../../assets/Close.svg.js';
import Error from '../../../../assets/error.svg.js';
import Info from '../../../../assets/info.svg.js';
import Success from '../../../../assets/success.svg.js';
import Warning from '../../../../assets/warning.svg.js';
import IconAlertBlue from '../../../../assets/iconAlertBlue.png.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
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
import { TextCustom } from '../../atoms/Text/Text.component.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var alertIcons = {
    info: Info,
    'info-expanded': IconAlertBlue,
    success: Success,
    warning: Warning,
    error: Error
};
var Component = function (_a) {
    var _b = _a.text, text = _b === void 0 ? '' : _b, type = _a.type, customText = _a.customText, _c = _a.border, border = _c === void 0 ? false : _c, size = _a.size, onClose = _a.onClose, _d = _a.className, className = _d === void 0 ? '' : _d, extraButton = _a.extraButton;
    var borderStyle = border ? style["".concat(classMUI, "-").concat(type, "--with-border")] : '';
    var typeStyle = style["".concat(classMUI, "-").concat(type)];
    var isExpandedVariant = type === 'info-expanded' && extraButton;
    var iconByType = useMemo(function () { return alertIcons[type]; }, [type]);
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-alert")], " ").concat(className, " ").concat(borderStyle, " ").concat(typeStyle, " ").concat(isExpandedVariant ? style["".concat(classMUI, "-alert--expanded")] : ''), style: { width: size } },
        React.createElement(IconItem, { className: style["".concat(classMUI, "-icon")], icon: iconByType, alt: type }),
        isExpandedVariant ? (React.createElement("div", { className: style["".concat(classMUI, "-alert-content")] },
            React.createElement(TextCustom, { text: text, customText: customText, className: style["".concat(classMUI, "-text")] }),
            extraButton)) : (React.createElement(TextCustom, { text: text, customText: customText, className: style["".concat(classMUI, "-text")] })),
        !isExpandedVariant && extraButton,
        onClose && (React.createElement("button", { className: style["".concat(classMUI, "-close-action")], type: "button", onClick: onClose },
            React.createElement(IconItem, { icon: Close, alt: type })))));
};
var Alert = Component;

export { Alert };
//# sourceMappingURL=Alert.component.js.map
