import React from 'react';
import styles from '../../Carousel.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import { carouselPrefix } from '../../../../../../constants/stories/carousel.constants.js';

var cx = classNames.bind(styles);
var CarouselHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement("div", { className: cx("".concat(carouselPrefix, "__header"), className) }, children);
};

export { CarouselHeader };
//# sourceMappingURL=CarouselHeader.component.js.map
