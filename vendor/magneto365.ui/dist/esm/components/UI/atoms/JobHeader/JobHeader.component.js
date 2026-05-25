import React, { useMemo, Fragment } from 'react';
import styles from './JobHeader.module.scss.js';
import { TYPE_TITLE } from '../../../../constants/stories/typeTitleJobDetail.constant.js';
import { MainTitleJobDetails } from '../../organism/JobDetailsDrawer/children/MainTitle/JobDetailsMainTitle.component.js';
import { SubTitleJobDetails } from '../../organism/JobDetailsDrawer/children/SubTitle/JobDetailsSubTitle.component.js';

var Component = function (_a) {
    var offerTitle = _a.offerTitle, offerCompanyName = _a.offerCompanyName, offerCompanyLink = _a.offerCompanyLink, isHidden = _a.isHidden, typeTitle = _a.typeTitle;
    var showCompanyName = useMemo(function () {
        if (isHidden || !offerCompanyName)
            return React.createElement(Fragment, null);
        if (offerCompanyLink) {
            return (React.createElement("a", { className: styles['magneto-ui-job-header__link'], href: offerCompanyLink, title: offerCompanyName }, offerCompanyName));
        }
        return React.createElement("h2", { className: styles['magneto-ui-job-header__subtitle'] }, offerCompanyName);
    }, [isHidden, offerCompanyLink, offerCompanyName]);
    var GenerateTitle = function () {
        if (typeTitle === TYPE_TITLE.SUB_TITLE)
            return React.createElement(SubTitleJobDetails, { styles: styles['magneto-ui-job-header__title'], title: String(offerTitle) });
        return React.createElement(MainTitleJobDetails, { styles: styles['magneto-ui-job-header__title'], title: String(offerTitle) });
    };
    return (React.createElement("div", { className: styles['magneto-ui-job-header'] },
        GenerateTitle(),
        showCompanyName));
};
/**
 * UI Atom component of Job Header
 */
var JobHeader = Component;

export { JobHeader };
//# sourceMappingURL=JobHeader.component.js.map
