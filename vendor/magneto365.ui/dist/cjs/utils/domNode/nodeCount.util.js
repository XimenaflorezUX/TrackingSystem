'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var getChildrenByType = function (children, type) {
    return React__default["default"].Children.toArray(children).filter(function (child) { return React__default["default"].isValidElement(child) && child.type === type; });
};
var getAllItems = function (children, type) {
    var items = [];
    React__default["default"].Children.forEach(children, function (child) {
        if (React__default["default"].isValidElement(child) && child.type === type)
            React__default["default"].Children.forEach(child.props.children, function (item) { return items.push(item); });
    });
    return items;
};

exports.getAllItems = getAllItems;
exports.getChildrenByType = getChildrenByType;
//# sourceMappingURL=nodeCount.util.js.map
