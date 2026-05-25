import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback } from 'react';
import { MegaMenuProvider } from './MegaMenu.context.js';
import { MegaMenuMainHeader } from '../../organism/MegaMenuMainHeader/MegaMenuMainHeader.component.js';
import styles from './MegaMenu.module.scss.js';
import { MegaMenuDrawer } from '../../organism/MegaMenuDrawer/MegaMenuDrawer.component.js';

var Component = function (_a) {
    var socialHeaderVariantProps = _a.socialHeaderVariantProps, renderHeaderUserMenu = _a.renderHeaderUserMenu, props = __rest(_a, ["socialHeaderVariantProps", "renderHeaderUserMenu"]);
    var _b = useState(false), showDrawer = _b[0], setShowDrawer = _b[1];
    var toogleDrawer = useCallback(function () {
        setShowDrawer(!showDrawer);
    }, [showDrawer]);
    return (React.createElement(MegaMenuProvider, __assign({}, props),
        React.createElement("header", { className: styles['mega-menu'] },
            React.createElement("div", { className: styles['mega-menu__main-header'] },
                React.createElement(MegaMenuMainHeader, { toggleDrawerMenu: toogleDrawer, renderHeaderUserMenu: renderHeaderUserMenu }),
                React.createElement(MegaMenuDrawer, { isOpen: showDrawer, onClose: toogleDrawer, socialHeaderVariantProps: socialHeaderVariantProps })))));
};
var MegaMenuMobile = Component;

export { MegaMenuMobile };
//# sourceMappingURL=MegaMenuMobile.component.js.map
