'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UserMenuAnalystOptionDefault_component = require('../UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
var classNameManager_util = require('../../../../../../../../../../utils/classNameManager/classNameManager.util.js');
var UserMenuAnalystOptionHover_module = require('./UserMenuAnalystOptionHover.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, handleModal = _a.handleModal, handleMenuOpen = _a.handleMenuOpen, option = _a.option, prefix = _a.prefix, suffix = _a.suffix, url = _a.url;
    return (React__default["default"].createElement("span", { className: classNameManager_util.get({
            styles: UserMenuAnalystOptionHover_module,
            cls: [className, 'user-menu-analyst-option-hover']
        }) },
        prefix,
        React__default["default"].createElement(UserMenuAnalystOptionDefault_component.UserMenuAnalystOptionDefault, { className: classNameManager_util.get({ styles: UserMenuAnalystOptionHover_module, cls: ['user-menu-analyst-option-hover__default'] }), handleMenuOpen: handleMenuOpen, handleModal: handleModal, option: option, url: url }),
        suffix));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionHover = React__default["default"].memo(Component);

exports.UserMenuAnalystOptionHover = UserMenuAnalystOptionHover;
//# sourceMappingURL=UserMenuAnalystOptionHover.component.js.map
