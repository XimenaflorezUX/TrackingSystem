'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
var Share = require('../../../../assets/Share.svg.js');
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
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
var SaveButton_component = require('../../atoms/SaveButton/SaveButton.component.js');
var ShareButton_component = require('../../atoms/ShareButton/ShareButton.component.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var Actions_module = require('./Actions.module.scss.js');
var vacancies_constants = require('../../../../constants/vacancies.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var ActionsAnchorIcons = _a.ActionsAnchorIcons, ActionsAnchorLinks = _a.ActionsAnchorLinks, ActionAnchorText = _a.ActionAnchorText, ActionsHeader = _a.ActionsHeader, externalButtonChild = _a.externalButtonChild, saveButtonProps = _a.saveButtonProps, shareButtonProps = _a.shareButtonProps, copyButtonProps = _a.copyButtonProps, offerCompanyName = _a.offerCompanyName, backText = _a.backText, isApplied = _a.isApplied;
    var _b = React.useState(), component = _b[0], setComponent = _b[1];
    var actionsLinkList = ActionsAnchorIcons === null || ActionsAnchorIcons === void 0 ? void 0 : ActionsAnchorIcons.map(function (_, index) { return ({
        Icon: ActionsAnchorIcons === null || ActionsAnchorIcons === void 0 ? void 0 : ActionsAnchorIcons[index],
        text: ActionAnchorText === null || ActionAnchorText === void 0 ? void 0 : ActionAnchorText[index],
        url: ActionsAnchorLinks === null || ActionsAnchorLinks === void 0 ? void 0 : ActionsAnchorLinks[index]
    }); });
    var handleBack = function () {
        setComponent(undefined);
    };
    if (component)
        return component;
    return (React__default["default"].createElement("div", { className: Actions_module['magneto-ui-actions'] },
        React__default["default"].createElement("div", { id: Actions_module['magneto-ui__external-child'] }, !isApplied && externalButtonChild),
        React__default["default"].createElement(SaveButton_component.SaveButton, tslib_es6.__assign({}, saveButtonProps)),
        React__default["default"].createElement("button", { className: Actions_module['magneto-ui-actions__button'], "aria-label": shareButtonProps.title, onClick: function () {
                return setComponent(React__default["default"].createElement(Actions.ShareLinks, { offerCompanyName: offerCompanyName, shareButtonProps: copyButtonProps, ActionsHeader: ActionsHeader, backText: backText, onBack: handleBack }));
            } },
            React__default["default"].createElement(Icon_component.IconItem, { size: 20, icon: Share }),
            shareButtonProps.content), actionsLinkList === null || actionsLinkList === void 0 ? void 0 :
        actionsLinkList.map(function (_a, index) {
            var url = _a.url, text = _a.text, Icon = _a.Icon;
            return (React__default["default"].createElement("a", { className: Actions_module['magneto-ui-actions__link'], key: index, href: url, target: "_blank", rel: "noreferrer" },
                React__default["default"].createElement(Icon_component.IconItem, { hover: false, size: 20, icon: Icon }),
                React__default["default"].createElement("p", { key: index }, text)));
        }),
        React__default["default"].createElement("div", { className: Actions_module['magneto-ui-actions__header'] },
            React__default["default"].createElement("p", { className: Actions_module['magneto-ui-actions__header-title'] }, ActionsHeader),
            offerCompanyName ? React__default["default"].createElement("p", { className: Actions_module['magneto-ui-actions__header-subtitle'] }, offerCompanyName) : null)));
};
var ShareLinksAction = function (_a) {
    var onBack = _a.onBack, _b = _a.shareButtonProps, _c = _b.shareLinks, shareLinks = _c === void 0 ? [] : _c, shareProps = tslib_es6.__rest(_b, ["shareLinks"]), ActionsHeader = _a.ActionsHeader, offerCompanyName = _a.offerCompanyName, backText = _a.backText;
    return (React__default["default"].createElement("div", { className: Actions_module['magneto-ui-actions'] },
        React__default["default"].createElement(ShareButton_component.ShareButton, tslib_es6.__assign({ className: Actions_module['magneto-ui-actions__share'] }, shareProps.shareButtonProps)),
        shareLinks.map(function (_a, index) {
            var title = _a.title, ariaLabel = _a.ariaLabel, href = _a.href, icon = _a.icon, name = _a.name;
            return (React__default["default"].createElement("a", { key: "".concat(title, "-").concat(index), target: "_blank", rel: "noreferrer", "aria-label": ariaLabel, href: href, className: [Actions_module['magneto-ui-actions__link'], Actions_module['magneto-ui-actions__link--no-decorator']].join(' ') },
                React__default["default"].createElement(Icon_component.IconItem, { size: 18, icon: name ? vacancies_constants.ShareIcons[name].icon : icon }),
                React__default["default"].createElement("span", null, title)));
        }),
        React__default["default"].createElement("div", { className: Actions_module['magneto-ui-actions__header'] },
            React__default["default"].createElement("p", { className: Actions_module['magneto-ui-actions__header-title'] }, ActionsHeader),
            offerCompanyName ? React__default["default"].createElement("p", { className: Actions_module['magneto-ui-actions__header-subtitle'] }, offerCompanyName) : null),
        React__default["default"].createElement("div", { className: Actions_module['magneto-ui-actions__back'] },
            React__default["default"].createElement("button", { className: Actions_module['magneto-ui-actions__button'], onClick: function () { return onBack(); } },
                React__default["default"].createElement(Icon_component.IconItem, { size: 20, icon: ArrowLeft2 })),
            backText)));
};
/**
 * UI Molecule componet of Actions
 */
var Actions = Object.assign(Component, { ShareLinks: ShareLinksAction });

exports.Actions = Actions;
//# sourceMappingURL=Actions.component.js.map
