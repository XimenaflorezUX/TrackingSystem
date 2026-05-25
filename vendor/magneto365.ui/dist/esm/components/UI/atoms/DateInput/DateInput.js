import { __spreadArray } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useEffect } from 'react';
import { notNumberRegex } from '../../../../shared/utils/common/formatNumbers.util.js';
import { isDate } from '../../../../shared/utils/common/dates.util.js';
import { fixArrayDate } from '../../../../utils/date/dateInput.util.js';
import styles from './DateInput.module.scss.js';

// placeholder to every input.
var placeholder = ['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A'];
var stringArraytoDate = function (array) {
    var d1 = array[0], d2 = array[1], m1 = array[2], m2 = array[3], year = array.slice(4);
    return new Date(Number(year.join('')), Number("".concat(m1).concat(m2)) - 1, Number("".concat(d1).concat(d2)));
};
var Component = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, value = _a.value, _c = _a.onChange, onChange = _c === void 0 ? function () { return null; } : _c, _d = _a.fit, fit = _d === void 0 ? false : _d, _e = _a.hasError, hasError = _e === void 0 ? false : _e;
    // Represent the value of every input field (there are 8 in total).
    var _f = useState(Array(8).fill('')), internalValues = _f[0], setInternalValues = _f[1];
    // With for every input text
    var _g = useState('2ch'), width = _g[0], setWidth = _g[1];
    // An array of references of every input field.
    var inputsRef = useRef([]);
    // Last value emited to onChange function
    var lastValueEmitedRef = useRef(value);
    var handleEmit = function (value) {
        if (isDate(value)) {
            lastValueEmitedRef.current = value;
            return onChange(value);
        }
        if (value !== lastValueEmitedRef.current) {
            lastValueEmitedRef.current = value;
            return onChange(value);
        }
    };
    var handleChange = function (index, value) {
        var _a;
        var newValues = __spreadArray([], internalValues, true);
        var numberValue = value.slice(-1).replace(notNumberRegex, '');
        newValues[index] = numberValue;
        setInternalValues(fixArrayDate(newValues));
        // Focus the next input
        if (numberValue && index < internalValues.length - 1) {
            (_a = inputsRef.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
        }
        if (newValues.join('').length === 8) {
            handleEmit(stringArraytoDate(newValues));
        }
        else {
            handleEmit(undefined);
        }
    };
    var handleKeyDown = function (index, key) {
        var _a, _b, _c;
        if (key === 'Backspace' && !internalValues[index] && index > 0) {
            var newValues = __spreadArray([], internalValues, true);
            newValues[index - 1] = '';
            setInternalValues(newValues);
            (_a = inputsRef.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            handleEmit(undefined);
        }
        else if (key === 'Backspace' && internalValues[index] && index >= 0) {
            var newValues = __spreadArray([], internalValues, true);
            newValues[index] = '';
            setInternalValues(newValues);
            handleEmit(undefined);
        }
        else if (key === 'ArrowLeft' && index > 0) {
            (_b = inputsRef.current[index - 1]) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else if (key === 'ArrowRight' && index < internalValues.length - 1) {
            (_c = inputsRef.current[index + 1]) === null || _c === void 0 ? void 0 : _c.focus();
        }
    };
    var handlePaste = function (index, event) {
        var _a, _b;
        event.preventDefault();
        var pasteData = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text').replace(notNumberRegex, '').slice(0, internalValues.length - index);
        if (pasteData == undefined)
            return;
        var newValues = __spreadArray([], internalValues, true);
        for (var i = 0; i < pasteData.length; i++) {
            newValues[index + i] = pasteData[i];
        }
        setInternalValues(newValues);
        if (index + pasteData.length - 1 < internalValues.length) {
            (_b = inputsRef.current[index + pasteData.length - 1]) === null || _b === void 0 ? void 0 : _b.focus();
        }
        if (newValues.join('').length === 8) {
            handleEmit(stringArraytoDate(newValues));
        }
    };
    useEffect(function () {
        if (value === null) {
            setInternalValues(Array(8).fill(''));
        }
        else if (isDate(value)) {
            var day = String(value.getDate()).padStart(2, '0').split('');
            var month = String(value.getMonth() + 1)
                .padStart(2, '0')
                .split('');
            var year = value.getFullYear().toString().padStart(4, '0').split('');
            setInternalValues(__spreadArray(__spreadArray(__spreadArray([], day, true), month, true), year, true));
        }
    }, [value]);
    useEffect(function () {
        if (inputsRef.current && inputsRef.current[0]) {
            // get font-family
            var computedStyle = window.getComputedStyle(inputsRef.current[0]);
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            if (!context)
                return;
            context.font = "18px ".concat(computedStyle.fontFamily);
            setWidth(context.measureText('M').width);
        }
    }, []);
    return (React.createElement("div", { className: [
            styles['date-input'],
            className,
            fit ? styles['date-input--fit'] : '',
            hasError ? styles['date-input--error'] : ''
        ].join(' ') },
        React.createElement("div", { className: styles['date-input__left'], onClick: function () {
                var _a;
                (_a = inputsRef.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
            } }),
        internalValues.map(function (value, index) { return (React.createElement(React.Fragment, { key: index },
            [2, 4].includes(index) ? (
            // include / separator in date (DD / MM / YYYY)
            React.createElement("span", { className: [styles['date-input__separator'], value ? styles['date-input__separator--filled'] : ''].join(' ') }, "/")) : null,
            React.createElement("input", { className: styles['date-input__input'], style: { width: width }, type: "text", maxLength: 1, value: value, placeholder: placeholder[index], onChange: function (e) { return handleChange(index, e.target.value); }, onKeyDown: function (e) { return handleKeyDown(index, e.key); }, onPaste: function (e) { return handlePaste(index, e); }, ref: function (el) { return (inputsRef.current[index] = el); }, inputMode: "numeric" }))); }),
        React.createElement("div", { className: styles['date-input__right'], onClick: function () {
                var _a;
                (_a = inputsRef.current[inputsRef.current.length - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            } })));
};
var DateInput = Component;

export { DateInput };
//# sourceMappingURL=DateInput.js.map
