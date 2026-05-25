'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ApplicationButton_module = require('./ApplicationButton.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ApplicationButton_module);
var Component = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, props = tslib_es6.__rest(_a, ["className", "children", "variant"]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, props, { className: cx('button-summary', variant, className) }), children));
};
var ApplicationButton = Component;

exports.ApplicationButton = ApplicationButton;
//# sourceMappingURL=ApplicationButton.component.js.map
