import React from 'react';
import { UserMenuAnalystOptionDefault } from '../UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import CNM from '../../../../../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './UserMenuAnalystOptionHover.module.scss.js';

var Component = function (_a) {
    var className = _a.className, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, option = _a.option, prefix = _a.prefix, suffix = _a.suffix, url = _a.url;
    return (React.createElement("span", { className: CNM.get({
            styles: styles,
            cls: [className, 'user-menu-analyst-option-hover']
        }) },
        prefix,
        React.createElement(UserMenuAnalystOptionDefault, { className: CNM.get({ styles: styles, cls: ['user-menu-analyst-option-hover__default'] }), handleMenuOpen: handleMenuOpen, handleModal: handleModal, option: option, url: url }),
        suffix));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionHover = React.memo(Component);

export { UserMenuAnalystOptionHover };
//# sourceMappingURL=UserMenuAnalystOptionHover.component.js.map
