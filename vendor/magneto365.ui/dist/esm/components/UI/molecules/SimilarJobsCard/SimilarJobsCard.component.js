import React, { useMemo } from 'react';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import NoLogo from '../../../../assets/noLogo.svg.js';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './SimilarJobsCard.module.scss.js';

var SimilarJobsCard = function (_a) {
    var cities = _a.cities, companyLogo = _a.companyLogo, experience = _a.experience, jobUrlSlug = _a.jobUrlSlug, salary = _a.salary, title = _a.title, companyName = _a.companyName, hideLogo = _a.hideLogo;
    var formatInfo = useMemo(function () {
        var citiesFormat = cities ? "".concat(cities[0], " ").concat((cities === null || cities === void 0 ? void 0 : cities.length) > 1 ? "(+".concat((cities === null || cities === void 0 ? void 0 : cities.length) - 1, ")") : '') : '';
        var salaryFormat = salary ? " | ".concat(salary) : '';
        var experienceFormat = experience ? " | ".concat(experience) : '';
        return "".concat(citiesFormat).concat(salaryFormat).concat(experienceFormat);
    }, [cities, salary, experience]);
    return (React.createElement("a", { title: title, className: "".concat(styles["".concat(classMUI, "-similar-jobs")]), href: jobUrlSlug },
        !hideLogo && (React.createElement("img", { className: "".concat(styles["".concat(classMUI, "-similar-jobs__img")]), src: companyLogo ? companyLogo : NoLogo, alt: "".concat(companyName ? companyName : 'company', "-logo").toLowerCase() })),
        React.createElement("div", null,
            React.createElement("h2", { className: "".concat(styles["".concat(classMUI, "-similar-jobs__title")]) }, title),
            React.createElement("p", { className: "".concat(styles["".concat(classMUI, "-similar-jobs__info")]) }, formatInfo)),
        React.createElement(IconItem, { className: "".concat(styles["".concat(classMUI, "-similar-jobs__arrow")]), icon: ArrowRight2, alt: "arow-right-icon" })));
};

export { SimilarJobsCard as default };
//# sourceMappingURL=SimilarJobsCard.component.js.map
