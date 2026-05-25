'use strict';

var React = require('react');
var MegaMenuTab_module = require('./MegaMenuTab.module.scss.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var SearchItem_component = require('../SearchItem/SearchItem.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuTab = function (_a) {
    var label = _a.label, selected = _a.selected, url = _a.url, _b = _a.showArrow, showArrow = _b === void 0 ? true : _b;
    var icon = React.useMemo(function () {
        if (!showArrow || selected)
            return '';
        return ArrowDown2;
    }, [selected, showArrow]);
    return (React__default["default"].createElement("div", { className: "".concat(MegaMenuTab_module["".concat(common_constants.classMUI, "-mega-menu-tab")], " ").concat(selected ? MegaMenuTab_module["".concat(common_constants.classMUI, "-mega-menu-tab__selected")] : '') },
        React__default["default"].createElement(SearchItem_component.SearchItem, { tag: label, url: url, icon: icon, className: "".concat(MegaMenuTab_module["".concat(common_constants.classMUI, "-mega-menu-tab__label")], " ").concat(selected ? MegaMenuTab_module["".concat(common_constants.classMUI, "-mega-menu-tab__label-selected")] : '') })));
};

module.exports = MegaMenuTab;
//# sourceMappingURL=MegaMenuTab.component.js.map
