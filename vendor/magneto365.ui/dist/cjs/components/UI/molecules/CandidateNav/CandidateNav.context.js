'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CandidateNavContext = React.createContext(undefined);
var Provider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var onChangeOpen = React.useCallback(function (value) {
        setShowOptions(function (prevState) { return value !== null && value !== void 0 ? value : !prevState; });
    }, []);
    return React__default["default"].createElement(CandidateNavContext.Provider, { value: { showOptions: showOptions, onChangeOpen: onChangeOpen } }, children);
};
var useCandidateNav = function () {
    var context = React.useContext(CandidateNavContext);
    if (!context)
        throw new Error('useCandidateNav must be used within a CandidateNav.Provider');
    return context;
};

exports.Provider = Provider;
exports.useCandidateNav = useCandidateNav;
//# sourceMappingURL=CandidateNav.context.js.map
