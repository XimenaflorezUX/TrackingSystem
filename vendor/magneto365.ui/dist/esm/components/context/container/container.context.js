import React, { createContext, useMemo } from 'react';
import { isClient } from '../../../constants/env.constants.js';

var ContainerContext = createContext({
    container: isClient ? window.document.body : null
});
var ContainerContextProvider = function (_a) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? null : _b;
    var ctx = useMemo(function () {
        var element = container;
        if (!element && isClient) {
            element = document.body;
        }
        return {
            container: element
        };
    }, [container]);
    return React.createElement(ContainerContext.Provider, { value: ctx }, children);
};

export { ContainerContext, ContainerContextProvider };
//# sourceMappingURL=container.context.js.map
