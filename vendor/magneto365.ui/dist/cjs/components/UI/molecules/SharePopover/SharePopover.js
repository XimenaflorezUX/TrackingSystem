'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
var Popover_component = require('../../atoms/Popover/Popover.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
var ShareButton_component = require('../../atoms/ShareButton/ShareButton.component.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var SharePopover_module = require('./SharePopover.module.scss.js');
var vacancies_constants = require('../../../../constants/vacancies.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(SharePopover_module);
var Component = function (_a) {
    var _b = _a.shareLinks, shareLinks = _b === void 0 ? [] : _b, _c = _a.btnProps, btnProps = _c === void 0 ? {} : _c, _d = _a.classNameContent, classNameContent = _d === void 0 ? '' : _d, _e = _a.classNameButton, classNameButton = _e === void 0 ? '' : _e, buttonText = _a.buttonText, iconPopover = _a.iconPopover, _f = _a.iconPopoverSize, iconPopoverSize = _f === void 0 ? 20 : _f, shareButtonProps = _a.shareButtonProps;
    var _g = React.useState(false), show = _g[0], setShow = _g[1];
    return (React__default["default"].createElement(Popover_component.Popover, { className: cx('popover', { 'popover--hidden': !show, 'popover--hover': shareButtonProps === null || shareButtonProps === void 0 ? void 0 : shareButtonProps.addHover }), positionX: "right", positionY: "bottom", show: show, widthBase: 45, content: React__default["default"].createElement("ul", { className: cx('content', classNameContent) },
            shareLinks.map(function (_a, index) {
                var title = _a.title, href = _a.href, ariaLabel = _a.ariaLabel, icon = _a.icon, name = _a.name;
                return (React__default["default"].createElement("li", { key: "".concat(title, "-").concat(index) },
                    React__default["default"].createElement("a", { title: title, href: href, target: "_blank", rel: "noreferrer", "aria-label": ariaLabel, className: cx('content__link'), onClick: function () { return setShow(false); } },
                        React__default["default"].createElement(Icon_component.IconItem, { size: 16, icon: name ? vacancies_constants.ShareIcons[name].icon : icon }),
                        React__default["default"].createElement("span", null, title))));
            }),
            React__default["default"].createElement("li", { className: cx('content__share') },
                React__default["default"].createElement(ShareButton_component.ShareButton, tslib_es6.__assign({}, shareButtonProps, { onCopySuccess: function () {
                        shareButtonProps.onCopySuccess();
                    } })))) },
        React__default["default"].createElement("button", tslib_es6.__assign({}, btnProps, { title: "", "aria-label": btnProps.title, className: cx('popover__btn', classNameButton), onClick: function () { return setShow(function (show) { return !show; }); }, onBlur: function () { return setShow(false); } }),
            React__default["default"].createElement(Icon_component.IconItem, { size: iconPopoverSize, icon: iconPopover }),
            React__default["default"].createElement("span", { className: cx('popover__btn-text') }, buttonText))));
};
Component.displayName = 'SharePopover';
var SharePopover = Component;

exports.SharePopover = SharePopover;
//# sourceMappingURL=SharePopover.js.map
