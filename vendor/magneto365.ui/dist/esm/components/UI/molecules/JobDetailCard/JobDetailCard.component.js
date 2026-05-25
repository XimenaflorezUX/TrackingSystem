import React, { Fragment } from 'react';
import styles from './JobDetailCard.modules.scss.js';

var Component = function (_a) {
    var offerDescription = _a.offerDescription;
    return (React.createElement("div", { className: styles['magneto-ui-job-detail-card'] }, offerDescription !== null ? React.createElement("div", { dangerouslySetInnerHTML: { __html: offerDescription } }) : React.createElement(Fragment, null)));
};
/**
 * UI Molecule Component for Job Detail Card Header
 */
var JobDetailCard = Component;

export { JobDetailCard };
//# sourceMappingURL=JobDetailCard.component.js.map
