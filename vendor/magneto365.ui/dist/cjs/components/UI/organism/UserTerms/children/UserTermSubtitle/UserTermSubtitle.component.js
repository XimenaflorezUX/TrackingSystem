'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UserTermSubtitle_module = require('./UserTermSubtitle.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(UserTermSubtitle_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("h3", { className: cx('user-term-subtitle', className) }, children);
};
var UserTermSubTitle = Component;

exports.UserTermSubTitle = UserTermSubTitle;
//# sourceMappingURL=UserTermSubtitle.component.js.map
