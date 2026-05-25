'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Skill_module = require('./Skill.module.scss.js');
var Typography_component = require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Skill_module);
var Component = function (_a) {
    var name = _a.name, score = _a.score, className = _a.className, _b = _a.classNames, classNames = _b === void 0 ? {} : _b;
    return (React__default["default"].createElement("div", { className: cx('skill', className) },
        React__default["default"].createElement(Typography_component.Typography.Text, { className: cx('skill__name', classNames.name) }, name),
        React__default["default"].createElement("div", { className: cx('skill__level', classNames.level) },
            React__default["default"].createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 1 }) }),
            React__default["default"].createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 2 }) }),
            React__default["default"].createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 3 }) }),
            React__default["default"].createElement("div", { className: cx('skill__circle', classNames.circle, { 'skill__circle--filled': score >= 4 }) }))));
};
var Skill = Component;

exports.Skill = Skill;
//# sourceMappingURL=Skill.component.js.map
