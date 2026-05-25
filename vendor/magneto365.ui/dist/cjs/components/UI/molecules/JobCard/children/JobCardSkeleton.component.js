'use strict';

var React = require('react');
var JobCardSkeleton_module = require('./JobCardSkeleton.module.scss.js');
var common_constants = require('../../../../../constants/stories/common.constants.js');
require('../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../constants/stories/vacancies.constants.js');
require('../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../constants/img.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobCardSkeleton = function (_a) {
    var numCard = _a.numCard, _b = _a.goToBottom, goToBottom = _b === void 0 ? false : _b;
    var skeletonNum = Array.from({ length: numCard }, function (_, index) { return index + 1; });
    React.useEffect(function () {
        if (!goToBottom)
            return;
        var element = document.getElementById('magneto-ui-suggestedJobs-page');
        if (!element)
            return;
        element.scrollTop = element.scrollHeight;
    }, [goToBottom]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, skeletonNum.map(function (ele, i) { return (React__default["default"].createElement("div", { key: ele + i, className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton")]) },
        React__default["default"].createElement("div", { className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton__row1")], " ").concat(JobCardSkeleton_module.skeleton) }),
        React__default["default"].createElement("div", { className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton__container")]) },
            React__default["default"].createElement("div", { className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton__container--row2")], " ").concat(JobCardSkeleton_module.skeleton) }),
            React__default["default"].createElement("div", { className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton__container--row2")], " ").concat(JobCardSkeleton_module.skeleton) }),
            React__default["default"].createElement("div", { className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton__container--row2")], " ").concat(JobCardSkeleton_module.skeleton) }),
            React__default["default"].createElement("div", { className: "".concat(JobCardSkeleton_module["".concat(common_constants.classMUI, "-job-card-skeleton__container--row2")], " ").concat(JobCardSkeleton_module.skeleton) })))); })));
};

module.exports = JobCardSkeleton;
//# sourceMappingURL=JobCardSkeleton.component.js.map
