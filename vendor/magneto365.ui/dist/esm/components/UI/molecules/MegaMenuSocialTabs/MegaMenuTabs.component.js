import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './MegaMenuTabs.module.scss.js';
import MegaMenuTab from '../../atoms/MegaMenuTab/MegaMenuTab.component.js';
import { useMegaMenu } from '../../template/MegaMenu/MegaMenu.context.js';

var MegaMenuTabs = function (_a) {
    var className = _a.className, _b = _a.showArrows, showArrows = _b === void 0 ? true : _b;
    var tabs = useMegaMenu().socialHeaderProps.tabs;
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-mega-menu-tabs")], " ").concat(className ? className : '') }, tabs.length > 0 && tabs.map(function (tab, key) { return React.createElement(MegaMenuTab, __assign({ key: key, showArrow: showArrows }, tab)); })));
};

export { MegaMenuTabs as default };
//# sourceMappingURL=MegaMenuTabs.component.js.map
