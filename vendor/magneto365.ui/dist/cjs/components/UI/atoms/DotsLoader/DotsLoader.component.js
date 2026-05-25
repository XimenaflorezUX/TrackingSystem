'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DotsLoader_module = require('./DotsLoader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 3 : _b, _c = _a.color, color = _c === void 0 ? '#000' : _c;
    return (React__default["default"].createElement("div", { className: DotsLoader_module['dots-loader'] }, Array.from({ length: count }).map(function (_, index) { return (React__default["default"].createElement("span", { key: index, className: DotsLoader_module['dots-loader__dot'], style: { animationDelay: "".concat(index * 0.2, "s"), backgroundColor: color } })); })));
};
var DotsLoader = Component;

exports.DotsLoader = DotsLoader;
//# sourceMappingURL=DotsLoader.component.js.map
