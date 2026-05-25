'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Paragraph_module = require('./Paragraph.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var paragraph = _a.paragraph;
    return React__default["default"].createElement("p", { className: Paragraph_module.content }, paragraph);
};
var Paragraph = React.memo(Component);

exports.Paragraph = Paragraph;
//# sourceMappingURL=Paragraph.component.js.map
