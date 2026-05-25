'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var env_constants = require('../../../constants/env.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ContainerContext = React.createContext({
    container: env_constants.isClient ? window.document.body : null
});
var ContainerContextProvider = function (_a) {
    var children = _a.children, _b = _a.container, container = _b === void 0 ? null : _b;
    var ctx = React.useMemo(function () {
        var element = container;
        if (!element && env_constants.isClient) {
            element = document.body;
        }
        return {
            container: element
        };
    }, [container]);
    return React__default["default"].createElement(ContainerContext.Provider, { value: ctx }, children);
};

exports.ContainerContext = ContainerContext;
exports.ContainerContextProvider = ContainerContextProvider;
//# sourceMappingURL=container.context.js.map
