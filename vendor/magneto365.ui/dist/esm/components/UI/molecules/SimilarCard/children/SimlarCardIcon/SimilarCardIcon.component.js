import React from 'react';
import styles from '../../SimilarCard.module.scss.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import ArrowRight2 from '../../../../../../assets/ArrowRight2.svg.js';
import { IconItem } from '../../../../atoms/Icon/Icon.component.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, _b = _a.showIconMobile, showIconMobile = _b === void 0 ? false : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement(IconItem, { className: cx('similar-card__arrow', { 'similar-card__arrow-mobile': !showIconMobile }, className), icon: src || ArrowRight2, alt: (alt === null || alt === void 0 ? void 0 : alt.toLowerCase()) || 'card-icon' })));
};
var SimilarCardIcon = Component;

export { SimilarCardIcon };
//# sourceMappingURL=SimilarCardIcon.component.js.map
