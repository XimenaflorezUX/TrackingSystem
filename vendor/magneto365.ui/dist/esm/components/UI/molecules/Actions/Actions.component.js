import { __assign, __rest } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowLeft2 from '../../../../assets/ArrowLeft2.svg.js';
import Share from '../../../../assets/Share.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import { SaveButton } from '../../atoms/SaveButton/SaveButton.component.js';
import { ShareButton } from '../../atoms/ShareButton/ShareButton.component.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './Actions.module.scss.js';
import { ShareIcons } from '../../../../constants/vacancies.constants.js';

var Component = function (_a) {
    var ActionsAnchorIcons = _a.ActionsAnchorIcons, ActionsAnchorLinks = _a.ActionsAnchorLinks, ActionAnchorText = _a.ActionAnchorText, ActionsHeader = _a.ActionsHeader, externalButtonChild = _a.externalButtonChild, saveButtonProps = _a.saveButtonProps, shareButtonProps = _a.shareButtonProps, copyButtonProps = _a.copyButtonProps, offerCompanyName = _a.offerCompanyName, backText = _a.backText, isApplied = _a.isApplied;
    var _b = useState(), component = _b[0], setComponent = _b[1];
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
    return (React.createElement("div", { className: styles['magneto-ui-actions'] },
        React.createElement("div", { id: styles['magneto-ui__external-child'] }, !isApplied && externalButtonChild),
        React.createElement(SaveButton, __assign({}, saveButtonProps)),
        React.createElement("button", { className: styles['magneto-ui-actions__button'], "aria-label": shareButtonProps.title, onClick: function () {
                return setComponent(React.createElement(Actions.ShareLinks, { offerCompanyName: offerCompanyName, shareButtonProps: copyButtonProps, ActionsHeader: ActionsHeader, backText: backText, onBack: handleBack }));
            } },
            React.createElement(IconItem, { size: 20, icon: Share }),
            shareButtonProps.content), actionsLinkList === null || actionsLinkList === void 0 ? void 0 :
        actionsLinkList.map(function (_a, index) {
            var url = _a.url, text = _a.text, Icon = _a.Icon;
            return (React.createElement("a", { className: styles['magneto-ui-actions__link'], key: index, href: url, target: "_blank", rel: "noreferrer" },
                React.createElement(IconItem, { hover: false, size: 20, icon: Icon }),
                React.createElement("p", { key: index }, text)));
        }),
        React.createElement("div", { className: styles['magneto-ui-actions__header'] },
            React.createElement("p", { className: styles['magneto-ui-actions__header-title'] }, ActionsHeader),
            offerCompanyName ? React.createElement("p", { className: styles['magneto-ui-actions__header-subtitle'] }, offerCompanyName) : null)));
};
var ShareLinksAction = function (_a) {
    var onBack = _a.onBack, _b = _a.shareButtonProps, _c = _b.shareLinks, shareLinks = _c === void 0 ? [] : _c, shareProps = __rest(_b, ["shareLinks"]), ActionsHeader = _a.ActionsHeader, offerCompanyName = _a.offerCompanyName, backText = _a.backText;
    return (React.createElement("div", { className: styles['magneto-ui-actions'] },
        React.createElement(ShareButton, __assign({ className: styles['magneto-ui-actions__share'] }, shareProps.shareButtonProps)),
        shareLinks.map(function (_a, index) {
            var title = _a.title, ariaLabel = _a.ariaLabel, href = _a.href, icon = _a.icon, name = _a.name;
            return (React.createElement("a", { key: "".concat(title, "-").concat(index), target: "_blank", rel: "noreferrer", "aria-label": ariaLabel, href: href, className: [styles['magneto-ui-actions__link'], styles['magneto-ui-actions__link--no-decorator']].join(' ') },
                React.createElement(IconItem, { size: 18, icon: name ? ShareIcons[name].icon : icon }),
                React.createElement("span", null, title)));
        }),
        React.createElement("div", { className: styles['magneto-ui-actions__header'] },
            React.createElement("p", { className: styles['magneto-ui-actions__header-title'] }, ActionsHeader),
            offerCompanyName ? React.createElement("p", { className: styles['magneto-ui-actions__header-subtitle'] }, offerCompanyName) : null),
        React.createElement("div", { className: styles['magneto-ui-actions__back'] },
            React.createElement("button", { className: styles['magneto-ui-actions__button'], onClick: function () { return onBack(); } },
                React.createElement(IconItem, { size: 20, icon: ArrowLeft2 })),
            backText)));
};
/**
 * UI Molecule componet of Actions
 */
var Actions = Object.assign(Component, { ShareLinks: ShareLinksAction });

export { Actions };
//# sourceMappingURL=Actions.component.js.map
