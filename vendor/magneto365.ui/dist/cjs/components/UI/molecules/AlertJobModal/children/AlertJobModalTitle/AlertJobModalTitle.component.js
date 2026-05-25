'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertJobModal_module = require('../../AlertJobModal.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobModal_module);
var AlertJobModalTitle = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, className = _a.className, children = _a.children;
    return (React__default["default"].createElement("div", { className: cx('alert-modal__title', className) },
        React__default["default"].createElement("p", null, subtitle),
        React__default["default"].createElement("p", null, "\u201C".concat(title, "\u201D")),
        children));
};

exports.AlertJobModalTitle = AlertJobModalTitle;
//# sourceMappingURL=AlertJobModalTitle.component.js.map
