'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobApplyCard_module = require('./JobApplyCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var offerApplyHeader = _a.offerApplyHeader, offerApplyElements = _a.offerApplyElements;
    return (React__default["default"].createElement("div", { className: JobApplyCard_module['magneto-ui-job-apply-card'] },
        React__default["default"].createElement("div", { className: JobApplyCard_module['magneto-ui-job-apply-card__wrapper'] },
            React__default["default"].createElement("div", { className: JobApplyCard_module['magneto-ui-job-apply-card__header'] },
                React__default["default"].createElement("p", null, offerApplyHeader),
                (offerApplyElements === null || offerApplyElements === void 0 ? void 0 : offerApplyElements.length) &&
                    offerApplyElements
                        .filter(function (_a) {
                        var offerApplyInfo = _a.offerApplyInfo;
                        return !!offerApplyInfo;
                    })
                        .map(function (_a) {
                        var offerApplyLabel = _a.offerApplyLabel, offerApplyInfo = _a.offerApplyInfo;
                        return (React__default["default"].createElement("div", { className: JobApplyCard_module['magneto-ui-job-apply-card__requirements'], key: "".concat(offerApplyLabel, "-JobApplyCard") },
                            React__default["default"].createElement("p", null, offerApplyLabel),
                            React__default["default"].createElement("p", null, offerApplyInfo)));
                    })))));
};
/**
 * UI Molecule Component for Job Apply Card
 */
var JobApplyCard = Component;

exports.JobApplyCard = JobApplyCard;
//# sourceMappingURL=JobApplyCard.component.js.map
