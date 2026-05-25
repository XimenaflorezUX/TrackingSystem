import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowLeft2 from '../../../../assets/ArrowLeft2.svg.js';
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
import '../../../../constants/img.constants.js';
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
import styles from './MobileJobDetailHeader.module.scss.js';

var Component = function (_a) {
    var returnText = _a.returnText, onClick = _a.onClick;
    return (React.createElement("div", { className: styles['magneto-ui-mobile-job-details-header'] },
        React.createElement("button", { onClick: onClick },
            React.createElement(IconItem, { alt: "arrow-left", icon: ArrowLeft2 })),
        React.createElement("p", null, returnText)));
};
/**
 * UI Molecule Component for Mobile Jobs Drawer
 */
var MobileJobDetailsHeader = Component;

export { MobileJobDetailsHeader };
//# sourceMappingURL=MobileJobDetailsHeader.component.js.map
