'use strict';

var React = require('react');
var ModalPortal_component = require('../Modal/ModalPortal.component.js');
var Notification_module = require('./Notification.module.scss.js');
var Close = require('../../../../assets/Close.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Notification = function (_a) {
    var onClose = _a.onClose, message = _a.message, _b = _a.position, position = _b === void 0 ? 'top-right' : _b, className = _a.className, _c = _a.autoCloseDuration, autoCloseDuration = _c === void 0 ? 5000 : _c, extraContent = _a.extraContent;
    React.useEffect(function () {
        if (autoCloseDuration > 0) {
            var timer_1 = setTimeout(onClose, autoCloseDuration);
            return function () { return clearTimeout(timer_1); };
        }
    }, [autoCloseDuration, onClose]);
    return (React__default["default"].createElement(ModalPortal_component.ModalPortal, null,
        React__default["default"].createElement("div", { className: "".concat(Notification_module.notification, " ").concat(Notification_module[position], " ").concat(className), role: "alert" },
            React__default["default"].createElement("div", { className: Notification_module['notification__content'] },
                React__default["default"].createElement("div", { className: Notification_module['notification__message'] }, message),
                React__default["default"].createElement("button", { className: Notification_module['notification__close-btn'], onClick: onClose, type: "button", "aria-label": "Close notification" },
                    React__default["default"].createElement("img", { src: Close, alt: "close icon" }))),
            extraContent && extraContent)));
};

module.exports = Notification;
//# sourceMappingURL=Notification.component.js.map
