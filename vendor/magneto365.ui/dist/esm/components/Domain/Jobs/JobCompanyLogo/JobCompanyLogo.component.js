import React from 'react';
import styles from './JobCompanyLogo.module.scss.js';
import NoLogo from '../../../../assets/noLogo.svg.js';

var Component = function (_a) {
    var offerCompanyLogo = _a.offerCompanyLogo, alt = _a.alt;
    if (typeof offerCompanyLogo === 'string' || !offerCompanyLogo) {
        return (React.createElement("div", { className: styles['magneto-ui-job-company-logo'] },
            React.createElement("img", { src: offerCompanyLogo ? offerCompanyLogo : NoLogo, loading: "lazy", width: '100px', height: '100px', alt: alt })));
    }
    return React.createElement("div", { className: styles['magneto-ui-job-company-logo'] }, offerCompanyLogo);
};
/**
 * UI Atom component of Company Logo
 */
var JobCompanyLogo = Component;

export { JobCompanyLogo };
//# sourceMappingURL=JobCompanyLogo.component.js.map
