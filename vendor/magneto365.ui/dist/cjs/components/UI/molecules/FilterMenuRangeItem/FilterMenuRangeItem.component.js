'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FilterMenuRangeItem_module = require('./FilterMenuRangeItem.module.scss.js');
var filterEdit = require('../../../../assets/filter-edit.svg.js');
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
var FilterMenuRangeItem_constant = require('./FilterMenuRangeItem.constant.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterMenuRangeItem = function (_a) {
    var to = _a.to, from = _a.from, loading = _a.loading, id = _a.id, separatorText = _a.separatorText, field = _a.field, isApplied = _a.isApplied, multiple = _a.multiple, setIsApplied = _a.setIsApplied, props = tslib_es6.__rest(_a, ["to", "from", "loading", "id", "separatorText", "field", "isApplied", "multiple", "setIsApplied"]);
    var _b = React.useState(FilterMenuRangeItem_constant.DEFAULT_RANGE_ERRORS), error = _b[0], setError = _b[1];
    var dataType = (['date', 'number'].includes(props.dataType || '') ? props.dataType : 'number');
    var _c = React.useState({
        from: FilterMenuRangeItem_constant.MAPPER_RANGE_TYPE[dataType].transformDefaultValue(from),
        to: FilterMenuRangeItem_constant.MAPPER_RANGE_TYPE[dataType].transformDefaultValue(to)
    }), values = _c[0], setValues = _c[1];
    var onApply = React.useCallback(function () {
        var _a;
        if (!values.from || !values.to) {
            setError({ from: !values.from, to: !values.to });
            return;
        }
        var validator = (_a = FilterMenuRangeItem_constant.MAPPER_RANGE_TYPE[dataType]) === null || _a === void 0 ? void 0 : _a.validator;
        var resultValidation = validator === null || validator === void 0 ? void 0 : validator(values.from, values.to);
        if (resultValidation) {
            setError(resultValidation);
            return;
        }
        setError(FilterMenuRangeItem_constant.DEFAULT_RANGE_ERRORS);
        var customId = { id: id, from: values.from, to: values.to };
        setIsApplied({ id: customId, field: field, isApplied: isApplied, multiple: multiple });
    }, [id, values, setIsApplied, field, isApplied, multiple, dataType]);
    var onChange = React.useCallback(function (key, value) {
        var _a;
        setValues(tslib_es6.__assign(tslib_es6.__assign({}, values), (_a = {}, _a[key] = value, _a)));
    }, [values]);
    if (loading)
        return React__default["default"].createElement("div", { className: FilterMenuRangeItem_module.skeleton });
    return (React__default["default"].createElement("div", { className: FilterMenuRangeItem_module['range-filter'] },
        React__default["default"].createElement("input", { className: "".concat(FilterMenuRangeItem_module['range-filter__input'], " ").concat((error === null || error === void 0 ? void 0 : error.from) ? FilterMenuRangeItem_module['range-filter__input--error'] : ''), type: dataType, value: values.from, onChange: function (e) {
                onChange('from', e.target.value);
                if (error)
                    setError(FilterMenuRangeItem_constant.DEFAULT_RANGE_ERRORS);
            } }),
        separatorText && React__default["default"].createElement("span", { className: FilterMenuRangeItem_module['range-filter__separator'] }, separatorText),
        React__default["default"].createElement("input", { className: "".concat(FilterMenuRangeItem_module['range-filter__input'], "  ").concat((error === null || error === void 0 ? void 0 : error.to) ? FilterMenuRangeItem_module['range-filter__input--error'] : ''), type: dataType, value: values.to, onChange: function (e) {
                onChange('to', e.target.value);
                if (error)
                    setError(FilterMenuRangeItem_constant.DEFAULT_RANGE_ERRORS);
            } }),
        React__default["default"].createElement("button", { className: FilterMenuRangeItem_module['range-filter__button'], onClick: onApply, "aria-label": "Aplicar filtro" },
            React__default["default"].createElement(Icon_component.IconItem, { icon: filterEdit, size: 17 }))));
};

exports.FilterMenuRangeItem = FilterMenuRangeItem;
//# sourceMappingURL=FilterMenuRangeItem.component.js.map
