'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Radio_interface = require('./Radio.interface.js');
var RadioButton_component = require('./children/RadioButton/RadioButton.component.js');
var RadioDefault_component = require('./children/RadioDefault/RadioDefault.component.js');

var _a;
var radioTypes = (_a = {},
    _a[Radio_interface.ERadioType.radio] = RadioDefault_component.RadioDefault,
    _a[Radio_interface.ERadioType.button] = RadioButton_component.RadioButton,
    _a);
var getRadioComponent = function (type) { return radioTypes[type]; };

exports.getRadioComponent = getRadioComponent;
//# sourceMappingURL=Radio.constants.js.map
