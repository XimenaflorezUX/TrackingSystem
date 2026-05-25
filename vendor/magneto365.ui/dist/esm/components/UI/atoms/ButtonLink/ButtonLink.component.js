import React, { useCallback } from 'react';
import { IconItem } from '../Icon/Icon.component.js';
import styles from './ButtonLink.module.scss.js';

var Component = function (_a) {
    var buttonText = _a.buttonText, onClick = _a.onClick, suffixIcon = _a.suffixIcon, prefixIcon = _a.prefixIcon, className = _a.className, _b = _a.iconSize, iconSize = _b === void 0 ? 20 : _b, href = _a.href, rel = _a.rel, target = _a.target, title = _a.title;
    var handleClick = useCallback(function (event) {
        if (onClick) {
            event.preventDefault();
            onClick();
        }
    }, [onClick]);
    return (React.createElement("a", { className: "".concat(className ? className : styles['button-link']), type: "button", onClick: handleClick, href: href, rel: rel, target: target, title: title },
        suffixIcon && (React.createElement(IconItem, { size: iconSize, icon: suffixIcon, hover: true, className: styles['button-link__icon'] })),
        buttonText && React.createElement("p", { className: styles['button-link__text'] }, buttonText),
        prefixIcon && (React.createElement(IconItem, { size: iconSize, icon: prefixIcon, hover: true, className: styles['button-link__icon'] }))));
};
/**
 * UI Atom Component of Save Button
 */
var ButtonLink = Component;

export { ButtonLink };
//# sourceMappingURL=ButtonLink.component.js.map
