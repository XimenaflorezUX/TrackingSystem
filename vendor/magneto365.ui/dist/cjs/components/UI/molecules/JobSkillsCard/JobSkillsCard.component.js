'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Skill_component = require('../../atoms/Skill/Skill.component.js');
var JobSkillsCard_module = require('./JobSkillsCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var offerSkillsLabel = _a.offerSkillsLabel, offerSkills = _a.offerSkills;
    return (React__default["default"].createElement(React.Fragment, null, offerSkills && offerSkills.length >= 1 && (React__default["default"].createElement("div", { className: JobSkillsCard_module['magneto-ui-job-skills-card'] },
        React__default["default"].createElement("p", null, offerSkillsLabel),
        React__default["default"].createElement("div", { className: JobSkillsCard_module['magneto-ui-job-skills-card__skills-wrapper'] }, offerSkills === null || offerSkills === void 0 ? void 0 : offerSkills.map(function (_a, id) {
            var name = _a.name, score = _a.score;
            return (React__default["default"].createElement(React__default["default"].Fragment, { key: "".concat(id, "-JobSkillsCard") },
                React__default["default"].createElement(Skill_component.Skill, { name: name, score: score })));
        }))))));
};
/**
 * UI Molecule component of Job Skills Card
 */
var JobSkillsCard = Component;

exports.JobSkillsCard = JobSkillsCard;
//# sourceMappingURL=JobSkillsCard.component.js.map
