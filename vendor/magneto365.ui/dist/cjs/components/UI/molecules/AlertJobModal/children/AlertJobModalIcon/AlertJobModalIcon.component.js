'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertJobModal_module = require('../../AlertJobModal.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Urgent = require('../../../../../../assets/Urgent.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobModal_module);
var AlertJobModalIcon = function (_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? 50 : _b, alt = _a.alt, className = _a.className;
    var customWidth = size ? { width: size + 'px' } : {};
    return (React__default["default"].createElement("img", { style: customWidth, className: cx('alert-job__icon', className), src: src !== null && src !== void 0 ? src : Urgent, alt: alt !== null && alt !== void 0 ? alt : "icon-item", loading: "lazy" }));
};

exports.AlertJobModalIcon = AlertJobModalIcon;
//# sourceMappingURL=AlertJobModalIcon.component.js.map
