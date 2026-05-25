import React, { useEffect } from 'react';
import { ModalPortal } from '../Modal/ModalPortal.component.js';
import styles from './Notification.module.scss.js';
import Close from '../../../../assets/Close.svg.js';

var Notification = function (_a) {
    var onClose = _a.onClose, message = _a.message, _b = _a.position, position = _b === void 0 ? 'top-right' : _b, className = _a.className, _c = _a.autoCloseDuration, autoCloseDuration = _c === void 0 ? 5000 : _c, extraContent = _a.extraContent;
    useEffect(function () {
        if (autoCloseDuration > 0) {
            var timer_1 = setTimeout(onClose, autoCloseDuration);
            return function () { return clearTimeout(timer_1); };
        }
    }, [autoCloseDuration, onClose]);
    return (React.createElement(ModalPortal, null,
        React.createElement("div", { className: "".concat(styles.notification, " ").concat(styles[position], " ").concat(className), role: "alert" },
            React.createElement("div", { className: styles['notification__content'] },
                React.createElement("div", { className: styles['notification__message'] }, message),
                React.createElement("button", { className: styles['notification__close-btn'], onClick: onClose, type: "button", "aria-label": "Close notification" },
                    React.createElement("img", { src: Close, alt: "close icon" }))),
            extraContent && extraContent)));
};

export { Notification as default };
//# sourceMappingURL=Notification.component.js.map
