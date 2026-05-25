'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var InputFileButton_component = require('./children/InputFileButton/InputFileButton.component.js');
var InputFileContainer_component = require('./children/InputFileContainer/InputFileContainer.component.js');
var InputFile_module = require('./InputFile.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(InputFile_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, onChange = _a.onChange, props = tslib_es6.__rest(_a, ["children", "className", "onChange"]);
    var inputFileRef = React.useRef(null);
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
    return (React__default["default"].createElement("div", { className: cx(className), onClick: handleFileClick, onDrop: handleFileDrop, onDragOver: handleDragOver },
        children,
        React__default["default"].createElement("input", tslib_es6.__assign({ className: cx('magneto-ui-input-file'), onChange: handleFileChange, ref: inputFileRef, type: "file" }, props))));
};
/**
 * Atom UI component of Input File
 */
var InputFile = Object.assign(Component, {
    Button: InputFileButton_component.InputFileButton,
    Container: InputFileContainer_component.InputFileContainer
});

exports.InputFile = InputFile;
//# sourceMappingURL=InputFile.component.js.map
