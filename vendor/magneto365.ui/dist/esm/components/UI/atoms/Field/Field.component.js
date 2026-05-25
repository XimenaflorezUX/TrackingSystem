import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import { FieldArea } from './children/FieldArea/FieldArea.component.js';
import { FieldInput } from './children/FieldInput/FieldInput.component.js';
import './children/FieldInput/FieldInput.interface.js';
import { FieldLabel } from './children/FieldLabel/FieldLabel.component.js';
import { FieldList } from './children/FieldList/FieldList.component.js';
import { FieldProvider } from './Field.context.js';

var BaseComponent = function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(FieldProvider, __assign({}, props, { fieldRef: ref }), children));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var Field = Object.assign(Component, { Area: FieldArea, Input: FieldInput, Label: FieldLabel, List: FieldList });

export { Field };
//# sourceMappingURL=Field.component.js.map
