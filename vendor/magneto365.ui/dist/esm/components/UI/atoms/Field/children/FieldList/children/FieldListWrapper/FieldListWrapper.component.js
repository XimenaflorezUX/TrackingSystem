import { __rest, __assign } from '../../../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useCallback } from 'react';
import { useFieldContext } from '../../../../Field.context.js';
import styles from './FieldListWrapper.module.scss.js';
import { classNames } from '../../../../../../../../shared/utils/common/classNames.util.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var children = _a.children, className = _a.className, nonRelative = _a.nonRelative, controlledOnBlur = _a.onBlur, tabIndex = _a.tabIndex, props = __rest(_a, ["children", "className", "nonRelative", "onBlur", "tabIndex"]);
    var _b = useFieldContext(), isMobile = _b.isMobile, wrapperRef = _b.wrapperRef, onBlur = _b.onBlur;
    var handleOnBlur = useCallback(function (evt) {
        onBlur(evt, ref || wrapperRef);
        controlledOnBlur === null || controlledOnBlur === void 0 ? void 0 : controlledOnBlur(evt);
    }, [controlledOnBlur, onBlur, ref, wrapperRef]);
    return (React.createElement("div", __assign({}, props, { tabIndex: tabIndex || -1, className: cx('magneto-ui-field-list-wrapper', nonRelative ? 'magneto-ui-field-list-wrapper--non-relative' : '', className), onBlur: handleOnBlur, "data-lib": "magneto-ui", "data-slot": "field-list-wrapper", "data-state": nonRelative ? 'non-relative' : 'relative', ref: ref || wrapperRef }), React.Children.map(children, function (child) { return (typeof child === 'function' ? child({ isMobile: isMobile }) : child); })));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldListWrapper = Object.assign(Component, {});

export { FieldListWrapper };
//# sourceMappingURL=FieldListWrapper.component.js.map
