import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { useSelectContext, SelectContext } from './Select.context.js';
import ArrowDown2 from '../../../../assets/ArrowDown2.svg.js';
import { SelectInput } from './children/SelectInput/SelectInput.component.js';
import { stubTrue } from '../../../../shared/utils/common/stub.util.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import SelectClickout from './children/SelectClickout/SelectClickout.component.js';
import SelectDrawer from './children/SelectDrawer/SelectDrawer.js';
import { SelectListCheck } from './children/SelectListCheck/SelectListCheck.component.js';
import styles from './Select.module.scss.js';

var cx = classNames.bind(styles);
var defaultSelect = function (props) {
    return (React.createElement(Select.Input, __assign({ hideIcon: true, className: cx('select-input', { 'select-input--open': props.open }), actionIcon: ArrowDown2 }, props)));
};
var Component = function (_a) {
    var children = _a.children, _b = _a.renderSelect, renderSelect = _b === void 0 ? defaultSelect : _b, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, options = _a.options, value = _a.value, _d = _a.onChange, onChange = _d === void 0 ? stubTrue : _d, _e = _a.inputReadonly, inputReadonly = _e === void 0 ? false : _e, className = _a.className, getLabel = _a.getLabel;
    var _f = useState(false), open = _f[0], setOpen = _f[1];
    var _g = useState(''), search = _g[0], setSearch = _g[1];
    return (React.createElement(SelectContext.Provider, { value: { options: options, value: value, onSwitch: setOpen, onChange: onChange, search: search, open: open, onSearch: setSearch } },
        React.createElement("div", { className: className },
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
            React.createElement("div", { className: cx('select__list-container'), "data-name": "select-list-container" }, children))));
};
/**
 * @experimental this component is early, so that the interface component and behavrior could change.
 * @deprecated this function will change soon.
 */
var Select = Object.assign(Component, {
    useContext: useSelectContext,
    Input: SelectInput,
    Clickout: SelectClickout,
    Drawer: SelectDrawer,
    ListCheck: SelectListCheck
});

export { Select };
//# sourceMappingURL=Select.component.js.map
