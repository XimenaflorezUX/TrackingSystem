import React from 'react';
import styles from './JobSuggestedCard.module.scss.js';
import { JobSuggestedSection } from './children/JobSuggestedSection/JobSuggestedSection.component.js';

var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: "".concat(styles['job-suggested-card'], " ").concat(className || '') }, children);
};
var JobSuggestedCard = Object.assign(Component, {
    Section: JobSuggestedSection
});

export { JobSuggestedCard };
//# sourceMappingURL=JobSuggestedCard.component.js.map
