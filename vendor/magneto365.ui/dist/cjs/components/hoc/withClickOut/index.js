'use strict';

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var container_context = require('../../context/container/container.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var withClickOut = function (WrappedComponent, containerProps) {
    if (containerProps === void 0) { containerProps = {}; }
    var Component = function (props) {
        var container = React.useContext(container_context.ContainerContext).container;
        var _a = React.useState(false), clickOut = _a[0], setClickOut = _a[1];
        var ref = React.useRef(null);
        var handleClick = React.useCallback(function (e) {
            if (clickOut) {
                if (ref.current && !ref.current.contains(e.target)) {
                    setClickOut(!clickOut);
                }
            }
        }, [clickOut]);
        React.useEffect(function () {
            container === null || container === void 0 ? void 0 : container.addEventListener('click', handleClick);
            return function () {
                container === null || container === void 0 ? void 0 : container.removeEventListener('click', handleClick);
            };
        }, [handleClick, container]);
        return (React__default["default"].createElement("div", tslib_es6.__assign({ ref: ref }, containerProps),
            React__default["default"].createElement(WrappedComponent, tslib_es6.__assign({ clickOut: clickOut, setClickOut: setClickOut }, props))));
    };
    return Component;
};

module.exports = withClickOut;
//# sourceMappingURL=index.js.map
