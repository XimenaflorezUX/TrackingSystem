'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
var Button_component = require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var ScrollableTab_module = require('./ScrollableTab.module.scss.js');
var useScrollableTab_hook = require('./hooks/useScrollableTab.hook.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, _b = _a.scrollAmount, scrollAmount = _b === void 0 ? 100 : _b, className = _a.className;
    var _c = useScrollableTab_hook(), containerRef = _c.containerRef, showLeftArrow = _c.showLeftArrow, showRightArrow = _c.showRightArrow, handleScrollByAmount = _c.handleScrollByAmount;
    return (React__default["default"].createElement("div", { className: "".concat(ScrollableTab_module['magneto-ui-scrollable-tab'], " ").concat(className), role: "tablist" },
        showLeftArrow && (React__default["default"].createElement(Button_component.Button, { addHover: true, suffixIcon: ArrowLeft2, className: "".concat(ScrollableTab_module['magneto-ui-scrollable-tab__arrow'], " ").concat(ScrollableTab_module['magneto-ui-scrollable-tab__arrow--left']), onClick: function () { return handleScrollByAmount(-scrollAmount); } })),
        React__default["default"].createElement("div", { ref: containerRef, className: ScrollableTab_module['magneto-ui-scrollable-tab__container'] }, children),
        showRightArrow && (React__default["default"].createElement(Button_component.Button, { addHover: true, suffixIcon: ArrowRight2, className: "".concat(ScrollableTab_module['magneto-ui-scrollable-tab__arrow'], " ").concat(ScrollableTab_module['magneto-ui-scrollable-tab__arrow--right']), onClick: function () { return handleScrollByAmount(scrollAmount); } }))));
};
/**
 * Molecule UI for ScrollableTab
 */
var ScrollableTab = Component;

exports.ScrollableTab = ScrollableTab;
//# sourceMappingURL=ScrollableTab.component.js.map
