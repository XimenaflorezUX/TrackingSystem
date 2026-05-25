import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import style from './listIconLink.module.scss.js';

var Component = function (_a) {
    var listIcon = _a.listIcon, size = _a.size, _b = _a.hover, hover = _b === void 0 ? true : _b, spacing = _a.spacing, _c = _a.className, className = _c === void 0 ? '' : _c;
    return (React.createElement("div", { style: { gap: "".concat(spacing, "px") }, className: "".concat(style['magneto-ui-list-icon'], " ").concat(className) }, listIcon.map(function (_a, index) {
        var icon = _a.icon, url = _a.url, title = _a.title;
        return url && (React.createElement("a", { key: index, href: url, target: "_blank", rel: "noopener noreferrer" },
            React.createElement(IconItem, { alt: title, hover: hover, size: size, icon: icon })));
    })));
};
var ListIconLink = Component;

export { ListIconLink };
//# sourceMappingURL=ListIconLink.component.js.map
