'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var logo_module = require('./logo.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var fallbackImage = _a.fallbackImage, _b = _a.showDefaultFallback, showDefaultFallback = _b === void 0 ? true : _b, _c = _a.isoView, isoView = _c === void 0 ? false : _c, logo = _a.logo, isoType = _a.isoType, alt = _a.alt;
    var _d = React.useState(false), imageError = _d[0], setImageError = _d[1];
    var handleError = function () {
        setImageError(true);
    };
    var logoSrc = React.useMemo(function () { return (!imageError ? (isoView ? isoType : logo) : fallbackImage); }, [fallbackImage, imageError, isoType, isoView, logo]);
    var logoWidth = React.useMemo(function () { return (isoView ? 'magneto-ui-isologo' : 'magneto-ui-logo'); }, [isoView]);
    if (!logoSrc && !showDefaultFallback)
        return null;
    return (React__default["default"].createElement("img", { className: logo_module[logoWidth], src: logoSrc, alt: alt, width: isoView ? '25px' : '110px', height: "auto", loading: "lazy", onError: handleError }));
};
var LogoComponent = Component;

exports.LogoComponent = LogoComponent;
//# sourceMappingURL=Logo.component.js.map
