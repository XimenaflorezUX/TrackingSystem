'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../hooks/useMediaQuery/index.js');
var MobileDrawer_component = require('../MobileDrawer/MobileDrawer.component.js');
var Modal_component = require('../Modal/Modal.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, open = _a.open, onClose = _a.onClose, _b = _a.modalClassName, modalClassName = _b === void 0 ? '' : _b, _c = _a.mobileDrawerClassName, mobileDrawerClassName = _c === void 0 ? '' : _c, _d = _a.backgroundClassNameDesktop, backgroundClassNameDesktop = _d === void 0 ? '' : _d, _e = _a.backgroundClassNameMobile, backgroundClassNameMobile = _e === void 0 ? '' : _e;
    var container = index.useMediaQuery(React__default["default"].createElement(Modal_component, { className: modalClassName, backgroundClassName: backgroundClassNameDesktop, isOpen: open, onClose: onClose }, children), {
        md: (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { backgroundClassName: backgroundClassNameMobile, className: mobileDrawerClassName, isOpen: open, onClose: onClose }, children))
    });
    return container;
};
var ModalResponsive = Component;

exports.ModalResponsive = ModalResponsive;
//# sourceMappingURL=ModalResponsive.component.js.map
