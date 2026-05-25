import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { stubTrue } from '../../../../shared/utils/common/stub.util.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './Checkbox.module.scss.js';

var cx = classNames.bind(styles);
var defaultCheck = function (_a) {
    var type = _a.type, checked = _a.checked;
    if (type === 'background')
        return;
    return (React.createElement("div", { "aria-checked": checked, role: "checkbox", className: cx('checkbox__box', { 'checkbox__box--checked': checked }) }, checked ? React.createElement(React.Fragment, null, "\u2713") : null));
};
var Component = function (_a) {
    var id = _a.id, checked = _a.checked, _b = _a.onChange, onChange = _b === void 0 ? stubTrue : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? 'box' : _c, className = _a.className, _d = _a.display, display = _d === void 0 ? 'inline' : _d, _e = _a.renderCheck, renderCheck = _e === void 0 ? defaultCheck : _e, rest = __rest(_a, ["id", "checked", "onChange", "children", "type", "className", "display", "renderCheck"]);
    return (React.createElement("label", { className: cx('checkbox', "checkbox--".concat(display), className, {
            'checkbox--checked': checked,
            'checkbox--background': type === 'background'
        }), "data-name": "checkbox-container", htmlFor: id },
        renderCheck({ checked: checked, type: type }),
        React.createElement("input", __assign({ "data-name": "checkbox", checked: checked, onChange: function (_a) {
                var target = _a.target;
                return onChange(target.checked);
            }, type: "checkbox", id: id }, rest)),
        children));
};
var Checkbox = Component;

export { Checkbox };
//# sourceMappingURL=Checkbox.component.js.map
