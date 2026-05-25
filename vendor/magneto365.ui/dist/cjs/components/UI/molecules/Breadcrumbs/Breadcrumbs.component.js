'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
var Breadcrumb_component = require('../../atoms/Breadcrumb/Breadcrumb.component.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
var headers_constants = require('../../../../constants/stories/headers.constants.js');
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
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var Breadcrumbs_modules = require('./Breadcrumbs.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var homeUrl = _a.homeUrl, breadcrumbProps = _a.breadcrumbProps, _b = _a.iconProps, iconProps = _b === void 0 ? headers_constants.iconPropsBreadCrumb : _b;
    return (React__default["default"].createElement("div", { className: Breadcrumbs_modules.BreadcrumbsComponent },
        React__default["default"].createElement("a", { href: homeUrl },
            React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({}, iconProps))),
        breadcrumbProps && React__default["default"].createElement(Breadcrumb_component.Breadcrumb, tslib_es6.__assign({}, breadcrumbProps))));
};
/**
 * Molecule UI component for breadcrums information
 */
var Breadcrumbs = Component;

exports.Breadcrumbs = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.component.js.map
