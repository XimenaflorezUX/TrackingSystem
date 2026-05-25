'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Link_modules = require('./Link.modules.scss.js');
var Icon_component = require('../Icon/Icon.component.js');
var _Function = require('../../../../shared/utils/Function.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var type = _a.type, href = _a.href, text = _a.text, title = _a.title, iconProps = _a.iconProps, linkStyles = _a.linkStyles, isMobile = _a.isMobile, rel = _a.rel, target = _a.target;
    var stylesValue = React.useMemo(function () { return _Function.toCSSVariables(linkStyles); }, [linkStyles]);
    return (React__default["default"].createElement("a", { className: Link_modules.linkComponent, style: stylesValue, href: href, title: title ? title : text, "data-link-type": type, "data-is-mobile": isMobile, rel: rel, target: target },
        iconProps && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, iconProps)),
        !isMobile && React__default["default"].createElement("p", null, text)));
};
/**
 * Atomic UI component for Link
 */
var Link = Component;

exports.Link = Link;
//# sourceMappingURL=Link.component.js.map
