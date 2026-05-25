import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
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
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import styles from './JobActions.module.scss.js';
import { SharePopover } from '../SharePopover/SharePopover.js';
import Tooltip from '../Tooltip/Tooltip.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var actionsAnchorIcons = _a.actionsAnchorIcons, actionsAnchorLinks = _a.actionsAnchorLinks, actionsAnchorTitle = _a.actionsAnchorTitle, actionsAnchorText = _a.actionsAnchorText, externalButtonChild = _a.externalButtonChild, saveButtonProps = _a.saveButtonProps, shareButtonProps = _a.shareButtonProps, isApplied = _a.isApplied, _b = _a.isJobDetailPage, isJobDetailPage = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, className = _a.className, externalChildClass = _a.externalChildClass;
    var isMobile = useMediaQuery(true, { md: false });
    var actionsLinkList = actionsAnchorIcons === null || actionsAnchorIcons === void 0 ? void 0 : actionsAnchorIcons.map(function (_, index) { return ({
        icon: actionsAnchorIcons[index],
        url: actionsAnchorLinks === null || actionsAnchorLinks === void 0 ? void 0 : actionsAnchorLinks[index],
        title: actionsAnchorTitle === null || actionsAnchorTitle === void 0 ? void 0 : actionsAnchorTitle[index],
        text: actionsAnchorText === null || actionsAnchorText === void 0 ? void 0 : actionsAnchorText[index]
    }); });
    var filteredActionsLinkList = actionsLinkList === null || actionsLinkList === void 0 ? void 0 : actionsLinkList.filter(function (item) { return item.url !== null && item.url !== undefined; });
    var renderExternalButton = function () {
        if (isApplied)
            return null;
        return (React.createElement("div", { className: cx(externalChildClass, 'external-button-container', {
                'detailed-mode': variant === 'detailed'
            }) }, externalButtonChild));
    };
    var ActionItem = function (_a) {
        var url = _a.url, title = _a.title, icon = _a.icon, text = _a.text;
        var isVariantDetailed = variant === 'detailed';
        var content = (React.createElement("a", { className: cx('icon-link'), href: url, target: "_blank", rel: "noreferrer", title: title },
            React.createElement(IconItem, { hover: true, size: isVariantDetailed ? 16 : 20, icon: icon }),
            variant === 'detailed' && text && React.createElement("span", { className: cx('action-text') }, text)));
        return (React.createElement(Tooltip, { title: title, position: "bottom", visible: isMobile },
            React.createElement("div", { className: cx('action-item', {
                    'with-text': variant === 'detailed',
                    'icon-only': variant === 'default'
                }) }, content)));
    };
    return (React.createElement("div", { className: cx('magneto-ui-job-actions', className, {
            'default-variant': variant === 'default',
            'job-detail-layout': isJobDetailPage,
            'variant-detailed': variant === 'detailed'
        }) },
        renderExternalButton(),
        React.createElement("div", { className: cx('actions-container', { 'job-detail-page': isJobDetailPage }) },
            !isApplied && (React.createElement(Tooltip, { title: saveButtonProps.buttonTitle || 'Guardar', position: "bottom", visible: isMobile },
                React.createElement(SaveButton, __assign({}, saveButtonProps)))),
            React.createElement(SharePopover, __assign({}, shareButtonProps)), filteredActionsLinkList === null || filteredActionsLinkList === void 0 ? void 0 :
            filteredActionsLinkList.map(function (_a) {
                var url = _a.url, title = _a.title, icon = _a.icon, text = _a.text;
                return (React.createElement(ActionItem, { key: "".concat(url, "-").concat(title), url: url, title: title, icon: icon, text: text }));
            }))));
};
var JobActions = Component;

export { JobActions };
//# sourceMappingURL=JobActions.component.js.map
