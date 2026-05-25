'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FilterMenuItem_component = require('../../UI/molecules/FilterMenuItem/FilterMenuItem.component.js');
var FilterMenuRangeItem_component = require('../../UI/molecules/FilterMenuRangeItem/FilterMenuRangeItem.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var useFilterRendering = function (_a) {
    var options = _a.options, appliedOption = _a.appliedOption, hasntOptions = _a.hasntOptions, hasTotal = _a.hasTotal, handleOptionSelected = _a.handleOptionSelected, props = _a.props;
    var renderItem = React.useCallback(function (opt, key) {
        if (key === void 0) { key = 0; }
        var FilterItem = opt.type === 'custom' && props.type === 'RANGE' ? FilterMenuRangeItem_component.FilterMenuRangeItem : FilterMenuItem_component.FilterMenuItem;
        return React__default["default"].createElement(FilterItem, tslib_es6.__assign(tslib_es6.__assign({ key: "".concat(key, "-").concat(opt.label) }, opt), { field: props.field, multiple: props.multiple, loading: props.loading, type: props.type, dataType: (props.dataType || opt.dataType), hasTotal: hasTotal, setIsApplied: function (filter) { return handleOptionSelected(filter); } }));
    }, [hasTotal, handleOptionSelected, props]);
    var optionsToRender = React.useMemo(function () {
        if (appliedOption)
            return [renderItem(appliedOption)];
        if (hasntOptions)
            return [];
        return options.map(renderItem);
    }, [options, appliedOption, renderItem, hasntOptions]);
    var horizontalOptionsToRender = React.useMemo(function () {
        return options.map(function (opt, key) {
            return React__default["default"].createElement(FilterMenuItem_component.FilterMenuItem, tslib_es6.__assign(tslib_es6.__assign({ key: "".concat(key, "-").concat(opt.label) }, opt), { field: props.field, multiple: props.multiple, loading: props.loading, type: props.type, hasTotal: hasTotal, setIsApplied: function (filter) { return handleOptionSelected(filter); } }));
        });
    }, [options, props, hasTotal, handleOptionSelected]);
    return {
        optionsToRender: optionsToRender,
        horizontalOptionsToRender: horizontalOptionsToRender
    };
};

exports.useFilterRendering = useFilterRendering;
//# sourceMappingURL=useFilterRendering.js.map
