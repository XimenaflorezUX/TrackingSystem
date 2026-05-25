'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateNav_context = require('../../CandidateNav.context.js');
var CandidateNavOption_module = require('./CandidateNavOption.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cs = classNames_util.classNames.bind(CandidateNavOption_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    var onChangeOpen = CandidateNav_context.useCandidateNav().onChangeOpen;
    return (React__default["default"].createElement("li", tslib_es6.__assign({}, props, { className: cs('magneto-ui-candidate-nav-option', className) }), React__default["default"].Children.map(children, function (child) {
        return React__default["default"].isValidElement(child) ? React__default["default"].cloneElement(child, { handleOptionsVisibility: onChangeOpen }) : child;
    })));
};
/**
 * Molecule UI component child of Candidate Nav
 */
var CandidateNavOption = Component;

exports.CandidateNavOption = CandidateNavOption;
//# sourceMappingURL=CandidateNavOption.component.js.map
