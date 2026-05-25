'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var InputFileButton_module = require('./InputFileButton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(InputFileButton_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({ className: cx('magneto-ui-input-file-button', className) }, props), children));
};
/**
 * Atom UI child component of Input File
 */
var InputFileButton = Component;

exports.InputFileButton = InputFileButton;
//# sourceMappingURL=InputFileButton.component.js.map
