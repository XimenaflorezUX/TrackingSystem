'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CategoryGrid_module = require('./CategoryGrid.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CategoryGrid = function (_a) {
    var elements = _a.elements, Component = _a.render, _b = _a.columnsNumber, columnsNumber = _b === void 0 ? 2 : _b, fullWidth = _a.fullWidth;
    var uiClass = 'magneto-ui-category-grid-wrapper';
    var isFullWidth = fullWidth ? CategoryGrid_module["".concat(uiClass, "--disabled-padding")] : CategoryGrid_module["".concat(uiClass, "--padding")];
    var gridStyle = {
        gridTemplateColumns: "repeat(".concat(columnsNumber, ", minmax(300px, 1fr))")
    };
    return (React__default["default"].createElement("div", { className: "".concat(CategoryGrid_module[uiClass], " ").concat(isFullWidth), style: gridStyle }, elements.map(function (props, key) { return (React__default["default"].createElement(Component, tslib_es6.__assign({ key: key }, props))); })));
};

module.exports = CategoryGrid;
//# sourceMappingURL=CategoryGrid.component.js.map
