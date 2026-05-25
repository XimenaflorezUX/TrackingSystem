import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './ToggleSwitch.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", { className: cx('magneto-ui-toggle-switch', className) },
        React.createElement("input", __assign({}, props, { className: cx('magneto-ui-toggle-switch__input'), type: "checkbox", ref: ref })),
        React.createElement("div", { className: cx('magneto-ui-toggle-switch__track') },
            React.createElement("span", { className: cx('magneto-ui-toggle-switch__track-slider') }))));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI child component of Toggle.
 */
var ToggleSwitch = Object.assign(Component, {});

export { ToggleSwitch };
//# sourceMappingURL=ToggleSwitch.component.js.map
