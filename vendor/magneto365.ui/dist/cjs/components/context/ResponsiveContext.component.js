'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var responsive_constants = require('../../constants/responsive.constants.js');
var responsive_util = require('../../utils/responsive/responsive.util.js');
var EventDispatcherContext_component = require('./EventDispatcherContext.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ResponsiveContext = React.createContext({ dim: { size: 1366, type: 'md' } });
var desktopDim = { size: responsive_constants.screenSize.hd, type: 'hd' };
var mobileDim = { size: responsive_constants.screenSize.xs, type: 'xs' };
var ResponsiveContextProvider = function (_a) {
    var children = _a.children, _b = _a.device, device = _b === void 0 ? 'desktop' : _b;
    var eventDispatcher = React.useContext(EventDispatcherContext_component.EventDispatcherContext);
    var _c = React.useState(), responsiveManagement = _c[0], setResponsiveManagement = _c[1];
    var _d = React.useState(device === 'desktop' ? desktopDim : mobileDim), dim = _d[0], setDim = _d[1];
    React.useEffect(function () {
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
    React.useEffect(function () {
        setResponsiveManagement(function () { return new responsive_util.ResponsiveManagement(); });
    }, []);
    return React__default["default"].createElement(ResponsiveContext.Provider, { value: { dim: dim } }, children);
};

exports.ResponsiveContext = ResponsiveContext;
exports.ResponsiveContextProvider = ResponsiveContextProvider;
//# sourceMappingURL=ResponsiveContext.component.js.map
