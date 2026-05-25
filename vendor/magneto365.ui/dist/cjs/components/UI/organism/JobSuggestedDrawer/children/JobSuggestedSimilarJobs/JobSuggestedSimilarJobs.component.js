'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var ArrowRightWhite = require('../../../../../../assets/ArrowRightWhite.svg.js');
var noLogo = require('../../../../../../assets/noLogo.svg.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
var Divider_component = require('../../../../atoms/Divider/Divider.component.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
var SearchItem_component = require('../../../../atoms/SearchItem/SearchItem.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var JobSuggestedSimilarJobs_module = require('./JobSuggestedSimilarJobs.module.scss.js');
var SimilarCard_component = require('../../../../molecules/SimilarCard/SimilarCard.component.js');
var textAdapter_util = require('../../../../../../utils/text/textAdapter.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobSuggestedSimilarJobs_module);
var Icon = SimilarCard_component.SimilarCard.Icon, Logo = SimilarCard_component.SimilarCard.Logo, Text = SimilarCard_component.SimilarCard.Text;
var JobSuggestedSimilarJobs = function (_a) {
    var hideLogo = _a.hideLogo, sectionTitle = _a.sectionTitle, similarJobsCard = _a.similarJobsCard, _b = _a.maxItemsToShow, maxItemsToShow = _b === void 0 ? 5 : _b, className = _a.className, tag = _a.tag, url = _a.url, _c = _a.notItemsDefaultAnchor, notItemsDefaultAnchor = _c === void 0 ? false : _c, tagDefaultAnchor = _a.tagDefaultAnchor, urlDefaultAnchor = _a.urlDefaultAnchor;
    if (!similarJobsCard || similarJobsCard.length === 0) {
        return notItemsDefaultAnchor && tagDefaultAnchor && urlDefaultAnchor ? (React__default["default"].createElement(SearchItem_component.SearchItem, { className: cx('job-suggested-similar-jobs__search--alternative-bg'), tag: tagDefaultAnchor, url: urlDefaultAnchor, icon: ArrowRightWhite })) : null;
    }
    var showMoreOption = similarJobsCard.length > maxItemsToShow;
    return (React__default["default"].createElement("div", { className: cx('job-suggested-similar-jobs') },
        React__default["default"].createElement("h3", { className: cx('job-suggested-similar-jobs__title') }, sectionTitle),
        similarJobsCard.slice(0, maxItemsToShow).map(function (job, index) {
            return (React__default["default"].createElement(React__default["default"].Fragment, { key: index },
                React__default["default"].createElement(SimilarCard_component.SimilarCard, { className: cx(className), jobUrlSlug: job.jobUrlSlug, title: job.title },
                    React__default["default"].createElement(Logo, { hideLogo: hideLogo, alt: job.title, src: job.companyLogo || noLogo }),
                    React__default["default"].createElement(Text, { className: cx('job-suggested-similar-jobs__text'), customText: textAdapter_util.similarJobTextAdapter(job), headingType: "h2" }),
                    React__default["default"].createElement(Icon, null)),
                React__default["default"].createElement(Divider_component.Divider, null)));
        }),
        showMoreOption && React__default["default"].createElement(SearchItem_component.SearchItem, { className: cx('job-suggested-similar-jobs__search'), tag: tag, url: url })));
};

exports.JobSuggestedSimilarJobs = JobSuggestedSimilarJobs;
//# sourceMappingURL=JobSuggestedSimilarJobs.component.js.map
