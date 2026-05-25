import React from 'react';
import styles from './JobApplyCard.module.scss.js';

var Component = function (_a) {
    var offerApplyHeader = _a.offerApplyHeader, offerApplyElements = _a.offerApplyElements;
    return (React.createElement("div", { className: styles['magneto-ui-job-apply-card'] },
        React.createElement("div", { className: styles['magneto-ui-job-apply-card__wrapper'] },
            React.createElement("div", { className: styles['magneto-ui-job-apply-card__header'] },
                React.createElement("p", null, offerApplyHeader),
                (offerApplyElements === null || offerApplyElements === void 0 ? void 0 : offerApplyElements.length) &&
                    offerApplyElements
                        .filter(function (_a) {
                        var offerApplyInfo = _a.offerApplyInfo;
                        return !!offerApplyInfo;
                    })
                        .map(function (_a) {
                        var offerApplyLabel = _a.offerApplyLabel, offerApplyInfo = _a.offerApplyInfo;
                        return (React.createElement("div", { className: styles['magneto-ui-job-apply-card__requirements'], key: "".concat(offerApplyLabel, "-JobApplyCard") },
                            React.createElement("p", null, offerApplyLabel),
                            React.createElement("p", null, offerApplyInfo)));
                    })))));
};
/**
 * UI Molecule Component for Job Apply Card
 */
var JobApplyCard = Component;

export { JobApplyCard };
//# sourceMappingURL=JobApplyCard.component.js.map
