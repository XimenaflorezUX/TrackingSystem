import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './Button.module.scss.js';

var cx = classNames.bind(styles);
/**
 * Primary action atom — Magneto Design System.
 *
 * Supports 7 color variants, 4 sizes (xl / lg / md / sm) and all interactive
 * states: Default · Hover · Active · Focus · Disabled.
 *
 * @example
 * <Button variant="blue" size="md" iconLeft={<Icon />}>
 *   Guardar
 * </Button>
 *
 * @param variant  - Visual color: 'blue' | 'green' | 'grey' | 'danger' | 'ghost' | 'white' | 'light-blue'
 * @param size     - Height scale: 'xl' (52px) | 'lg' (40px) | 'md' (32px) | 'sm' (28px)
 * @param iconLeft  - Leading icon node (aria-hidden)
 * @param iconRight - Trailing icon node (aria-hidden)
 * @param fullWidth - Stretch to 100% container width
 */
var BaseComponent = function (_a, ref) {
    _a.addHover; var children = _a.children, buttonText = _a.buttonText, className = _a.className, disabled = _a.disabled, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, iconLeft = _a.iconLeft, iconRight = _a.iconRight, prefixIcon = _a.prefixIcon, _c = _a.size, size = _c === void 0 ? 'md' : _c, suffixIcon = _a.suffixIcon, _d = _a.type, type = _d === void 0 ? 'button' : _d, _e = _a.variant, variant = _e === void 0 ? 'blue' : _e, props = __rest(_a, ["addHover", "children", "buttonText", "className", "disabled", "fullWidth", "iconLeft", "iconRight", "prefixIcon", "size", "suffixIcon", "type", "variant"]);
    var startIcon = iconLeft !== null && iconLeft !== void 0 ? iconLeft : prefixIcon;
    var endIcon = iconRight !== null && iconRight !== void 0 ? iconRight : suffixIcon;
    var label = children !== null && children !== void 0 ? children : buttonText;
    return (React.createElement("button", __assign({}, props, { ref: ref, type: type, disabled: disabled, "data-lib": "magneto-ui", "data-slot": "button", "data-variant": variant, "data-size": size, "aria-disabled": disabled, className: cx('magneto-ui-button', "magneto-ui-button--".concat(variant), "magneto-ui-button--".concat(size), fullWidth ? 'magneto-ui-button--full-width' : undefined, disabled ? 'magneto-ui-button--disabled' : undefined, className) }),
        startIcon && (React.createElement("span", { className: cx('magneto-ui-button__icon'), "aria-hidden": "true" }, startIcon)),
        label && (React.createElement("span", { className: cx('magneto-ui-button__label') }, label)),
        endIcon && (React.createElement("span", { className: cx('magneto-ui-button__icon'), "aria-hidden": "true" }, endIcon))));
};
var Component = forwardRef(BaseComponent);
var Button = Object.assign(Component, {});

export { Button };
//# sourceMappingURL=Button.component.js.map
