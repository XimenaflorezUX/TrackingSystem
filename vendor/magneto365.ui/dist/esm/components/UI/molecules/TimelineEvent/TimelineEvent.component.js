import React, { useMemo } from 'react';
import style from './TimelineEvent.module.scss.js';
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
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { TIMELINE_ICONS, BASE_CLASS } from '../../../../constants/timelineEvent.constants.js';

var cx = classNames.bind(style);
var Component = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, status = _a.status, _b = _a.index, index = _b === void 0 ? 0 : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { return ({}); } : _c;
    var iconByType = useMemo(function () { return TIMELINE_ICONS[status]; }, [status]);
    return (React.createElement("button", { type: "button", onClick: function () { return onClick(status, index); }, className: style[BASE_CLASS] },
        React.createElement("div", { className: cx("".concat(BASE_CLASS, "__icon")) },
            React.createElement("div", { className: cx("".concat(BASE_CLASS, "__icon-bar"), "".concat(BASE_CLASS, "__icon-bar--").concat(status)) }),
            React.createElement(IconItem, { className: cx("".concat(BASE_CLASS, "__icon-icon"), "".concat(BASE_CLASS, "__icon-icon--").concat(status)), icon: iconByType, alt: status })),
        React.createElement("div", { className: cx("".concat(BASE_CLASS, "__text")) },
            React.createElement("p", { className: cx("".concat(BASE_CLASS, "__text-title"), "".concat(BASE_CLASS, "__text-title--").concat(status)) }, title),
            React.createElement("p", { className: cx("".concat(BASE_CLASS, "__text-subtitle"), "".concat(BASE_CLASS, "__text-subtitle--").concat(status)) }, subtitle))));
};
var TimelineEvent = Component;

export { TimelineEvent };
//# sourceMappingURL=TimelineEvent.component.js.map
