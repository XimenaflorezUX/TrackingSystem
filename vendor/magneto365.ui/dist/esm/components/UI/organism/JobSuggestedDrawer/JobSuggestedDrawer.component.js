import React from 'react';
import styles from './JobSuggestedDrawer.module.scss.js';
import { JobSuggestedHeader } from './children/JobSuggestedHeader/JobSuggestedHeader.component.js';
import { JobSuggestedSimilarJobs } from './children/JobSuggestedSimilarJobs/JobSuggestedSimilarJobs.component.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import { AlertJobStatus } from '../../molecules/AlertJobStatus/AlertJobStatus.component.js';
import { JobDetailsSkeleton } from '../JobDetailsDrawer/children/JobDetailsSkeleton.component.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var isLoading = _a.isLoading, children = _a.children, className = _a.className;
    if (isLoading)
        return React.createElement(JobDetailsSkeleton, null);
    return React.createElement("section", { className: cx('magneto-ui--job-drawer', className) }, children);
};
var JobSuggestedDrawer = Object.assign(Component, {
    Header: JobSuggestedHeader,
    Alert: AlertJobStatus,
    SimilarJobs: JobSuggestedSimilarJobs
});

export { JobSuggestedDrawer };
//# sourceMappingURL=JobSuggestedDrawer.component.js.map
