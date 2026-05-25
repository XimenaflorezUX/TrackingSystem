'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var JobHeader_module = require('./JobHeader.module.scss.js');
var typeTitleJobDetail_constant = require('../../../../constants/stories/typeTitleJobDetail.constant.js');
var JobDetailsMainTitle_component = require('../../organism/JobDetailsDrawer/children/MainTitle/JobDetailsMainTitle.component.js');
var JobDetailsSubTitle_component = require('../../organism/JobDetailsDrawer/children/SubTitle/JobDetailsSubTitle.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var offerTitle = _a.offerTitle, offerCompanyName = _a.offerCompanyName, offerCompanyLink = _a.offerCompanyLink, isHidden = _a.isHidden, typeTitle = _a.typeTitle;
    var showCompanyName = React.useMemo(function () {
        if (isHidden || !offerCompanyName)
            return React__default["default"].createElement(React.Fragment, null);
        if (offerCompanyLink) {
            return (React__default["default"].createElement("a", { className: JobHeader_module['magneto-ui-job-header__link'], href: offerCompanyLink, title: offerCompanyName }, offerCompanyName));
        }
        return React__default["default"].createElement("h2", { className: JobHeader_module['magneto-ui-job-header__subtitle'] }, offerCompanyName);
    }, [isHidden, offerCompanyLink, offerCompanyName]);
    var GenerateTitle = function () {
        if (typeTitle === typeTitleJobDetail_constant.TYPE_TITLE.SUB_TITLE)
            return React__default["default"].createElement(JobDetailsSubTitle_component.SubTitleJobDetails, { styles: JobHeader_module['magneto-ui-job-header__title'], title: String(offerTitle) });
        return React__default["default"].createElement(JobDetailsMainTitle_component.MainTitleJobDetails, { styles: JobHeader_module['magneto-ui-job-header__title'], title: String(offerTitle) });
    };
    return (React__default["default"].createElement("div", { className: JobHeader_module['magneto-ui-job-header'] },
        GenerateTitle(),
        showCompanyName));
};
/**
 * UI Atom component of Job Header
 */
var JobHeader = Component;

exports.JobHeader = JobHeader;
//# sourceMappingURL=JobHeader.component.js.map
