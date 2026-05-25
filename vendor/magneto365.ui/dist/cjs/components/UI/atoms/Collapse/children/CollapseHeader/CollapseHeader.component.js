'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var CollapseHeader_module = require('./CollapseHeader.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CollapseHeader_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    return (React__default["default"].createElement("header", tslib_es6.__assign({ className: cx('magneto-ui-collapse-header', className) }, props), children));
};
/**
 * Atom UI component child of Collapse
 */
var CollapseHeader = Component;

exports.CollapseHeader = CollapseHeader;
//# sourceMappingURL=CollapseHeader.component.js.map
