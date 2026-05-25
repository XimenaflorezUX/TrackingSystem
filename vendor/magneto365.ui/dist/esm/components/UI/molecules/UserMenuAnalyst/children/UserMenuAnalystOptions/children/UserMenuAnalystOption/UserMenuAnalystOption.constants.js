import { UserMenuAnalystOptionDefault } from './children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import { UserMenuAnalystOptionHover } from './children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import { UserMenuAnalystOptionText } from './children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import './children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import { EUserMenuAnalystOptionType } from './UserMenuAnalystOption.interface.js';

var _a, _b;
var optionTypesStyles = (_a = {},
    _a[EUserMenuAnalystOptionType.BUTTON] = ['user-menu-analyst-option-default--button'],
    _a[EUserMenuAnalystOptionType.HOVER] = ['user-menu-analyst-option__object--hover'],
    _a[EUserMenuAnalystOptionType.UNDERLINE] = ['user-menu-analyst-option-default--underline'],
    _a[EUserMenuAnalystOptionType.TEXT] = ['user-menu-analyst-option__object--text'],
    _a);
var getOptionTypeStyles = function (type) { return (type ? optionTypesStyles[type] : []); };
var optionTypes = (_b = {},
    _b[EUserMenuAnalystOptionType.BUTTON] = UserMenuAnalystOptionDefault,
    _b[EUserMenuAnalystOptionType.HOVER] = UserMenuAnalystOptionHover,
    _b[EUserMenuAnalystOptionType.UNDERLINE] = UserMenuAnalystOptionDefault,
    _b[EUserMenuAnalystOptionType.TEXT] = UserMenuAnalystOptionText,
    _b);
var getOptionType = function (type) { return (type ? optionTypes[type] : UserMenuAnalystOptionDefault); };

export { getOptionType, getOptionTypeStyles };
//# sourceMappingURL=UserMenuAnalystOption.constants.js.map
