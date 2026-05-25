import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import React, { useContext, useState, useRef, useCallback, useEffect } from 'react';
import { ContainerContext } from '../../context/container/container.context.js';

var withClickOut = function (WrappedComponent, containerProps) {
    if (containerProps === void 0) { containerProps = {}; }
    var Component = function (props) {
        var container = useContext(ContainerContext).container;
        var _a = useState(false), clickOut = _a[0], setClickOut = _a[1];
        var ref = useRef(null);
        var handleClick = useCallback(function (e) {
            if (clickOut) {
                if (ref.current && !ref.current.contains(e.target)) {
                    setClickOut(!clickOut);
                }
            }
        }, [clickOut]);
        useEffect(function () {
            container === null || container === void 0 ? void 0 : container.addEventListener('click', handleClick);
            return function () {
                container === null || container === void 0 ? void 0 : container.removeEventListener('click', handleClick);
            };
        }, [handleClick, container]);
        return (React.createElement("div", __assign({ ref: ref }, containerProps),
            React.createElement(WrappedComponent, __assign({ clickOut: clickOut, setClickOut: setClickOut }, props))));
    };
    return Component;
};

export { withClickOut as default };
//# sourceMappingURL=index.js.map
