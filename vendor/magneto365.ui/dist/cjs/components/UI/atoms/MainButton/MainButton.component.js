'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var Loading_component = require('../Loading/Loading.component.js');
var MainButton_modules = require('./MainButton.modules.scss.js');
var _Function = require('../../../../shared/utils/Function.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var buttonType = _a.buttonType, buttonSize = _a.buttonSize, buttonText = _a.buttonText, buttonStyles = _a.buttonStyles, loadingState = _a.loadingState, iconProps = _a.iconProps, isMobile = _a.isMobile, className = _a.className, _b = _a.title, title = _b === void 0 ? '' : _b, disabled = _a.disabled, onClick = _a.onClick;
    var stylesValue = React.useMemo(function () { return _Function.toCSSVariables(buttonStyles); }, [buttonStyles]);
    var renderContent = function () {
        if (loadingState) {
            return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement(Loading_component.Loading, tslib_es6.__assign({}, common_constants.LoadingProps)),
                !isMobile && React__default["default"].createElement("p", null, buttonText)));
        }
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            iconProps && React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, iconProps)),
            !isMobile && React__default["default"].createElement("p", null, buttonText)));
    };
    return (React__default["default"].createElement("button", { className: "".concat(MainButton_modules.MainButtonComponent, " ").concat(className, " ").concat(disabled ? MainButton_modules.disabled : ''), type: buttonType, style: stylesValue, onClick: onClick, "data-button-size": buttonSize, "data-is-mobile": isMobile, title: title ? title : buttonText, disabled: disabled }, renderContent()));
};
/**
 * Atom UI component of button for general purpose
 */
var MainButton = Component;

exports.MainButton = MainButton;
//# sourceMappingURL=MainButton.component.js.map
