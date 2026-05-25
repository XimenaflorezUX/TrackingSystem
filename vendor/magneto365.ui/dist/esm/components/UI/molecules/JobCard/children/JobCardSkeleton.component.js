import React, { useEffect } from 'react';
import style from './JobCardSkeleton.module.scss.js';
import { classMUI } from '../../../../../constants/stories/common.constants.js';
import '../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../constants/stories/vacancies.constants.js';
import '../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../constants/img.constants.js';

var JobCardSkeleton = function (_a) {
    var numCard = _a.numCard, _b = _a.goToBottom, goToBottom = _b === void 0 ? false : _b;
    var skeletonNum = Array.from({ length: numCard }, function (_, index) { return index + 1; });
    useEffect(function () {
        if (!goToBottom)
            return;
        var element = document.getElementById('magneto-ui-suggestedJobs-page');
        if (!element)
            return;
        element.scrollTop = element.scrollHeight;
    }, [goToBottom]);
    return (React.createElement(React.Fragment, null, skeletonNum.map(function (ele, i) { return (React.createElement("div", { key: ele + i, className: "".concat(style["".concat(classMUI, "-job-card-skeleton")]) },
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-card-skeleton__row1")], " ").concat(style.skeleton) }),
        React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-card-skeleton__container")]) },
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-card-skeleton__container--row2")], " ").concat(style.skeleton) }),
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-card-skeleton__container--row2")], " ").concat(style.skeleton) }),
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-card-skeleton__container--row2")], " ").concat(style.skeleton) }),
            React.createElement("div", { className: "".concat(style["".concat(classMUI, "-job-card-skeleton__container--row2")], " ").concat(style.skeleton) })))); })));
};

export { JobCardSkeleton as default };
//# sourceMappingURL=JobCardSkeleton.component.js.map
