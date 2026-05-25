'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var env_constants = require('../../../../constants/env.constants.js');
var container_context = require('../../../context/container/container.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var DrawerPortal = function (_a) {
    var children = _a.children, customContainer = _a.customContainer;
    var portalNode = React.useRef(null);
    var container = React.useContext(container_context.ContainerContext).container;
    var _b = React.useState(false), mounted = _b[0], setMounted = _b[1];
    React.useEffect(function () {
        if (env_constants.isServer || !container)
            return;
        portalNode.current = document.createElement('div');
        portalNode.current.classList.add('magneto-ui-drawer');
        (customContainer === null || customContainer === void 0 ? void 0 : customContainer.appendChild(portalNode.current)) || container.appendChild(portalNode.current);
        setMounted(true);
        return function () {
            if (portalNode.current)
                (customContainer || container).removeChild(portalNode.current);
        };
    }, [container, customContainer]);
    return mounted && portalNode.current ? ReactDOM__default["default"].createPortal(children, portalNode.current) : null;
};

exports.DrawerPortal = DrawerPortal;
//# sourceMappingURL=DrawerPortal.js.map
