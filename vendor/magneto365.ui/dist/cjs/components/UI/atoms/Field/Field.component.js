'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FieldArea_component = require('./children/FieldArea/FieldArea.component.js');
var FieldInput_component = require('./children/FieldInput/FieldInput.component.js');
require('./children/FieldInput/FieldInput.interface.js');
var FieldLabel_component = require('./children/FieldLabel/FieldLabel.component.js');
var FieldList_component = require('./children/FieldList/FieldList.component.js');
var Field_context = require('./Field.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BaseComponent = function (_a, ref) {
    var children = _a.children, props = tslib_es6.__rest(_a, ["children"]);
    return (React__default["default"].createElement(Field_context.FieldProvider, tslib_es6.__assign({}, props, { fieldRef: ref }), children));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var Field = Object.assign(Component, { Area: FieldArea_component.FieldArea, Input: FieldInput_component.FieldInput, Label: FieldLabel_component.FieldLabel, List: FieldList_component.FieldList });

exports.Field = Field;
//# sourceMappingURL=Field.component.js.map
