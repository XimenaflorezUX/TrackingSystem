'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Collapse_context = require('../../Collapse.context.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var CollapseBody_module = require('./CollapseBody.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CollapseBody_module);
var Component = function (_a) {
    var className = _a.className, children = _a.children, props = tslib_es6.__rest(_a, ["className", "children"]);
    var open = Collapse_context.useCollapse().open;
    return (React__default["default"].createElement("div", tslib_es6.__assign({}, props, { className: cx('magneto-ui-collapse-body', {
            'magneto-ui-collapse-body--visible': open
        }) }),
        React__default["default"].createElement("div", { className: cx('magneto-ui-collapse-body__container', {
                'magneto-ui-collapse-body__container--visible': open
            }) },
            React__default["default"].createElement("div", { className: cx('magneto-ui-collapse-body__content', {
                    'magneto-ui-collapse-body__content--visible': open
                }, className) }, children))));
};
/**
 * Atom UI component child of Collapse
 */
var CollapseBody = Component;

exports.CollapseBody = CollapseBody;
//# sourceMappingURL=CollapseBody.component.js.map
