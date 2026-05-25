import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useCallback, Fragment } from 'react';
import MenuCollapseChildren from './children/MenuCollapseChildren.component.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './MenuCollapse.module.scss.js';

var MenuCollapse = function (_a) {
    var listMenu = _a.listMenu;
    var legalMenu = listMenu.legalMenu, magnetoLiteMenu = listMenu.magnetoLiteMenu, magnetoMenu = listMenu.magnetoMenu, otherSolutionsMenu = listMenu.otherSolutionsMenu, personsMenu = listMenu.personsMenu;
    var linksList = [personsMenu, magnetoMenu, magnetoLiteMenu, otherSolutionsMenu, legalMenu];
    var _b = useState(null), menuActivo = _b[0], setMenuActivo = _b[1];
    var toggleMenu = useCallback(function (index) {
        if (menuActivo === index) {
            setMenuActivo(null);
        }
        else {
            setMenuActivo(index);
        }
    }, [menuActivo]);
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-collapse-menu-container")]) }, linksList.map(function (_a, i) {
        var props = __rest(_a, []);
        return (React.createElement(Fragment, { key: i },
            React.createElement(MenuCollapseChildren, __assign({ isOpen: menuActivo === i, onClick: function () { return toggleMenu(i); } }, props))));
    })));
};

export { MenuCollapse as default };
//# sourceMappingURL=MenuCollapse.component.js.map
