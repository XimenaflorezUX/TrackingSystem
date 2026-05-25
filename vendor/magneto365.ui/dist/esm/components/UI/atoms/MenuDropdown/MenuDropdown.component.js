import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, useEffect } from 'react';
import ArrowDownWhite from '../../../../assets/arrowDownWhite.svg.js';
import { IconItem } from '../Icon/Icon.component.js';
import '../BarChart/enums.js';
import CNM from '../../../../utils/classNameManager/classNameManager.util.js';
import '../Button/Button.component.js';
import '../Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../Field/Field.component.js';
import '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';
import '../InputFile/InputFile.component.js';
import { MenuDropdownList } from './children/MenuDropdownList/MenuDropdownList.component.js';
import styles from './MenuDropdown.module.scss.js';
import '../Paragraph/Paragraph.component.js';
import '../Radio/Radio.interface.js';
import '../Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.listClassName, listClassName = _c === void 0 ? '' : _c, onClick = _a.onClick, opened = _a.opened, prefixIcon = _a.prefixIcon, _d = _a.suffixIcon, suffixIcon = _d === void 0 ? { icon: ArrowDownWhite } : _d, title = _a.title;
    var _e = useState(opened), localOpened = _e[0], setLocalOpened = _e[1];
    var toggleOptions = useCallback(function () {
        if (onClick) {
            onClick(!localOpened);
        }
        setLocalOpened(opened !== null && opened !== void 0 ? opened : !localOpened);
    }, [localOpened, onClick, opened]);
    useEffect(function () {
        setLocalOpened(opened);
    }, [opened]);
    var handleButtonClick = useCallback(function (e) {
        e.stopPropagation();
    }, []);
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['menu-dropdown', className] }), onClick: toggleOptions },
        React.createElement("div", { className: CNM.get({ styles: styles, cls: ['menu-dropdown__content'] }) },
            React.createElement("div", { className: CNM.get({ styles: styles, cls: ['menu-dropdown__container'] }) },
                prefixIcon && React.createElement(IconItem, __assign({ size: 18 }, prefixIcon)),
                React.createElement("span", { className: CNM.get({ styles: styles, cls: ['menu-dropdown__title'] }) }, title),
                React.createElement("div", { className: CNM.get({
                        styles: styles,
                        cls: ['menu-dropdown__suffix', localOpened && 'menu-dropdown__suffix--visible']
                    }) },
                    React.createElement(IconItem, __assign({ size: 18 }, suffixIcon)))),
            React.createElement("div", { onClick: handleButtonClick },
                React.createElement(MenuDropdownList, { opened: localOpened !== null && localOpened !== void 0 ? localOpened : false, listClassName: listClassName }, children)))));
};
/**
 * Atom UI component of menu dropdown
 */
var MenuDropdown = Component;

export { MenuDropdown };
//# sourceMappingURL=MenuDropdown.component.js.map
