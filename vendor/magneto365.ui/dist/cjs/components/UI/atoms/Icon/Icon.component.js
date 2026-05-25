'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var icon_module = require('./icon.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(icon_module);
var Component = function (_a) {
    var fallbackIcon = _a.fallbackIcon, _b = _a.showDefaultFallback, showDefaultFallback = _b === void 0 ? true : _b, icon = _a.icon, _c = _a.hover, hover = _c === void 0 ? false : _c, size = _a.size, className = _a.className, alt = _a.alt, isRotate = _a.isRotate;
    var _d = React.useState(false), imageError = _d[0], setImageError = _d[1];
    var handleError = function () {
        setImageError(true);
    };
    var iconSrc = React.useMemo(function () { return (!imageError ? icon !== null && icon !== void 0 ? icon : undefined : fallbackIcon); }, [fallbackIcon, imageError, icon]);
    var isHover = hover ? cx('magneto-ui-hover') : '';
    var customStyle = size ? { width: size + 'px', height: size + 'px' } : {};
    if (!iconSrc && !showDefaultFallback)
        return null;
    return (React__default["default"].createElement(React.Fragment, null, icon && (React__default["default"].createElement("img", { "data-name": "icon", style: customStyle, className: cx('magneto-ui-icon', { 'magneto-ui-rotate': isRotate }, isHover, className), src: iconSrc, alt: alt !== null && alt !== void 0 ? alt : "".concat(icon, " icon item"), loading: "lazy", width: '25px', onError: handleError }))));
};
/**
 * Atom UI component of Icon for general purpose
 */
var IconItem = Component;

exports.IconItem = IconItem;
//# sourceMappingURL=Icon.component.js.map
