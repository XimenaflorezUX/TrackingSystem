'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Typography_module = require('./Typography.module.scss.js');

var cx = classNames_util.classNames.bind(Typography_module);
var typographyStyles = function (_a) {
    var _b;
    var className = _a.className, color = _a.color, ellipsis = _a.ellipsis, size = _a.size, style = _a.style, weight = _a.weight;
    var customizedClassName = (_b = {},
        _b["magneto-ui-typography--color-".concat(color)] = color ? true : false,
        _b["magneto-ui-typography--size-".concat(size)] = size && typeof size === 'string' ? true : false,
        _b["magneto-ui-typography--weight-".concat(weight)] = weight && typeof weight === 'string' ? true : false,
        _b['magneto-ui-typography--ellipsis'] = ellipsis === true,
        _b['magneto-ui-typography--ellipsis-multiline'] = typeof ellipsis === 'object' && typeof ellipsis.rows === 'number',
        _b);
    var finalClassName = cx('magneto-ui-typography', customizedClassName, className);
    var finalStyle = tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, (typeof size === 'number' && { '--size': "".concat(size, "px") })), (typeof weight === 'number' && { '--weight': weight })), (typeof ellipsis === 'object' && ellipsis.rows && { '--ellipsis-lines': ellipsis.rows }));
    return {
        className: finalClassName,
        style: tslib_es6.__assign(tslib_es6.__assign({}, (Object.keys(finalStyle).length ? finalStyle : undefined)), style)
    };
};
var applyWrappers = function (children, props) {
    var wrappers = [
        props.code ? { tag: 'code', className: 'magneto-ui-typography--code' } : null,
        props.delete ? { tag: 'del', className: 'magneto-ui-typography--delete' } : null,
        props.italic ? { tag: 'i', className: 'magneto-ui-typography--italic' } : null,
        props.keyboard ? { tag: 'kbd', className: 'magneto-ui-typography--keyboard' } : null,
        props.mark ? { tag: 'mark', className: 'magneto-ui-typography--mark' } : null,
        props.strong ? { tag: 'strong', className: 'magneto-ui-typography--strong' } : null,
        props.underline ? { tag: 'u', className: 'magneto-ui-typography--underline' } : null
    ].filter(Boolean);
    if (wrappers.length === 1) {
        return React.createElement(wrappers[0].tag, { className: cx(wrappers[0].className) }, children);
    }
    return wrappers.reduce(function (acc, _a) {
        var tag = _a.tag, className = _a.className;
        return React.createElement(tag, { className: cx(className) }, acc);
    }, children);
};
var OMITTED_PROPS = [
    'className',
    'style',
    'color',
    'ellipsis',
    'size',
    'weight',
    'code',
    'delete',
    'italic',
    'keyboard',
    'mark',
    'strong',
    'underline'
];
var omitTypographyProps = function (props) {
    return Object.fromEntries(Object.entries(props).filter(function (_a) {
        var key = _a[0];
        return !OMITTED_PROPS.includes(key);
    }));
};

exports.OMITTED_PROPS = OMITTED_PROPS;
exports.applyWrappers = applyWrappers;
exports.omitTypographyProps = omitTypographyProps;
exports.typographyStyles = typographyStyles;
//# sourceMappingURL=Typography.constant.js.map
