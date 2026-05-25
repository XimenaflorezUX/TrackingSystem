import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import { typographyStyles, omitTypographyProps, applyWrappers } from '../../Typography.constant.js';

var BaseComponent = function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = typographyStyles(__assign({}, props)), className = _b.className, style = _b.style;
    return (React.createElement("p", __assign({}, omitTypographyProps(props), { className: className, style: style, ref: ref }), applyWrappers(children, props)));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI child component of Typography
 */
var TypographyParagraph = Component;

export { TypographyParagraph };
//# sourceMappingURL=TypographyParagraph.component.js.map
