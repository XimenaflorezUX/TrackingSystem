'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ApplicationSection_module = require('./ApplicationSection.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ApplicationSection_module);
var Component = function (_a) {
    var _b = _a.aligned, aligned = _b === void 0 ? 'start' : _b, className = _a.className, children = _a.children;
    return React__default["default"].createElement("div", { className: cx('section-summary', aligned, className) }, children);
};
var ApplicationSection = Component;

exports.ApplicationSection = ApplicationSection;
//# sourceMappingURL=ApplicationSection.component.js.map
