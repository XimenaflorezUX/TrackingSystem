'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var Building5 = require('../../../../assets/Building5.svg.js');
var ActionLinkCard_module = require('./ActionLinkCard.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
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
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ActionLinkCard_module);
var Component = function (_a) {
    var title = _a.title, name = _a.name, redirectUrl = _a.redirectUrl, className = _a.className;
    return (React__default["default"].createElement("section", { className: cx('action-link-card', className) },
        React__default["default"].createElement("a", { href: redirectUrl, className: cx('action-link-card__link'), target: "_blank", rel: "noopener noreferrer", onClick: function (e) { return e.stopPropagation(); } },
            React__default["default"].createElement("div", { className: cx('action-link-card__content') },
                React__default["default"].createElement(Icon_component.IconItem, { icon: Building5, hover: false, size: 20 }),
                React__default["default"].createElement("div", { className: cx('action-link-card__info') },
                    React__default["default"].createElement("span", null, title),
                    React__default["default"].createElement("p", null, name))),
            React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowRight2, hover: false, size: 20 }))));
};
var ActionLinkCard = Component;

exports.ActionLinkCard = ActionLinkCard;
//# sourceMappingURL=ActionLinkCard.component.js.map
