import React, { useMemo } from 'react';
import styles from './MegaMenuTab.module.scss.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { SearchItem } from '../SearchItem/SearchItem.component.js';

var MegaMenuTab = function (_a) {
    var label = _a.label, selected = _a.selected, url = _a.url, _b = _a.showArrow, showArrow = _b === void 0 ? true : _b;
    var icon = useMemo(function () {
        if (!showArrow || selected)
            return '';
        return ArrowDown2;
    }, [selected, showArrow]);
    return (React.createElement("div", { className: "".concat(styles["".concat(classMUI, "-mega-menu-tab")], " ").concat(selected ? styles["".concat(classMUI, "-mega-menu-tab__selected")] : '') },
        React.createElement(SearchItem, { tag: label, url: url, icon: icon, className: "".concat(styles["".concat(classMUI, "-mega-menu-tab__label")], " ").concat(selected ? styles["".concat(classMUI, "-mega-menu-tab__label-selected")] : '') })));
};

export { MegaMenuTab as default };
//# sourceMappingURL=MegaMenuTab.component.js.map
