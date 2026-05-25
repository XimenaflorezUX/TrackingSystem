'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var MobileJobDetailsDrawerSkeleton_module = require('./MobileJobDetailsDrawerSkeleton.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function () {
    var skeletonCard = (React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__section'] },
        React__default["default"].createElement("span", { className: MobileJobDetailsDrawerSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: MobileJobDetailsDrawerSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: MobileJobDetailsDrawerSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: MobileJobDetailsDrawerSkeleton_module.skeleton }),
        React__default["default"].createElement("span", { className: MobileJobDetailsDrawerSkeleton_module.skeleton }),
        React__default["default"].createElement("span", null)));
    return (React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton'] },
        React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__header'] },
            React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__header_title'] }),
            React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__header_btn'] }),
            React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__header_card'] })),
        Array(2)
            .fill("JobDetailsSkeleton")
            .map(function (name, i) { return (React__default["default"].createElement(React.Fragment, { key: "".concat(i, "-name") }, skeletonCard)); }),
        React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__footer'] },
            React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__footer_title'] }),
            React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__footer_info'] }),
            React__default["default"].createElement("div", { className: MobileJobDetailsDrawerSkeleton_module['magneto-ui-mobile-job-detail-skeleton__footer_button'] }))));
};
/**
 * UI Children Skeleton Component for MobileJobDetailsDrawer
 */
var MobileJobDetailsDrawerSkeleton = Component;

exports.MobileJobDetailsDrawerSkeleton = MobileJobDetailsDrawerSkeleton;
//# sourceMappingURL=MobileJobDetailsDrawerSkeleton.component.js.map
