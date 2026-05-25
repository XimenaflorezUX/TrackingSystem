import React from 'react';
import styles from './DotsLoader.module.scss.js';

var Component = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 3 : _b, _c = _a.color, color = _c === void 0 ? '#000' : _c;
    return (React.createElement("div", { className: styles['dots-loader'] }, Array.from({ length: count }).map(function (_, index) { return (React.createElement("span", { key: index, className: styles['dots-loader__dot'], style: { animationDelay: "".concat(index * 0.2, "s"), backgroundColor: color } })); })));
};
var DotsLoader = Component;

export { DotsLoader };
//# sourceMappingURL=DotsLoader.component.js.map
