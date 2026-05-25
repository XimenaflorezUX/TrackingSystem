'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertsPanel_module = require('../../AlertsPanel.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertsPanel_module);
var AlertsPanelList = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("ul", { className: cx('alerts-panel__list', className) }, children);
};

exports.AlertsPanelList = AlertsPanelList;
//# sourceMappingURL=AlertsPanelList.component.js.map
