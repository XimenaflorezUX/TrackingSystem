'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var arrowDownWhite = require('../../../../assets/arrowDownWhite.svg.js');
var Icon_component = require('../Icon/Icon.component.js');
require('../BarChart/enums.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
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
var MenuDropdownList_component = require('./children/MenuDropdownList/MenuDropdownList.component.js');
var MenuDropdown_module = require('./MenuDropdown.module.scss.js');
require('../Paragraph/Paragraph.component.js');
require('../Radio/Radio.interface.js');
require('../Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.listClassName, listClassName = _c === void 0 ? '' : _c, onClick = _a.onClick, opened = _a.opened, prefixIcon = _a.prefixIcon, _d = _a.suffixIcon, suffixIcon = _d === void 0 ? { icon: arrowDownWhite } : _d, title = _a.title;
    var _e = React.useState(opened), localOpened = _e[0], setLocalOpened = _e[1];
    var toggleOptions = React.useCallback(function () {
        if (onClick) {
            onClick(!localOpened);
        }
        setLocalOpened(opened !== null && opened !== void 0 ? opened : !localOpened);
    }, [localOpened, onClick, opened]);
    React.useEffect(function () {
        setLocalOpened(opened);
    }, [opened]);
    var handleButtonClick = React.useCallback(function (e) {
        e.stopPropagation();
    }, []);
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: MenuDropdown_module, cls: ['menu-dropdown', className] }), onClick: toggleOptions },
        React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: MenuDropdown_module, cls: ['menu-dropdown__content'] }) },
            React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: MenuDropdown_module, cls: ['menu-dropdown__container'] }) },
                prefixIcon && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 18 }, prefixIcon)),
                React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: MenuDropdown_module, cls: ['menu-dropdown__title'] }) }, title),
                React__default["default"].createElement("div", { className: classNameManager_util.get({
                        styles: MenuDropdown_module,
                        cls: ['menu-dropdown__suffix', localOpened && 'menu-dropdown__suffix--visible']
                    }) },
                    React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ size: 18 }, suffixIcon)))),
            React__default["default"].createElement("div", { onClick: handleButtonClick },
                React__default["default"].createElement(MenuDropdownList_component.MenuDropdownList, { opened: localOpened !== null && localOpened !== void 0 ? localOpened : false, listClassName: listClassName }, children)))));
};
/**
 * Atom UI component of menu dropdown
 */
var MenuDropdown = Component;

exports.MenuDropdown = MenuDropdown;
//# sourceMappingURL=MenuDropdown.component.js.map
