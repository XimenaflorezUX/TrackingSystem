import { useState, useEffect } from 'react';

var useWithElement = function (ref) {
    var _a = useState(null), width = _a[0], setWidth = _a[1];
    useEffect(function () {
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

export { useWithElement };
//# sourceMappingURL=index.js.map
