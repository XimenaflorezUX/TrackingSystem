import React from 'react';
import '../../../../atoms/BarChart/enums.js';
import CNM from '../../../../../../utils/classNameManager/classNameManager.util.js';
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
import { Divider } from '../../../../atoms/Divider/Divider.component.js';
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
import styles from './NavMenuAnalystDivider.module.scss.js';

var Component = function (_a) {
    var isFullWidth = _a.isFullWidth, _b = _a.showMobile, showMobile = _b === void 0 ? true : _b, title = _a.title;
    if (!title)
        return null;
    return (React.createElement("div", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-divider'] }) }, isFullWidth ? (React.createElement("h3", { className: CNM.get({ styles: styles, cls: ['nav-menu-analyst-divider__title'] }) }, title)) : (showMobile && React.createElement(Divider, null))));
};
/**
 * Organism UI child component of nav menu analyst
 */
var NavMenuAnalystDivider = Component;

export { NavMenuAnalystDivider };
//# sourceMappingURL=NavMenuAnalystDivider.component.js.map
