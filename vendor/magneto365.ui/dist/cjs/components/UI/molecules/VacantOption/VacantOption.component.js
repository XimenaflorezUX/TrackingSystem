'use strict';

var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var vacancies_constants = require('../../../../constants/vacancies.constants.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
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
var MenuDropdown_component = require('../../atoms/MenuDropdown/MenuDropdown.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var VacantOption_module = require('./VacantOption.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(VacantOption_module);
var VacantOption = function (_a) {
    var option = _a.option, onClick = _a.onClick;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var handleClick = function () {
        var _a;
        if (option.type === 'button') {
            (_a = option.onClick) === null || _a === void 0 ? void 0 : _a.call(option);
        }
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    var icon = vacancies_constants.ShareIcons[option.icon]
        ? vacancies_constants.ShareIcons[option.icon].icon
        : option.icon;
    if (option.type === 'menu') {
        return (React__default["default"].createElement(MenuDropdown_component.MenuDropdown, { title: option.label, opened: open, onClick: setOpen, prefixIcon: { icon: icon, size: 18 }, suffixIcon: { icon: ArrowDown2 }, className: cx('option', 'option--menu', { 'option--menu-open': open }, option.className), listClassName: cx('option__menu-list') }, option.children.map(function (child) { return (React__default["default"].createElement(VacantOption, { onClick: handleClick, key: child.label, option: child })); })));
    }
    if (option.type === 'link') {
        return (React__default["default"].createElement("a", { href: option.href, target: "_blank", rel: "noopener noreferrer", className: cx('option', 'option--link', option.className) },
            option.icon ? React__default["default"].createElement(Icon_component.IconItem, { size: 18, icon: icon }) : null,
            " ",
            option.label));
    }
    if (option.type === 'button') {
        return (React__default["default"].createElement("button", { className: cx('option', 'option--button', option.className), onClick: handleClick, type: "button" },
            option.icon ? React__default["default"].createElement(Icon_component.IconItem, { size: 18, icon: icon }) : null,
            " ",
            option.label));
    }
    return React__default["default"].createElement(React__default["default"].Fragment, null);
};

module.exports = VacantOption;
//# sourceMappingURL=VacantOption.component.js.map
