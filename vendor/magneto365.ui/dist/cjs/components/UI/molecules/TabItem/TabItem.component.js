'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var TabItem_module = require('./TabItem.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var text = _a.text, _b = _a.className, className = _b === void 0 ? '' : _b, onClick = _a.onClick, isDisabled = _a.isDisabled, isSelected = _a.isSelected;
    return (React__default["default"].createElement("button", { className: "".concat(TabItem_module['magneto-ui-tab-item'], " ").concat(className), disabled: isDisabled, onClick: onClick, "aria-selected": isSelected, "aria-disabled": isDisabled, tabIndex: isDisabled ? -1 : 0, type: "button", role: "tab" }, text));
};
var TabItem = Component;

exports.TabItem = TabItem;
//# sourceMappingURL=TabItem.component.js.map
