'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var FieldLabel_module = require('./FieldLabel.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldLabel_module);
var BaseComponent = function (_a, ref) {
    var children = _a.children, className = _a.className, props = tslib_es6.__rest(_a, ["children", "className"]);
    return (React__default["default"].createElement("label", tslib_es6.__assign({}, props, { ref: ref, className: cx('magneto-ui-field-label', className), "data-lib": "magneto-ui", "data-slot": "field-label" }), children));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldLabel = Object.assign(Component, {});

exports.FieldLabel = FieldLabel;
//# sourceMappingURL=FieldLabel.component.js.map
