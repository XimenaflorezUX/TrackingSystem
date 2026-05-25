import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { DrawerMenu } from '../../organism/DrawerMenu/DrawerMenu.component.js';
import { LogoutHeader } from '../../organism/LogoutHeader/LogoutHeader.component.js';

var Component = function (_a) {
    var logoutHeaderProps = _a.logoutHeaderProps, headerDrawerMenuProps = _a.headerDrawerMenuProps;
    var _b = useState(false), toggleModal = _b[0], setToggleModal = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(LogoutHeader, __assign({}, logoutHeaderProps, { onMenuClick: function () { return setToggleModal(true); } })),
        React.createElement(DrawerMenu, __assign({}, headerDrawerMenuProps, { isOpen: toggleModal, onClose: function () { return setToggleModal(false); } }))));
};
var LogoutTemplate = Component;

export { LogoutTemplate };
//# sourceMappingURL=LogoutTemplate.component.js.map
