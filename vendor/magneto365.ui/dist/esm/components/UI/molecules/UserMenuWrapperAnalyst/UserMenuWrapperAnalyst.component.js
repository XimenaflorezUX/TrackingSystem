import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
import { UserMenuWrapperAnalystDropdown } from './children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import { UserMenuWrapperAnalystModal } from './children/UserMenuWrapperAnalystModal/UserMenuWrapperAnalystModal.component.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var props = __rest(_a, []);
    var _b = useState(false), visible = _b[0], setVisible = _b[1];
    useEffect(function () {
        var handleResize = function () {
            if (visible) {
                setVisible(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, [visible]);
    var container = useMediaQuery(React.createElement(UserMenuWrapperAnalystDropdown, __assign({ handleMenuOpen: setVisible }, props)), {
        sm: React.createElement(UserMenuWrapperAnalystModal, __assign({}, props, { clickOut: visible, handleMenuOpen: setVisible, setClickOut: function () { return setVisible(!visible); } }))
    });
    return container;
};
/**
 * Molecule UI component for user menu wrapper analyst
 */
var UserMenuWrapperAnalyst = Component;

export { UserMenuWrapperAnalyst };
//# sourceMappingURL=UserMenuWrapperAnalyst.component.js.map
