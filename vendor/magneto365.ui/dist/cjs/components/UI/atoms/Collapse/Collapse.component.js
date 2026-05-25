'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CollapseBody_component = require('./children/CollapseBody/CollapseBody.component.js');
var CollapseHeader_component = require('./children/CollapseHeader/CollapseHeader.component.js');
var CollapseToggler_component = require('./children/CollapseToggler/CollapseToggler.component.js');
var Collapse_context = require('./Collapse.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var children = _a.children, defaultOpen = _a.defaultOpen, open = _a.open, onChangeOpen = _a.onChangeOpen, props = tslib_es6.__rest(_a, ["children", "defaultOpen", "open", "onChangeOpen"]);
    return (React__default["default"].createElement(Collapse_context.Provider, { defaultOpen: defaultOpen, open: open, onChangeOpen: onChangeOpen },
        React__default["default"].createElement("div", tslib_es6.__assign({}, props), children)));
};
/**
 * Atom UI component of Collapse
 */
var Collapse = Object.assign(Component, tslib_es6.__assign({ Body: CollapseBody_component.CollapseBody, Header: CollapseHeader_component.CollapseHeader, Toggler: CollapseToggler_component.CollapseToggler }, Collapse_context));

exports.Collapse = Collapse;
//# sourceMappingURL=Collapse.component.js.map
