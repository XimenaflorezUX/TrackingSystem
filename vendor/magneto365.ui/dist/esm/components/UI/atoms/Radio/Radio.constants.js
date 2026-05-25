import { ERadioType } from './Radio.interface.js';
import { RadioButton } from './children/RadioButton/RadioButton.component.js';
import { RadioDefault } from './children/RadioDefault/RadioDefault.component.js';

var _a;
var radioTypes = (_a = {},
    _a[ERadioType.radio] = RadioDefault,
    _a[ERadioType.button] = RadioButton,
    _a);
var getRadioComponent = function (type) { return radioTypes[type]; };

export { getRadioComponent };
//# sourceMappingURL=Radio.constants.js.map
