'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var eventDispatcher_util = require('../../utils/eventDispatcher/eventDispatcher.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var eventDispatcher = new eventDispatcher_util();
var EventDispatcherContext = React.createContext(eventDispatcher);
var EventDispatcherContextProvider = function (_a) {
    var children = _a.children;
    return React__default["default"].createElement(EventDispatcherContext.Provider, { value: eventDispatcher }, children);
};

exports.EventDispatcherContext = EventDispatcherContext;
exports.EventDispatcherContextProvider = EventDispatcherContextProvider;
//# sourceMappingURL=EventDispatcherContext.component.js.map
