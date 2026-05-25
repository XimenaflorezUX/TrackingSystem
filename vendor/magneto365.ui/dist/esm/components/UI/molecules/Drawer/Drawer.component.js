import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Add from '../../../../assets/Add.svg.js';
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
import style from './drawer.module.scss.js';
import { Portal } from '../../atoms/Portal/Portal.component.js';

var DEFAULT_PADDING = 20;
var Component = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, isOpen = _a.isOpen, _c = _a.direction, direction = _c === void 0 ? 'left' : _c, isFull = _a.isFull, customPadding = _a.customPadding, drawerWidth = _a.drawerWidth, isMobile = _a.isMobile, hideButton = _a.hideButton, children = _a.children, onClose = _a.onClose, _d = _a.blockBackgroundClose, blockBackgroundClose = _d === void 0 ? false : _d, customContainer = _a.customContainer, _e = _a.backGroundClassName, backGroundClassName = _e === void 0 ? '' : _e;
    var fullDrawer = isFull ? "full-drawer" : '';
    var paddingValue = customPadding !== undefined ? "".concat(customPadding, "px") : "".concat(DEFAULT_PADDING, "px");
    var backgroundEffect = isMobile ? 'no-background' : 'background-drawer';
    var widthValue = { '--drawer-width': drawerWidth };
    var _f = useState(false), showContent = _f[0], setShowContent = _f[1];
    var _g = useState(isOpen), renderPortal = _g[0], setRenderPortal = _g[1];
    var showDrawer = showContent ? "show-".concat(direction) : "hidden-".concat(direction);
    useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);
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
    return (React.createElement(React.Fragment, null, renderPortal && (React.createElement(Portal, { container: customContainer },
        React.createElement("div", { className: "magneto-ui-drawer" },
            React.createElement("div", { className: "".concat(style['magneto-ui-drawer'], " ").concat(style[fullDrawer], " ").concat(className) },
                React.createElement("aside", { className: "".concat(style[showDrawer]), style: __assign({ padding: paddingValue }, widthValue) },
                    !hideButton && (React.createElement("button", { className: style['magneto-ui-close-button'], onClick: onClose },
                        React.createElement(IconItem, { icon: Add, hover: false }))),
                    children),
                isOpen && (React.createElement("span", { className: "".concat(style[backgroundEffect], " ").concat(backGroundClassName), onClick: blockBackgroundClose ? function () { return null; } : onClose }))))))));
};
/**
 * Molecule UI component for Drawer
 */
var Drawer = Component;

export { Drawer };
//# sourceMappingURL=Drawer.component.js.map
