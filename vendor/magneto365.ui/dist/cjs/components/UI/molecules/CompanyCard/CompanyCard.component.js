'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
var carousel_constants = require('../../../../constants/stories/carousel.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var SearchItem_component = require('../../atoms/SearchItem/SearchItem.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var CompanyCard_module = require('./CompanyCard.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CompanyCard_module);
var WithDescriptionCard = function (_a) {
    var className = _a.className, backgroundColor = _a.backgroundColor, logo = _a.logo, companyName = _a.companyName, headerContent = _a.headerContent, mainContent = _a.mainContent, footerContent = _a.footerContent;
    return (React__default["default"].createElement("div", { className: cx(carousel_constants.companyCardPrefix, "".concat(carousel_constants.companyCardPrefix, "__bg--").concat(backgroundColor), className) },
        React__default["default"].createElement("div", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__header")] },
            React__default["default"].createElement("img", { src: logo, alt: companyName, className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__logo")], loading: "lazy" }),
            headerContent),
        mainContent,
        footerContent));
};
var WithoutDescriptionCard = function (_a) {
    var className = _a.className, backgroundColor = _a.backgroundColor, logo = _a.logo, companyName = _a.companyName, buttonLink = _a.buttonLink, headerContent = _a.headerContent;
    return (React__default["default"].createElement("div", { className: cx("".concat(carousel_constants.companyCardPrefix, "__withoutDesc"), "".concat(carousel_constants.companyCardPrefix, "__bg--").concat(backgroundColor), className) },
        React__default["default"].createElement("a", { href: buttonLink },
            React__default["default"].createElement("div", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__header")] },
                React__default["default"].createElement("img", { src: logo, alt: companyName, className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__logo")], loading: "lazy" }),
                headerContent))));
};
var CompanyCardWithDescription = function (_a) {
    var className = _a.className, logo = _a.logo, companyName = _a.companyName, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'gray' : _b, jobCount = _a.jobCount, description = _a.description, buttonText = _a.buttonText, buttonLink = _a.buttonLink;
    return (React__default["default"].createElement(WithDescriptionCard, { className: className, backgroundColor: backgroundColor, logo: logo, companyName: companyName, headerContent: React__default["default"].createElement("div", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__title")] },
            React__default["default"].createElement("h3", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__name")] }, companyName),
            React__default["default"].createElement("p", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__jobCount")] }, jobCount)), mainContent: React__default["default"].createElement("div", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__content")] },
            React__default["default"].createElement("p", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__description")] }, description)), footerContent: React__default["default"].createElement("div", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__footer")] },
            React__default["default"].createElement(SearchItem_component.SearchItem, { tag: buttonText, url: buttonLink, className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__footer-button")] })) }));
};
var CompanyCardWithoutDescription = function (_a) {
    var className = _a.className, logo = _a.logo, companyName = _a.companyName, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'gray' : _b, vacantTitle = _a.vacantTitle, salary = _a.salary, buttonLink = _a.buttonLink;
    return (React__default["default"].createElement(WithoutDescriptionCard, { className: className, backgroundColor: backgroundColor, logo: logo, companyName: companyName, buttonLink: buttonLink, headerContent: React__default["default"].createElement("div", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__withoutDesc-text")] },
            React__default["default"].createElement("h3", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__vacant-title")] }, vacantTitle),
            React__default["default"].createElement("h4", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__vacant-company")] }, companyName),
            React__default["default"].createElement("p", { className: CompanyCard_module["".concat(carousel_constants.companyCardPrefix, "__vacant-companySalary")] }, salary)) }));
};
var CompanyCard = function (props) {
    if (props.companyCardType === 'withDescription') {
        return React__default["default"].createElement(CompanyCardWithDescription, tslib_es6.__assign({}, props));
    }
    else {
        return React__default["default"].createElement(CompanyCardWithoutDescription, tslib_es6.__assign({}, props));
    }
};

exports.CompanyCard = CompanyCard;
exports.CompanyCardWithDescription = CompanyCardWithDescription;
exports.CompanyCardWithoutDescription = CompanyCardWithoutDescription;
//# sourceMappingURL=CompanyCard.component.js.map
