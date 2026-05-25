'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var FlatLoader_component = require('../../atoms/FlatLoader/FlatLoader.component.js');
var Add2 = require('../../../../assets/Add2.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
var InputPlus_module = require('./InputPlus.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var InputPlus = function (_a) {
    var onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.maxWords, maxWords = _b === void 0 ? 4 : _b, disabled = _a.disabled, isLoading = _a.isLoading, _c = _a.className, className = _c === void 0 ? '' : _c, getValue = _a.getValue, maxLength = _a.maxLength;
    var _d = React.useState(''), inputValue = _d[0], setInputValue = _d[1];
    var _e = React.useState(false), disabledBtn = _e[0], setDisabledBtn = _e[1];
    React.useEffect(function () {
        if (disabled) {
            setDisabledBtn(true);
            return;
        }
        setDisabledBtn(false);
    }, [disabled]);
    React.useEffect(function () {
        if (getValue && inputValue) {
            getValue(inputValue);
        }
    }, [getValue, inputValue]);
    var handleValue = React.useCallback(function (event) {
        var value = event.target.value;
        setInputValue(value);
        if (disabled)
            return;
        var worksCount = value.trim().split(/\s+/);
        if (worksCount.length > maxWords) {
            setDisabledBtn(true);
            return;
        }
        setDisabledBtn(false);
    }, [disabled, maxWords]);
    var handleSubmit = React.useCallback(function () {
        if (inputValue) {
            onChange(inputValue);
            setInputValue('');
        }
    }, [inputValue, onChange]);
    var handleKeyDown = React.useCallback(function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (!disabledBtn) {
                handleSubmit();
            }
        }
    }, [disabledBtn, handleSubmit]);
    return (React__default["default"].createElement("div", { className: "".concat(InputPlus_module["".concat(common_constants.classMUI, "-input-plus")], " ").concat(className) },
        React__default["default"].createElement("input", { onKeyDown: handleKeyDown, placeholder: placeholder, value: inputValue, onChange: handleValue, type: "text", maxLength: maxLength }),
        React__default["default"].createElement("button", { type: "button", onClick: handleSubmit, className: "".concat(InputPlus_module["".concat(common_constants.classMUI, "-input-plus__plus-button")], " ").concat(disabledBtn ? InputPlus_module.disabled : ''), disabled: disabledBtn }, isLoading ? (React__default["default"].createElement(FlatLoader_component.FlatLoader, { color: "white", secondColor: "transparent" })) : (React__default["default"].createElement("img", { className: "".concat(disabledBtn ? InputPlus_module['disabled-img'] : ''), src: Add2, alt: "icon" })))));
};

exports.InputPlus = InputPlus;
//# sourceMappingURL=InputPlus.component.js.map
