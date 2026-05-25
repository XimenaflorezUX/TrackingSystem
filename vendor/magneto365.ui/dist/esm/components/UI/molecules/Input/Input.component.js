import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import DocumentTextGray from '../../../../assets/DocumentTextGray.svg.js';
import Email from '../../../../assets/Email.svg.js';
import EyeSlash from '../../../../assets/eye-slash.svg.js';
import Mobile from '../../../../assets/Mobile.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import styles from './Input.module.scss.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import { ComparativeCounter } from '../../atoms/ComparativeCounter/ComparativeCounter.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var Input = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.name, name = _c === void 0 ? '' : _c, type = _a.type, placeholder = _a.placeholder, customIcon = _a.customIcon, _d = _a.hideIcon, hideIcon = _d === void 0 ? false : _d, error = _a.error, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.autoFocus, autoFocus = _f === void 0 ? false : _f, _g = _a.hasCounter, hasCounter = _g === void 0 ? false : _g, _h = _a.maxCounterValue, maxCounterValue = _h === void 0 ? 0 : _h, actionIcon = _a.actionIcon, mainClassName = _a.mainClassName, _j = _a.actionInputIcon, actionInputIcon = _j === void 0 ? function () { return null; } : _j, props = __rest(_a, ["value", "onChange", "name", "type", "placeholder", "customIcon", "hideIcon", "error", "disabled", "autoFocus", "hasCounter", "maxCounterValue", "actionIcon", "mainClassName", "actionInputIcon"]);
    var _k = useState(false), onFocus = _k[0], setOnFocus = _k[1];
    var _l = useState(''), inputValue = _l[0], setInputValue = _l[1];
    var haveValueOrFocus = useMemo(function () {
        if (value !== null)
            return onFocus || (value === null || value === void 0 ? void 0 : value.length) > 0;
    }, [onFocus, value]);
    useEffect(function () {
        if (value && hasCounter) {
            setInputValue(value);
        }
    }, [hasCounter, value]);
    useEffect(function () {
        var _a;
        if (autoFocus && document.getElementById(name)) {
            (_a = document.getElementById(name)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autoFocus, name]);
    var dinamyIcon = useMemo(function () {
        var _a;
        return _a = {},
            _a['text'] = DocumentTextGray,
            _a['email'] = Email,
            _a['number'] = Mobile,
            _a['password'] = EyeSlash,
            _a;
    }, []);
    var handleChange = useCallback(function (e) {
        onChange(e);
        setInputValue(e.target.value);
    }, [onChange]);
    return (React.createElement("div", { style: { height: 'auto', width: '100%' } },
        React.createElement("div", { className: "".concat(styles["".concat(classMUI, "-input")], " ").concat(mainClassName) },
            React.createElement("div", null,
                React.createElement("div", { className: styles["".concat(classMUI, "-input--container")] },
                    React.createElement("label", { htmlFor: name, style: {
                            left: hideIcon ? '10px' : '40px',
                            top: haveValueOrFocus ? '30%' : '45%',
                            fontSize: haveValueOrFocus ? '12px' : '14px',
                            pointerEvents: 'none'
                        }, className: styles["".concat(classMUI, "-input--container__label")] }, placeholder),
                    React.createElement("input", __assign({}, props, { style: {
                            padding: hideIcon ? '0px 10px' : '0px 40px'
                        }, disabled: disabled, className: styles["".concat(classMUI, "-input--container__input")], type: type, name: name, value: value, onChange: handleChange, onFocus: function (e) {
                            var _a;
                            (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
                            setOnFocus(true);
                        }, onBlur: function (e) {
                            var _a;
                            (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
                            setOnFocus(false);
                        }, id: name, autoComplete: "off" })),
                    hideIcon ? null : (React.createElement("img", { className: styles["".concat(classMUI, "-input--container__icon")], src: customIcon ? customIcon : dinamyIcon[type] || DocumentTextGray })),
                    actionIcon ? (React.createElement("button", { type: "button", onClick: actionInputIcon, className: styles["".concat(classMUI, "-input--container__icon-action")] },
                        React.createElement("img", { "data-name": "icon", src: actionIcon }))) : null))),
        React.createElement("div", { className: "".concat(styles["".concat(classMUI, "-input__footer")], " ").concat(!error && hasCounter ? styles['footer-without-error'] : '') },
            error && (React.createElement("span", { style: { width: hasCounter ? '80%' : '100%' }, className: styles["".concat(classMUI, "-input--container__error")] }, error)),
            hasCounter && React.createElement(ComparativeCounter, { current: inputValue.length, max: maxCounterValue }))));
};

export { Input as default };
//# sourceMappingURL=Input.component.js.map
