'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertJobModal_module = require('./AlertJobModal.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var AlertJobModalIcon_component = require('./children/AlertJobModalIcon/AlertJobModalIcon.component.js');
var AlertJobModalHeader_component = require('./children/AlertJobModalHeader/AlertJobModalHeader.component.js');
var AlertJobModalTitle_component = require('./children/AlertJobModalTitle/AlertJobModalTitle.component.js');
var AlertJobModalBody_component = require('./children/AlertJobModalBody/AlertJobModalBody.component.js');
var AlertJobModalFooter_component = require('./children/AlertJobModalFooter/AlertJobModalFooter.component.js');
var AlertJobModalButton_component = require('./children/AlertJobModalButton/AlertJobModalButton.component.js');
var ModalResponsive_component = require('../ModalResponsive/ModalResponsive.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobModal_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, mobileClassName = _a.mobileClassName, open = _a.open, onClose = _a.onClose;
    return (React__default["default"].createElement(ModalResponsive_component.ModalResponsive, { open: open, onClose: onClose, modalClassName: cx('alert-modal', className), mobileDrawerClassName: cx('alert-modal__mobile', mobileClassName) }, children));
};
var AlertJobModal = Object.assign(Component, {
    Header: AlertJobModalHeader_component.AlertJobModalHeader,
    Body: AlertJobModalBody_component.AlertJobModalBody,
    Footer: AlertJobModalFooter_component.AlertJobModalFooter,
    Title: AlertJobModalTitle_component.AlertJobModalTitle,
    Icon: AlertJobModalIcon_component.AlertJobModalIcon,
    Button: AlertJobModalButton_component.AlertJobModalButton
});

exports.AlertJobModal = AlertJobModal;
//# sourceMappingURL=AlertJobModal.component.js.map
