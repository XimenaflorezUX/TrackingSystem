import React from 'react';
import style from './HistoryCard.module.scss.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
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
import { Typography } from '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';

var cx = classNames.bind(style);
var Component = function (_a) {
    var type = _a.type, headerData = _a.headerData, details = _a.details, className = _a.className;
    var cardClass = cx('magneto-ui-history-card', "magneto-ui-history-card--".concat(type), className);
    return (React.createElement("div", { className: cardClass },
        React.createElement("div", { className: cx('magneto-ui-history-card__header') }, headerData.map(function (item, index) { return (React.createElement("div", { key: "".concat(index, "-").concat(item.label), className: cx('magneto-ui-history-card__header-item') },
            React.createElement(Typography.Paragraph, { size: 14, color: 'blue-dark-100' }, item.label),
            React.createElement(Typography.Paragraph, { size: 14, weight: 'medium', color: 'grey-900' }, item.value))); })),
        React.createElement("div", { className: cx('magneto-ui-history-card__body') }, details.map(function (detail, index) {
            var _a;
            if (Array.isArray(detail)) {
                return (React.createElement(React.Fragment, { key: "group-".concat(index, "-").concat((_a = detail[0]) === null || _a === void 0 ? void 0 : _a.label) },
                    detail.map(function (subDetail, subIndex) { return (React.createElement("div", { key: "".concat(index, "-").concat(subIndex), className: cx('magneto-ui-history-card__detail-item') },
                        React.createElement(Typography.Paragraph, { size: 14, color: 'blue-dark-100' }, subDetail.label),
                        React.createElement("div", { className: cx('magneto-ui-history-card__detail-value') }, subDetail.value))); }),
                    index < details.length - 1 && React.createElement("div", { className: cx('magneto-ui-history-card__divider') })));
            }
            return (React.createElement("div", { key: "".concat(index, "-").concat(detail.label), className: cx('magneto-ui-history-card__detail-item') },
                React.createElement(Typography.Paragraph, { size: 14, color: 'blue-dark-100' }, detail.label),
                React.createElement("div", { className: cx('magneto-ui-history-card__detail-value') }, detail.value)));
        }))));
};
var HistoryCard = Component;

export { HistoryCard };
//# sourceMappingURL=HistoryCard.component.js.map
