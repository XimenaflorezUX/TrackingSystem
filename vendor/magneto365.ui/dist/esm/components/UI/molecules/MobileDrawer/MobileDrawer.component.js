import React, { useState, useEffect } from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Add from '../../../../assets/Add.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
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
import { DrawerPortal } from '../Drawer/DrawerPortal.js';
import style from './mobileDrawer.module.scss.js';

var cx = classNames.bind(style);
var Component = function (_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.blockBackgroundClose, blockBackgroundClose = _c === void 0 ? false : _c, _d = _a.backgroundClassName, backgroundClassName = _d === void 0 ? '' : _d;
    var _e = useState(false), showContent = _e[0], setShowContent = _e[1];
    var _f = useState(isOpen), renderPortal = _f[0], setRenderPortal = _f[1];
    var showMenu = showContent ? 'show' : 'hidden';
    useEffect(function () {
        var timer = null;
        if (isOpen) {
            setRenderPortal(true);
            timer = setTimeout(function () {
                setShowContent(true);
            }, 100);
        }
        else {
            setShowContent(false);
            timer = setTimeout(function () {
                setRenderPortal(false);
            }, 500);
        }
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isOpen]);
    return (React.createElement(React.Fragment, null, renderPortal && (React.createElement(DrawerPortal, null,
        React.createElement("div", { className: cx('magneto-ui-mobile-drawer') },
            React.createElement("aside", { className: cx(showMenu, className) },
                React.createElement("button", { "data-name": "close-drawer", title: "close-modal", className: cx('magneto-ui-close-button'), onClick: onClose },
                    React.createElement(IconItem, { icon: Add, hover: false })),
                React.createElement("div", { className: cx('magneto-ui-container') }, children)),
            isOpen && (React.createElement("span", { className: cx('background-drawer', backgroundClassName), onClick: blockBackgroundClose ? function () { return null; } : onClose })))))));
};
/**
 * Molecule UI component for Mobile Drawer
 */
var MobileDrawer = Component;

export { MobileDrawer };
//# sourceMappingURL=MobileDrawer.component.js.map
