import { __rest, __assign } from '../../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useMemo } from 'react';
import { classNames } from '../../../../../../../../shared/utils/common/classNames.util.js';
import { useFieldListContext } from '../../FieldList.context.js';
import styles from './FieldListItem.module.scss.js';

var cx = classNames.bind(styles);
function BaseComponent(_a, ref) {
    var children = _a.children, className = _a.className, controlledValue = _a.value, props = __rest(_a, ["children", "className", "value"]);
    var _b = useFieldListContext(), toggleValue = _b.toggleValue, value = _b.value;
    var isSelected = useMemo(function () {
        if (!controlledValue)
            return false;
        if (Array.isArray(value)) {
            return value.some(function (v) { return v.id === controlledValue.id; });
        }
        return controlledValue.id === (value === null || value === void 0 ? void 0 : value.id);
    }, [controlledValue, value]);
    return (React.createElement("li", __assign({}, props, { className: cx('magneto-ui-field-list-item', isSelected ? 'magneto-ui-field-list-item--selected' : '', className), onClick: function () { return toggleValue(controlledValue); }, "data-lib": "magneto-ui", "data-slot": "field-list-item", ref: ref }), children));
}
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldListItem = Object.assign(Component, {});

export { FieldListItem };
//# sourceMappingURL=FieldListItem.component.js.map
