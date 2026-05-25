import React from 'react';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
import styles from './MenuDropdownList.module.scss.js';

var Component = function (_a) {
    var children = _a.children, listClassName = _a.listClassName, opened = _a.opened;
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['menu-dropdown-list', opened && 'menu-dropdown-list--visible'] }) },
        React.createElement("div", { className: CNM.get({
                styles: styles,
                cls: ['menu-dropdown-list__container', opened && 'menu-dropdown-list__container--visible']
            }) },
            React.createElement("div", { className: CNM.get({
                    styles: styles,
                    cls: ['menu-dropdown-list__children', opened && 'menu-dropdown-list__children--visible', listClassName]
                }) }, children))));
};
/**
 * Atom UI child component of menu dropdown
 */
var MenuDropdownList = Component;

export { MenuDropdownList };
//# sourceMappingURL=MenuDropdownList.component.js.map
