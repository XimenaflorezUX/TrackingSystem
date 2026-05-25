'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UserTermCheck_module = require('./UserTermCheck.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Checkbox_component = require('../../../../atoms/Checkbox/Checkbox.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(UserTermCheck_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, isChecked = _a.isChecked, onChange = _a.onChange;
    return (React__default["default"].createElement("div", { className: cx('user-term-check', className) },
        React__default["default"].createElement(Checkbox_component.Checkbox, { type: "box", display: "block", className: cx('select-list__checkbox'), checked: isChecked, onChange: onChange }, children)));
};
var UserTermCheck = Component;

exports.UserTermCheck = UserTermCheck;
//# sourceMappingURL=UserTermCheck.component.js.map
