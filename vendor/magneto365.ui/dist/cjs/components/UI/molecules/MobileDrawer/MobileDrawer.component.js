'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Add = require('../../../../assets/Add.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
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
var DrawerPortal = require('../Drawer/DrawerPortal.js');
var mobileDrawer_module = require('./mobileDrawer.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(mobileDrawer_module);
var Component = function (_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.blockBackgroundClose, blockBackgroundClose = _c === void 0 ? false : _c, _d = _a.backgroundClassName, backgroundClassName = _d === void 0 ? '' : _d;
    var _e = React.useState(false), showContent = _e[0], setShowContent = _e[1];
    var _f = React.useState(isOpen), renderPortal = _f[0], setRenderPortal = _f[1];
    var showMenu = showContent ? 'show' : 'hidden';
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null, renderPortal && (React__default["default"].createElement(DrawerPortal.DrawerPortal, null,
        React__default["default"].createElement("div", { className: cx('magneto-ui-mobile-drawer') },
            React__default["default"].createElement("aside", { className: cx(showMenu, className) },
                React__default["default"].createElement("button", { "data-name": "close-drawer", title: "close-modal", className: cx('magneto-ui-close-button'), onClick: onClose },
                    React__default["default"].createElement(Icon_component.IconItem, { icon: Add, hover: false })),
                React__default["default"].createElement("div", { className: cx('magneto-ui-container') }, children)),
            isOpen && (React__default["default"].createElement("span", { className: cx('background-drawer', backgroundClassName), onClick: blockBackgroundClose ? function () { return null; } : onClose })))))));
};
/**
 * Molecule UI component for Mobile Drawer
 */
var MobileDrawer = Component;

exports.MobileDrawer = MobileDrawer;
//# sourceMappingURL=MobileDrawer.component.js.map
