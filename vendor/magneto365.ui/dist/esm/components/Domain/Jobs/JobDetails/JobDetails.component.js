import React from 'react';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import styles from './jobDetails.module.scss.js';

var cx = classNames.bind(styles);
var JobDetails = function (_a) {
    var renderHeader = _a.renderHeader, children = _a.children, renderFooter = _a.renderFooter, classNames = _a.classNames, className = _a.className;
    return (React.createElement("article", { className: cx('job', className) },
        React.createElement("header", { className: cx('job__header', classNames === null || classNames === void 0 ? void 0 : classNames.header) },
            renderHeader(),
            React.createElement("hr", { className: cx('job__separator', classNames === null || classNames === void 0 ? void 0 : classNames.separator) })),
        React.createElement("section", { className: cx('job__body', classNames === null || classNames === void 0 ? void 0 : classNames.body) }, children),
        React.createElement("footer", { className: cx('job__footer', classNames === null || classNames === void 0 ? void 0 : classNames.footer) }, renderFooter === null || renderFooter === void 0 ? void 0 : renderFooter())));
};

export { JobDetails };
//# sourceMappingURL=JobDetails.component.js.map
