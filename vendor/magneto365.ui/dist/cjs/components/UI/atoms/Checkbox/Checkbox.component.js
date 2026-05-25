'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var stub_util = require('../../../../shared/utils/common/stub.util.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Checkbox_module = require('./Checkbox.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Checkbox_module);
var defaultCheck = function (_a) {
    var type = _a.type, checked = _a.checked;
    if (type === 'background')
        return;
    return (React__default["default"].createElement("div", { "aria-checked": checked, role: "checkbox", className: cx('checkbox__box', { 'checkbox__box--checked': checked }) }, checked ? React__default["default"].createElement(React__default["default"].Fragment, null, "\u2713") : null));
};
var Component = function (_a) {
    var id = _a.id, checked = _a.checked, _b = _a.onChange, onChange = _b === void 0 ? stub_util.stubTrue : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? 'box' : _c, className = _a.className, _d = _a.display, display = _d === void 0 ? 'inline' : _d, _e = _a.renderCheck, renderCheck = _e === void 0 ? defaultCheck : _e, rest = tslib_es6.__rest(_a, ["id", "checked", "onChange", "children", "type", "className", "display", "renderCheck"]);
    return (React__default["default"].createElement("label", { className: cx('checkbox', "checkbox--".concat(display), className, {
            'checkbox--checked': checked,
            'checkbox--background': type === 'background'
        }), "data-name": "checkbox-container", htmlFor: id },
        renderCheck({ checked: checked, type: type }),
        React__default["default"].createElement("input", tslib_es6.__assign({ "data-name": "checkbox", checked: checked, onChange: function (_a) {
                var target = _a.target;
                return onChange(target.checked);
            }, type: "checkbox", id: id }, rest)),
        children));
};
var Checkbox = Component;

exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.component.js.map
