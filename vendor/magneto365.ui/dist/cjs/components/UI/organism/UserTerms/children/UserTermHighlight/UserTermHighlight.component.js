'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var UserTermHighlight_module = require('./UserTermHighlight.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(UserTermHighlight_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("h4", { className: cx('user-term-highlight', className) }, children);
};
var UserTermHighlight = Component;

exports.UserTermHighlight = UserTermHighlight;
//# sourceMappingURL=UserTermHighlight.component.js.map
