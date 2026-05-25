import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import styles from './TabButton.modules.scss.js';
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
import { Link } from '../../atoms/Link/Link.component.js';
import { toCSSVariables } from '../../../../shared/utils/Function.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Component = function (_a) {
    var tabButtonLink = _a.tabButtonLink, tabButtonLinkStyles = _a.tabButtonLinkStyles, tabButtonStyles = _a.tabButtonStyles;
    var stylesValue = useMemo(function () { return toCSSVariables(tabButtonStyles); }, [tabButtonStyles]);
    var boxShadow = (tabButtonStyles || {}).boxShadow;
    return (React.createElement("div", { className: styles.TabButtonComponent, style: stylesValue, "data-box-shadow": boxShadow }, tabButtonLink && React.createElement(Link, __assign({}, tabButtonLink, { linkStyles: tabButtonLinkStyles }))));
};
/**
 * Molecule UI component for Tab Button
 */
var TabButton = Component;

export { TabButton };
//# sourceMappingURL=TabButton.component.js.map
