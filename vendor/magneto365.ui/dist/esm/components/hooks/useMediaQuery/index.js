import { useContext, useMemo } from 'react';
import { ResponsiveContext } from '../../context/ResponsiveContext.component.js';
import { screenSize } from '../../../constants/responsive.constants.js';

var screenList = Object.entries(screenSize).sort(function (a, b) { return a[1] - b[1]; });
var useMediaQuery = function (defaultValue, options) {
    var _a = useContext(ResponsiveContext).dim, dim = _a === void 0 ? { size: screenSize.xs, type: 'xs' } : _a;
    var component = useMemo(function () {
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

export { useMediaQuery };
//# sourceMappingURL=index.js.map
