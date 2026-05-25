import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useMemo } from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import style from './JobCardDesktop.module.scss.js';
import JobCardLabelStatus from '../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.component.js';

var cx = classNames.bind(style);
var getJobSubtitle = function (companyName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var additionalData = args.filter(function (arg) { return arg !== undefined; }).join(', ');
    if (companyName)
        return "".concat(companyName, " | ").concat(additionalData);
    return additionalData;
};
var JobCardDesktop = function (_a) {
    var jobOpen = _a.jobOpen, _b = _a.cities, cities = _b === void 0 ? [] : _b, salary = _a.salary, wasSeen = _a.wasSeen, companyName = _a.companyName, title = _a.title, formatPublishDate = _a.formatPublishDate, contractType = _a.contractType, showDetail = _a.showDetail, urgent = _a.urgent, jobSlug = _a.jobSlug, dynamicUrl = _a.dynamicUrl, labelStatus = _a.labelStatus;
    var optionsRef = useRef(null);
    var citiesformatted = useMemo(function () {
        var safeCities = Array.isArray(cities) ? cities : [];
        return safeCities.length > 5 ? safeCities.slice(0, 5).join(', ') : safeCities.join(', ');
    }, [cities]);
    var seenModifier = useMemo(function () {
        return wasSeen ? "".concat(classMUI, "-card-jobs__text--is-seen") : '';
    }, [wasSeen]);
    return (React.createElement("div", { className: cx("".concat(classMUI, "-card-jobs__container"), jobOpen && "".concat(classMUI, "-card-jobs--job-open")) },
        React.createElement("article", { onClick: showDetail, className: cx("".concat(classMUI, "-card-jobs"), urgent && "".concat(classMUI, "-card-jobs--urgent")) },
            React.createElement("div", { className: cx("".concat(classMUI, "-card-jobs__data")) },
                React.createElement("section", { className: cx("".concat(classMUI, "-card-jobs__header")) },
                    React.createElement("span", { className: cx("".concat(classMUI, "-card-jobs__text"), "".concat(classMUI, "-card-jobs__published")) }, formatPublishDate),
                    React.createElement("section", { ref: optionsRef, className: cx("".concat(classMUI, "-card-jobs__options"), 'opciones') })),
                React.createElement("h2", { className: cx("".concat(classMUI, "-card-jobs__text"), "".concat(seenModifier), "".concat(classMUI, "-card-jobs__text--big"), "".concat(classMUI, "-card-jobs__text--bold")) },
                    React.createElement("a", { href: "".concat(dynamicUrl, "/").concat(jobSlug), title: title, target: "_blank", rel: "noreferrer", onClick: function (e) { return e.preventDefault(); }, className: cx("".concat(classMUI, "-card-jobs__a")) }, title)),
                React.createElement("h3", { className: cx("".concat(classMUI, "-card-jobs__text"), "".concat(seenModifier)) }, getJobSubtitle(companyName, contractType)),
                React.createElement("p", { className: cx("".concat(classMUI, "-card-jobs__text"), "".concat(seenModifier)) }, salary),
                React.createElement("p", { className: cx("".concat(classMUI, "-card-jobs__text"), "".concat(seenModifier)) }, citiesformatted),
                labelStatus && React.createElement(JobCardLabelStatus, __assign({}, labelStatus))))));
};

export { JobCardDesktop as default };
//# sourceMappingURL=JobCardDesktop.component.js.map
