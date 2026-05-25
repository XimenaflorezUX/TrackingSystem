import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './FieldLabel.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement("label", __assign({}, props, { ref: ref, className: cx('magneto-ui-field-label', className), "data-lib": "magneto-ui", "data-slot": "field-label" }), children));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldLabel = Object.assign(Component, {});

export { FieldLabel };
//# sourceMappingURL=FieldLabel.component.js.map
