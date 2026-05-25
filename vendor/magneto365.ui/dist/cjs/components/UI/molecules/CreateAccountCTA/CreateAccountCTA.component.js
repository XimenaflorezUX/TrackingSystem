'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ProfileAdd = require('../../../../assets/ProfileAdd.svg.js');
var smsStar = require('../../../../assets/sms-star.svg.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
var DotsLoader_component = require('../../atoms/DotsLoader/DotsLoader.component.js');
require('../../atoms/Field/Field.component.js');
var Typography_component = require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var CreateAccountCTA_module = require('./CreateAccountCTA.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var onHandlerCreateAccount = _a.onHandlerCreateAccount, onHandlerNewsletter = _a.onHandlerNewsletter, description = _a.description, title = _a.title, isLoading = _a.isLoading, primaryText = _a.primaryText, secondaryText = _a.secondaryText;
    return (React__default["default"].createElement("div", { className: CreateAccountCTA_module['create-account-cta'] }, isLoading ? (React__default["default"].createElement("div", { className: CreateAccountCTA_module['create-account-cta__loader'] },
        React__default["default"].createElement(DotsLoader_component.DotsLoader, { color: "#1a324c", count: 3 }))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: CreateAccountCTA_module['create-account-cta__content'] },
            React__default["default"].createElement("div", { className: CreateAccountCTA_module['create-account-cta__header'] },
                React__default["default"].createElement("span", { className: CreateAccountCTA_module['create-account-cta__emoji'] }, "\uD83E\uDD13"),
                React__default["default"].createElement(Typography_component.Typography.Text, { size: "lg", weight: "bold" }, title)),
            React__default["default"].createElement(Typography_component.Typography.Text, { size: "md", color: "blue-dark-300", className: CreateAccountCTA_module['create-account-cta__description'] }, description)),
        React__default["default"].createElement("div", { className: CreateAccountCTA_module['create-account-cta__actions'] },
            React__default["default"].createElement(MainButton_component.MainButton, { buttonSize: "full", buttonStyles: { buttonColor: '#9EE4B8', textColor: '#292F37', spacing: '10px' }, onClick: onHandlerCreateAccount, buttonText: primaryText, iconProps: { icon: ProfileAdd, size: 20 }, className: CreateAccountCTA_module['btn--primary'] }),
            React__default["default"].createElement(MainButton_component.MainButton, { buttonSize: "full", buttonStyles: { buttonColor: '#FFFFFF', textColor: '#292F37', spacing: '10px' }, onClick: onHandlerNewsletter, buttonText: secondaryText, iconProps: { icon: smsStar, size: 20 }, className: CreateAccountCTA_module['btn--secondary'] }))))));
};
var CreateAccountCTA = Component;

exports.CreateAccountCTA = CreateAccountCTA;
//# sourceMappingURL=CreateAccountCTA.component.js.map
