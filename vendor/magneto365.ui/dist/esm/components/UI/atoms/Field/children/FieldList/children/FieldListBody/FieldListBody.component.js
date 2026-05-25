import { __rest, __assign } from '../../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useMemo } from 'react';
import { screenSize } from '../../../../../../../../constants/responsive.constants.js';
import { useFieldContext } from '../../../../Field.context.js';
import { classNames } from '../../../../../../../../shared/utils/common/classNames.util.js';
import styles from './FieldListBody.module.scss.js';

var cx = classNames.bind(styles);
function BaseComponent(_a, ref) {
    var className = _a.className, children = _a.children, style = _a.style, props = __rest(_a, ["className", "children", "style"]);
    var _b = useFieldContext(), breakpoint = _b.breakpoint, isDesktop = _b.isDesktop, isMobile = _b.isMobile;
    var styles = useMemo(function () { return (__assign(__assign({}, style), { '--breakpoint': "".concat(screenSize[breakpoint || 'sm'], "px") })); }, [breakpoint, style]);
    return (React.createElement("ul", __assign({}, props, { ref: ref, "data-lib": "magneto-ui", "data-slot": "field-list-body", style: styles, className: cx('magneto-ui-field-list-body', isDesktop ? 'magneto-ui-field-list-body--desktop' : '', className) }), typeof children === 'function' ? children({ isDesktop: isDesktop, isMobile: isMobile }) : children));
}
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldListBody = Object.assign(Component, {});

export { FieldListBody };
//# sourceMappingURL=FieldListBody.component.js.map
