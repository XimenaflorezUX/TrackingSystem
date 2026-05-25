'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var MegaMenuTabs_module = require('./MegaMenuTabs.module.scss.js');
var MegaMenuTab_component = require('../../atoms/MegaMenuTab/MegaMenuTab.component.js');
var MegaMenu_context = require('../../template/MegaMenu/MegaMenu.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuTabs = function (_a) {
    var className = _a.className, _b = _a.showArrows, showArrows = _b === void 0 ? true : _b;
    var tabs = MegaMenu_context.useMegaMenu().socialHeaderProps.tabs;
    return (React__default["default"].createElement("div", { className: "".concat(MegaMenuTabs_module["".concat(common_constants.classMUI, "-mega-menu-tabs")], " ").concat(className ? className : '') }, tabs.length > 0 && tabs.map(function (tab, key) { return React__default["default"].createElement(MegaMenuTab_component, tslib_es6.__assign({ key: key, showArrow: showArrows }, tab)); })));
};

module.exports = MegaMenuTabs;
//# sourceMappingURL=MegaMenuTabs.component.js.map
