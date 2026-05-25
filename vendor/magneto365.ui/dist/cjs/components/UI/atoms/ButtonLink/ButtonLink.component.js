'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var ButtonLink_module = require('./ButtonLink.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var buttonText = _a.buttonText, onClick = _a.onClick, suffixIcon = _a.suffixIcon, prefixIcon = _a.prefixIcon, className = _a.className, _b = _a.iconSize, iconSize = _b === void 0 ? 20 : _b, href = _a.href, rel = _a.rel, target = _a.target, title = _a.title;
    var handleClick = React.useCallback(function (event) {
        if (onClick) {
            event.preventDefault();
            onClick();
        }
    }, [onClick]);
    return (React__default["default"].createElement("a", { className: "".concat(className ? className : ButtonLink_module['button-link']), type: "button", onClick: handleClick, href: href, rel: rel, target: target, title: title },
        suffixIcon && (React__default["default"].createElement(Icon_component.IconItem, { size: iconSize, icon: suffixIcon, hover: true, className: ButtonLink_module['button-link__icon'] })),
        buttonText && React__default["default"].createElement("p", { className: ButtonLink_module['button-link__text'] }, buttonText),
        prefixIcon && (React__default["default"].createElement(Icon_component.IconItem, { size: iconSize, icon: prefixIcon, hover: true, className: ButtonLink_module['button-link__icon'] }))));
};
/**
 * UI Atom Component of Save Button
 */
var ButtonLink = Component;

exports.ButtonLink = ButtonLink;
//# sourceMappingURL=ButtonLink.component.js.map
