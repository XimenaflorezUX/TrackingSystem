'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../../../shared/utils/common/classNames.util.js');
var FieldList_context = require('../../FieldList.context.js');
var FieldListItem_module = require('./FieldListItem.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldListItem_module);
function BaseComponent(_a, ref) {
    var children = _a.children, className = _a.className, controlledValue = _a.value, props = tslib_es6.__rest(_a, ["children", "className", "value"]);
    var _b = FieldList_context.useFieldListContext(), toggleValue = _b.toggleValue, value = _b.value;
    var isSelected = React.useMemo(function () {
        if (!controlledValue)
            return false;
        if (Array.isArray(value)) {
            return value.some(function (v) { return v.id === controlledValue.id; });
        }
        return controlledValue.id === (value === null || value === void 0 ? void 0 : value.id);
    }, [controlledValue, value]);
    return (React__default["default"].createElement("li", tslib_es6.__assign({}, props, { className: cx('magneto-ui-field-list-item', isSelected ? 'magneto-ui-field-list-item--selected' : '', className), onClick: function () { return toggleValue(controlledValue); }, "data-lib": "magneto-ui", "data-slot": "field-list-item", ref: ref }), children));
}
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldListItem = Object.assign(Component, {});

exports.FieldListItem = FieldListItem;
//# sourceMappingURL=FieldListItem.component.js.map
