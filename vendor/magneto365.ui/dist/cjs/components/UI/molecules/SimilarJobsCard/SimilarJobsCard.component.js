'use strict';

var React = require('react');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var noLogo = require('../../../../assets/noLogo.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
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
var SimilarJobsCard_module = require('./SimilarJobsCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SimilarJobsCard = function (_a) {
    var cities = _a.cities, companyLogo = _a.companyLogo, experience = _a.experience, jobUrlSlug = _a.jobUrlSlug, salary = _a.salary, title = _a.title, companyName = _a.companyName, hideLogo = _a.hideLogo;
    var formatInfo = React.useMemo(function () {
        var citiesFormat = cities ? "".concat(cities[0], " ").concat((cities === null || cities === void 0 ? void 0 : cities.length) > 1 ? "(+".concat((cities === null || cities === void 0 ? void 0 : cities.length) - 1, ")") : '') : '';
        var salaryFormat = salary ? " | ".concat(salary) : '';
        var experienceFormat = experience ? " | ".concat(experience) : '';
        return "".concat(citiesFormat).concat(salaryFormat).concat(experienceFormat);
    }, [cities, salary, experience]);
    return (React__default["default"].createElement("a", { title: title, className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs")]), href: jobUrlSlug },
        !hideLogo && (React__default["default"].createElement("img", { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__img")]), src: companyLogo ? companyLogo : noLogo, alt: "".concat(companyName ? companyName : 'company', "-logo").toLowerCase() })),
        React__default["default"].createElement("div", null,
            React__default["default"].createElement("h2", { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__title")]) }, title),
            React__default["default"].createElement("p", { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__info")]) }, formatInfo)),
        React__default["default"].createElement(Icon_component.IconItem, { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__arrow")]), icon: ArrowRight2, alt: "arow-right-icon" })));
};

module.exports = SimilarJobsCard;
//# sourceMappingURL=SimilarJobsCard.component.js.map
