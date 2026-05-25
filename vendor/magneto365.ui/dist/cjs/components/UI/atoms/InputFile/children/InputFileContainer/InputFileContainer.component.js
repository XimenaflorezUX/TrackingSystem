'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var InputFileContainer_module = require('./InputFileContainer.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(InputFileContainer_module);
var Component = function (_a) {
    var className = _a.className, children = _a.children, props = tslib_es6.__rest(_a, ["className", "children"]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({ className: cx('magneto-ui-input-file-container', className) }, props), children));
};
/**
 * Atom UI component of Input File
 */
var InputFileContainer = Component;

exports.InputFileContainer = InputFileContainer;
//# sourceMappingURL=InputFileContainer.component.js.map
