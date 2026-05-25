import { __rest, __assign } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef, useRef, useCallback } from 'react';
import { combineRefs } from '../../Field.constant.js';
import { useFieldError } from '../../Field.hooks.js';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import styles from './FieldArea.module.scss.js';

var cx = classNames.bind(styles);
var BaseComponent = function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, error = _a.error, readOnly = _a.readOnly, wrapper = _a.wrapper, textareaClassName = _a.textareaClassName, props = __rest(_a, ["className", "disabled", "error", "readOnly", "wrapper", "textareaClassName"]);
    var areaRef = useRef(null);
    useFieldError(error);
    var handleOnWrapperMouseDown = useCallback(function (evt) {
        var _a;
        if ((_a = areaRef.current) === null || _a === void 0 ? void 0 : _a.contains(evt.target)) {
            return;
        }
        if (disabled || readOnly)
            return;
        evt.preventDefault();
        var area = areaRef.current;
        area === null || area === void 0 ? void 0 : area.focus();
        if (area && typeof area.value === 'string') {
            var len = area.value.length;
            area.setSelectionRange(len, len);
        }
    }, [disabled, readOnly]);
    return (React.createElement("span", __assign({}, wrapper, { onMouseDown: handleOnWrapperMouseDown, "data-lib": "magneto-ui", "data-slot": "field-area", "data-disabled": !!disabled, "data-readonly": !!readOnly, "data-error": !!error, className: cx('magneto-ui-field-area-wrapper', disabled ? 'magneto-ui-field-area-wrapper--disabled' : '', readOnly ? 'magneto-ui-field-area-wrapper--readonly' : '', error ? 'magneto-ui-field-area-wrapper--error' : '', className) }),
        React.createElement("textarea", __assign({}, props, { className: cx('magneto-ui-field-area', textareaClassName), disabled: disabled, readOnly: readOnly, ref: function (node) { return combineRefs(node, areaRef, ref); } }))));
};
var Component = forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldArea = Object.assign(Component, {});

export { FieldArea };
//# sourceMappingURL=FieldArea.component.js.map
