'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Checkbox_component = require('../../../../atoms/Checkbox/Checkbox.component.js');
var Select_component = require('../../Select.component.js');
var SelectListCheck_module = require('./SelectListCheck.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SelectListCheck_module);
var defaultRenderItem = function (option) { return React__default["default"].createElement(React__default["default"].Fragment, null, option.label); };
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
    var _d = Select_component.Select.useContext(), options = _d.options, value = _d.value, onChange = _d.onChange, search = _d.search, open = _d.open;
    return (React__default["default"].createElement("ul", { "data-name": "select-list", className: cx('select-list', className, { 'select-list--visible': open }) }, options
        .filter(function (option) { return filter(option, search, value); })
        .map(function (option) { return (React__default["default"].createElement("li", { className: cx('select-list__item'), key: option.id },
        React__default["default"].createElement(Checkbox_component.Checkbox, { type: "box", display: "block", className: cx('select-list__checkbox'), checked: isSelected(option, value), onChange: function (checked) {
                if (checked) {
                    onChange(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], value, true), [option], false));
                }
                else {
                    onChange(value.filter(function (curr) { return curr.id !== option.id; }));
                }
            } }, renderItem(option)))); })));
};
var SelectListCheck = Component;

exports.SelectListCheck = SelectListCheck;
//# sourceMappingURL=SelectListCheck.component.js.map
