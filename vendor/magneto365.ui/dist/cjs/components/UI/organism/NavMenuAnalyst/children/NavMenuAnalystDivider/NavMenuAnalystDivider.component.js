'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('../../../../atoms/BarChart/enums.js');
var classNameManager_util = require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
var Divider_component = require('../../../../atoms/Divider/Divider.component.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var NavMenuAnalystDivider_module = require('./NavMenuAnalystDivider.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var isFullWidth = _a.isFullWidth, _b = _a.showMobile, showMobile = _b === void 0 ? true : _b, title = _a.title;
    if (!title)
        return null;
    return (React__default["default"].createElement("div", { className: classNameManager_util.get({ styles: NavMenuAnalystDivider_module, cls: ['nav-menu-analyst-divider'] }) }, isFullWidth ? (React__default["default"].createElement("h3", { className: classNameManager_util.get({ styles: NavMenuAnalystDivider_module, cls: ['nav-menu-analyst-divider__title'] }) }, title)) : (showMobile && React__default["default"].createElement(Divider_component.Divider, null))));
};
/**
 * Organism UI child component of nav menu analyst
 */
var NavMenuAnalystDivider = Component;

exports.NavMenuAnalystDivider = NavMenuAnalystDivider;
//# sourceMappingURL=NavMenuAnalystDivider.component.js.map
