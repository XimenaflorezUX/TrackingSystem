import React, { useState, useEffect, useCallback } from 'react';
import { FlatLoader } from '../../atoms/FlatLoader/FlatLoader.component.js';
import Add2 from '../../../../assets/Add2.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import styles from './InputPlus.module.scss.js';

var InputPlus = function (_a) {
    var onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.maxWords, maxWords = _b === void 0 ? 4 : _b, disabled = _a.disabled, isLoading = _a.isLoading, _c = _a.className, className = _c === void 0 ? '' : _c, getValue = _a.getValue, maxLength = _a.maxLength;
    var _d = useState(''), inputValue = _d[0], setInputValue = _d[1];
    var _e = useState(false), disabledBtn = _e[0], setDisabledBtn = _e[1];
    useEffect(function () {
        if (disabled) {
            setDisabledBtn(true);
            return;
        }
        setDisabledBtn(false);
    }, [disabled]);
    useEffect(function () {
        if (getValue && inputValue) {
            getValue(inputValue);
        }
    }, [getValue, inputValue]);
    var handleValue = useCallback(function (event) {
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
    var handleSubmit = useCallback(function () {
        if (inputValue) {
            onChange(inputValue);
            setInputValue('');
        }
    }, [inputValue, onChange]);
    var handleKeyDown = useCallback(function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (!disabledBtn) {
                handleSubmit();
            }
        }
    }, [disabledBtn, handleSubmit]);
    return (React.createElement("div", { className: "".concat(styles["".concat(classMUI, "-input-plus")], " ").concat(className) },
        React.createElement("input", { onKeyDown: handleKeyDown, placeholder: placeholder, value: inputValue, onChange: handleValue, type: "text", maxLength: maxLength }),
        React.createElement("button", { type: "button", onClick: handleSubmit, className: "".concat(styles["".concat(classMUI, "-input-plus__plus-button")], " ").concat(disabledBtn ? styles.disabled : ''), disabled: disabledBtn }, isLoading ? (React.createElement(FlatLoader, { color: "white", secondColor: "transparent" })) : (React.createElement("img", { className: "".concat(disabledBtn ? styles['disabled-img'] : ''), src: Add2, alt: "icon" })))));
};

export { InputPlus };
//# sourceMappingURL=InputPlus.component.js.map
