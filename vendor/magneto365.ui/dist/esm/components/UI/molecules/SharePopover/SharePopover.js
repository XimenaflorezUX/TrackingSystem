import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
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
import { Popover } from '../../atoms/Popover/Popover.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import { ShareButton } from '../../atoms/ShareButton/ShareButton.component.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import style from './SharePopover.module.scss.js';
import { ShareIcons } from '../../../../constants/vacancies.constants.js';

var cx = classNames.bind(style);
var Component = function (_a) {
    var _b = _a.shareLinks, shareLinks = _b === void 0 ? [] : _b, _c = _a.btnProps, btnProps = _c === void 0 ? {} : _c, _d = _a.classNameContent, classNameContent = _d === void 0 ? '' : _d, _e = _a.classNameButton, classNameButton = _e === void 0 ? '' : _e, buttonText = _a.buttonText, iconPopover = _a.iconPopover, _f = _a.iconPopoverSize, iconPopoverSize = _f === void 0 ? 20 : _f, shareButtonProps = _a.shareButtonProps;
    var _g = useState(false), show = _g[0], setShow = _g[1];
    return (React.createElement(Popover, { className: cx('popover', { 'popover--hidden': !show, 'popover--hover': shareButtonProps === null || shareButtonProps === void 0 ? void 0 : shareButtonProps.addHover }), positionX: "right", positionY: "bottom", show: show, widthBase: 45, content: React.createElement("ul", { className: cx('content', classNameContent) },
            shareLinks.map(function (_a, index) {
                var title = _a.title, href = _a.href, ariaLabel = _a.ariaLabel, icon = _a.icon, name = _a.name;
                return (React.createElement("li", { key: "".concat(title, "-").concat(index) },
                    React.createElement("a", { title: title, href: href, target: "_blank", rel: "noreferrer", "aria-label": ariaLabel, className: cx('content__link'), onClick: function () { return setShow(false); } },
                        React.createElement(IconItem, { size: 16, icon: name ? ShareIcons[name].icon : icon }),
                        React.createElement("span", null, title))));
            }),
            React.createElement("li", { className: cx('content__share') },
                React.createElement(ShareButton, __assign({}, shareButtonProps, { onCopySuccess: function () {
                        shareButtonProps.onCopySuccess();
                    } })))) },
        React.createElement("button", __assign({}, btnProps, { title: "", "aria-label": btnProps.title, className: cx('popover__btn', classNameButton), onClick: function () { return setShow(function (show) { return !show; }); }, onBlur: function () { return setShow(false); } }),
            React.createElement(IconItem, { size: iconPopoverSize, icon: iconPopover }),
            React.createElement("span", { className: cx('popover__btn-text') }, buttonText))));
};
Component.displayName = 'SharePopover';
var SharePopover = Component;

export { SharePopover };
//# sourceMappingURL=SharePopover.js.map
