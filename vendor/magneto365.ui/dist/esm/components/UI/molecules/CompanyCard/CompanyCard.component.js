import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import { companyCardPrefix } from '../../../../constants/stories/carousel.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { SearchItem } from '../../atoms/SearchItem/SearchItem.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './CompanyCard.module.scss.js';

var cx = classNames.bind(styles);
var WithDescriptionCard = function (_a) {
    var className = _a.className, backgroundColor = _a.backgroundColor, logo = _a.logo, companyName = _a.companyName, headerContent = _a.headerContent, mainContent = _a.mainContent, footerContent = _a.footerContent;
    return (React.createElement("div", { className: cx(companyCardPrefix, "".concat(companyCardPrefix, "__bg--").concat(backgroundColor), className) },
        React.createElement("div", { className: styles["".concat(companyCardPrefix, "__header")] },
            React.createElement("img", { src: logo, alt: companyName, className: styles["".concat(companyCardPrefix, "__logo")], loading: "lazy" }),
            headerContent),
        mainContent,
        footerContent));
};
var WithoutDescriptionCard = function (_a) {
    var className = _a.className, backgroundColor = _a.backgroundColor, logo = _a.logo, companyName = _a.companyName, buttonLink = _a.buttonLink, headerContent = _a.headerContent;
    return (React.createElement("div", { className: cx("".concat(companyCardPrefix, "__withoutDesc"), "".concat(companyCardPrefix, "__bg--").concat(backgroundColor), className) },
        React.createElement("a", { href: buttonLink },
            React.createElement("div", { className: styles["".concat(companyCardPrefix, "__header")] },
                React.createElement("img", { src: logo, alt: companyName, className: styles["".concat(companyCardPrefix, "__logo")], loading: "lazy" }),
                headerContent))));
};
var CompanyCardWithDescription = function (_a) {
    var className = _a.className, logo = _a.logo, companyName = _a.companyName, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'gray' : _b, jobCount = _a.jobCount, description = _a.description, buttonText = _a.buttonText, buttonLink = _a.buttonLink;
    return (React.createElement(WithDescriptionCard, { className: className, backgroundColor: backgroundColor, logo: logo, companyName: companyName, headerContent: React.createElement("div", { className: styles["".concat(companyCardPrefix, "__title")] },
            React.createElement("h3", { className: styles["".concat(companyCardPrefix, "__name")] }, companyName),
            React.createElement("p", { className: styles["".concat(companyCardPrefix, "__jobCount")] }, jobCount)), mainContent: React.createElement("div", { className: styles["".concat(companyCardPrefix, "__content")] },
            React.createElement("p", { className: styles["".concat(companyCardPrefix, "__description")] }, description)), footerContent: React.createElement("div", { className: styles["".concat(companyCardPrefix, "__footer")] },
            React.createElement(SearchItem, { tag: buttonText, url: buttonLink, className: styles["".concat(companyCardPrefix, "__footer-button")] })) }));
};
var CompanyCardWithoutDescription = function (_a) {
    var className = _a.className, logo = _a.logo, companyName = _a.companyName, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'gray' : _b, vacantTitle = _a.vacantTitle, salary = _a.salary, buttonLink = _a.buttonLink;
    return (React.createElement(WithoutDescriptionCard, { className: className, backgroundColor: backgroundColor, logo: logo, companyName: companyName, buttonLink: buttonLink, headerContent: React.createElement("div", { className: styles["".concat(companyCardPrefix, "__withoutDesc-text")] },
            React.createElement("h3", { className: styles["".concat(companyCardPrefix, "__vacant-title")] }, vacantTitle),
            React.createElement("h4", { className: styles["".concat(companyCardPrefix, "__vacant-company")] }, companyName),
            React.createElement("p", { className: styles["".concat(companyCardPrefix, "__vacant-companySalary")] }, salary)) }));
};
var CompanyCard = function (props) {
    if (props.companyCardType === 'withDescription') {
        return React.createElement(CompanyCardWithDescription, __assign({}, props));
    }
    else {
        return React.createElement(CompanyCardWithoutDescription, __assign({}, props));
    }
};

export { CompanyCard, CompanyCardWithDescription, CompanyCardWithoutDescription };
//# sourceMappingURL=CompanyCard.component.js.map
