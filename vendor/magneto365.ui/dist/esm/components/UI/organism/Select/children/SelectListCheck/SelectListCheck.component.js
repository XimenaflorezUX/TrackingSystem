import { __spreadArray } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { Checkbox } from '../../../../atoms/Checkbox/Checkbox.component.js';
import { Select } from '../../Select.component.js';
import styles from './SelectListCheck.module.scss.js';

var cx = classNames.bind(styles);
var defaultRenderItem = function (option) { return React.createElement(React.Fragment, null, option.label); };
var isSelected = function (option, value) {
    return value.findIndex(function (_a) {
        var id = _a.id;
        return option.id === id;
    }) >= 0;
};
var defaultFilter = function (option, searchValue) {
    var _a, _b;
    return (_b = (_a = option.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(searchValue.toLowerCase())) !== null && _b !== void 0 ? _b : true;
};
var Component = function (_a) {
    var className = _a.className, _b = _a.renderItem, renderItem = _b === void 0 ? defaultRenderItem : _b, _c = _a.filter, filter = _c === void 0 ? defaultFilter : _c;
    var _d = Select.useContext(), options = _d.options, value = _d.value, onChange = _d.onChange, search = _d.search, open = _d.open;
    return (React.createElement("ul", { "data-name": "select-list", className: cx('select-list', className, { 'select-list--visible': open }) }, options
        .filter(function (option) { return filter(option, search, value); })
        .map(function (option) { return (React.createElement("li", { className: cx('select-list__item'), key: option.id },
        React.createElement(Checkbox, { type: "box", display: "block", className: cx('select-list__checkbox'), checked: isSelected(option, value), onChange: function (checked) {
                if (checked) {
                    onChange(__spreadArray(__spreadArray([], value, true), [option], false));
                }
                else {
                    onChange(value.filter(function (curr) { return curr.id !== option.id; }));
                }
            } }, renderItem(option)))); })));
};
var SelectListCheck = Component;

export { SelectListCheck };
//# sourceMappingURL=SelectListCheck.component.js.map
