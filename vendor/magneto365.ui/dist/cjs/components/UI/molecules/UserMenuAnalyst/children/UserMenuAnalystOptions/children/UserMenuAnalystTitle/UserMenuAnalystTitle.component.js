'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNameManager_util = require('../../../../../../../../utils/classNameManager/classNameManager.util.js');
var UserMenuAnalystTitle_module = require('./UserMenuAnalystTitle.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var subTitle = _a.subTitle, title = _a.title;
    var separatorIndex = subTitle === null || subTitle === void 0 ? void 0 : subTitle.indexOf(':');
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("span", { className: classNameManager_util.get({ styles: UserMenuAnalystTitle_module, cls: ['user-menu-analyst-title__title'] }) }, title),
        subTitle && separatorIndex && (React__default["default"].createElement("div", null,
            React__default["default"].createElement("span", { className: classNameManager_util.get({
                    styles: UserMenuAnalystTitle_module,
                    cls: ['user-menu-analyst-title__subtitle', 'user-menu-analyst-title__subtitle--first']
                }) }, subTitle.slice(0, separatorIndex + 1).trim() + ' '),
            React__default["default"].createElement("span", { className: classNameManager_util.get({
                    styles: UserMenuAnalystTitle_module,
                    cls: ['user-menu-analyst-title__subtitle', 'user-menu-analyst-title__subtitle--last']
                }) }, subTitle.slice(separatorIndex + 1).trim())))));
};
var UserMenuAnalystTitle = Component;

exports.UserMenuAnalystTitle = UserMenuAnalystTitle;
//# sourceMappingURL=UserMenuAnalystTitle.component.js.map
