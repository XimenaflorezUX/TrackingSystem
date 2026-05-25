'use strict';

var React = require('react');
var noLogo = require('../../../../assets/noLogo.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var JobCardMobile_module = require('./JobCardMobile.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobCardMobile = function (_a) {
    var _b = _a.isCompanyPage, isCompanyPage = _b === void 0 ? false : _b, workSeen = _a.workSeen, jobOpen = _a.jobOpen, _c = _a.cities, cities = _c === void 0 ? [] : _c, salary = _a.salary, companyName = _a.companyName, title = _a.title, educationLevel = _a.educationLevel, formatPublishDate = _a.formatPublishDate, companyLogo = _a.companyLogo, companySlug = _a.companySlug, experience = _a.experience, showDetail = _a.showDetail, others = _a.others, jobSlug = _a.jobSlug, dynamicUrl = _a.dynamicUrl;
    return (React__default["default"].createElement("article", { onClick: showDetail, className: "".concat(JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs")], " ").concat(workSeen ? JobCardMobile_module[workSeen] : '', " ").concat(jobOpen ? JobCardMobile_module[jobOpen] : '') },
        !isCompanyPage && (React__default["default"].createElement("div", { className: JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--row1")] },
            React__default["default"].createElement("div", { className: JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--brand")] },
                React__default["default"].createElement("img", { className: JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--brand__img")], alt: companySlug ? companySlug : 'company-slug', src: companyLogo ? companyLogo : noLogo, loading: "lazy", width: '50px', height: '50px' })))),
        React__default["default"].createElement("div", { className: JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--data")] },
            React__default["default"].createElement("div", { className: JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--row2")] },
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("a", { href: "".concat(dynamicUrl, "/").concat(jobSlug), title: title, rel: "noreferrer", onClick: function (e) { return e.stopPropagation(); } },
                        React__default["default"].createElement("h2", { className: "".concat(JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--row2__position")], " ").concat(workSeen) }, title))),
                React__default["default"].createElement("div", { className: JobCardMobile_module["".concat(common_constants.classMUI, "-card-mobile-jobs--row2__info")] },
                    React__default["default"].createElement("h3", null,
                        companyName,
                        ","),
                    React__default["default"].createElement("p", null,
                        formatPublishDate,
                        ","),
                    React__default["default"].createElement("p", null,
                        cities[0],
                        " ",
                        (cities === null || cities === void 0 ? void 0 : cities.length) > 1 && React__default["default"].createElement("span", null,
                            others,
                            ","),
                        ' '),
                    React__default["default"].createElement("p", null, salary),
                    React__default["default"].createElement("p", null,
                        experience,
                        " "),
                    React__default["default"].createElement("p", null, educationLevel))))));
};

module.exports = JobCardMobile;
//# sourceMappingURL=JobCardMobile.component.js.map
