'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var LineaRecord_module = require('./LineaRecord.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(LineaRecord_module);
var BaseComponent = function (_a, ref) {
    var className = _a.className;
    return React__default["default"].createElement("div", { className: cx('magneto-ui-line-record', className), ref: ref });
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var Line = Object.assign(Component, {});

exports.Line = Line;
//# sourceMappingURL=LineaRecord.component.js.map
