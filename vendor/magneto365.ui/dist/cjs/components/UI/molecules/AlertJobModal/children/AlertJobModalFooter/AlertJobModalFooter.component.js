'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertJobModal_module = require('../../AlertJobModal.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobModal_module);
var AlertJobModalFooter = function (_a) {
    var className = _a.className, children = _a.children;
    return React__default["default"].createElement("div", { className: cx('alert-modal__footer', className) }, children);
};

exports.AlertJobModalFooter = AlertJobModalFooter;
//# sourceMappingURL=AlertJobModalFooter.component.js.map
