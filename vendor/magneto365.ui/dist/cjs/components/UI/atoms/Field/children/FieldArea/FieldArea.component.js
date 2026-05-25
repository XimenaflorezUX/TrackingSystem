'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Field_constant = require('../../Field.constant.js');
var Field_hooks = require('../../Field.hooks.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var FieldArea_module = require('./FieldArea.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(FieldArea_module);
var BaseComponent = function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, error = _a.error, readOnly = _a.readOnly, wrapper = _a.wrapper, textareaClassName = _a.textareaClassName, props = tslib_es6.__rest(_a, ["className", "disabled", "error", "readOnly", "wrapper", "textareaClassName"]);
    var areaRef = React.useRef(null);
    Field_hooks.useFieldError(error);
    var handleOnWrapperMouseDown = React.useCallback(function (evt) {
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
    return (React__default["default"].createElement("span", tslib_es6.__assign({}, wrapper, { onMouseDown: handleOnWrapperMouseDown, "data-lib": "magneto-ui", "data-slot": "field-area", "data-disabled": !!disabled, "data-readonly": !!readOnly, "data-error": !!error, className: cx('magneto-ui-field-area-wrapper', disabled ? 'magneto-ui-field-area-wrapper--disabled' : '', readOnly ? 'magneto-ui-field-area-wrapper--readonly' : '', error ? 'magneto-ui-field-area-wrapper--error' : '', className) }),
        React__default["default"].createElement("textarea", tslib_es6.__assign({}, props, { className: cx('magneto-ui-field-area', textareaClassName), disabled: disabled, readOnly: readOnly, ref: function (node) { return Field_constant.combineRefs(node, areaRef, ref); } }))));
};
var Component = React.forwardRef(BaseComponent);
/**
 * Atom UI of field. It includes .
 */
var FieldArea = Object.assign(Component, {});

exports.FieldArea = FieldArea;
//# sourceMappingURL=FieldArea.component.js.map
