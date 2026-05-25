'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var Loading_modules = require('./Loading.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var loadingIcon = _a.loadingIcon;
    return (React__default["default"].createElement("div", { className: Loading_modules.loadingComponent },
        React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, loadingIcon))));
};
/**
 * Atom UI component of loading icon for general purpose
 */
var Loading = Component;

exports.Loading = Loading;
//# sourceMappingURL=Loading.component.js.map
