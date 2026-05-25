'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateNavStep_module = require('./CandidateNavStep.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cs = classNames_util.classNames.bind(CandidateNavStep_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({}, props, { className: cs('magneto-ui-candidate-nav-step', className) }), children));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavStep = Component;

exports.CandidateNavStep = CandidateNavStep;
//# sourceMappingURL=CandidateNavStep.component.js.map
