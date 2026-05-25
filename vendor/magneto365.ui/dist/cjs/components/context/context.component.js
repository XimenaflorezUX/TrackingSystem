'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var EventDispatcherContext_component = require('./EventDispatcherContext.component.js');
var ResponsiveContext_component = require('./ResponsiveContext.component.js');
var container_context = require('./container/container.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ContextAppProvider = function (_a) {
    var children = _a.children, device = _a.device, container = _a.container;
    return (React__default["default"].createElement(EventDispatcherContext_component.EventDispatcherContextProvider, null,
        React__default["default"].createElement(container_context.ContainerContextProvider, { container: container },
            React__default["default"].createElement(ResponsiveContext_component.ResponsiveContextProvider, { device: device }, children))));
};

exports.ContextAppProvider = ContextAppProvider;
//# sourceMappingURL=context.component.js.map
