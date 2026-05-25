import React from 'react';
import styles from './SimilarCard.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { SimilarCardLogo } from './children/SimilarCardLogo/SimilarCardLogo.component.js';
import { SimilarCardIcon } from './children/SimlarCardIcon/SimilarCardIcon.component.js';
import { SimilarCardText } from './children/SimilarCardText/SimilarCardText.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var children = _a.children, _b = _a.title, title = _b === void 0 ? 'jobLink' : _b, _c = _a.jobUrlSlug, jobUrlSlug = _c === void 0 ? '#' : _c, className = _a.className;
    return (React.createElement("a", { className: cx("similar-card", className), href: jobUrlSlug, title: title }, children));
};
var SimilarCard = Object.assign(Component, {
    Text: SimilarCardText,
    Logo: SimilarCardLogo,
    Icon: SimilarCardIcon
});

export { SimilarCard };
//# sourceMappingURL=SimilarCard.component.js.map
