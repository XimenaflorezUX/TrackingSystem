import { createContext, useContext } from 'react';

var initialValue = {
    isInsideList: false,
    toggleValue: function () { return undefined; },
    value: undefined
};
var ListContext = createContext(initialValue);
var useFieldListContext = function () {
    return useContext(ListContext);
};

export { ListContext, useFieldListContext };
//# sourceMappingURL=FieldList.context.js.map
