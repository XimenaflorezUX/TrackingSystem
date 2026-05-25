'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useWithElement = function (ref) {
    var _a = React.useState(null), width = _a[0], setWidth = _a[1];
    React.useEffect(function () {
        if (!ref.current)
            return;
        var observer = new ResizeObserver(function (_a) {
            var entry = _a[0];
            setWidth(entry.contentRect.width);
        });
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, [ref]);
    return width;
};

exports.useWithElement = useWithElement;
//# sourceMappingURL=index.js.map
