import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import style from './CategoryGrid.module.scss.js';

var CategoryGrid = function (_a) {
    var elements = _a.elements, Component = _a.render, _b = _a.columnsNumber, columnsNumber = _b === void 0 ? 2 : _b, fullWidth = _a.fullWidth;
    var uiClass = 'magneto-ui-category-grid-wrapper';
    var isFullWidth = fullWidth ? style["".concat(uiClass, "--disabled-padding")] : style["".concat(uiClass, "--padding")];
    var gridStyle = {
        gridTemplateColumns: "repeat(".concat(columnsNumber, ", minmax(300px, 1fr))")
    };
    return (React.createElement("div", { className: "".concat(style[uiClass], " ").concat(isFullWidth), style: gridStyle }, elements.map(function (props, key) { return (React.createElement(Component, __assign({ key: key }, props))); })));
};

export { CategoryGrid as default };
//# sourceMappingURL=CategoryGrid.component.js.map
