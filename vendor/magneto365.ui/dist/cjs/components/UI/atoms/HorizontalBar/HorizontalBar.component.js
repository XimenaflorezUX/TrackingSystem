'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var HorizontalBar_module = require('./HorizontalBar.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var value = _a.value, _b = _a.maxPercentage, maxPercentage = _b === void 0 ? 10 : _b, classNames = _a.classNames, text = _a.text;
    var percentage = (value / maxPercentage) * 100;
    var isBarTooSmall = percentage < maxPercentage / 10;
    return (React__default["default"].createElement("div", { className: "".concat(HorizontalBar_module['magneto-ui-horizontal-bar'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.bar) },
        React__default["default"].createElement("p", { className: "".concat(HorizontalBar_module['magneto-ui-horizontal-bar__bar-text'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.text) }, text),
        React__default["default"].createElement("div", { className: "".concat(HorizontalBar_module['magneto-ui-horizontal-bar__container'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.container) },
            React__default["default"].createElement("div", { className: "".concat(HorizontalBar_module['magneto-ui-horizontal-bar__fill'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.fill), style: {
                    width: "".concat(percentage, "%")
                } }, !isBarTooSmall && (React__default["default"].createElement("div", { className: "".concat(HorizontalBar_module['magneto-ui-horizontal-bar__value'], " ").concat(classNames === null || classNames === void 0 ? void 0 : classNames.value) }, value))))));
};
var HorizontalBar = Component;

exports.HorizontalBar = HorizontalBar;
//# sourceMappingURL=HorizontalBar.component.js.map
