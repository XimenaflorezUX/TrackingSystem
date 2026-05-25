'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Close = require('../../../../assets/Close.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var Modal_module = require('./Modal.module.scss.js');
var ModalPortal_component = require('./ModalPortal.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Modal = function (_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen, children = _a.children, title = _a.title, description = _a.description, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.blockBackgroundClose, blockBackgroundClose = _c === void 0 ? false : _c, _d = _a.backgroundClassName, backgroundClassName = _d === void 0 ? '' : _d;
    React.useEffect(function () {
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
    return (React__default["default"].createElement(ModalPortal_component.ModalPortal, null,
        React__default["default"].createElement("div", { className: "".concat(Modal_module["".concat(common_constants.classMUI, "-modal")], " ").concat(className) },
            title ? React__default["default"].createElement("h2", { className: "".concat(Modal_module["".concat(common_constants.classMUI, "-modal__title")]) }, title) : null,
            description ? React__default["default"].createElement("p", { className: "".concat(Modal_module["".concat(common_constants.classMUI, "-modal__description")]) }, description) : null,
            children,
            React__default["default"].createElement("button", { "data-name": "close-drawer", className: "".concat(Modal_module["".concat(common_constants.classMUI, "-modal__close-btn")]), onClick: onClose, type: "button" },
                React__default["default"].createElement("img", { src: Close, alt: "close icon" }))),
        React__default["default"].createElement("span", { className: "".concat(Modal_module["".concat(common_constants.classMUI, "-background-modal")], " ").concat(backgroundClassName), onClick: blockBackgroundClose ? function () { return null; } : onClose })));
};
var Title = function (_a) {
    var className = _a.className, children = _a.children, props = tslib_es6.__rest(_a, ["className", "children"]);
    return (React__default["default"].createElement("h2", tslib_es6.__assign({ className: "".concat(Modal_module["".concat(common_constants.classMUI, "-modal__title")], " ").concat(className) }, props), children));
};
var Description = function (_a) {
    var className = _a.className, children = _a.children, props = tslib_es6.__rest(_a, ["className", "children"]);
    return (React__default["default"].createElement("p", tslib_es6.__assign({ className: "".concat(Modal_module["".concat(common_constants.classMUI, "-modal__description")], " ").concat(className) }, props), children));
};
var Modal$1 = Object.assign(Modal, { Title: Title, Description: Description });

module.exports = Modal$1;
//# sourceMappingURL=Modal.component.js.map
