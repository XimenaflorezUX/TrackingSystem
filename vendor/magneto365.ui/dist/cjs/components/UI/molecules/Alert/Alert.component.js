'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Alert_module = require('./Alert.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Close = require('../../../../assets/Close.svg.js');
var error = require('../../../../assets/error.svg.js');
var info = require('../../../../assets/info.svg.js');
var success = require('../../../../assets/success.svg.js');
var warning = require('../../../../assets/warning.svg.js');
var iconAlertBlue = require('../../../../assets/iconAlertBlue.png.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
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
var Text_component = require('../../atoms/Text/Text.component.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var alertIcons = {
    info: info,
    'info-expanded': iconAlertBlue,
    success: success,
    warning: warning,
    error: error
};
var Component = function (_a) {
    var _b = _a.text, text = _b === void 0 ? '' : _b, type = _a.type, customText = _a.customText, _c = _a.border, border = _c === void 0 ? false : _c, size = _a.size, onClose = _a.onClose, _d = _a.className, className = _d === void 0 ? '' : _d, extraButton = _a.extraButton;
    var borderStyle = border ? Alert_module["".concat(common_constants.classMUI, "-").concat(type, "--with-border")] : '';
    var typeStyle = Alert_module["".concat(common_constants.classMUI, "-").concat(type)];
    var isExpandedVariant = type === 'info-expanded' && extraButton;
    var iconByType = React.useMemo(function () { return alertIcons[type]; }, [type]);
    return (React__default["default"].createElement("div", { className: "".concat(Alert_module["".concat(common_constants.classMUI, "-alert")], " ").concat(className, " ").concat(borderStyle, " ").concat(typeStyle, " ").concat(isExpandedVariant ? Alert_module["".concat(common_constants.classMUI, "-alert--expanded")] : ''), style: { width: size } },
        React__default["default"].createElement(Icon_component.IconItem, { className: Alert_module["".concat(common_constants.classMUI, "-icon")], icon: iconByType, alt: type }),
        isExpandedVariant ? (React__default["default"].createElement("div", { className: Alert_module["".concat(common_constants.classMUI, "-alert-content")] },
            React__default["default"].createElement(Text_component.TextCustom, { text: text, customText: customText, className: Alert_module["".concat(common_constants.classMUI, "-text")] }),
            extraButton)) : (React__default["default"].createElement(Text_component.TextCustom, { text: text, customText: customText, className: Alert_module["".concat(common_constants.classMUI, "-text")] })),
        !isExpandedVariant && extraButton,
        onClose && (React__default["default"].createElement("button", { className: Alert_module["".concat(common_constants.classMUI, "-close-action")], type: "button", onClick: onClose },
            React__default["default"].createElement(Icon_component.IconItem, { icon: Close, alt: type })))));
};
var Alert = Component;

exports.Alert = Alert;
//# sourceMappingURL=Alert.component.js.map
