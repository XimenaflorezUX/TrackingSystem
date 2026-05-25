import React from 'react';

var getChildrenByType = function (children, type) {
    return React.Children.toArray(children).filter(function (child) { return React.isValidElement(child) && child.type === type; });
};
var getAllItems = function (children, type) {
    var items = [];
    React.Children.forEach(children, function (child) {
        if (React.isValidElement(child) && child.type === type)
            React.Children.forEach(child.props.children, function (item) { return items.push(item); });
    });
    return items;
};

export { getAllItems, getChildrenByType };
//# sourceMappingURL=nodeCount.util.js.map
