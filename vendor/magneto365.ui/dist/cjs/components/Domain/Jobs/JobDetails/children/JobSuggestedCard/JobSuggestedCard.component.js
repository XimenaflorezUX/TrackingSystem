'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobSuggestedCard_module = require('./JobSuggestedCard.module.scss.js');
var JobSuggestedSection_component = require('./children/JobSuggestedSection/JobSuggestedSection.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("div", { className: "".concat(JobSuggestedCard_module['job-suggested-card'], " ").concat(className || '') }, children);
};
var JobSuggestedCard = Object.assign(Component, {
    Section: JobSuggestedSection_component.JobSuggestedSection
});

exports.JobSuggestedCard = JobSuggestedCard;
//# sourceMappingURL=JobSuggestedCard.component.js.map
