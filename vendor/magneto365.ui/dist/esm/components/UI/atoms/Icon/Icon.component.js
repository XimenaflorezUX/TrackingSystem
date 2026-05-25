import React, { useState, useMemo, Fragment } from 'react';
import styles from './icon.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var fallbackIcon = _a.fallbackIcon, _b = _a.showDefaultFallback, showDefaultFallback = _b === void 0 ? true : _b, icon = _a.icon, _c = _a.hover, hover = _c === void 0 ? false : _c, size = _a.size, className = _a.className, alt = _a.alt, isRotate = _a.isRotate;
    var _d = useState(false), imageError = _d[0], setImageError = _d[1];
    var handleError = function () {
        setImageError(true);
    };
    var iconSrc = useMemo(function () { return (!imageError ? icon !== null && icon !== void 0 ? icon : undefined : fallbackIcon); }, [fallbackIcon, imageError, icon]);
    var isHover = hover ? cx('magneto-ui-hover') : '';
    var customStyle = size ? { width: size + 'px', height: size + 'px' } : {};
    if (!iconSrc && !showDefaultFallback)
        return null;
    return (React.createElement(Fragment, null, icon && (React.createElement("img", { "data-name": "icon", style: customStyle, className: cx('magneto-ui-icon', { 'magneto-ui-rotate': isRotate }, isHover, className), src: iconSrc, alt: alt !== null && alt !== void 0 ? alt : "".concat(icon, " icon item"), loading: "lazy", width: '25px', onError: handleError }))));
};
/**
 * Atom UI component of Icon for general purpose
 */
var IconItem = Component;

export { IconItem };
//# sourceMappingURL=Icon.component.js.map
