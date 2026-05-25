import React from 'react';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
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
import '../../../../constants/img.constants.js';
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
import CitiesDetailDrawer from '../CitiesDetailDrawer/CitiesDetailDrawer.component.js';
import styles from './JobDetails.module.scss.js';

var Component = function (_a) {
    var offerDetailsList = _a.offerDetailsList, iconList = _a.iconList, altList = _a.altList, cities = _a.cities, textRemote = _a.textRemote, isRemote = _a.isRemote;
    var jobDetailsList = offerDetailsList === null || offerDetailsList === void 0 ? void 0 : offerDetailsList.map(function (offerDetailText, index) { return ({
        icon: iconList && iconList[index],
        offerDetailText: offerDetailText,
        alt: altList && altList[index]
    }); }).filter(function (_a, index) {
        var offerDetailText = _a.offerDetailText;
        return !!offerDetailText && index !== 1;
    });
    return (React.createElement("div", { className: styles['magneto-ui-job-details'] },
        React.createElement("div", { className: styles['magneto-ui-job-details__wrapper'] },
            (jobDetailsList === null || jobDetailsList === void 0 ? void 0 : jobDetailsList.length) &&
                (jobDetailsList === null || jobDetailsList === void 0 ? void 0 : jobDetailsList.map(function (_a) {
                    var offerDetailText = _a.offerDetailText, icon = _a.icon, _b = _a.alt, alt = _b === void 0 ? '' : _b;
                    return (React.createElement("div", { key: "".concat(offerDetailText, "-JobDetails"), className: styles['magneto-ui-job-details__item-detail'] },
                        React.createElement("div", { className: styles['magneto-ui-job-details__item-detail-icon'] },
                            React.createElement(IconItem, { alt: alt, icon: icon, hover: false, size: 16 })),
                        React.createElement("p", { className: styles['magneto-ui-job-details__item-detail-text'] }, offerDetailText)));
                })),
            React.createElement(CitiesDetailDrawer, { cities: cities, isRemote: isRemote, textRemote: textRemote }))));
};
/**
 * UI Molecule component for Job Detail
 */
Component.displayName = 'JobDetails';
var JobDetails = Component;

export { JobDetails };
//# sourceMappingURL=JobDetails.component.js.map
