import React, { createContext } from 'react';
import EventDispatcher from '../../utils/eventDispatcher/eventDispatcher.util.js';

var eventDispatcher = new EventDispatcher();
var EventDispatcherContext = createContext(eventDispatcher);
var EventDispatcherContextProvider = function (_a) {
    var children = _a.children;
    return React.createElement(EventDispatcherContext.Provider, { value: eventDispatcher }, children);
};

export { EventDispatcherContext, EventDispatcherContextProvider };
//# sourceMappingURL=EventDispatcherContext.component.js.map
