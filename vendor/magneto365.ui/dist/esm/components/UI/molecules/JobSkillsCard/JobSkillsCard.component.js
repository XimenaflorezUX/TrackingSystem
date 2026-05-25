import React, { Fragment } from 'react';
import { Skill } from '../../atoms/Skill/Skill.component.js';
import styles from './JobSkillsCard.module.scss.js';

var Component = function (_a) {
    var offerSkillsLabel = _a.offerSkillsLabel, offerSkills = _a.offerSkills;
    return (React.createElement(Fragment, null, offerSkills && offerSkills.length >= 1 && (React.createElement("div", { className: styles['magneto-ui-job-skills-card'] },
        React.createElement("p", null, offerSkillsLabel),
        React.createElement("div", { className: styles['magneto-ui-job-skills-card__skills-wrapper'] }, offerSkills === null || offerSkills === void 0 ? void 0 : offerSkills.map(function (_a, id) {
            var name = _a.name, score = _a.score;
            return (React.createElement(React.Fragment, { key: "".concat(id, "-JobSkillsCard") },
                React.createElement(Skill, { name: name, score: score })));
        }))))));
};
/**
 * UI Molecule component of Job Skills Card
 */
var JobSkillsCard = Component;

export { JobSkillsCard };
//# sourceMappingURL=JobSkillsCard.component.js.map
