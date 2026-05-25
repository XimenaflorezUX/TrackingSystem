import React, { useState, useMemo } from 'react';
import style from './logo.module.scss.js';

var Component = function (_a) {
    var fallbackImage = _a.fallbackImage, _b = _a.showDefaultFallback, showDefaultFallback = _b === void 0 ? true : _b, _c = _a.isoView, isoView = _c === void 0 ? false : _c, logo = _a.logo, isoType = _a.isoType, alt = _a.alt;
    var _d = useState(false), imageError = _d[0], setImageError = _d[1];
    var handleError = function () {
        setImageError(true);
    };
    var logoSrc = useMemo(function () { return (!imageError ? (isoView ? isoType : logo) : fallbackImage); }, [fallbackImage, imageError, isoType, isoView, logo]);
    var logoWidth = useMemo(function () { return (isoView ? 'magneto-ui-isologo' : 'magneto-ui-logo'); }, [isoView]);
    if (!logoSrc && !showDefaultFallback)
        return null;
    return (React.createElement("img", { className: style[logoWidth], src: logoSrc, alt: alt, width: isoView ? '25px' : '110px', height: "auto", loading: "lazy", onError: handleError }));
};
var LogoComponent = Component;

export { LogoComponent };
//# sourceMappingURL=Logo.component.js.map
