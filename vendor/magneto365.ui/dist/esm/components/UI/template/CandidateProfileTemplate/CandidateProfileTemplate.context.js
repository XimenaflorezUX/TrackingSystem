import React, { createContext, useState, useRef, useEffect, useContext } from 'react';

var CandidateContext = createContext(undefined);
var Provider = function (_a) {
    var children = _a.children, onChangeScreen = _a.onChangeScreen, screens = _a.screens;
    var _b = useState(true), isProfileOpen = _b[0], setIsProfileOpen = _b[1];
    var _c = useState(0), activeScreen = _c[0], setActiveScreen = _c[1];
    var _d = useState(0), headerHeight = _d[0], setHeaderHeight = _d[1];
    var _e = useState(0), navHeight = _e[0], setNavHeight = _e[1];
    var prevScreenRef = useRef(null);
    useEffect(function () {
        if (prevScreenRef.current !== activeScreen) {
            onChangeScreen === null || onChangeScreen === void 0 ? void 0 : onChangeScreen(screens[activeScreen], activeScreen);
            prevScreenRef.current = activeScreen;
        }
    }, [activeScreen, onChangeScreen, screens]);
    return (React.createElement(CandidateContext.Provider, { value: {
            activeScreen: activeScreen,
            setActiveScreen: setActiveScreen,
            screens: screens,
            isProfileOpen: isProfileOpen,
            setIsProfileOpen: setIsProfileOpen,
            navHeight: navHeight,
            setNavHeight: setNavHeight,
            headerHeight: headerHeight,
            setHeaderHeight: setHeaderHeight
        } }, children));
};
var useCandidateProfile = function () {
    var context = useContext(CandidateContext);
    if (!context)
        throw new Error('useCandidate must be used within a CandidateProfile.Provider');
    return context;
};

export { Provider, useCandidateProfile };
//# sourceMappingURL=CandidateProfileTemplate.context.js.map
