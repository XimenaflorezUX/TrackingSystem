import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { MobileDrawer } from '../MobileDrawer/MobileDrawer.component.js';
import Modal from '../Modal/Modal.component.js';

var Component = function (_a) {
    var children = _a.children, open = _a.open, onClose = _a.onClose, _b = _a.modalClassName, modalClassName = _b === void 0 ? '' : _b, _c = _a.mobileDrawerClassName, mobileDrawerClassName = _c === void 0 ? '' : _c, _d = _a.backgroundClassNameDesktop, backgroundClassNameDesktop = _d === void 0 ? '' : _d, _e = _a.backgroundClassNameMobile, backgroundClassNameMobile = _e === void 0 ? '' : _e;
    var container = useMediaQuery(React.createElement(Modal, { className: modalClassName, backgroundClassName: backgroundClassNameDesktop, isOpen: open, onClose: onClose }, children), {
        md: (React.createElement(MobileDrawer, { backgroundClassName: backgroundClassNameMobile, className: mobileDrawerClassName, isOpen: open, onClose: onClose }, children))
    });
    return container;
};
var ModalResponsive = Component;

export { ModalResponsive };
//# sourceMappingURL=ModalResponsive.component.js.map
