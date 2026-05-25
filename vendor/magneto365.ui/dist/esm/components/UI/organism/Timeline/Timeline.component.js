import React from 'react';
import style from './Timeline.module.scss.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { TimeLineItemStatus } from '../../molecules/TimelineEvent/TimelineEvent.interface.js';
import { TimelineEvent } from '../../molecules/TimelineEvent/TimelineEvent.component.js';

var Component = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep, _b = _a.onClick, onClick = _b === void 0 ? function () { return ({}); } : _b, isNotBlocked = _a.isNotBlocked;
    currentStep = Math.max(currentStep, 1);
    var getStatus = function (index) {
        if (index + 1 < currentStep) {
            return TimeLineItemStatus.CHECKED;
        }
        if (index + 1 === currentStep) {
            return TimeLineItemStatus.CURRENT;
        }
        if (isNotBlocked) {
            return TimeLineItemStatus.UNLOCKED;
        }
        return TimeLineItemStatus.BLOCKED;
    };
    return (React.createElement("div", { className: style["".concat(classMUI, "-timeline")] }, steps.map(function (_a, index) {
        var subtitle = _a.subtitle, title = _a.title;
        return (React.createElement(TimelineEvent, { index: index + 1, onClick: onClick, key: index, title: title, subtitle: subtitle, status: getStatus(index) }));
    })));
};
var Timeline = Component;

export { Timeline };
//# sourceMappingURL=Timeline.component.js.map
