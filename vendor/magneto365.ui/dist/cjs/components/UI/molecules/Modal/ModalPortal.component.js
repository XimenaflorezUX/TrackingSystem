'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var env_constants = require('../../../../constants/env.constants.js');
var container_context = require('../../../context/container/container.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var ModalPortal = function (_a) {
    var children = _a.children;
    var container = React.useContext(container_context.ContainerContext).container;
    var portalNode = React.useRef(null);
    var _b = React.useState(false), mounted = _b[0], setMounted = _b[1];
    React.useEffect(function () {
        if (env_constants.isServer || !container)
            return;
        portalNode.current = document.createElement('div');
        portalNode.current.classList.add('modal-ui-drawer');
        container.appendChild(portalNode.current);
        setMounted(true);
        return function () {
            if (portalNode.current) {
                container.removeChild(portalNode.current);
            }
        };
    }, [container]);
    return mounted && portalNode.current ? ReactDOM__default["default"].createPortal(children, portalNode.current) : null;
};

exports.ModalPortal = ModalPortal;
//# sourceMappingURL=ModalPortal.component.js.map
