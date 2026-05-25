import React, { Fragment } from 'react';
import styles from '../../SimilarCard.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var customText = _a.customText, className = _a.className, headingType = _a.headingType;
    if (!(customText === null || customText === void 0 ? void 0 : customText.length))
        return null;
    return (React.createElement("p", { className: cx(styles['similar-card__text'], className) }, customText.map(function (_a, index) {
        var value = _a.value, fontWeight = _a.fontWeight, _b = _a.lineBreak, lineBreak = _b === void 0 ? false : _b;
        var isFirst = index === 0;
        var Tag = isFirst && headingType ? headingType : 'span';
        return (React.createElement(Fragment, { key: "custom-text-".concat(index) },
            React.createElement(Tag, { className: styles["similar-card__text--".concat(fontWeight)] }, value),
            lineBreak && React.createElement("br", null)));
    })));
};
var SimilarCardText = Component;

export { SimilarCardText };
//# sourceMappingURL=SimilarCardText.component.js.map
