import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { Children } from 'react';

/**
 * CWheck if it is a ref.
 * @description Check if it is an object (not null) and if it has a current property.
 * @param value
 * @returns
 */
var isRef = function (value) {
    return value !== null && typeof value === 'object' && 'current' in value;
};
var renderChildren = function (children, _a) {
    var props = __rest(_a, []);
    if (Array.isArray(children)) {
        return Children.map(children, function (child) {
            if (typeof child === 'function') {
                return child(props);
            }
            return child;
        });
    }
    if (typeof children === 'function')
        return children(props);
    return children;
};

export { isRef, renderChildren };
//# sourceMappingURL=index.js.map
