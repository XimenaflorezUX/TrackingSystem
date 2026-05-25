'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ApplicationSubTitle_module = require('./ApplicationSubTitle.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ApplicationSubTitle_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("div", { className: cx('subtitle-summary', className) }, children);
};
var ApplicationSubtitle = Component;

exports.ApplicationSubtitle = ApplicationSubtitle;
//# sourceMappingURL=ApplicationSubTitle.component.js.map
