import React from 'react';
import styles from './SimilarCardLogo.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import NoLogo from '../../../../../../assets/noLogo.svg.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, _b = _a.hideLogo, hideLogo = _b === void 0 ? false : _b;
    if (hideLogo)
        return null;
    return (React.createElement("img", { className: cx("similar-card-logo", className), src: src || NoLogo, alt: (alt === null || alt === void 0 ? void 0 : alt.toLowerCase()) || 'company-logo' }));
};
var SimilarCardLogo = Component;

export { SimilarCardLogo };
//# sourceMappingURL=SimilarCardLogo.component.js.map
