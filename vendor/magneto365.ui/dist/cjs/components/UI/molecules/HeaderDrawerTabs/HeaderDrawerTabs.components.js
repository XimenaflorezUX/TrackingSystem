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
require('../../atoms/Typography/Typography.component.js');
require('../../atoms/Typography/Typography.interface.js');
require('../../atoms/InputFile/InputFile.component.js');
var Logo_component = require('../../atoms/Logo/Logo.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var Tab_component = require('../Tab/Tab.component.js');
var TabButton_component = require('../TabButton/TabButton.component.js');
var HeaderDrawerTabs_module = require('./HeaderDrawerTabs.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var logoProps = _a.logoProps, leftTabLink = _a.leftTabLink, rightTabLink = _a.rightTabLink, leftTabStyle = _a.leftTabStyle, rightTabStyle = _a.rightTabStyle, homeUrl = _a.homeUrl;
    return (React__default["default"].createElement("div", { className: HeaderDrawerTabs_module.HeaderDrawerTabsComponent },
        React__default["default"].createElement("a", { href: homeUrl },
            React__default["default"].createElement(Logo_component.LogoComponent, tslib_es6.__assign({}, logoProps, { isoView: true }))),
        React__default["default"].createElement(Tab_component.Tab, null,
            React__default["default"].createElement(TabButton_component.TabButton, { tabButtonLink: leftTabLink, tabButtonLinkStyles: leftTabStyle === null || leftTabStyle === void 0 ? void 0 : leftTabStyle.tabButtonLinkStyles, tabButtonStyles: leftTabStyle === null || leftTabStyle === void 0 ? void 0 : leftTabStyle.tabButtonStyles }),
            React__default["default"].createElement(TabButton_component.TabButton, { tabButtonLink: rightTabLink, tabButtonLinkStyles: rightTabStyle === null || rightTabStyle === void 0 ? void 0 : rightTabStyle.tabButtonLinkStyles, tabButtonStyles: rightTabStyle === null || rightTabStyle === void 0 ? void 0 : rightTabStyle.tabButtonStyles }))));
};
var HeaderDrawerTabs = Component;

exports.HeaderDrawerTabs = HeaderDrawerTabs;
//# sourceMappingURL=HeaderDrawerTabs.components.js.map
