import React from 'react';
import Warning3D from '../../../../assets/warning-3d.svg.js';
import WarningHex from '../../../../assets/warning-hex.svg.js';
import styles from './FraudCardJob.module.scss.js';

var Component = function (_a) {
    var title = _a.title, content = _a.content, linkText = _a.linkText, link = _a.link;
    return (React.createElement("div", { className: styles['fraud-card-job'] },
        React.createElement("div", { className: styles['fraud-card-job__header'] },
            React.createElement("img", { src: Warning3D, alt: "warning" }),
            React.createElement("p", null, title)),
        React.createElement("div", null,
            React.createElement("p", { className: styles['fraud-card-job__text'] }, content),
            React.createElement("a", { target: "_blank", rel: "noreferrer", className: styles['fraud-card-job__link'], href: link },
                React.createElement("img", { src: WarningHex, alt: "warning" }),
                linkText))));
};
var FraudCardJob = Component;

export { FraudCardJob };
//# sourceMappingURL=FraudCardJob.component.js.map
