import { __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { createContext, useContext } from 'react';

var initialContext = {
    socialHeaderProps: {
        helpOptions: [],
        tabs: []
    },
    jobsProps: {
        tabs: []
    },
    mainHeaderProps: {
        mobileSearchBarProps: {
            termValue: '',
            onSearch: function () { return ({}); },
            placeholder: ''
        }
    },
    listMenuUserProps: {
        urlParam: '',
        menuItems: [],
        menuItems1440: [],
        logout: {
            logoutText: '',
            onClick: function () { return ({}); }
        },
        settings: {
            settingsText: '',
            onClick: function () { return ({}); }
        },
        profileImage: {},
        isAuthenticated: false
    }
};
var MegaMenuContext = createContext(initialContext);
var MegaMenuProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React.createElement(MegaMenuContext.Provider, { value: props }, children);
};
var useMegaMenu = function () { return useContext(MegaMenuContext); };
var useMegaMenuSocialHeader = function () {
    var socialHeaderProps = useContext(MegaMenuContext).socialHeaderProps;
    return socialHeaderProps;
};
var useMegaMenuJobs = function () {
    var jobsProps = useContext(MegaMenuContext).jobsProps;
    return jobsProps;
};
var useMegaMenuMain = function () {
    var mainHeaderProps = useContext(MegaMenuContext).mainHeaderProps;
    return mainHeaderProps;
};
var useLoggedInUser = function () {
    var listMenuUserProps = useContext(MegaMenuContext).listMenuUserProps;
    return listMenuUserProps;
};

export { MegaMenuProvider, useLoggedInUser, useMegaMenu, useMegaMenuJobs, useMegaMenuMain, useMegaMenuSocialHeader };
//# sourceMappingURL=MegaMenu.context.js.map
