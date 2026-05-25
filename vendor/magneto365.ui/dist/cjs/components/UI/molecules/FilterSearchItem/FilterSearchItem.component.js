'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SearchNormal1Gray = require('../../../../assets/SearchNormal1Gray.svg.js');
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
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var FilterSearchItem_module = require('./FilterSearchItem.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterSearchItem = function (_a) {
    var placeholder = _a.placeholder, _b = _a.disabled, disabled = _b === void 0 ? false : _b, loading = _a.loading, handleSearch = _a.handleSearch;
    var inputRef = React.useRef(null);
    if (loading)
        return (React__default["default"].createElement("div", { className: FilterSearchItem_module.skeleton },
            React__default["default"].createElement(Icon_component.IconItem, { icon: SearchNormal1Gray, size: 17 })));
    return (React__default["default"].createElement("div", { className: "".concat(FilterSearchItem_module['magneto-ui-filter-search'], " ").concat(disabled ? FilterSearchItem_module.disabled : '') },
        React__default["default"].createElement(Icon_component.IconItem, { icon: SearchNormal1Gray, size: 17 }),
        React__default["default"].createElement("input", { ref: inputRef, type: "search", placeholder: placeholder, onChange: function (event) { return handleSearch(event, inputRef); }, disabled: disabled })));
};

exports.FilterSearchItem = FilterSearchItem;
//# sourceMappingURL=FilterSearchItem.component.js.map
