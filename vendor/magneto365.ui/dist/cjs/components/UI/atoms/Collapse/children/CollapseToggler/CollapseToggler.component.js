'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Collapse_context = require('../../Collapse.context.js');
var CollapseToggler_module = require('./CollapseToggler.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CollapseToggler_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, props = tslib_es6.__rest(_a, ["children", "className", "onClick"]);
    var _b = Collapse_context.useCollapse(), open = _b.open, onChangeOpen = _b.onChangeOpen;
    var handleOnClick = React.useCallback(function (evt) {
        if (onClick)
            onClick(evt);
        onChangeOpen(!open);
    }, [open, onChangeOpen, onClick]);
    return (React__default["default"].createElement("button", tslib_es6.__assign({}, props, { onClick: handleOnClick, className: cx('magneto-ui-collapse-toggler', className) }), children));
};
/**
 * Atom UI component child of Collapse
 */
var CollapseToggler = Component;

exports.CollapseToggler = CollapseToggler;
//# sourceMappingURL=CollapseToggler.component.js.map
