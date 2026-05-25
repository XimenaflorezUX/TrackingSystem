import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';

var CollapseContext = createContext(undefined);
var Provider = function (_a) {
    var children = _a.children, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, onChangeOpen = _a.onChangeOpen, open = _a.open;
    var _c = useState(defaultOpen), localIsOpen = _c[0], setLocalIsOpen = _c[1];
    var handleOnchangeOpen = useCallback(function (isOpen) {
        onChangeOpen === null || onChangeOpen === void 0 ? void 0 : onChangeOpen(isOpen);
        if (open === undefined) {
            setLocalIsOpen(isOpen);
        }
    }, [onChangeOpen, open]);
    useEffect(function () {
        if (open !== undefined) {
            setLocalIsOpen(open);
        }
    }, [open]);
    return (React.createElement(CollapseContext.Provider, { value: { open: localIsOpen, onChangeOpen: handleOnchangeOpen } }, children));
};
var useCollapse = function () {
    var context = useContext(CollapseContext);
    if (!context)
        throw new Error('useCollapse must be used within a CollapseProvider');
    return context;
};

export { Provider, useCollapse };
//# sourceMappingURL=Collapse.context.js.map
