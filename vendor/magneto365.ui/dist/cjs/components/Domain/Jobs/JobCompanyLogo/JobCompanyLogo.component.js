'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobCompanyLogo_module = require('./JobCompanyLogo.module.scss.js');
var noLogo = require('../../../../assets/noLogo.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var offerCompanyLogo = _a.offerCompanyLogo, alt = _a.alt;
    if (typeof offerCompanyLogo === 'string' || !offerCompanyLogo) {
        return (React__default["default"].createElement("div", { className: JobCompanyLogo_module['magneto-ui-job-company-logo'] },
            React__default["default"].createElement("img", { src: offerCompanyLogo ? offerCompanyLogo : noLogo, loading: "lazy", width: '100px', height: '100px', alt: alt })));
    }
    return React__default["default"].createElement("div", { className: JobCompanyLogo_module['magneto-ui-job-company-logo'] }, offerCompanyLogo);
};
/**
 * UI Atom component of Company Logo
 */
var JobCompanyLogo = Component;

exports.JobCompanyLogo = JobCompanyLogo;
//# sourceMappingURL=JobCompanyLogo.component.js.map
