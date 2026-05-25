'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ResponsiveContext_component = require('../../context/ResponsiveContext.component.js');
var responsive_constants = require('../../../constants/responsive.constants.js');

var screenList = Object.entries(responsive_constants.screenSize).sort(function (a, b) { return a[1] - b[1]; });
var useMediaQuery = function (defaultValue, options) {
    var _a = React.useContext(ResponsiveContext_component.ResponsiveContext).dim, dim = _a === void 0 ? { size: responsive_constants.screenSize.xs, type: 'xs' } : _a;
    var component = React.useMemo(function () {
        // nullish
        if (options == undefined)
            return defaultValue;
        // search until the max resolution available
        var screen = screenList.find(function (_a) {
            var key = _a[0], value = _a[1];
            return value >= dim.size && options[key] !== undefined;
        });
        if (screen != undefined) {
            var screenType = screen[0];
            return options[screenType];
        }
        return defaultValue;
    }, [dim, defaultValue, options]);
    return component;
};

exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=index.js.map
