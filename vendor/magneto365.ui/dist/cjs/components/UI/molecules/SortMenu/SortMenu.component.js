'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ListSortMenu_component = require('../ListSortMenu/ListSortMenu.component.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
var sortBar_constants = require('../../../../constants/stories/sortBar.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
var Popover_component = require('../../atoms/Popover/Popover.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var index = require('../../../hoc/withClickOut/index.js');
var SortMenu_module = require('./SortMenu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SortMenu = function (_a) {
    var orderFields = _a.orderFields, textOrderFilter = _a.textOrderFilter, setFilter = _a.setFilter, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, loading = _a.loading, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c;
    var buttonTextRef = React.useRef(null);
    var listMenuProps = React.useMemo(function () {
        return {
            orderFields: orderFields,
            setFilter: setFilter,
            setShowPopover: setClickOut,
            textOrderFilter: textOrderFilter
        };
    }, [orderFields, textOrderFilter, setFilter, setClickOut]);
    var getButtonWidth = function () {
        if (buttonTextRef.current) {
            var rect = buttonTextRef.current.getBoundingClientRect();
            return rect.width + 42;
        }
        return 180;
    };
    return (React__default["default"].createElement(Popover_component.Popover, { widthBase: getButtonWidth(), show: clickOut, content: React__default["default"].createElement(ListSortMenu_component, tslib_es6.__assign({}, listMenuProps)), positionX: "left", positionY: "bottom", style: { height: '75%' } },
        React__default["default"].createElement("button", { className: "".concat(SortMenu_module['magneto-ui-btn-menu'], " ").concat(loading && SortMenu_module.disabled), title: textOrderFilter, onClick: function () { return setClickOut(!clickOut); }, disabled: loading },
            React__default["default"].createElement("p", { className: SortMenu_module['magneto-ui-btn-text'], ref: buttonTextRef }, textOrderFilter),
            React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, sortBar_constants.menuSortButton, { isRotate: clickOut })))));
};
var SortMenu$1 = index(SortMenu, { className: SortMenu_module['magneto-ui-sort-menu-container'] });

module.exports = SortMenu$1;
//# sourceMappingURL=SortMenu.component.js.map
