import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import ArrowRightWhite from '../../../../../../assets/ArrowRightWhite.svg.js';
import NoLogo from '../../../../../../assets/noLogo.svg.js';
import '../../../../atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../atoms/Button/Button.component.js';
import '../../../../atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import { Divider } from '../../../../atoms/Divider/Divider.component.js';
import '../../../../atoms/Field/Field.component.js';
import '../../../../atoms/Typography/Typography.component.js';
import '../../../../atoms/Typography/Typography.interface.js';
import '../../../../atoms/InputFile/InputFile.component.js';
import { SearchItem } from '../../../../atoms/SearchItem/SearchItem.component.js';
import '../../../../atoms/Paragraph/Paragraph.component.js';
import '../../../../atoms/Radio/Radio.interface.js';
import '../../../../atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import styles from './JobSuggestedSimilarJobs.module.scss.js';
import { SimilarCard } from '../../../../molecules/SimilarCard/SimilarCard.component.js';
import { similarJobTextAdapter } from '../../../../../../utils/text/textAdapter.util.js';

var cx = classNames.bind(styles);
var Icon = SimilarCard.Icon, Logo = SimilarCard.Logo, Text = SimilarCard.Text;
var JobSuggestedSimilarJobs = function (_a) {
    var hideLogo = _a.hideLogo, sectionTitle = _a.sectionTitle, similarJobsCard = _a.similarJobsCard, _b = _a.maxItemsToShow, maxItemsToShow = _b === void 0 ? 5 : _b, className = _a.className, tag = _a.tag, url = _a.url, _c = _a.notItemsDefaultAnchor, notItemsDefaultAnchor = _c === void 0 ? false : _c, tagDefaultAnchor = _a.tagDefaultAnchor, urlDefaultAnchor = _a.urlDefaultAnchor;
    if (!similarJobsCard || similarJobsCard.length === 0) {
        return notItemsDefaultAnchor && tagDefaultAnchor && urlDefaultAnchor ? (React.createElement(SearchItem, { className: cx('job-suggested-similar-jobs__search--alternative-bg'), tag: tagDefaultAnchor, url: urlDefaultAnchor, icon: ArrowRightWhite })) : null;
    }
    var showMoreOption = similarJobsCard.length > maxItemsToShow;
    return (React.createElement("div", { className: cx('job-suggested-similar-jobs') },
        React.createElement("h3", { className: cx('job-suggested-similar-jobs__title') }, sectionTitle),
        similarJobsCard.slice(0, maxItemsToShow).map(function (job, index) {
            return (React.createElement(React.Fragment, { key: index },
                React.createElement(SimilarCard, { className: cx(className), jobUrlSlug: job.jobUrlSlug, title: job.title },
                    React.createElement(Logo, { hideLogo: hideLogo, alt: job.title, src: job.companyLogo || NoLogo }),
                    React.createElement(Text, { className: cx('job-suggested-similar-jobs__text'), customText: similarJobTextAdapter(job), headingType: "h2" }),
                    React.createElement(Icon, null)),
                React.createElement(Divider, null)));
        }),
        showMoreOption && React.createElement(SearchItem, { className: cx('job-suggested-similar-jobs__search'), tag: tag, url: url })));
};

export { JobSuggestedSimilarJobs };
//# sourceMappingURL=JobSuggestedSimilarJobs.component.js.map
