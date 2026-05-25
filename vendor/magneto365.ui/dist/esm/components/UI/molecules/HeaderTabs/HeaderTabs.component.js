import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
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
import { HeaderTab } from '../../atoms/HeaderTab/HeaderTab.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './HeaderTabs.modules.scss.js';

var Component = function (_a) {
    var _b = _a.headerTabList, headerTabList = _b === void 0 ? [] : _b, _c = _a.urlParam, urlParam = _c === void 0 ? '' : _c, addDivider = _a.addDivider;
    return (React.createElement("div", { className: styles.HeaderTabsComponent, "data-add-divider": addDivider }, headerTabList.map(function (_a, index) {
        var headerTabProps = __rest(_a, []);
        return (React.createElement(React.Fragment, { key: index },
            React.createElement(HeaderTab, __assign({}, headerTabProps, { isActive: Array.isArray(headerTabProps.slug)
                    ? headerTabProps.slug.includes(urlParam)
                    : urlParam === headerTabProps.slug }))));
    })));
};
/**
 * Molecule UI component for header tabs information`
 */
var HeaderTabs = Component;

export { HeaderTabs };
//# sourceMappingURL=HeaderTabs.component.js.map
