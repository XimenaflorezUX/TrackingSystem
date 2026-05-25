'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ProcessesCard_module = require('./ProcessesCard.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var ProcessesCardSection_component = require('./children/ProcessesCardSection/ProcessesCardSection.component.js');
var ProcessesCardStatus_component = require('./children/ProcessesCardStatus/ProcessesCardStatus.component.js');
var ProcessesCardBrand_component = require('./children/ProcessesCardBrand/ProcessesCardBrand.component.js');
var ProcessesCardTitle_component = require('./children/ProcessesCardTitle/ProcessesCardTitle.component.js');
var ProcessesCardText_component = require('./children/ProcessesCardText/ProcessesCardText.component.js');
var ProcessesCardArrow_component = require('./children/ProcessesCardArrow/ProcessesCardArrow.component.js');
var ProcessesCardIconStatus_component = require('./children/ProcessesCardIconStatus/ProcessesCardIconStatus.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ProcessesCard_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, props = tslib_es6.__rest(_a, ["children", "className", "isSelected"]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, props, { className: cx('processes-card', className, { 'processes-card--is-selected': isSelected }), type: "button" }), children));
};
var ProcessesCard = Object.assign(Component, {
    IconStatus: ProcessesCardIconStatus_component.ProcessesCardIconStatus,
    Section: ProcessesCardSection_component.ProcessesCardSection,
    Status: ProcessesCardStatus_component.ProcessesCardStatus,
    Brand: ProcessesCardBrand_component.ProcessesCardBrand,
    Arrow: ProcessesCardArrow_component.ProcessesCardArrow,
    Title: ProcessesCardTitle_component.ProcessesCardTitle,
    Text: ProcessesCardText_component.ProcessesCardText
});

exports.ProcessesCard = ProcessesCard;
//# sourceMappingURL=ProcessesCard.component.js.map
