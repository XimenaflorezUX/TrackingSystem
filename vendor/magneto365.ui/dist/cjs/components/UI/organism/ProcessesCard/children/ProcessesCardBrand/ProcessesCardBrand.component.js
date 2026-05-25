'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ProcessesCard_module = require('../../ProcessesCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ProcessesCard_module);
var Component = function (_a) {
    var className = _a.className, props = tslib_es6.__rest(_a, ["className"]);
    return React__default["default"].createElement("img", tslib_es6.__assign({ className: cx('processes-card__brand', className) }, props));
};
var ProcessesCardBrand = Component;

exports.ProcessesCardBrand = ProcessesCardBrand;
//# sourceMappingURL=ProcessesCardBrand.component.js.map
