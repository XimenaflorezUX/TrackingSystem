'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Radio_interface = require('./Radio.interface.js');
var Radio_constants = require('./Radio.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var type = _a.type, props = tslib_es6.__rest(_a, ["type"]);
    var RadioType = React.useMemo(function () { return Radio_constants.getRadioComponent(Radio_interface.ERadioType[type !== null && type !== void 0 ? type : 'radio']); }, [type]);
    if (!RadioType)
        return null;
    return React__default["default"].createElement(RadioType, tslib_es6.__assign({}, props));
};
/**
 * Atom UI component of radio
 */
var Radio = Component;

exports.Radio = Radio;
//# sourceMappingURL=Radio.component.js.map
