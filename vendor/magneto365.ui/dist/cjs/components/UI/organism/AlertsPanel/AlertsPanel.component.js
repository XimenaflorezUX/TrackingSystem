'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AlertsPanel_module = require('./AlertsPanel.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var AlertsPanelList_component = require('./children/AlertsPanelList/AlertsPanelList.component.js');
var AlertsPanelItem_component = require('./children/AlertsPanelItem/AlertsPanelItem.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(AlertsPanel_module);
var Component = function (_a) {
    var title = _a.title, children = _a.children, className = _a.className;
    return (React__default["default"].createElement("div", { className: cx('alerts-panel', className) },
        React__default["default"].createElement("h2", { className: cx('alerts-panel__title', className) }, title),
        children));
};
var AlertsPanel = Object.assign(Component, {
    List: AlertsPanelList_component.AlertsPanelList,
    Item: AlertsPanelItem_component.AlertsPanelItem
});

exports.AlertsPanel = AlertsPanel;
//# sourceMappingURL=AlertsPanel.component.js.map
