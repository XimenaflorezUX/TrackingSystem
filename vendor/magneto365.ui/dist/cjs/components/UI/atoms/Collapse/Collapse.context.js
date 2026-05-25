'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CollapseContext = React.createContext(undefined);
var Provider = function (_a) {
    var children = _a.children, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, onChangeOpen = _a.onChangeOpen, open = _a.open;
    var _c = React.useState(defaultOpen), localIsOpen = _c[0], setLocalIsOpen = _c[1];
    var handleOnchangeOpen = React.useCallback(function (isOpen) {
        onChangeOpen === null || onChangeOpen === void 0 ? void 0 : onChangeOpen(isOpen);
        if (open === undefined) {
            setLocalIsOpen(isOpen);
        }
    }, [onChangeOpen, open]);
    React.useEffect(function () {
        if (open !== undefined) {
            setLocalIsOpen(open);
        }
    }, [open]);
    return (React__default["default"].createElement(CollapseContext.Provider, { value: { open: localIsOpen, onChangeOpen: handleOnchangeOpen } }, children));
};
var useCollapse = function () {
    var context = React.useContext(CollapseContext);
    if (!context)
        throw new Error('useCollapse must be used within a CollapseProvider');
    return context;
};

exports.Provider = Provider;
exports.useCollapse = useCollapse;
//# sourceMappingURL=Collapse.context.js.map
