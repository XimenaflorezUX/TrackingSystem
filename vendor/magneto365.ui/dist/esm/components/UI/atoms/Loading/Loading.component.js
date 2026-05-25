import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import styles from './Loading.modules.scss.js';

var Component = function (_a) {
    var loadingIcon = _a.loadingIcon;
    return (React.createElement("div", { className: styles.loadingComponent },
        React.createElement(IconItem, __assign({}, loadingIcon))));
};
/**
 * Atom UI component of loading icon for general purpose
 */
var Loading = Component;

export { Loading };
//# sourceMappingURL=Loading.component.js.map
