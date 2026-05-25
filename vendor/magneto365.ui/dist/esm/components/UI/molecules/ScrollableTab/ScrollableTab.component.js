import React from 'react';
import ArrowLeft2 from '../../../../assets/ArrowLeft2.svg.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import { Button } from '../../atoms/Button/Button.component.js';
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
import styles from './ScrollableTab.module.scss.js';
import useScrollableTab from './hooks/useScrollableTab.hook.js';

var Component = function (_a) {
    var children = _a.children, _b = _a.scrollAmount, scrollAmount = _b === void 0 ? 100 : _b, className = _a.className;
    var _c = useScrollableTab(), containerRef = _c.containerRef, showLeftArrow = _c.showLeftArrow, showRightArrow = _c.showRightArrow, handleScrollByAmount = _c.handleScrollByAmount;
    return (React.createElement("div", { className: "".concat(styles['magneto-ui-scrollable-tab'], " ").concat(className), role: "tablist" },
        showLeftArrow && (React.createElement(Button, { addHover: true, suffixIcon: ArrowLeft2, className: "".concat(styles['magneto-ui-scrollable-tab__arrow'], " ").concat(styles['magneto-ui-scrollable-tab__arrow--left']), onClick: function () { return handleScrollByAmount(-scrollAmount); } })),
        React.createElement("div", { ref: containerRef, className: styles['magneto-ui-scrollable-tab__container'] }, children),
        showRightArrow && (React.createElement(Button, { addHover: true, suffixIcon: ArrowRight2, className: "".concat(styles['magneto-ui-scrollable-tab__arrow'], " ").concat(styles['magneto-ui-scrollable-tab__arrow--right']), onClick: function () { return handleScrollByAmount(scrollAmount); } }))));
};
/**
 * Molecule UI for ScrollableTab
 */
var ScrollableTab = Component;

export { ScrollableTab };
//# sourceMappingURL=ScrollableTab.component.js.map
