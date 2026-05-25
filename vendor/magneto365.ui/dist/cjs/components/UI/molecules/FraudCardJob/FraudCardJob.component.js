'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var warning3d = require('../../../../assets/warning-3d.svg.js');
var warningHex = require('../../../../assets/warning-hex.svg.js');
var FraudCardJob_module = require('./FraudCardJob.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var title = _a.title, content = _a.content, linkText = _a.linkText, link = _a.link;
    return (React__default["default"].createElement("div", { className: FraudCardJob_module['fraud-card-job'] },
        React__default["default"].createElement("div", { className: FraudCardJob_module['fraud-card-job__header'] },
            React__default["default"].createElement("img", { src: warning3d, alt: "warning" }),
            React__default["default"].createElement("p", null, title)),
        React__default["default"].createElement("div", null,
            React__default["default"].createElement("p", { className: FraudCardJob_module['fraud-card-job__text'] }, content),
            React__default["default"].createElement("a", { target: "_blank", rel: "noreferrer", className: FraudCardJob_module['fraud-card-job__link'], href: link },
                React__default["default"].createElement("img", { src: warningHex, alt: "warning" }),
                linkText))));
};
var FraudCardJob = Component;

exports.FraudCardJob = FraudCardJob;
//# sourceMappingURL=FraudCardJob.component.js.map
