'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var common_constants = require('../../../../../../constants/stories/common.constants.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
var JobDetailsSkeleton_module = require('./JobDetailsSkeleton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function () {
    var skeletonCard = (React__default["default"].createElement("div", { className: "".concat(JobDetailsSkeleton_module["".concat(common_constants.classMUI, "-job-detail-skeleton__section")], " ") },
        React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
        React__default["default"].createElement("span", null)));
    return (React__default["default"].createElement("div", { className: "".concat(JobDetailsSkeleton_module["".concat(common_constants.classMUI, "-job-detail-skeleton")]) },
        React__default["default"].createElement("div", { className: "".concat(JobDetailsSkeleton_module["".concat(common_constants.classMUI, "-job-detail-skeleton__header")]) },
            React__default["default"].createElement("div", { className: "".concat(JobDetailsSkeleton_module["".concat(common_constants.classMUI, "-job-detail-skeleton__header_title")]) }),
            React__default["default"].createElement("div", { className: "".concat(JobDetailsSkeleton_module["".concat(common_constants.classMUI, "-job-detail-skeleton__header_btn")]) },
                React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
                React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
                React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton }),
                React__default["default"].createElement("span", { className: JobDetailsSkeleton_module.skeleton })),
            React__default["default"].createElement("div", { className: "".concat(JobDetailsSkeleton_module["".concat(common_constants.classMUI, "-job-detail-skeleton__header_card")]) })),
        Array(5)
            .fill("JobDetailsSkeleton")
            .map(function (name, i) { return (React__default["default"].createElement(React.Fragment, { key: "".concat(i, "-name") }, skeletonCard)); })));
};
/**
 * UI Children Skeleton Component for JobDetailsDrawer
 */
var JobDetailsSkeleton = Component;

exports.JobDetailsSkeleton = JobDetailsSkeleton;
//# sourceMappingURL=JobDetailsSkeleton.component.js.map
