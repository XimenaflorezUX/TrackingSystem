'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Add = require('../../../../assets/Add.svg.js');
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
var drawer_module = require('./drawer.module.scss.js');
var Portal_component = require('../../atoms/Portal/Portal.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DEFAULT_PADDING = 20;
var Component = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, isOpen = _a.isOpen, _c = _a.direction, direction = _c === void 0 ? 'left' : _c, isFull = _a.isFull, customPadding = _a.customPadding, drawerWidth = _a.drawerWidth, isMobile = _a.isMobile, hideButton = _a.hideButton, children = _a.children, onClose = _a.onClose, _d = _a.blockBackgroundClose, blockBackgroundClose = _d === void 0 ? false : _d, customContainer = _a.customContainer, _e = _a.backGroundClassName, backGroundClassName = _e === void 0 ? '' : _e;
    var fullDrawer = isFull ? "full-drawer" : '';
    var paddingValue = customPadding !== undefined ? "".concat(customPadding, "px") : "".concat(DEFAULT_PADDING, "px");
    var backgroundEffect = isMobile ? 'no-background' : 'background-drawer';
    var widthValue = { '--drawer-width': drawerWidth };
    var _f = React.useState(false), showContent = _f[0], setShowContent = _f[1];
    var _g = React.useState(isOpen), renderPortal = _g[0], setRenderPortal = _g[1];
    var showDrawer = showContent ? "show-".concat(direction) : "hidden-".concat(direction);
    React.useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);
    React.useEffect(function () {
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null, renderPortal && (React__default["default"].createElement(Portal_component.Portal, { container: customContainer },
        React__default["default"].createElement("div", { className: "magneto-ui-drawer" },
            React__default["default"].createElement("div", { className: "".concat(drawer_module['magneto-ui-drawer'], " ").concat(drawer_module[fullDrawer], " ").concat(className) },
                React__default["default"].createElement("aside", { className: "".concat(drawer_module[showDrawer]), style: tslib_es6.__assign({ padding: paddingValue }, widthValue) },
                    !hideButton && (React__default["default"].createElement("button", { className: drawer_module['magneto-ui-close-button'], onClick: onClose },
                        React__default["default"].createElement(Icon_component.IconItem, { icon: Add, hover: false }))),
                    children),
                isOpen && (React__default["default"].createElement("span", { className: "".concat(drawer_module[backgroundEffect], " ").concat(backGroundClassName), onClick: blockBackgroundClose ? function () { return null; } : onClose }))))))));
};
/**
 * Molecule UI component for Drawer
 */
var Drawer = Component;

exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.component.js.map
