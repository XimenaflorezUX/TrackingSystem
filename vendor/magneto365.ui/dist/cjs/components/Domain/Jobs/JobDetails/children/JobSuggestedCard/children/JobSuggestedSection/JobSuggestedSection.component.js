'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobSuggestedSection_module = require('./JobSuggestedSection.module.scss.js');
var classNames_util = require('../../../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobSuggestedSection_module);
var Component = function (_a) {
    var _b = _a.aligned, aligned = _b === void 0 ? 'start' : _b, className = _a.className, children = _a.children, _c = _a.direction, direction = _c === void 0 ? 'row' : _c;
    return React__default["default"].createElement("div", { className: cx('section', aligned, direction, className) }, children);
};
var JobSuggestedSection = Component;

exports.JobSuggestedSection = JobSuggestedSection;
//# sourceMappingURL=JobSuggestedSection.component.js.map
