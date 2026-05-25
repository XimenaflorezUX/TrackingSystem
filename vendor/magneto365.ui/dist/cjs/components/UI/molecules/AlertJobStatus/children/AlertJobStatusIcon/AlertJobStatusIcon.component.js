'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertJobStatusIcon_module = require('./AlertJobStatusIcon.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Checked2 = require('../../../../../../assets/Checked2.svg.js');
var warning3d = require('../../../../../../assets/warning-3d.svg.js');
var error3d = require('../../../../../../assets/error-3d.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobStatusIcon_module);
var alertIcons = {
    success: Checked2,
    warning: warning3d,
    error: error3d
};
var AlertJobStatusIcon = function (_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? 34 : _b, alt = _a.alt, className = _a.className, _c = _a.type, type = _c === void 0 ? 'warning' : _c;
    var customWidth = size ? { width: size + 'px' } : {};
    var iconByType = React.useMemo(function () { return alertIcons[type]; }, [type]);
    return (React__default["default"].createElement("img", { style: customWidth, className: cx('alert-job__icon', className), src: src !== null && src !== void 0 ? src : iconByType, alt: alt !== null && alt !== void 0 ? alt : "icon-item", loading: "lazy" }));
};

exports.AlertJobStatusIcon = AlertJobStatusIcon;
//# sourceMappingURL=AlertJobStatusIcon.component.js.map
