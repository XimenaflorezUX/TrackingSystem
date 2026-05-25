import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import React, { useCallback, useMemo } from 'react';
import { FilterMenuItem } from '../../UI/molecules/FilterMenuItem/FilterMenuItem.component.js';
import { FilterMenuRangeItem } from '../../UI/molecules/FilterMenuRangeItem/FilterMenuRangeItem.component.js';

var useFilterRendering = function (_a) {
    var options = _a.options, appliedOption = _a.appliedOption, hasntOptions = _a.hasntOptions, hasTotal = _a.hasTotal, handleOptionSelected = _a.handleOptionSelected, props = _a.props;
    var renderItem = useCallback(function (opt, key) {
        if (key === void 0) { key = 0; }
        var FilterItem = opt.type === 'custom' && props.type === 'RANGE' ? FilterMenuRangeItem : FilterMenuItem;
        return React.createElement(FilterItem, __assign(__assign({ key: "".concat(key, "-").concat(opt.label) }, opt), { field: props.field, multiple: props.multiple, loading: props.loading, type: props.type, dataType: (props.dataType || opt.dataType), hasTotal: hasTotal, setIsApplied: function (filter) { return handleOptionSelected(filter); } }));
    }, [hasTotal, handleOptionSelected, props]);
    var optionsToRender = useMemo(function () {
        if (appliedOption)
            return [renderItem(appliedOption)];
        if (hasntOptions)
            return [];
        return options.map(renderItem);
    }, [options, appliedOption, renderItem, hasntOptions]);
    var horizontalOptionsToRender = useMemo(function () {
        return options.map(function (opt, key) {
            return React.createElement(FilterMenuItem, __assign(__assign({ key: "".concat(key, "-").concat(opt.label) }, opt), { field: props.field, multiple: props.multiple, loading: props.loading, type: props.type, hasTotal: hasTotal, setIsApplied: function (filter) { return handleOptionSelected(filter); } }));
        });
    }, [options, props, hasTotal, handleOptionSelected]);
    return {
        optionsToRender: optionsToRender,
        horizontalOptionsToRender: horizontalOptionsToRender
    };
};

export { useFilterRendering };
//# sourceMappingURL=useFilterRendering.js.map
