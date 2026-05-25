'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var initialValue = {
    isInsideList: false,
    toggleValue: function () { return undefined; },
    value: undefined
};
var ListContext = React.createContext(initialValue);
var useFieldListContext = function () {
    return React.useContext(ListContext);
};

exports.ListContext = ListContext;
exports.useFieldListContext = useFieldListContext;
//# sourceMappingURL=FieldList.context.js.map
