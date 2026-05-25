'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
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
require('../../../hooks/useMediaQuery/index.js');
var menuIcon_module = require('./menuIcon.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var text = _a.text, icon = _a.icon, iconProps = _a.iconProps, _b = _a.iconSize, iconSize = _b === void 0 ? 20 : _b, url = _a.url, _c = _a.type, type = _c === void 0 ? 'link' : _c, onClick = _a.onClick, isActive = _a.isActive, _d = _a.className, className = _d === void 0 ? '' : _d, rel = _a.rel, target = _a.target;
    var menuActive = isActive ? menuIcon_module['isActive'] : '';
    return (React__default["default"].createElement(React__default["default"].Fragment, null, type === 'link' ? (React__default["default"].createElement("a", { href: url, className: "".concat(menuIcon_module['magneto-ui-menu-icon'], " ").concat(menuActive, " ").concat(className), title: text, rel: rel, target: target },
        icon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: iconSize, hover: false, icon: icon }, iconProps)),
        React__default["default"].createElement("p", { className: menuIcon_module['magneto-ui-menu-icon__menu-text'] }, text))) : (React__default["default"].createElement("button", { onClick: onClick, className: "".concat(menuIcon_module['magneto-ui-menu-icon'], " ").concat(menuActive, " ").concat(className), title: text },
        icon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: iconSize, hover: false, icon: icon }, iconProps)),
        React__default["default"].createElement("p", { className: menuIcon_module['magneto-ui-menu-icon__menu-text'] }, text)))));
};
var MenuIcon = Component;

exports.MenuIcon = MenuIcon;
//# sourceMappingURL=MenuIcon.component.js.map
