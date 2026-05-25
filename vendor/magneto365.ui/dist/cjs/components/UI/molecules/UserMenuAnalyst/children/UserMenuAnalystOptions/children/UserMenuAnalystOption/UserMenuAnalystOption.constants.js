'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var UserMenuAnalystOptionDefault_component = require('./children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
var UserMenuAnalystOptionHover_component = require('./children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
var UserMenuAnalystOptionText_component = require('./children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('./children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
var UserMenuAnalystOption_interface = require('./UserMenuAnalystOption.interface.js');

var _a, _b;
var optionTypesStyles = (_a = {},
    _a[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.BUTTON] = ['user-menu-analyst-option-default--button'],
    _a[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.HOVER] = ['user-menu-analyst-option__object--hover'],
    _a[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.UNDERLINE] = ['user-menu-analyst-option-default--underline'],
    _a[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.TEXT] = ['user-menu-analyst-option__object--text'],
    _a);
var getOptionTypeStyles = function (type) { return (type ? optionTypesStyles[type] : []); };
var optionTypes = (_b = {},
    _b[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.BUTTON] = UserMenuAnalystOptionDefault_component.UserMenuAnalystOptionDefault,
    _b[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.HOVER] = UserMenuAnalystOptionHover_component.UserMenuAnalystOptionHover,
    _b[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.UNDERLINE] = UserMenuAnalystOptionDefault_component.UserMenuAnalystOptionDefault,
    _b[UserMenuAnalystOption_interface.EUserMenuAnalystOptionType.TEXT] = UserMenuAnalystOptionText_component.UserMenuAnalystOptionText,
    _b);
var getOptionType = function (type) { return (type ? optionTypes[type] : UserMenuAnalystOptionDefault_component.UserMenuAnalystOptionDefault); };

exports.getOptionType = getOptionType;
exports.getOptionTypeStyles = getOptionTypeStyles;
//# sourceMappingURL=UserMenuAnalystOption.constants.js.map
