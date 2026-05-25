'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CategoryMenuList_module = require('./CategoryMenuList.module.scss.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
var ButtonLink_component = require('../../../../atoms/ButtonLink/ButtonLink.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var list = _a.list, isOpen = _a.isOpen;
    if (!list.length)
        return null;
    return (React__default["default"].createElement("div", { className: "".concat(CategoryMenuList_module["magneto-ui-category-menu-list"], " ").concat(isOpen ? CategoryMenuList_module["magneto-ui-category-menu-list--is-open"] : '') }, list.map(function (_a) {
        var id = _a.id, name = _a.name, href = _a.href, onClick = _a.onClick;
        return (React__default["default"].createElement(ButtonLink_component.ButtonLink, { key: id, onClick: onClick, href: href, className: CategoryMenuList_module["magneto-ui-category-menu-list-listItem"], buttonText: name }));
    })));
};
var CategoryMenuList = Component;

exports.CategoryMenuList = CategoryMenuList;
//# sourceMappingURL=CategoryMenuList.component.js.map
