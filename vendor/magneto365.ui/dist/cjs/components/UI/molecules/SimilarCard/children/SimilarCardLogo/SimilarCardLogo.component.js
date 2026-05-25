'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var SimilarCardLogo_module = require('./SimilarCardLogo.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var noLogo = require('../../../../../../assets/noLogo.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SimilarCardLogo_module);
var Component = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, _b = _a.hideLogo, hideLogo = _b === void 0 ? false : _b;
    if (hideLogo)
        return null;
    return (React__default["default"].createElement("img", { className: cx("similar-card-logo", className), src: src || noLogo, alt: (alt === null || alt === void 0 ? void 0 : alt.toLowerCase()) || 'company-logo' }));
};
var SimilarCardLogo = Component;

exports.SimilarCardLogo = SimilarCardLogo;
//# sourceMappingURL=SimilarCardLogo.component.js.map
