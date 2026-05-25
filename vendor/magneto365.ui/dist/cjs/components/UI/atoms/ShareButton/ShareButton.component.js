'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var ShareButton_module = require('./ShareButton.module.scss.js');
var jobDetails_constants = require('../../../../constants/jobDetails.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, buttonTitle = _a.buttonTitle, buttonText = _a.buttonText, detailUrl = _a.detailUrl, addHover = _a.addHover, onCopySuccess = _a.onCopySuccess, icon = _a.icon;
    var handleCopyClick = function () {
        if (detailUrl) {
            navigator.clipboard.writeText(detailUrl).then(function () { return onCopySuccess === null || onCopySuccess === void 0 ? void 0 : onCopySuccess(); });
        }
    };
    return (React__default["default"].createElement("button", { className: "".concat(ShareButton_module['magneto-ui-share-button'], " ").concat(addHover && ShareButton_module['hover-effect'], " ").concat(className), type: "button", onClick: handleCopyClick, title: buttonTitle },
        React__default["default"].createElement("div", { className: ShareButton_module['button-content'] },
            React__default["default"].createElement(Icon_component.IconItem, { size: 20, icon: icon && jobDetails_constants.iconJobDetailsAction[icon], hover: addHover }),
            buttonText && React__default["default"].createElement("p", { className: ShareButton_module['magneto-ui-share-button__mobile-text'] }, buttonText))));
};
var ShareButton = Component;

exports.ShareButton = ShareButton;
//# sourceMappingURL=ShareButton.component.js.map
