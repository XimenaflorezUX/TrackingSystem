'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var HistoryCard_module = require('./HistoryCard.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
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
var Typography_component = require('../../atoms/Typography/Typography.component.js');
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

var cx = classNames_util.classNames.bind(HistoryCard_module);
var Component = function (_a) {
    var type = _a.type, headerData = _a.headerData, details = _a.details, className = _a.className;
    var cardClass = cx('magneto-ui-history-card', "magneto-ui-history-card--".concat(type), className);
    return (React__default["default"].createElement("div", { className: cardClass },
        React__default["default"].createElement("div", { className: cx('magneto-ui-history-card__header') }, headerData.map(function (item, index) { return (React__default["default"].createElement("div", { key: "".concat(index, "-").concat(item.label), className: cx('magneto-ui-history-card__header-item') },
            React__default["default"].createElement(Typography_component.Typography.Paragraph, { size: 14, color: 'blue-dark-100' }, item.label),
            React__default["default"].createElement(Typography_component.Typography.Paragraph, { size: 14, weight: 'medium', color: 'grey-900' }, item.value))); })),
        React__default["default"].createElement("div", { className: cx('magneto-ui-history-card__body') }, details.map(function (detail, index) {
            var _a;
            if (Array.isArray(detail)) {
                return (React__default["default"].createElement(React__default["default"].Fragment, { key: "group-".concat(index, "-").concat((_a = detail[0]) === null || _a === void 0 ? void 0 : _a.label) },
                    detail.map(function (subDetail, subIndex) { return (React__default["default"].createElement("div", { key: "".concat(index, "-").concat(subIndex), className: cx('magneto-ui-history-card__detail-item') },
                        React__default["default"].createElement(Typography_component.Typography.Paragraph, { size: 14, color: 'blue-dark-100' }, subDetail.label),
                        React__default["default"].createElement("div", { className: cx('magneto-ui-history-card__detail-value') }, subDetail.value))); }),
                    index < details.length - 1 && React__default["default"].createElement("div", { className: cx('magneto-ui-history-card__divider') })));
            }
            return (React__default["default"].createElement("div", { key: "".concat(index, "-").concat(detail.label), className: cx('magneto-ui-history-card__detail-item') },
                React__default["default"].createElement(Typography_component.Typography.Paragraph, { size: 14, color: 'blue-dark-100' }, detail.label),
                React__default["default"].createElement("div", { className: cx('magneto-ui-history-card__detail-value') }, detail.value)));
        }))));
};
var HistoryCard = Component;

exports.HistoryCard = HistoryCard;
//# sourceMappingURL=HistoryCard.component.js.map
