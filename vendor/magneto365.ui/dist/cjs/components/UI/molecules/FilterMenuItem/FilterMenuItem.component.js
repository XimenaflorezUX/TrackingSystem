'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var SmallClose = require('../../../../assets/SmallClose.svg.js');
var formatNumbers_util = require('../../../../shared/utils/common/formatNumbers.util.js');
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
var FilterMenuItem_module = require('./FilterMenuItem.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterMenuItem = function (_a) {
    var id = _a.id, label = _a.label, total = _a.total, field = _a.field, multiple = _a.multiple, loading = _a.loading, type = _a.type, isApplied = _a.isApplied, hasTotal = _a.hasTotal, _b = _a.isSearched, isSearched = _b === void 0 ? false : _b, customClass = _a.customClass, customId = _a.customId, _c = _a.hiddenCount, hiddenCount = _c === void 0 ? false : _c, setIsApplied = _a.setIsApplied, props = tslib_es6.__rest(_a, ["id", "label", "total", "field", "multiple", "loading", "type", "isApplied", "hasTotal", "isSearched", "customClass", "customId", "hiddenCount", "setIsApplied"]);
    var displayOutput = React.useMemo(function () {
        if (isApplied)
            return React__default["default"].createElement(Icon_component.IconItem, { icon: SmallClose, size: 17 });
        if (!hasTotal || hiddenCount)
            return React__default["default"].createElement(React.Fragment, null);
        return React__default["default"].createElement("div", { className: FilterMenuItem_module['magneto-ui-filter-item__counter'] }, formatNumbers_util.formatNumber(total));
    }, [total, isApplied, hasTotal, hiddenCount]);
    var disabled = React.useMemo(function () {
        return isSearched || isApplied || hiddenCount ? false : !total;
    }, [total, isApplied, isSearched, hiddenCount]);
    var className = React.useMemo(function () {
        return isApplied ? FilterMenuItem_module.selected : isSearched ? FilterMenuItem_module.isSearched : hiddenCount ? '' : !total && FilterMenuItem_module.disabled;
    }, [total, isApplied, isSearched, hiddenCount]);
    var handleClick = React.useCallback(function () {
        var customId = type === 'RANGE' ? { id: id, from: props.from, to: props.to } : id;
        setIsApplied({ id: customId, field: field, isApplied: isApplied, multiple: multiple });
    }, [setIsApplied, id, field, isApplied, multiple, type, props.from, props.to]);
    if (loading)
        return React__default["default"].createElement("div", { className: FilterMenuItem_module.skeleton });
    return (React__default["default"].createElement("button", { id: customId, className: "".concat(FilterMenuItem_module['magneto-ui-filter-item'], " ").concat(className, " ").concat(customClass ? customClass : ''), title: label, onClick: handleClick, disabled: disabled },
        React__default["default"].createElement("span", null, label),
        displayOutput));
};

exports.FilterMenuItem = FilterMenuItem;
//# sourceMappingURL=FilterMenuItem.component.js.map
