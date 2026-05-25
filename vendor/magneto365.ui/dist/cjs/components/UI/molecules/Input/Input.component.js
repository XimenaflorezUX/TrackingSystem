'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var DocumentTextGray = require('../../../../assets/DocumentTextGray.svg.js');
var Email = require('../../../../assets/Email.svg.js');
var eyeSlash = require('../../../../assets/eye-slash.svg.js');
var Mobile = require('../../../../assets/Mobile.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var Input_module = require('./Input.module.scss.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
var ComparativeCounter_component = require('../../atoms/ComparativeCounter/ComparativeCounter.component.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Input = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.name, name = _c === void 0 ? '' : _c, type = _a.type, placeholder = _a.placeholder, customIcon = _a.customIcon, _d = _a.hideIcon, hideIcon = _d === void 0 ? false : _d, error = _a.error, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.autoFocus, autoFocus = _f === void 0 ? false : _f, _g = _a.hasCounter, hasCounter = _g === void 0 ? false : _g, _h = _a.maxCounterValue, maxCounterValue = _h === void 0 ? 0 : _h, actionIcon = _a.actionIcon, mainClassName = _a.mainClassName, _j = _a.actionInputIcon, actionInputIcon = _j === void 0 ? function () { return null; } : _j, props = tslib_es6.__rest(_a, ["value", "onChange", "name", "type", "placeholder", "customIcon", "hideIcon", "error", "disabled", "autoFocus", "hasCounter", "maxCounterValue", "actionIcon", "mainClassName", "actionInputIcon"]);
    var _k = React.useState(false), onFocus = _k[0], setOnFocus = _k[1];
    var _l = React.useState(''), inputValue = _l[0], setInputValue = _l[1];
    var haveValueOrFocus = React.useMemo(function () {
        if (value !== null)
            return onFocus || (value === null || value === void 0 ? void 0 : value.length) > 0;
    }, [onFocus, value]);
    React.useEffect(function () {
        if (value && hasCounter) {
            setInputValue(value);
        }
    }, [hasCounter, value]);
    React.useEffect(function () {
        var _a;
        if (autoFocus && document.getElementById(name)) {
            (_a = document.getElementById(name)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autoFocus, name]);
    var dinamyIcon = React.useMemo(function () {
        var _a;
        return _a = {},
            _a['text'] = DocumentTextGray,
            _a['email'] = Email,
            _a['number'] = Mobile,
            _a['password'] = eyeSlash,
            _a;
    }, []);
    var handleChange = React.useCallback(function (e) {
        onChange(e);
        setInputValue(e.target.value);
    }, [onChange]);
    return (React__default["default"].createElement("div", { style: { height: 'auto', width: '100%' } },
        React__default["default"].createElement("div", { className: "".concat(Input_module["".concat(common_constants.classMUI, "-input")], " ").concat(mainClassName) },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("div", { className: Input_module["".concat(common_constants.classMUI, "-input--container")] },
                    React__default["default"].createElement("label", { htmlFor: name, style: {
                            left: hideIcon ? '10px' : '40px',
                            top: haveValueOrFocus ? '30%' : '45%',
                            fontSize: haveValueOrFocus ? '12px' : '14px',
                            pointerEvents: 'none'
                        }, className: Input_module["".concat(common_constants.classMUI, "-input--container__label")] }, placeholder),
                    React__default["default"].createElement("input", tslib_es6.__assign({}, props, { style: {
                            padding: hideIcon ? '0px 10px' : '0px 40px'
                        }, disabled: disabled, className: Input_module["".concat(common_constants.classMUI, "-input--container__input")], type: type, name: name, value: value, onChange: handleChange, onFocus: function (e) {
                            var _a;
                            (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
                            setOnFocus(true);
                        }, onBlur: function (e) {
                            var _a;
                            (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
                            setOnFocus(false);
                        }, id: name, autoComplete: "off" })),
                    hideIcon ? null : (React__default["default"].createElement("img", { className: Input_module["".concat(common_constants.classMUI, "-input--container__icon")], src: customIcon ? customIcon : dinamyIcon[type] || DocumentTextGray })),
                    actionIcon ? (React__default["default"].createElement("button", { type: "button", onClick: actionInputIcon, className: Input_module["".concat(common_constants.classMUI, "-input--container__icon-action")] },
                        React__default["default"].createElement("img", { "data-name": "icon", src: actionIcon }))) : null))),
        React__default["default"].createElement("div", { className: "".concat(Input_module["".concat(common_constants.classMUI, "-input__footer")], " ").concat(!error && hasCounter ? Input_module['footer-without-error'] : '') },
            error && (React__default["default"].createElement("span", { style: { width: hasCounter ? '80%' : '100%' }, className: Input_module["".concat(common_constants.classMUI, "-input--container__error")] }, error)),
            hasCounter && React__default["default"].createElement(ComparativeCounter_component.ComparativeCounter, { current: inputValue.length, max: maxCounterValue }))));
};

module.exports = Input;
//# sourceMappingURL=Input.component.js.map
