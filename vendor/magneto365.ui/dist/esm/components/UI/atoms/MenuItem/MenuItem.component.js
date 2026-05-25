import React from 'react';
import style from './menuItems.module.scss.js';
import { IconItem } from '../Icon/Icon.component.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';

var MenuItem = function (_a) {
    var _b = _a.url, url = _b === void 0 ? '#' : _b, _c = _a.text, text = _c === void 0 ? '' : _c, isActive = _a.isActive;
    var menuActive = isActive ? style['is-active'] : '';
    return (React.createElement("div", null,
        React.createElement("a", { href: url, className: "".concat(style['magneto-ui-menu-item'], " ").concat(menuActive) },
            React.createElement(IconItem, { icon: ArrowRight2, hover: false }),
            React.createElement("p", null, text))));
};

export { MenuItem as default };
//# sourceMappingURL=MenuItem.component.js.map
