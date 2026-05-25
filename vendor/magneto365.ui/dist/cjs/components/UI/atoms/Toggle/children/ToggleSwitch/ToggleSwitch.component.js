'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ToggleSwitch_module = require('./ToggleSwitch.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ToggleSwitch_module);
var BaseComponent = function (_a, ref) {
    var className = _a.className, props = tslib_es6.__rest(_a, ["className"]);
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-toggle-switch', className) },
        React__default["default"].createElement("input", tslib_es6.__assign({}, props, { className: cx('magneto-ui-toggle-switch__input'), type: "checkbox", ref: ref })),
        React__default["default"].createElement("div", { className: cx('magneto-ui-toggle-switch__track') },
            React__default["default"].createElement("span", { className: cx('magneto-ui-toggle-switch__track-slider') }))));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI child component of Toggle.
 */
var ToggleSwitch = Object.assign(Component, {});

exports.ToggleSwitch = ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.component.js.map
