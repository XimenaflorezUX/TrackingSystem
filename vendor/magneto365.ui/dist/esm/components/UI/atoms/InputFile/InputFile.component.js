import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef } from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { InputFileButton } from './children/InputFileButton/InputFileButton.component.js';
import { InputFileContainer } from './children/InputFileContainer/InputFileContainer.component.js';
import style from './InputFile.module.scss.js';

var cx = classNames.bind(style);
var Component = function (_a) {
    var children = _a.children, className = _a.className, onChange = _a.onChange, props = __rest(_a, ["children", "className", "onChange"]);
    var inputFileRef = useRef(null);
    var handleFileClick = function () {
        var _a;
        (_a = inputFileRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleFileDrop = function (event) {
        event.preventDefault();
        var files = event.dataTransfer.files;
        if (files.length && inputFileRef.current) {
            var dataTransfer_1 = new DataTransfer();
            Array.from(files).forEach(function (file) { return dataTransfer_1.items.add(file); });
            inputFileRef.current.files = dataTransfer_1.files;
            inputFileRef.current.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };
    var handleFileChange = function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    var handleDragOver = function (event) {
        event.preventDefault();
    };
    return (React.createElement("div", { className: cx(className), onClick: handleFileClick, onDrop: handleFileDrop, onDragOver: handleDragOver },
        children,
        React.createElement("input", __assign({ className: cx('magneto-ui-input-file'), onChange: handleFileChange, ref: inputFileRef, type: "file" }, props))));
};
/**
 * Atom UI component of Input File
 */
var InputFile = Object.assign(Component, {
    Button: InputFileButton,
    Container: InputFileContainer
});

export { InputFile };
//# sourceMappingURL=InputFile.component.js.map
