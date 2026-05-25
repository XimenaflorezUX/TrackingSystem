import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useMemo } from 'react';
import { ERadioType } from './Radio.interface.js';
import { getRadioComponent } from './Radio.constants.js';

var Component = function (_a) {
    var type = _a.type, props = __rest(_a, ["type"]);
    var RadioType = useMemo(function () { return getRadioComponent(ERadioType[type !== null && type !== void 0 ? type : 'radio']); }, [type]);
    if (!RadioType)
        return null;
    return React.createElement(RadioType, __assign({}, props));
};
/**
 * Atom UI component of radio
 */
var Radio = Component;

export { Radio };
//# sourceMappingURL=Radio.component.js.map
