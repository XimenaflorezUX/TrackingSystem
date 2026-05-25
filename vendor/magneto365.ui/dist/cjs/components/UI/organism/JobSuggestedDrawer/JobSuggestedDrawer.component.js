'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobSuggestedDrawer_module = require('./JobSuggestedDrawer.module.scss.js');
var JobSuggestedHeader_component = require('./children/JobSuggestedHeader/JobSuggestedHeader.component.js');
var JobSuggestedSimilarJobs_component = require('./children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var AlertJobStatus_component = require('../../molecules/AlertJobStatus/AlertJobStatus.component.js');
var JobDetailsSkeleton_component = require('../JobDetailsDrawer/children/JobDetailsSkeleton.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobSuggestedDrawer_module);
var Component = function (_a) {
    var isLoading = _a.isLoading, children = _a.children, className = _a.className;
    if (isLoading)
        return React__default["default"].createElement(JobDetailsSkeleton_component.JobDetailsSkeleton, null);
    return React__default["default"].createElement("section", { className: cx('magneto-ui--job-drawer', className) }, children);
};
var JobSuggestedDrawer = Object.assign(Component, {
    Header: JobSuggestedHeader_component.JobSuggestedHeader,
    Alert: AlertJobStatus_component.AlertJobStatus,
    SimilarJobs: JobSuggestedSimilarJobs_component.JobSuggestedSimilarJobs
});

exports.JobSuggestedDrawer = JobSuggestedDrawer;
//# sourceMappingURL=JobSuggestedDrawer.component.js.map
