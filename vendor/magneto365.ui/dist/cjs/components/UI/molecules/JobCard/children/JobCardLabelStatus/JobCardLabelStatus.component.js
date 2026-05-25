'use strict';

var React = require('react');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var JobCardLabelStatus_constant = require('./JobCardLabelStatus.constant.js');
var Typography_component = require('../../../../atoms/Typography/Typography.component.js');
var JobCardLabelStatus_module = require('./JobCardLabelStatus.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(JobCardLabelStatus_module);
var JobCardLabelStatus = function (_a) {
    var status = _a.status, text = _a.text;
    return (React__default["default"].createElement("div", { className: cx('magneto-ui-job-card-label-status', "magneto-ui-job-card-label-status--".concat(status)) },
        React__default["default"].createElement(Icon_component.IconItem, { icon: JobCardLabelStatus_constant.JOB_CARD_LABEL_STATUS_COLOR[status], alt: "icon", size: 16 }),
        React__default["default"].createElement(Typography_component.Typography.Text, { weight: "normal", size: "sm-2", color: "grey-800" }, text)));
};

module.exports = JobCardLabelStatus;
//# sourceMappingURL=JobCardLabelStatus.component.js.map
