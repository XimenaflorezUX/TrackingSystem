import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
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
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { LogoComponent } from '../../atoms/Logo/Logo.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { Tab } from '../Tab/Tab.component.js';
import { TabButton } from '../TabButton/TabButton.component.js';
import styles from './HeaderDrawerTabs.module.scss.js';

var Component = function (_a) {
    var logoProps = _a.logoProps, leftTabLink = _a.leftTabLink, rightTabLink = _a.rightTabLink, leftTabStyle = _a.leftTabStyle, rightTabStyle = _a.rightTabStyle, homeUrl = _a.homeUrl;
    return (React.createElement("div", { className: styles.HeaderDrawerTabsComponent },
        React.createElement("a", { href: homeUrl },
            React.createElement(LogoComponent, __assign({}, logoProps, { isoView: true }))),
        React.createElement(Tab, null,
            React.createElement(TabButton, { tabButtonLink: leftTabLink, tabButtonLinkStyles: leftTabStyle === null || leftTabStyle === void 0 ? void 0 : leftTabStyle.tabButtonLinkStyles, tabButtonStyles: leftTabStyle === null || leftTabStyle === void 0 ? void 0 : leftTabStyle.tabButtonStyles }),
            React.createElement(TabButton, { tabButtonLink: rightTabLink, tabButtonLinkStyles: rightTabStyle === null || rightTabStyle === void 0 ? void 0 : rightTabStyle.tabButtonLinkStyles, tabButtonStyles: rightTabStyle === null || rightTabStyle === void 0 ? void 0 : rightTabStyle.tabButtonStyles }))));
};
var HeaderDrawerTabs = Component;

export { HeaderDrawerTabs };
//# sourceMappingURL=HeaderDrawerTabs.components.js.map
