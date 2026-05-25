'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Badge_modules = require('./Badge.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.number, number = _b === void 0 ? undefined : _b, className = _a.className;
    return (React__default["default"].createElement("p", { className: "".concat(Badge_modules['badge-count'], " ").concat(className) },
        React__default["default"].createElement("span", { className: Badge_modules['badge-count__animation'] }),
        number && number));
};
var Badge = Component;

exports.Badge = Badge;
//# sourceMappingURL=Badge.component.js.map
