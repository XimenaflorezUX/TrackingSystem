'use strict';

var React = require('react');
var noLogo = require('../../../../../../assets/noLogo.svg.js');
var common_constants = require('../../../../../../constants/stories/common.constants.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
var Typography_component = require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var SimilarJobsCard_module = require('./SimilarJobsCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SimilarJobsCard = function (_a) {
    var cities = _a.cities, companyLogo = _a.companyLogo, jobUrlSlug = _a.jobUrlSlug, salary = _a.salary, title = _a.title, quotas = _a.quotas, companyName = _a.companyName, contractType = _a.contractType, hideLogo = _a.hideLogo;
    var _b = cities[0], city = _b === void 0 ? '' : _b, restCities = cities.slice(1);
    return (React__default["default"].createElement("a", { title: title, className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs")]), href: jobUrlSlug },
        !hideLogo && (React__default["default"].createElement(Icon_component.IconItem, { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__img")]), icon: companyLogo ? companyLogo : noLogo, alt: "".concat(companyName ? companyName : 'company', "-logo").toLowerCase(), size: 56 })),
        React__default["default"].createElement("div", null,
            React__default["default"].createElement(Typography_component.Typography.Title, { level: 2, strong: true, className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__title")]) }, title),
            React__default["default"].createElement(Typography_component.Typography.Paragraph, { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__info")]) }, [[companyName, contractType].filter(Boolean).join(' | '), quotas].filter(Boolean).join(', ')),
            React__default["default"].createElement(Typography_component.Typography.Paragraph, { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__info")]) }, salary),
            React__default["default"].createElement(Typography_component.Typography.Paragraph, { className: "".concat(SimilarJobsCard_module["".concat(common_constants.classMUI, "-similar-jobs__info")]) }, [city, restCities.length && "(+".concat(restCities.length, ")")].filter(Boolean).join(' ')))));
};

module.exports = SimilarJobsCard;
//# sourceMappingURL=SimilarJobsCard.component.js.map
