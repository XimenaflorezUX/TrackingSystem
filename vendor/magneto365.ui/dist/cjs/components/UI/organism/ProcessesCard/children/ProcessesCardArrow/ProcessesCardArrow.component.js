'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ProcessesCard_module = require('../../ProcessesCard.module.scss.js');
var ArrowRightBlack = require('../../../../../../assets/ArrowRight-black.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ProcessesCard_module);
var Component = function (_a) {
    var className = _a.className, status = _a.status, props = tslib_es6.__rest(_a, ["className", "status"]);
    return (React__default["default"].createElement("img", tslib_es6.__assign({ className: cx('processes-card__arrow-left', "processes-color-icon--".concat(status), className), src: ArrowRightBlack }, props)));
};
var ProcessesCardArrow = Component;

exports.ProcessesCardArrow = ProcessesCardArrow;
//# sourceMappingURL=ProcessesCardArrow.component.js.map
