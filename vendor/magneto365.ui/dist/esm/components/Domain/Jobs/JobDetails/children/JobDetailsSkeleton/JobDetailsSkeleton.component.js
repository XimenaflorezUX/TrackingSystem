import React, { Fragment } from 'react';
import { classMUI } from '../../../../../../constants/stories/common.constants.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import style from './JobDetailsSkeleton.module.scss.js';

var Component = function () {
    var skeletonCard = (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-skeleton__section")], " ") },
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", null)));
    return (React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-skeleton")]) },
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-skeleton__header")]) },
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-skeleton__header_title")]) }),
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-skeleton__header_btn")]) },
                React.createElement("span", { className: style.skeleton }),
                React.createElement("span", { className: style.skeleton }),
                React.createElement("span", { className: style.skeleton }),
                React.createElement("span", { className: style.skeleton })),
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-detail-skeleton__header_card")]) })),
        Array(5)
            .fill("JobDetailsSkeleton")
            .map(function (name, i) { return (React.createElement(Fragment, { key: "".concat(i, "-name") }, skeletonCard)); })));
};
/**
 * UI Children Skeleton Component for JobDetailsDrawer
 */
var JobDetailsSkeleton = Component;

export { JobDetailsSkeleton };
//# sourceMappingURL=JobDetailsSkeleton.component.js.map
