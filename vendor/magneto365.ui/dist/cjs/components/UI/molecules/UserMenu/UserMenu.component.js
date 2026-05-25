'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Avatar_component = require('../../atoms/Avatar/Avatar.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../../../utils/date/dateInput.util.js');
require('../../atoms/Field/Field.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
var Popover_component = require('../../atoms/Popover/Popover.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var ListMenuIcons_component = require('../ListMenuIcons/ListMenuIcons.component.js');
var index = require('../../../hoc/withClickOut/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var listMenuUserProps = _a.listMenuUserProps, profileImage = _a.profileImage, _b = _a.clickOut, clickOut = _b === void 0 ? false : _b, _c = _a.setClickOut, setClickOut = _c === void 0 ? function () { return ({}); } : _c, renderHeader = _a.renderHeader;
    return (React__default["default"].createElement(Popover_component.Popover, { widthBase: 40, show: clickOut, content: React__default["default"].createElement(React__default["default"].Fragment, null,
            renderHeader && renderHeader(),
            React__default["default"].createElement(ListMenuIcons_component.ListMenuIcons, tslib_es6.__assign({}, listMenuUserProps))), positionX: "left", positionY: "bottom" },
        React__default["default"].createElement(Avatar_component.Avatar, tslib_es6.__assign({}, profileImage, { onClick: function () { return setClickOut(!clickOut); } }))));
};
var UserMenu = index(Component);

exports.Component = Component;
exports.UserMenu = UserMenu;
//# sourceMappingURL=UserMenu.component.js.map
