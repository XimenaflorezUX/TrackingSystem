'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var jobDetails_module = require('./jobDetails.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(jobDetails_module);
var JobDetails = function (_a) {
    var renderHeader = _a.renderHeader, children = _a.children, renderFooter = _a.renderFooter, classNames = _a.classNames, className = _a.className;
    return (React__default["default"].createElement("article", { className: cx('job', className) },
        React__default["default"].createElement("header", { className: cx('job__header', classNames === null || classNames === void 0 ? void 0 : classNames.header) },
            renderHeader(),
            React__default["default"].createElement("hr", { className: cx('job__separator', classNames === null || classNames === void 0 ? void 0 : classNames.separator) })),
        React__default["default"].createElement("section", { className: cx('job__body', classNames === null || classNames === void 0 ? void 0 : classNames.body) }, children),
        React__default["default"].createElement("footer", { className: cx('job__footer', classNames === null || classNames === void 0 ? void 0 : classNames.footer) }, renderFooter === null || renderFooter === void 0 ? void 0 : renderFooter())));
};

exports.JobDetails = JobDetails;
//# sourceMappingURL=JobDetails.component.js.map
