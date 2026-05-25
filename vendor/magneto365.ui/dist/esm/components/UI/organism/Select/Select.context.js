import React, { useContext } from 'react';
import { stubTrue, stubUndefined } from '../../../../shared/utils/common/stub.util.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var SelectContext = React.createContext({
    value: [],
    onChange: stubTrue,
    options: [],
    search: '',
    onSearch: stubUndefined,
    onSwitch: function () { return undefined; },
    open: false
});
var useSelectContext = function () { return useContext(SelectContext); };

export { SelectContext, useSelectContext };
//# sourceMappingURL=Select.context.js.map
