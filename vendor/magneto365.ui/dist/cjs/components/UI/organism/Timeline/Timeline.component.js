'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Timeline_module = require('./Timeline.module.scss.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var TimelineEvent_interface = require('../../molecules/TimelineEvent/TimelineEvent.interface.js');
var TimelineEvent_component = require('../../molecules/TimelineEvent/TimelineEvent.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep, _b = _a.onClick, onClick = _b === void 0 ? function () { return ({}); } : _b, isNotBlocked = _a.isNotBlocked;
    currentStep = Math.max(currentStep, 1);
    var getStatus = function (index) {
        if (index + 1 < currentStep) {
            return TimelineEvent_interface.TimeLineItemStatus.CHECKED;
        }
        if (index + 1 === currentStep) {
            return TimelineEvent_interface.TimeLineItemStatus.CURRENT;
        }
        if (isNotBlocked) {
            return TimelineEvent_interface.TimeLineItemStatus.UNLOCKED;
        }
        return TimelineEvent_interface.TimeLineItemStatus.BLOCKED;
    };
    return (React__default["default"].createElement("div", { className: Timeline_module["".concat(common_constants.classMUI, "-timeline")] }, steps.map(function (_a, index) {
        var subtitle = _a.subtitle, title = _a.title;
        return (React__default["default"].createElement(TimelineEvent_component.TimelineEvent, { index: index + 1, onClick: onClick, key: index, title: title, subtitle: subtitle, status: getStatus(index) }));
    })));
};
var Timeline = Component;

exports.Timeline = Timeline;
//# sourceMappingURL=Timeline.component.js.map
