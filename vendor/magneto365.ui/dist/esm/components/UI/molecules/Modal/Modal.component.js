import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useEffect } from 'react';
import Close from '../../../../assets/Close.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './Modal.module.scss.js';
import { ModalPortal } from './ModalPortal.component.js';

var Modal = function (_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen, children = _a.children, title = _a.title, description = _a.description, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.blockBackgroundClose, blockBackgroundClose = _c === void 0 ? false : _c, _d = _a.backgroundClassName, backgroundClassName = _d === void 0 ? '' : _d;
    useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = isOpen ? 'hidden' : 'auto';
        return function () {
            body.style.overflowY = 'auto';
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (React.createElement(ModalPortal, null,
        React.createElement("div", { className: "".concat(styles["".concat(classMUI, "-modal")], " ").concat(className) },
            title ? React.createElement("h2", { className: "".concat(styles["".concat(classMUI, "-modal__title")]) }, title) : null,
            description ? React.createElement("p", { className: "".concat(styles["".concat(classMUI, "-modal__description")]) }, description) : null,
            children,
            React.createElement("button", { "data-name": "close-drawer", className: "".concat(styles["".concat(classMUI, "-modal__close-btn")]), onClick: onClose, type: "button" },
                React.createElement("img", { src: Close, alt: "close icon" }))),
        React.createElement("span", { className: "".concat(styles["".concat(classMUI, "-background-modal")], " ").concat(backgroundClassName), onClick: blockBackgroundClose ? function () { return null; } : onClose })));
};
var Title = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("h2", __assign({ className: "".concat(styles["".concat(classMUI, "-modal__title")], " ").concat(className) }, props), children));
};
var Description = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement("p", __assign({ className: "".concat(styles["".concat(classMUI, "-modal__description")], " ").concat(className) }, props), children));
};
var Modal$1 = Object.assign(Modal, { Title: Title, Description: Description });

export { Modal$1 as default };
//# sourceMappingURL=Modal.component.js.map
