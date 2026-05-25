import React from 'react';
import NoLogo from '../../../../../../assets/noLogo.svg.js';
import { classMUI } from '../../../../../../constants/stories/common.constants.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import { IconItem } from '../../../../../UI/atoms/Icon/Icon.component.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import '../../../../../UI/atoms/Collapse/Collapse.component.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../../UI/atoms/Field/Field.component.js';
import { Typography } from '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './SimilarJobsCard.module.scss.js';

var SimilarJobsCard = function (_a) {
    var cities = _a.cities, companyLogo = _a.companyLogo, jobUrlSlug = _a.jobUrlSlug, salary = _a.salary, title = _a.title, quotas = _a.quotas, companyName = _a.companyName, contractType = _a.contractType, hideLogo = _a.hideLogo;
    var _b = cities[0], city = _b === void 0 ? '' : _b, restCities = cities.slice(1);
    return (React.createElement("a", { title: title, className: "".concat(styles["".concat(classMUI, "-similar-jobs")]), href: jobUrlSlug },
        !hideLogo && (React.createElement(IconItem, { className: "".concat(styles["".concat(classMUI, "-similar-jobs__img")]), icon: companyLogo ? companyLogo : NoLogo, alt: "".concat(companyName ? companyName : 'company', "-logo").toLowerCase(), size: 56 })),
        React.createElement("div", null,
            React.createElement(Typography.Title, { level: 2, strong: true, className: "".concat(styles["".concat(classMUI, "-similar-jobs__title")]) }, title),
            React.createElement(Typography.Paragraph, { className: "".concat(styles["".concat(classMUI, "-similar-jobs__info")]) }, [[companyName, contractType].filter(Boolean).join(' | '), quotas].filter(Boolean).join(', ')),
            React.createElement(Typography.Paragraph, { className: "".concat(styles["".concat(classMUI, "-similar-jobs__info")]) }, salary),
            React.createElement(Typography.Paragraph, { className: "".concat(styles["".concat(classMUI, "-similar-jobs__info")]) }, [city, restCities.length && "(+".concat(restCities.length, ")")].filter(Boolean).join(' ')))));
};

export { SimilarJobsCard as default };
//# sourceMappingURL=SimilarJobsCard.component.js.map
