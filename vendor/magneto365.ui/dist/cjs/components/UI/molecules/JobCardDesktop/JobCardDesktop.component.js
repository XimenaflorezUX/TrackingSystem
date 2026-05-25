'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var JobCardDesktop_module = require('./JobCardDesktop.module.scss.js');
var JobCardLabelStatus_component = require('../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobCardDesktop_module);
var getJobSubtitle = function (companyName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var additionalData = args.filter(function (arg) { return arg !== undefined; }).join(', ');
    if (companyName)
        return "".concat(companyName, " | ").concat(additionalData);
    return additionalData;
};
var JobCardDesktop = function (_a) {
    var jobOpen = _a.jobOpen, _b = _a.cities, cities = _b === void 0 ? [] : _b, salary = _a.salary, wasSeen = _a.wasSeen, companyName = _a.companyName, title = _a.title, formatPublishDate = _a.formatPublishDate, contractType = _a.contractType, showDetail = _a.showDetail, urgent = _a.urgent, jobSlug = _a.jobSlug, dynamicUrl = _a.dynamicUrl, labelStatus = _a.labelStatus;
    var optionsRef = React.useRef(null);
    var citiesformatted = React.useMemo(function () {
        var safeCities = Array.isArray(cities) ? cities : [];
        return safeCities.length > 5 ? safeCities.slice(0, 5).join(', ') : safeCities.join(', ');
    }, [cities]);
    var seenModifier = React.useMemo(function () {
        return wasSeen ? "".concat(common_constants.classMUI, "-card-jobs__text--is-seen") : '';
    }, [wasSeen]);
    return (React__default["default"].createElement("div", { className: cx("".concat(common_constants.classMUI, "-card-jobs__container"), jobOpen && "".concat(common_constants.classMUI, "-card-jobs--job-open")) },
        React__default["default"].createElement("article", { onClick: showDetail, className: cx("".concat(common_constants.classMUI, "-card-jobs"), urgent && "".concat(common_constants.classMUI, "-card-jobs--urgent")) },
            React__default["default"].createElement("div", { className: cx("".concat(common_constants.classMUI, "-card-jobs__data")) },
                React__default["default"].createElement("section", { className: cx("".concat(common_constants.classMUI, "-card-jobs__header")) },
                    React__default["default"].createElement("span", { className: cx("".concat(common_constants.classMUI, "-card-jobs__text"), "".concat(common_constants.classMUI, "-card-jobs__published")) }, formatPublishDate),
                    React__default["default"].createElement("section", { ref: optionsRef, className: cx("".concat(common_constants.classMUI, "-card-jobs__options"), 'opciones') })),
                React__default["default"].createElement("h2", { className: cx("".concat(common_constants.classMUI, "-card-jobs__text"), "".concat(seenModifier), "".concat(common_constants.classMUI, "-card-jobs__text--big"), "".concat(common_constants.classMUI, "-card-jobs__text--bold")) },
                    React__default["default"].createElement("a", { href: "".concat(dynamicUrl, "/").concat(jobSlug), title: title, target: "_blank", rel: "noreferrer", onClick: function (e) { return e.preventDefault(); }, className: cx("".concat(common_constants.classMUI, "-card-jobs__a")) }, title)),
                React__default["default"].createElement("h3", { className: cx("".concat(common_constants.classMUI, "-card-jobs__text"), "".concat(seenModifier)) }, getJobSubtitle(companyName, contractType)),
                React__default["default"].createElement("p", { className: cx("".concat(common_constants.classMUI, "-card-jobs__text"), "".concat(seenModifier)) }, salary),
                React__default["default"].createElement("p", { className: cx("".concat(common_constants.classMUI, "-card-jobs__text"), "".concat(seenModifier)) }, citiesformatted),
                labelStatus && React__default["default"].createElement(JobCardLabelStatus_component, tslib_es6.__assign({}, labelStatus))))));
};

module.exports = JobCardDesktop;
//# sourceMappingURL=JobCardDesktop.component.js.map
