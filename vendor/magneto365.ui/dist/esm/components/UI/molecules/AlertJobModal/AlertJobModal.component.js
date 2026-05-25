import React from 'react';
import styles from './AlertJobModal.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { AlertJobModalIcon } from './children/AlertJobModalIcon/AlertJobModalIcon.component.js';
import { AlertJobModalHeader } from './children/AlertJobModalHeader/AlertJobModalHeader.component.js';
import { AlertJobModalTitle } from './children/AlertJobModalTitle/AlertJobModalTitle.component.js';
import { AlertJobModalBody } from './children/AlertJobModalBody/AlertJobModalBody.component.js';
import { AlertJobModalFooter } from './children/AlertJobModalFooter/AlertJobModalFooter.component.js';
import { AlertJobModalButton } from './children/AlertJobModalButton/AlertJobModalButton.component.js';
import { ModalResponsive } from '../ModalResponsive/ModalResponsive.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, className = _a.className, mobileClassName = _a.mobileClassName, open = _a.open, onClose = _a.onClose;
    return (React.createElement(ModalResponsive, { open: open, onClose: onClose, modalClassName: cx('alert-modal', className), mobileDrawerClassName: cx('alert-modal__mobile', mobileClassName) }, children));
};
var AlertJobModal = Object.assign(Component, {
    Header: AlertJobModalHeader,
    Body: AlertJobModalBody,
    Footer: AlertJobModalFooter,
    Title: AlertJobModalTitle,
    Icon: AlertJobModalIcon,
    Button: AlertJobModalButton
});

export { AlertJobModal };
//# sourceMappingURL=AlertJobModal.component.js.map
