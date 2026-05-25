'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
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
var MenuItem_component = require('../../atoms/MenuItem/MenuItem.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.menuList, menuList = _b === void 0 ? [] : _b, _c = _a.urlParam, urlParam = _c === void 0 ? '' : _c;
    return (React__default["default"].createElement("div", null, menuList.map(function (_a, index) {
        var text = _a.text, url = _a.url, slug = _a.slug;
        return (React__default["default"].createElement(MenuItem_component, { key: index, isActive: urlParam === slug ? true : false, url: url, text: text }));
    })));
};
var ListMenuItems = Component;

exports.ListMenuItems = ListMenuItems;
//# sourceMappingURL=ListMenuItems.component.js.map
