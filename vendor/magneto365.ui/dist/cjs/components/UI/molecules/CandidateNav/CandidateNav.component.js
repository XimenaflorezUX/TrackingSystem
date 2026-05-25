'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateNavButton_component = require('./children/CandidateNavButton/CandidateNavButton.component.js');
require('./children/CandidateNavButton/CandidateNavButton.interface.js');
var CandidateNavOption_component = require('./children/CandidateNavOption/CandidateNavOption.component.js');
var CandidateNavOptions_component = require('./children/CandidateNavOptions/CandidateNavOptions.component.js');
var CandidateNavStep_component = require('./children/CandidateNavStep/CandidateNavStep.component.js');
var CandidateNav_context = require('./CandidateNav.context.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var CandidateNav_module = require('./CandidateNav.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cs = classNames_util.classNames.bind(CandidateNav_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    return (React__default["default"].createElement(CandidateNav_context.Provider, null,
        React__default["default"].createElement("div", tslib_es6.__assign({ className: cs('magneto-ui-candidate-nav', className) }, props), children)));
};
/**
 *  Molecule UI component of Candidate Nav
 */
var CandidateNav = Object.assign(Component, tslib_es6.__assign({ Button: CandidateNavButton_component.CandidateNavButton, Option: CandidateNavOption_component.CandidateNavOption, Options: CandidateNavOptions_component.CandidateNavOptions, Step: CandidateNavStep_component.CandidateNavStep }, CandidateNav_context));

exports.CandidateNav = CandidateNav;
//# sourceMappingURL=CandidateNav.component.js.map
