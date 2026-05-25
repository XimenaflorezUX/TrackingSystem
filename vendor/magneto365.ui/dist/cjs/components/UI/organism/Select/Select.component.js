'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Select_context = require('./Select.context.js');
var ArrowDown2 = require('../../../../assets/ArrowDown2.svg.js');
var SelectInput_component = require('./children/SelectInput/SelectInput.component.js');
var stub_util = require('../../../../shared/utils/common/stub.util.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var SelectClickout_component = require('./children/SelectClickout/SelectClickout.component.js');
var SelectDrawer = require('./children/SelectDrawer/SelectDrawer.js');
var SelectListCheck_component = require('./children/SelectListCheck/SelectListCheck.component.js');
var Select_module = require('./Select.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Select_module);
var defaultSelect = function (props) {
    return (React__default["default"].createElement(Select.Input, tslib_es6.__assign({ hideIcon: true, className: cx('select-input', { 'select-input--open': props.open }), actionIcon: ArrowDown2 }, props)));
};
var Component = function (_a) {
    var children = _a.children, _b = _a.renderSelect, renderSelect = _b === void 0 ? defaultSelect : _b, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, options = _a.options, value = _a.value, _d = _a.onChange, onChange = _d === void 0 ? stub_util.stubTrue : _d, _e = _a.inputReadonly, inputReadonly = _e === void 0 ? false : _e, className = _a.className, getLabel = _a.getLabel;
    var _f = React.useState(false), open = _f[0], setOpen = _f[1];
    var _g = React.useState(''), search = _g[0], setSearch = _g[1];
    return (React__default["default"].createElement(Select_context.SelectContext.Provider, { value: { options: options, value: value, onSwitch: setOpen, onChange: onChange, search: search, open: open, onSearch: setSearch } },
        React__default["default"].createElement("div", { className: className },
            renderSelect({
                placeholder: placeholder,
                readOnly: inputReadonly,
                onChange: function (_a) {
                    var target = _a.target;
                    return setSearch(target.value);
                },
                type: 'text',
                value: search,
                open: open,
                onClick: function () { return setOpen(true); },
                selected: value,
                getLabel: getLabel
            }),
            React__default["default"].createElement("div", { className: cx('select__list-container'), "data-name": "select-list-container" }, children))));
};
/**
 * @experimental this component is early, so that the interface component and behavrior could change.
 * @deprecated this function will change soon.
 */
var Select = Object.assign(Component, {
    useContext: Select_context.useSelectContext,
    Input: SelectInput_component.SelectInput,
    Clickout: SelectClickout_component,
    Drawer: SelectDrawer,
    ListCheck: SelectListCheck_component.SelectListCheck
});

exports.Select = Select;
//# sourceMappingURL=Select.component.js.map
