'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNameManager_util = require('../../../../../../../../../../utils/classNameManager/classNameManager.util.js');
var UserMenuAnalystOptionText_module = require('./UserMenuAnalystOptionText.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var option = _a.option, className = _a.className;
    return (React__default["default"].createElement("span", { className: classNameManager_util.get({
            styles: UserMenuAnalystOptionText_module,
            cls: [className, 'user-menu-analyst-option-text']
        }) },
        React__default["default"].createElement("p", null, option.title)));
};
/**
 * Molecule UI great-grand child component of menu dropdown
 */
var UserMenuAnalystOptionText = React__default["default"].memo(Component);

exports.UserMenuAnalystOptionText = UserMenuAnalystOptionText;
//# sourceMappingURL=UserMenuAnalystOptionText.component.js.map
