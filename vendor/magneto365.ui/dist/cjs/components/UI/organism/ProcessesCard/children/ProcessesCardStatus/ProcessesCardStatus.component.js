'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ProcessesCard_module = require('../../ProcessesCard.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ProcessesCard_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.status, status = _b === void 0 ? 'Pending' : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c;
    return (React__default["default"].createElement("div", { className: cx('processes-card__status-card', className, "processes-card__status-card--".concat(status), {
            'processes-card__status-card--is-selected': isSelected
        }) }, children));
};
var ProcessesCardStatus = Component;

exports.ProcessesCardStatus = ProcessesCardStatus;
//# sourceMappingURL=ProcessesCardStatus.component.js.map
