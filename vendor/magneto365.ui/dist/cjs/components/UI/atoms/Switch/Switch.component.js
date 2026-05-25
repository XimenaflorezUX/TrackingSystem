'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Switch_module = require('./Switch.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Switch = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.setIsActive, setIsActive = _c === void 0 ? function () { return null; } : _c, _d = _a.title, title = _d === void 0 ? '' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.isDisabled, isDisabled = _f === void 0 ? false : _f;
    var _g = React.useState(isActive), checked = _g[0], setChecked = _g[1];
    React.useEffect(function () {
        setChecked(isActive);
    }, [isActive]);
    var handleChange = React.useCallback(function () {
        if (isDisabled)
            return;
        setChecked(function (state) { return !state; });
        setIsActive(!isActive);
    }, [isDisabled, setIsActive, isActive]);
    return (React__default["default"].createElement("div", { className: "".concat(Switch_module['magneto-ui-switch_container'], " ").concat(className) },
        React__default["default"].createElement("label", { className: Switch_module['magneto-ui-switch'] },
            React__default["default"].createElement("input", { type: "checkbox", onChange: handleChange, checked: checked, role: "switch" }),
            React__default["default"].createElement("span", { className: "".concat(Switch_module['magneto-ui-slider'], " ").concat(Switch_module['magneto-ui-round']) })),
        title && React__default["default"].createElement("p", null, title)));
};

exports.Switch = Switch;
//# sourceMappingURL=Switch.component.js.map
