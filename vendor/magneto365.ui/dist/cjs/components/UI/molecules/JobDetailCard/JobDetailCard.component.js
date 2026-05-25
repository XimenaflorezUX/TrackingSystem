'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobDetailCard_modules = require('./JobDetailCard.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var offerDescription = _a.offerDescription;
    return (React__default["default"].createElement("div", { className: JobDetailCard_modules['magneto-ui-job-detail-card'] }, offerDescription !== null ? React__default["default"].createElement("div", { dangerouslySetInnerHTML: { __html: offerDescription } }) : React__default["default"].createElement(React.Fragment, null)));
};
/**
 * UI Molecule Component for Job Detail Card Header
 */
var JobDetailCard = Component;

exports.JobDetailCard = JobDetailCard;
//# sourceMappingURL=JobDetailCard.component.js.map
