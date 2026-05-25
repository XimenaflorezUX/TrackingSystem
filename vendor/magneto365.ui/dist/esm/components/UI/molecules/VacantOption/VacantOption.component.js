import React, { useState } from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import { ShareIcons } from '../../../../constants/vacancies.constants.js';
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
import { MenuDropdown } from '../../atoms/MenuDropdown/MenuDropdown.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './VacantOption.module.scss.js';

var cx = classNames.bind(styles);
var VacantOption = function (_a) {
    var option = _a.option, onClick = _a.onClick;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var handleClick = function () {
        var _a;
        if (option.type === 'button') {
            (_a = option.onClick) === null || _a === void 0 ? void 0 : _a.call(option);
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    var icon = ShareIcons[option.icon]
        ? ShareIcons[option.icon].icon
        : option.icon;
    if (option.type === 'menu') {
        return (React.createElement(MenuDropdown, { title: option.label, opened: open, onClick: setOpen, prefixIcon: { icon: icon, size: 18 }, suffixIcon: { icon: ArrowDown2 }, className: cx('option', 'option--menu', { 'option--menu-open': open }, option.className), listClassName: cx('option__menu-list') }, option.children.map(function (child) { return (React.createElement(VacantOption, { onClick: handleClick, key: child.label, option: child })); })));
    }
    if (option.type === 'link') {
        return (React.createElement("a", { href: option.href, target: "_blank", rel: "noopener noreferrer", className: cx('option', 'option--link', option.className) },
            option.icon ? React.createElement(IconItem, { size: 18, icon: icon }) : null,
            " ",
            option.label));
    }
    if (option.type === 'button') {
        return (React.createElement("button", { className: cx('option', 'option--button', option.className), onClick: handleClick, type: "button" },
            option.icon ? React.createElement(IconItem, { size: 18, icon: icon }) : null,
            " ",
            option.label));
    }
    return React.createElement(React.Fragment, null);
};

export { VacantOption as default };
//# sourceMappingURL=VacantOption.component.js.map
