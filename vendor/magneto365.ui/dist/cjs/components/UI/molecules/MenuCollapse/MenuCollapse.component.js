'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var MenuCollapseChildren_component = require('./children/MenuCollapseChildren.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var MenuCollapse_module = require('./MenuCollapse.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MenuCollapse = function (_a) {
    var listMenu = _a.listMenu;
    var legalMenu = listMenu.legalMenu, magnetoLiteMenu = listMenu.magnetoLiteMenu, magnetoMenu = listMenu.magnetoMenu, otherSolutionsMenu = listMenu.otherSolutionsMenu, personsMenu = listMenu.personsMenu;
    var linksList = [personsMenu, magnetoMenu, magnetoLiteMenu, otherSolutionsMenu, legalMenu];
    var _b = React.useState(null), menuActivo = _b[0], setMenuActivo = _b[1];
    var toggleMenu = React.useCallback(function (index) {
        if (menuActivo === index) {
            setMenuActivo(null);
        }
        else {
            setMenuActivo(index);
        }
    }, [menuActivo]);
    return (React__default["default"].createElement("div", { className: "".concat(MenuCollapse_module["".concat(common_constants.classMUI, "-collapse-menu-container")]) }, linksList.map(function (_a, i) {
        var props = tslib_es6.__rest(_a, []);
        return (React__default["default"].createElement(React.Fragment, { key: i },
            React__default["default"].createElement(MenuCollapseChildren_component, tslib_es6.__assign({ isOpen: menuActivo === i, onClick: function () { return toggleMenu(i); } }, props))));
    })));
};

module.exports = MenuCollapse;
//# sourceMappingURL=MenuCollapse.component.js.map
