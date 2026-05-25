import React from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import '../BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../Button/Button.component.js';
import '../Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../Field/Field.component.js';
import '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';
import '../InputFile/InputFile.component.js';
import styles from './SearchItem.module.scss.js';
import '../Paragraph/Paragraph.component.js';
import '../Radio/Radio.interface.js';
import '../Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var tag = _a.tag, url = _a.url, className = _a.className, _b = _a.icon, icon = _b === void 0 ? ArrowRight2 : _b;
    return (React.createElement("a", { title: tag, className: "".concat(className ? className : styles['magneto-ui--search-item']), href: url },
        React.createElement("p", { className: styles['magneto-ui--search-item__text'] }, tag),
        React.createElement(IconItem, { alt: "arrow icon", hover: false, icon: icon, size: 14 })));
};
/**
 * UI Atom component of Search Item
 */
var SearchItem = Component;

export { SearchItem };
//# sourceMappingURL=SearchItem.component.js.map
