'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DateOptions_module = require('./DateOptions.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var optionsList = _a.optionsList, selected = _a.selected, handleOnClick = _a.handleOnClick;
    var handleOptionClick = function (optionValue) {
        handleOnClick(optionValue);
    };
    var parsedSelected = typeof selected === 'string' ? parseInt(selected, 10) : selected;
    return (React__default["default"].createElement("div", { className: DateOptions_module['magneto-ui--date-options'] },
        React__default["default"].createElement("ul", { className: DateOptions_module['magneto-ui--date-options--wrapper'] }, optionsList.map(function (_a) {
            var optionValue = _a.optionValue, optionLabel = _a.optionLabel;
            return (React__default["default"].createElement("li", { className: "".concat(DateOptions_module['magneto-ui--date-options__btn'], " ").concat(parsedSelected === optionValue ? DateOptions_module['magneto-ui--date-options__btn-selected'] : ''), key: optionValue, value: optionValue, onClick: function () { return handleOptionClick(optionValue); } }, optionLabel));
        }))));
};
/**
 * UI Atom component of Date Option
 */
var DateOptions = Component;

exports.DateOptions = DateOptions;
//# sourceMappingURL=DateOptions.js.map
