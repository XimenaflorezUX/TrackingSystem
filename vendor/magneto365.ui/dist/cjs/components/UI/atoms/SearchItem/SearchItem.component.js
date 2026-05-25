'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
require('../BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../Button/Button.component.js');
require('../Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../Field/Field.component.js');
require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');
require('../InputFile/InputFile.component.js');
var SearchItem_module = require('./SearchItem.module.scss.js');
require('../Paragraph/Paragraph.component.js');
require('../Radio/Radio.interface.js');
require('../Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var tag = _a.tag, url = _a.url, className = _a.className, _b = _a.icon, icon = _b === void 0 ? ArrowRight2 : _b;
    return (React__default["default"].createElement("a", { title: tag, className: "".concat(className ? className : SearchItem_module['magneto-ui--search-item']), href: url },
        React__default["default"].createElement("p", { className: SearchItem_module['magneto-ui--search-item__text'] }, tag),
        React__default["default"].createElement(Icon_component.IconItem, { alt: "arrow icon", hover: false, icon: icon, size: 14 })));
};
/**
 * UI Atom component of Search Item
 */
var SearchItem = Component;

exports.SearchItem = SearchItem;
//# sourceMappingURL=SearchItem.component.js.map
