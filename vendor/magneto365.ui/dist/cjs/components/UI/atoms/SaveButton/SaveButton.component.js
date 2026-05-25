'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var SaveButton_module = require('./SaveButton.module.scss.js');
var ArchiveAdd = require('../../../../assets/ArchiveAdd.svg.js');
var ArchiveRemove = require('../../../../assets/ArchiveRemove.svg.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SaveButton_module);
var Component = function (_a) {
    var isSaved = _a.isSaved, buttonText = _a.buttonText, buttonTitle = _a.buttonTitle, addHover = _a.addHover, onClick = _a.onClick, _b = _a.isAuthenticated, isAuthenticated = _b === void 0 ? false : _b, _c = _a.iconSize, iconSize = _c === void 0 ? 20 : _c;
    return isAuthenticated ? (React__default["default"].createElement("button", { className: cx('magneto-ui-save-button', { 'hover-effect': addHover }), type: "button", onClick: onClick, "aria-label": buttonTitle },
        React__default["default"].createElement("div", { className: cx('button-content') },
            React__default["default"].createElement(Icon_component.IconItem, { size: iconSize, icon: isSaved ? ArchiveRemove : ArchiveAdd, hover: addHover }),
            buttonText && React__default["default"].createElement("p", { className: cx('magneto-ui-save-button__mobile-text') }, buttonText)))) : null;
};
/**
 * UI Atom Component of Save Button
 */
var SaveButton = Component;

exports.SaveButton = SaveButton;
//# sourceMappingURL=SaveButton.component.js.map
