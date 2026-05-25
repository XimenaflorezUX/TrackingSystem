'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var arrowDownBlue = require('../../../../assets/arrowDownBlue.svg.js');
var userRoundedBlue = require('../../../../assets/userRoundedBlue.svg.js');
require('../BarChart/enums.js');
var classNameManager_util = require('../../../../utils/classNameManager/classNameManager.util.js');
require('../Button/Button.component.js');
require('../Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../Field/Field.component.js');
require('../Typography/Typography.component.js');
require('../Typography/Typography.interface.js');
require('../InputFile/InputFile.component.js');
require('../Paragraph/Paragraph.component.js');
require('../Radio/Radio.interface.js');
require('../Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../Toggle/Toggle.component.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var UserMenuButtonAnalyst_module = require('./UserMenuButtonAnalyst.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var className = _a.className, title = _a.title, onClick = _a.onClick, user = _a.user;
    var userInfo = index.useMediaQuery(React__default["default"].createElement("span", null, "".concat(user, " | ").concat(title)), {
        sm: null
    });
    return (React__default["default"].createElement("button", { className: classNameManager_util.get({ styles: UserMenuButtonAnalyst_module, cls: ['user-menu-button-analyst', className] }), onClick: onClick },
        React__default["default"].createElement(Icon_component.IconItem, { icon: userRoundedBlue, size: 20 }),
        userInfo,
        React__default["default"].createElement(Icon_component.IconItem, { icon: arrowDownBlue, size: 16 })));
};
/**
 * Atom UI component of user menu button analyst
 */
var UserMenuButtonAnalyst = Component;

exports.UserMenuButtonAnalyst = UserMenuButtonAnalyst;
//# sourceMappingURL=UserMenuButtonAnalyst.component.js.map
