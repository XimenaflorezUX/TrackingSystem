import React from 'react';
import { EventDispatcherContextProvider } from './EventDispatcherContext.component.js';
import { ResponsiveContextProvider } from './ResponsiveContext.component.js';
import { ContainerContextProvider } from './container/container.context.js';

var ContextAppProvider = function (_a) {
    var children = _a.children, device = _a.device, container = _a.container;
    return (React.createElement(EventDispatcherContextProvider, null,
        React.createElement(ContainerContextProvider, { container: container },
            React.createElement(ResponsiveContextProvider, { device: device }, children))));
};

export { ContextAppProvider };
//# sourceMappingURL=context.component.js.map
