import React from 'react';
import NoLogo from '../../../../assets/noLogo.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import style from './JobCardMobile.module.scss.js';

var JobCardMobile = function (_a) {
    var _b = _a.isCompanyPage, isCompanyPage = _b === void 0 ? false : _b, workSeen = _a.workSeen, jobOpen = _a.jobOpen, _c = _a.cities, cities = _c === void 0 ? [] : _c, salary = _a.salary, companyName = _a.companyName, title = _a.title, educationLevel = _a.educationLevel, formatPublishDate = _a.formatPublishDate, companyLogo = _a.companyLogo, companySlug = _a.companySlug, experience = _a.experience, showDetail = _a.showDetail, others = _a.others, jobSlug = _a.jobSlug, dynamicUrl = _a.dynamicUrl;
    return (React.createElement("article", { onClick: showDetail, className: "".concat(style["".concat(classMUI, "-card-mobile-jobs")], " ").concat(workSeen ? style[workSeen] : '', " ").concat(jobOpen ? style[jobOpen] : '') },
        !isCompanyPage && (React.createElement("div", { className: style["".concat(classMUI, "-card-mobile-jobs--row1")] },
            React.createElement("div", { className: style["".concat(classMUI, "-card-mobile-jobs--brand")] },
                React.createElement("img", { className: style["".concat(classMUI, "-card-mobile-jobs--brand__img")], alt: companySlug ? companySlug : 'company-slug', src: companyLogo ? companyLogo : NoLogo, loading: "lazy", width: '50px', height: '50px' })))),
        React.createElement("div", { className: style["".concat(classMUI, "-card-mobile-jobs--data")] },
            React.createElement("div", { className: style["".concat(classMUI, "-card-mobile-jobs--row2")] },
                React.createElement("div", null,
                    React.createElement("a", { href: "".concat(dynamicUrl, "/").concat(jobSlug), title: title, rel: "noreferrer", onClick: function (e) { return e.stopPropagation(); } },
                        React.createElement("h2", { className: "".concat(style["".concat(classMUI, "-card-mobile-jobs--row2__position")], " ").concat(workSeen) }, title))),
                React.createElement("div", { className: style["".concat(classMUI, "-card-mobile-jobs--row2__info")] },
                    React.createElement("h3", null,
                        companyName,
                        ","),
                    React.createElement("p", null,
                        formatPublishDate,
                        ","),
                    React.createElement("p", null,
                        cities[0],
                        " ",
                        (cities === null || cities === void 0 ? void 0 : cities.length) > 1 && React.createElement("span", null,
                            others,
                            ","),
                        ' '),
                    React.createElement("p", null, salary),
                    React.createElement("p", null,
                        experience,
                        " "),
                    React.createElement("p", null, educationLevel))))));
};

export { JobCardMobile as default };
//# sourceMappingURL=JobCardMobile.component.js.map
