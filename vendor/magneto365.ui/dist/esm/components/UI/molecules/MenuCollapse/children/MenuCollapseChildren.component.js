import { __rest, __assign } from '../../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import ListMenuText from '../../ListMenuText/ListMenuText.component.js';
import ArrowDown2 from '../../../../../assets/ArrowDown2.svg.js';
import style from './MenuCollapseChildren.module.scss.js';
import { classMUI } from '../../../../../constants/stories/common.constants.js';
import '../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../constants/stories/vacancies.constants.js';
import '../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../constants/img.constants.js';

var MenuCollapseChildren = function (_a) {
    var isOpen = _a.isOpen, onClick = _a.onClick, heightContent = _a.heightContent, listMenuProps = __rest(_a, ["isOpen", "onClick", "heightContent"]);
    var _b = useMemo(function () {
        var rotateArrow = isOpen ? style['rotate'] : '';
        var customHeightContent = heightContent ? "".concat(heightContent, "px") : 'auto';
        return { rotateArrow: rotateArrow, customHeightContent: customHeightContent };
    }, [isOpen, heightContent]), rotateArrow = _b.rotateArrow, customHeightContent = _b.customHeightContent;
    return (React.createElement("div", { style: { height: isOpen ? customHeightContent : '40px' }, className: "".concat(style["".concat(classMUI, "-collapse-menu")]) },
        React.createElement("button", { onClick: onClick, type: "button", className: "".concat(style["".concat(classMUI, "-collapse-menu__btn")]) },
            React.createElement("img", { className: "".concat(style["".concat(classMUI, "-collapse-menu__btn--img")], " ").concat(rotateArrow), src: ArrowDown2, alt: "icon-arrow" })),
        React.createElement(ListMenuText, __assign({}, listMenuProps))));
};

export { MenuCollapseChildren as default };
//# sourceMappingURL=MenuCollapseChildren.component.js.map
