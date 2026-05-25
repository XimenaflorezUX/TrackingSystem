import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import ArrowLeft2 from '../../../../../../assets/ArrowLeft2.svg.js';
import ArrowRight2 from '../../../../../../assets/ArrowRight2.svg.js';
import React from 'react';
import styles from '../../Carousel.module.scss.js';
import { carouselPrefix } from '../../../../../../constants/stories/carousel.constants.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var CarouselButtons = function (_a) {
    var onPrevSlide = _a.onPrevSlide, onNextSlide = _a.onNextSlide, className = _a.className, size = _a.size, _b = _a.icons, icons = _b === void 0 ? { left: ArrowLeft2, right: ArrowRight2 } : _b;
    return (React.createElement("div", { className: cx(styles["".concat(carouselPrefix, "__buttons")], className) },
        React.createElement("button", { className: styles.carousel__button, onClick: onPrevSlide },
            React.createElement(IconItem, { icon: icons.left, size: size })),
        React.createElement("button", { className: styles.carousel__button, onClick: onNextSlide },
            React.createElement(IconItem, { icon: icons.right, size: size }))));
};

export { CarouselButtons };
//# sourceMappingURL=CarouselButtons.component.js.map
