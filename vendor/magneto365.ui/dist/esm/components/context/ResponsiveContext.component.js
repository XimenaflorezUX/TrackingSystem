import React, { createContext, useContext, useState, useEffect } from 'react';
import { screenSize } from '../../constants/responsive.constants.js';
import { ResponsiveManagement } from '../../utils/responsive/responsive.util.js';
import { EventDispatcherContext } from './EventDispatcherContext.component.js';

var ResponsiveContext = createContext({ dim: { size: 1366, type: 'md' } });
var desktopDim = { size: screenSize.hd, type: 'hd' };
var mobileDim = { size: screenSize.xs, type: 'xs' };
var ResponsiveContextProvider = function (_a) {
    var children = _a.children, _b = _a.device, device = _b === void 0 ? 'desktop' : _b;
    var eventDispatcher = useContext(EventDispatcherContext);
    var _c = useState(), responsiveManagement = _c[0], setResponsiveManagement = _c[1];
    var _d = useState(device === 'desktop' ? desktopDim : mobileDim), dim = _d[0], setDim = _d[1];
    useEffect(function () {
        if (!responsiveManagement)
            return;
        var unsubscribe = eventDispatcher.subscribe('UPDATE_DIMENSION', function (_a) {
            var dim = _a.dim;
            setDim(dim);
        });
        responsiveManagement.run(eventDispatcher);
        return function () {
            unsubscribe();
        };
    }, [eventDispatcher, responsiveManagement]);
    useEffect(function () {
        setResponsiveManagement(function () { return new ResponsiveManagement(); });
    }, []);
    return React.createElement(ResponsiveContext.Provider, { value: { dim: dim } }, children);
};

export { ResponsiveContext, ResponsiveContextProvider };
//# sourceMappingURL=ResponsiveContext.component.js.map
