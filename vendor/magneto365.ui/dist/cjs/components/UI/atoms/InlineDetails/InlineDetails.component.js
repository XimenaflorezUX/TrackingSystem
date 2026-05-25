'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Typography_component = require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function InlineDetails(_a) {
    var details = _a.details, className = _a.className;
    var formatedDetails = details.join(' | ');
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(Typography_component.Typography.Text, { size: "md", weight: "normal", color: "inherit" }, formatedDetails)));
}

exports.InlineDetails = InlineDetails;
exports["default"] = InlineDetails;
//# sourceMappingURL=InlineDetails.component.js.map
