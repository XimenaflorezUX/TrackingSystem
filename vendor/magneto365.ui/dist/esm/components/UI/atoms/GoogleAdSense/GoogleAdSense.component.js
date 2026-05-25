import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useEffect } from 'react';
import { sizeMap } from '../../../../constants/googleAdSense.constants.js';

/**
 * Google AdSense component
 */
var Component = function (_a) {
    var size = _a.size, style = _a.style, className = _a.className, props = __rest(_a, ["size", "style", "className"]);
    var sizeStyles = size ? sizeMap[size] : {};
    useEffect(function () {
        try {
            var adsbygoogle = window.adsbygoogle || [];
            adsbygoogle.push({});
        }
        catch (_a) {
            return;
        }
    }, []);
    return React.createElement("ins", __assign({ className: "adsbygoogle ".concat(className !== null && className !== void 0 ? className : ''), style: __assign(__assign({}, sizeStyles), style) }, props));
};
var GoogleAdSense = Component;

export { GoogleAdSense };
//# sourceMappingURL=GoogleAdSense.component.js.map
