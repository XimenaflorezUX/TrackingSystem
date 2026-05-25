import React from 'react';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { ShareIcons } from '../../../../../../constants/vacancies.constants.js';
import styles from './VacantOptionMobile.module.scss.js';

var cx = classNames.bind(styles);
var VacantOptionMobile = function (_a) {
    var option = _a.option, onClick = _a.onClick, onMenu = _a.onMenu;
    var handleClick = function () {
        var _a;
        if (option.type === 'button') {
            (_a = option.onClick) === null || _a === void 0 ? void 0 : _a.call(option);
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
        if (option.type === 'menu') {
            onMenu === null || onMenu === void 0 ? void 0 : onMenu(option.children);
        }
    };
    var icon = ShareIcons[option.icon]
        ? ShareIcons[option.icon].icon
        : option.icon;
    if (option.type === 'link') {
        return (React.createElement("a", { href: option.href, target: "_blank", rel: "noopener noreferrer", className: cx('option', 'option--link', option.className) },
            option.icon ? React.createElement(IconItem, { size: 18, icon: icon }) : null,
            " ",
            option.label));
    }
    if (option.type === 'button' || option.type === 'menu') {
        return (React.createElement("button", { className: cx('option', 'option--button', option.className), onClick: handleClick, type: "button" },
            option.icon ? React.createElement(IconItem, { size: 18, icon: icon }) : null,
            " ",
            option.label));
    }
    return React.createElement(React.Fragment, null);
};

export { VacantOptionMobile as default };
//# sourceMappingURL=VacantOptionMobile.component.js.map
