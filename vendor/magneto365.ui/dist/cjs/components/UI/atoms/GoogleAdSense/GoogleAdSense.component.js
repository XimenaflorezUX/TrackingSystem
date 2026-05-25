'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var googleAdSense_constants = require('../../../../constants/googleAdSense.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Google AdSense component
 */
var Component = function (_a) {
    var size = _a.size, style = _a.style, className = _a.className, props = tslib_es6.__rest(_a, ["size", "style", "className"]);
    var sizeStyles = size ? googleAdSense_constants.sizeMap[size] : {};
    React.useEffect(function () {
        try {
            var adsbygoogle = window.adsbygoogle || [];
            adsbygoogle.push({});
        }
        catch (_a) {
            return;
        }
    }, []);
    return React__default["default"].createElement("ins", tslib_es6.__assign({ className: "adsbygoogle ".concat(className !== null && className !== void 0 ? className : ''), style: tslib_es6.__assign(tslib_es6.__assign({}, sizeStyles), style) }, props));
};
var GoogleAdSense = Component;

exports.GoogleAdSense = GoogleAdSense;
//# sourceMappingURL=GoogleAdSense.component.js.map
