'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var HorizontalMenu_module = require('./HorizontalMenu.module.scss.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(HorizontalMenu_module);
var Component = function (_a) {
    var className = _a.className, options = _a.options, onChange = _a.onChange;
    var _b = React.useState(0), selectedItem = _b[0], setSelectedItem = _b[1];
    var handleOnSelect = React.useCallback(function (key) {
        setSelectedItem(key);
        onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }, [onChange]);
    if (!options || !Array.isArray(options))
        return null;
    return (React__default["default"].createElement("header", { className: cx('magneto-ui-horizontal-menu', className) },
        React__default["default"].createElement("nav", { className: cx('magneto-ui-horizontal-menu__nav') },
            React__default["default"].createElement("ul", { className: cx('magneto-ui-horizontal-menu__list') }, options.map(function (_a, key) {
                var icon = _a.icon, title = _a.title;
                return (React__default["default"].createElement("li", { key: key, className: cx('magneto-ui-horizontal-menu__button', {
                        'magneto-ui-horizontal-menu__button--active': selectedItem === key
                    }) },
                    React__default["default"].createElement(Button_component.Button, { suffixIcon: icon, buttonText: title, onClick: function () { return handleOnSelect(key); } })));
            })))));
};
/**
 * UI Molecule Component for Horizontal Menu
 */
var HorizontalMenu = Component;

exports.HorizontalMenu = HorizontalMenu;
//# sourceMappingURL=HorizontalMenu.component.js.map
