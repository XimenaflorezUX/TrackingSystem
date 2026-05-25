import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import styles from './ImageCard.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowRightWhite from '../../../../assets/ArrowRightWhite.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import { imageCardPrefix } from '../../../../constants/stories/carousel.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, imagePath = _a.imagePath, _b = _a.alt, alt = _b === void 0 ? 'Image' : _b, title = _a.title, description = _a.description, _c = _a.dimensions, dimensions = _c === void 0 ? { height: '250px', width: '500px' } : _c, _d = _a.icon, icon = _d === void 0 ? { showIcon: true, size: 14 } : _d;
    var customStyles = {
        '--card-width': dimensions.width,
        '--card-height': dimensions.height
    };
    return (React.createElement("div", { className: cx(imageCardPrefix, className), style: customStyles },
        React.createElement("img", { className: styles["".concat(imageCardPrefix, "__image")], src: imagePath, alt: alt, loading: "lazy" }),
        React.createElement("div", { className: styles["".concat(imageCardPrefix, "__overlay")] },
            React.createElement("p", { className: styles["".concat(imageCardPrefix, "__title")] }, title),
            React.createElement("div", { className: styles["".concat(imageCardPrefix, "__description")] },
                description && React.createElement("p", { className: styles["".concat(imageCardPrefix, "__description_text")] }, description),
                icon.showIcon && (React.createElement(IconItem, __assign({ icon: ArrowRightWhite, className: styles["".concat(imageCardPrefix, "__description_icon")] }, icon)))))));
};
var ImageCard = Component;

export { ImageCard };
//# sourceMappingURL=ImageCard.component.js.map
