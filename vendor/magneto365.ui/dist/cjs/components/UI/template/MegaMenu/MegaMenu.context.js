'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var MegaMenuContext = React.createContext(initialContext);
var MegaMenuProvider = function (_a) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return React__default["default"].createElement(MegaMenuContext.Provider, { value: props }, children);
};
var useMegaMenu = function () { return React.useContext(MegaMenuContext); };
var useMegaMenuSocialHeader = function () {
    var socialHeaderProps = React.useContext(MegaMenuContext).socialHeaderProps;
    return socialHeaderProps;
};
var useMegaMenuJobs = function () {
    var jobsProps = React.useContext(MegaMenuContext).jobsProps;
    return jobsProps;
};
var useMegaMenuMain = function () {
    var mainHeaderProps = React.useContext(MegaMenuContext).mainHeaderProps;
    return mainHeaderProps;
};
var useLoggedInUser = function () {
    var listMenuUserProps = React.useContext(MegaMenuContext).listMenuUserProps;
    return listMenuUserProps;
};

exports.MegaMenuProvider = MegaMenuProvider;
exports.useLoggedInUser = useLoggedInUser;
exports.useMegaMenu = useMegaMenu;
exports.useMegaMenuJobs = useMegaMenuJobs;
exports.useMegaMenuMain = useMegaMenuMain;
exports.useMegaMenuSocialHeader = useMegaMenuSocialHeader;
//# sourceMappingURL=MegaMenu.context.js.map
