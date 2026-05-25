'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var index = require('../../../hooks/useMediaQuery/index.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
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
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
var JobActions_module = require('./JobActions.module.scss.js');
var SharePopover = require('../SharePopover/SharePopover.js');
var Tooltip_component = require('../Tooltip/Tooltip.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobActions_module);
var Component = function (_a) {
    var actionsAnchorIcons = _a.actionsAnchorIcons, actionsAnchorLinks = _a.actionsAnchorLinks, actionsAnchorTitle = _a.actionsAnchorTitle, actionsAnchorText = _a.actionsAnchorText, externalButtonChild = _a.externalButtonChild, saveButtonProps = _a.saveButtonProps, shareButtonProps = _a.shareButtonProps, isApplied = _a.isApplied, _b = _a.isJobDetailPage, isJobDetailPage = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, className = _a.className, externalChildClass = _a.externalChildClass;
    var isMobile = index.useMediaQuery(true, { md: false });
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
        return (React__default["default"].createElement("div", { className: cx(externalChildClass, 'external-button-container', {
                'detailed-mode': variant === 'detailed'
            }) }, externalButtonChild));
    };
    var ActionItem = function (_a) {
        var url = _a.url, title = _a.title, icon = _a.icon, text = _a.text;
        var isVariantDetailed = variant === 'detailed';
        var content = (React__default["default"].createElement("a", { className: cx('icon-link'), href: url, target: "_blank", rel: "noreferrer", title: title },
            React__default["default"].createElement(Icon_component.IconItem, { hover: true, size: isVariantDetailed ? 16 : 20, icon: icon }),
            variant === 'detailed' && text && React__default["default"].createElement("span", { className: cx('action-text') }, text)));
        return (React__default["default"].createElement(Tooltip_component, { title: title, position: "bottom", visible: isMobile },
            React__default["default"].createElement("div", { className: cx('action-item', {
                    'with-text': variant === 'detailed',
                    'icon-only': variant === 'default'
                }) }, content)));
    };
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-job-actions', className, {
            'default-variant': variant === 'default',
            'job-detail-layout': isJobDetailPage,
            'variant-detailed': variant === 'detailed'
        }) },
        renderExternalButton(),
        React__default["default"].createElement("div", { className: cx('actions-container', { 'job-detail-page': isJobDetailPage }) },
            !isApplied && (React__default["default"].createElement(Tooltip_component, { title: saveButtonProps.buttonTitle || 'Guardar', position: "bottom", visible: isMobile },
                React__default["default"].createElement(SaveButton_component.SaveButton, tslib_es6.__assign({}, saveButtonProps)))),
            React__default["default"].createElement(SharePopover.SharePopover, tslib_es6.__assign({}, shareButtonProps)), filteredActionsLinkList === null || filteredActionsLinkList === void 0 ? void 0 :
            filteredActionsLinkList.map(function (_a) {
                var url = _a.url, title = _a.title, icon = _a.icon, text = _a.text;
                return (React__default["default"].createElement(ActionItem, { key: "".concat(url, "-").concat(title), url: url, title: title, icon: icon, text: text }));
            }))));
};
var JobActions = Component;

exports.JobActions = JobActions;
//# sourceMappingURL=JobActions.component.js.map
