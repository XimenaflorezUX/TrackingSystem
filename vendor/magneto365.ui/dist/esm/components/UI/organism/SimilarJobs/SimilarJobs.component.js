import { __rest, __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import { classMUI } from '../../../../constants/stories/common.constants.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import SimilarJobsCard from '../../molecules/SimilarJobsCard/SimilarJobsCard.component.js';
import styles from './SimilarJobs.module.scss.js';

var SimilarJobs = function (_a) {
    var sectionTitle = _a.sectionTitle; _a.moreJobsText; _a.moreJobsLink; var hideLogo = _a.hideLogo, similarJobsCard = _a.similarJobsCard;
    //TODO:PLS REMOVE THIS BOOLEAN WHEN THE SIMILAR VACANCIES PAGE EXIST
    var pageExists = false;
    if (similarJobsCard.length <= 0)
        return null;
    return (React.createElement("div", { className: "".concat(styles["".concat(classMUI, "-similar-jobs-section")]) },
        React.createElement("p", { className: "".concat(styles["".concat(classMUI, "-similar-jobs-section__title")]) }, "".concat(sectionTitle, ":")),
        similarJobsCard.map(function (_a) {
            var id = _a.id, props = __rest(_a, ["id"]);
            return (React.createElement(SimilarJobsCard, __assign({ key: id, hideLogo: hideLogo }, props)));
        }),
        pageExists ));
};

export { SimilarJobs as default };
//# sourceMappingURL=SimilarJobs.component.js.map
