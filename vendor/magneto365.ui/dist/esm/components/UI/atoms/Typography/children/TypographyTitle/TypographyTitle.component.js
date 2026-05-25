import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useMemo } from 'react';
import { typographyStyles, omitTypographyProps, applyWrappers } from '../../Typography.constant.js';

var BaseComponent = function (_a, ref) {
    var children = _a.children, _b = _a.level, level = _b === void 0 ? 2 : _b, props = __rest(_a, ["children", "level"]);
    var _c = typographyStyles(__assign({}, props)), className = _c.className, style = _c.style;
    var Wrapper = useMemo(function () {
        var safeLevel = Math.min(Math.max(level, 1), 6);
        return "h".concat(safeLevel);
    }, [level]);
    return React.createElement(Wrapper, __assign(__assign({}, omitTypographyProps(props)), { className: className, style: style }), applyWrappers(children, props), ref);
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI child component of Typography
 */
var TypographyTitle = Component;

export { TypographyTitle };
//# sourceMappingURL=TypographyTitle.component.js.map
