'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UserTermText_module = require('./UserTermText.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(UserTermText_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("p", { className: cx('user-term-text', className) }, children);
};
var UserTermText = Component;

exports.UserTermText = UserTermText;
//# sourceMappingURL=UserTermText.component.js.map
