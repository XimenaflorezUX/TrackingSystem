'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var TimelineEvent_module = require('./TimelineEvent.module.scss.js');
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
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var timelineEvent_constants = require('../../../../constants/timelineEvent.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(TimelineEvent_module);
var Component = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, status = _a.status, _b = _a.index, index = _b === void 0 ? 0 : _b, _c = _a.onClick, onClick = _c === void 0 ? function () { return ({}); } : _c;
    var iconByType = React.useMemo(function () { return timelineEvent_constants.TIMELINE_ICONS[status]; }, [status]);
    return (React__default["default"].createElement("button", { type: "button", onClick: function () { return onClick(status, index); }, className: TimelineEvent_module[timelineEvent_constants.BASE_CLASS] },
        React__default["default"].createElement("div", { className: cx("".concat(timelineEvent_constants.BASE_CLASS, "__icon")) },
            React__default["default"].createElement("div", { className: cx("".concat(timelineEvent_constants.BASE_CLASS, "__icon-bar"), "".concat(timelineEvent_constants.BASE_CLASS, "__icon-bar--").concat(status)) }),
            React__default["default"].createElement(Icon_component.IconItem, { className: cx("".concat(timelineEvent_constants.BASE_CLASS, "__icon-icon"), "".concat(timelineEvent_constants.BASE_CLASS, "__icon-icon--").concat(status)), icon: iconByType, alt: status })),
        React__default["default"].createElement("div", { className: cx("".concat(timelineEvent_constants.BASE_CLASS, "__text")) },
            React__default["default"].createElement("p", { className: cx("".concat(timelineEvent_constants.BASE_CLASS, "__text-title"), "".concat(timelineEvent_constants.BASE_CLASS, "__text-title--").concat(status)) }, title),
            React__default["default"].createElement("p", { className: cx("".concat(timelineEvent_constants.BASE_CLASS, "__text-subtitle"), "".concat(timelineEvent_constants.BASE_CLASS, "__text-subtitle--").concat(status)) }, subtitle))));
};
var TimelineEvent = Component;

exports.TimelineEvent = TimelineEvent;
//# sourceMappingURL=TimelineEvent.component.js.map
