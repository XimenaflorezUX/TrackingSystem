import React, { useState, useCallback, useMemo } from 'react';
import style from './MegaMenuJobsTabs.module.scss.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import { megaMenuJobsIcons } from '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { ButtonLink } from '../../atoms/ButtonLink/ButtonLink.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../utils/date/dateInput.util.js';
import { Divider } from '../../atoms/Divider/Divider.component.js';
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
import { useMegaMenuJobs } from '../../template/MegaMenu/MegaMenu.context.js';

var MegaMenuJobsTabs = function () {
    var _a, _b;
    var _c = useState(0), selectedTab = _c[0], setSelectedTab = _c[1];
    var _d = useMegaMenuJobs(), tabs = _d.tabs, onChangeTab = _d.onChangeTab, allJobsAction = _d.allJobsAction;
    var onClickTab = useCallback(function (index) { return function () {
        setSelectedTab(index);
        onChangeTab && onChangeTab(index);
    }; }, [onChangeTab]);
    var isSelectedTab = useCallback(function (index) { return selectedTab == index; }, [selectedTab]);
    var content = useMemo(function () { return tabs[selectedTab]; }, [tabs, selectedTab]).content;
    return (React.createElement("div", { className: "".concat(style["mega-menu-jobs-tabs__container"]) },
        React.createElement("nav", null,
            React.createElement("ul", { className: "".concat(style["mega-menu-jobs-tabs"]) },
                tabs &&
                    tabs.map(function (_a, index) {
                        var label = _a.label, url = _a.url;
                        return (React.createElement("li", { key: index },
                            React.createElement(ButtonLink, { buttonText: label, href: url, onClick: onClickTab(index), suffixIcon: megaMenuJobsIcons[index], className: "".concat(style["mega-menu-jobs-tabs__tab"], " ").concat(isSelectedTab(index) ? style["selected-tab"] : ''), target: '_blank', iconSize: 16 })));
                    }),
                React.createElement(Divider, { direction: 'VERTICAL' }),
                React.createElement("li", null,
                    React.createElement(ButtonLink, { buttonText: (_a = allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.label) !== null && _a !== void 0 ? _a : '', href: (_b = allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.url) !== null && _b !== void 0 ? _b : '', onClick: allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.onClick, prefixIcon: ArrowRight2, iconSize: 14 })))),
        React.createElement(Divider, null),
        React.createElement("div", { className: "".concat(style["mega-menu-jobs-tabs__content"]) }, content)));
};

export { MegaMenuJobsTabs as default };
//# sourceMappingURL=MegaMenuJobsTabs.component.js.map
