'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ReactDOM = require('react-dom');
var React = require('react');
var container_context = require('../../../context/container/container.context.js');
var index = require('../../../../utils/react/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var Portal = function (_a) {
    var key = _a.key, containerProp = _a.container, children = _a.children;
    var container = React.useContext(container_context.ContainerContext).container;
    var finalContainer = React.useMemo(function () {
        if (!containerProp)
            return container;
        if (!index.isRef(containerProp))
            return containerProp;
        return containerProp.current;
    }, [containerProp, container]);
    return finalContainer ? ReactDOM__default["default"].createPortal(children, finalContainer, key) : null;
};

exports.Portal = Portal;
//# sourceMappingURL=Portal.component.js.map
