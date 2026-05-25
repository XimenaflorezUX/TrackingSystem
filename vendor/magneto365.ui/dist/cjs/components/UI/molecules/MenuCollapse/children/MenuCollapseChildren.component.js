'use strict';

var tslib_es6 = require('../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ListMenuText_component = require('../../ListMenuText/ListMenuText.component.js');
var ArrowDown2 = require('../../../../../assets/ArrowDown2.svg.js');
var MenuCollapseChildren_module = require('./MenuCollapseChildren.module.scss.js');
var common_constants = require('../../../../../constants/stories/common.constants.js');
require('../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../constants/stories/vacancies.constants.js');
require('../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../constants/img.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MenuCollapseChildren = function (_a) {
    var isOpen = _a.isOpen, onClick = _a.onClick, heightContent = _a.heightContent, listMenuProps = tslib_es6.__rest(_a, ["isOpen", "onClick", "heightContent"]);
    var _b = React.useMemo(function () {
        var rotateArrow = isOpen ? MenuCollapseChildren_module['rotate'] : '';
        var customHeightContent = heightContent ? "".concat(heightContent, "px") : 'auto';
        return { rotateArrow: rotateArrow, customHeightContent: customHeightContent };
    }, [isOpen, heightContent]), rotateArrow = _b.rotateArrow, customHeightContent = _b.customHeightContent;
    return (React__default["default"].createElement("div", { style: { height: isOpen ? customHeightContent : '40px' }, className: "".concat(MenuCollapseChildren_module["".concat(common_constants.classMUI, "-collapse-menu")]) },
        React__default["default"].createElement("button", { onClick: onClick, type: "button", className: "".concat(MenuCollapseChildren_module["".concat(common_constants.classMUI, "-collapse-menu__btn")]) },
            React__default["default"].createElement("img", { className: "".concat(MenuCollapseChildren_module["".concat(common_constants.classMUI, "-collapse-menu__btn--img")], " ").concat(rotateArrow), src: ArrowDown2, alt: "icon-arrow" })),
        React__default["default"].createElement(ListMenuText_component, tslib_es6.__assign({}, listMenuProps))));
};

module.exports = MenuCollapseChildren;
//# sourceMappingURL=MenuCollapseChildren.component.js.map
