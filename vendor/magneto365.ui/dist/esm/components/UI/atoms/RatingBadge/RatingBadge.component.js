import React from 'react';
import StarBoldYellow from '../../../../assets/starBoldYellow.svg.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './RatingBadge.module.scss.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var score = _a.score;
    return (React.createElement("div", { className: cx('magneto-ui-rating-badge') },
        React.createElement("div", { className: cx('magneto-ui-rating-badge__container') },
            React.createElement("img", { src: StarBoldYellow, alt: StarBoldYellow, className: cx('magneto-ui-rating-badge__icon') }),
            React.createElement("span", { className: cx('magneto-ui-rating-badge__score') }, score))));
};
/**
 * Atom UI component of Rating Badge
 */
var RatingBadge = Component;

export { RatingBadge };
//# sourceMappingURL=RatingBadge.component.js.map
