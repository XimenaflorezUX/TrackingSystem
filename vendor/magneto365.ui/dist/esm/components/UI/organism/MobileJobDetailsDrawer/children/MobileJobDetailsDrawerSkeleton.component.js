import React, { Fragment } from 'react';
import style from './MobileJobDetailsDrawerSkeleton.module.scss.js';

var Component = function () {
    var skeletonCard = (React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__section'] },
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", { className: style.skeleton }),
        React.createElement("span", null)));
    return (React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton'] },
        React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__header'] },
            React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__header_title'] }),
            React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__header_btn'] }),
            React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__header_card'] })),
        Array(2)
            .fill("JobDetailsSkeleton")
            .map(function (name, i) { return (React.createElement(Fragment, { key: "".concat(i, "-name") }, skeletonCard)); }),
        React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__footer'] },
            React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__footer_title'] }),
            React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__footer_info'] }),
            React.createElement("div", { className: style['magneto-ui-mobile-job-detail-skeleton__footer_button'] }))));
};
/**
 * UI Children Skeleton Component for MobileJobDetailsDrawer
 */
var MobileJobDetailsDrawerSkeleton = Component;

export { MobileJobDetailsDrawerSkeleton };
//# sourceMappingURL=MobileJobDetailsDrawerSkeleton.component.js.map
