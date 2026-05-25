import React, { createContext, useState, useCallback, useContext } from 'react';

var CandidateNavContext = createContext(undefined);
var Provider = function (_a) {
    var children = _a.children;
    var _b = useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var onChangeOpen = useCallback(function (value) {
        setShowOptions(function (prevState) { return value !== null && value !== void 0 ? value : !prevState; });
    }, []);
    return React.createElement(CandidateNavContext.Provider, { value: { showOptions: showOptions, onChangeOpen: onChangeOpen } }, children);
};
var useCandidateNav = function () {
    var context = useContext(CandidateNavContext);
    if (!context)
        throw new Error('useCandidateNav must be used within a CandidateNav.Provider');
    return context;
};

export { Provider, useCandidateNav };
//# sourceMappingURL=CandidateNav.context.js.map
