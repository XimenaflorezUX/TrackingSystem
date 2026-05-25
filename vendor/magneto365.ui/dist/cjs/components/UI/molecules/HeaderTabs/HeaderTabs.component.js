'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
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
var HeaderTab_component = require('../../atoms/HeaderTab/HeaderTab.component.js');
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var HeaderTabs_modules = require('./HeaderTabs.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var _b = _a.headerTabList, headerTabList = _b === void 0 ? [] : _b, _c = _a.urlParam, urlParam = _c === void 0 ? '' : _c, addDivider = _a.addDivider;
    return (React__default["default"].createElement("div", { className: HeaderTabs_modules.HeaderTabsComponent, "data-add-divider": addDivider }, headerTabList.map(function (_a, index) {
        var headerTabProps = tslib_es6.__rest(_a, []);
        return (React__default["default"].createElement(React__default["default"].Fragment, { key: index },
            React__default["default"].createElement(HeaderTab_component.HeaderTab, tslib_es6.__assign({}, headerTabProps, { isActive: Array.isArray(headerTabProps.slug)
                    ? headerTabProps.slug.includes(urlParam)
                    : urlParam === headerTabProps.slug }))));
    })));
};
/**
 * Molecule UI component for header tabs information`
 */
var HeaderTabs = Component;

exports.HeaderTabs = HeaderTabs;
//# sourceMappingURL=HeaderTabs.component.js.map
