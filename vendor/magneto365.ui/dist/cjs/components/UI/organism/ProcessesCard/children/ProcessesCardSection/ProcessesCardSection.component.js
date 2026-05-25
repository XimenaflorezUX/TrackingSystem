'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ProcessesCard_module = require('../../ProcessesCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ProcessesCard_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("div", { className: cx('processes-card__section', className) }, children);
};
var ProcessesCardSection = Component;

exports.ProcessesCardSection = ProcessesCardSection;
//# sourceMappingURL=ProcessesCardSection.component.js.map
