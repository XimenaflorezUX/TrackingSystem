'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ApplicationTitle_module = require('./ApplicationTitle.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ApplicationTitle_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("div", { className: cx('title-summary', className) }, children);
};
var ApplicationTitle = Component;

exports.ApplicationTitle = ApplicationTitle;
//# sourceMappingURL=ApplicationTitle.component.js.map
