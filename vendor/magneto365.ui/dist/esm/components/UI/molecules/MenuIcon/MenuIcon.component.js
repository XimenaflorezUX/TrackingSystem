import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
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
import '../../../hooks/useMediaQuery/index.js';
import style from './menuIcon.module.scss.js';

var Component = function (_a) {
    var text = _a.text, icon = _a.icon, iconProps = _a.iconProps, _b = _a.iconSize, iconSize = _b === void 0 ? 20 : _b, url = _a.url, _c = _a.type, type = _c === void 0 ? 'link' : _c, onClick = _a.onClick, isActive = _a.isActive, _d = _a.className, className = _d === void 0 ? '' : _d, rel = _a.rel, target = _a.target;
    var menuActive = isActive ? style['isActive'] : '';
    return (React.createElement(React.Fragment, null, type === 'link' ? (React.createElement("a", { href: url, className: "".concat(style['magneto-ui-menu-icon'], " ").concat(menuActive, " ").concat(className), title: text, rel: rel, target: target },
        icon && React.createElement(IconItem, __assign({ size: iconSize, hover: false, icon: icon }, iconProps)),
        React.createElement("p", { className: style['magneto-ui-menu-icon__menu-text'] }, text))) : (React.createElement("button", { onClick: onClick, className: "".concat(style['magneto-ui-menu-icon'], " ").concat(menuActive, " ").concat(className), title: text },
        icon && React.createElement(IconItem, __assign({ size: iconSize, hover: false, icon: icon }, iconProps)),
        React.createElement("p", { className: style['magneto-ui-menu-icon__menu-text'] }, text)))));
};
var MenuIcon = Component;

export { MenuIcon };
//# sourceMappingURL=MenuIcon.component.js.map
