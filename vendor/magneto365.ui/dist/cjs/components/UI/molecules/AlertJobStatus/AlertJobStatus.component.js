'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertJobStatus_module = require('./AlertJobStatus.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Text_component = require('../../atoms/Text/Text.component.js');
var AlertJobStatusContainer_component = require('./children/AlertJobStatusContainer/AlertJobStatusContainer.component.js');
var AlertJobStatusIcon_component = require('./children/AlertJobStatusIcon/AlertJobStatusIcon.component.js');
var AlertJobStatusButton_component = require('./children/AlertJobStatusButton/AlertJobStatusButton.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertJobStatus_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, type = _a.type;
    return React__default["default"].createElement("div", { className: cx('alert-job', className, type) }, children);
};
var AlertJobStatus = Object.assign(Component, {
    Container: AlertJobStatusContainer_component.AlertJobStatusContainer,
    Icon: AlertJobStatusIcon_component.AlertJobStatusIcon,
    Button: AlertJobStatusButton_component.AlertJobStatusButton,
    Text: Text_component.TextCustom
});

exports.AlertJobStatus = AlertJobStatus;
//# sourceMappingURL=AlertJobStatus.component.js.map
