'use strict';

var React = require('react');
var MegaMenuJobsTabs_module = require('./MegaMenuJobsTabs.module.scss.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
var megaMenu_constants = require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var ButtonLink_component = require('../../atoms/ButtonLink/ButtonLink.component.js');
require('../../atoms/Collapse/Collapse.component.js');
require('../../../../utils/date/dateInput.util.js');
var Divider_component = require('../../atoms/Divider/Divider.component.js');
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
var MegaMenu_context = require('../../template/MegaMenu/MegaMenu.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuJobsTabs = function () {
    var _a, _b;
    var _c = React.useState(0), selectedTab = _c[0], setSelectedTab = _c[1];
    var _d = MegaMenu_context.useMegaMenuJobs(), tabs = _d.tabs, onChangeTab = _d.onChangeTab, allJobsAction = _d.allJobsAction;
    var onClickTab = React.useCallback(function (index) { return function () {
        setSelectedTab(index);
        onChangeTab && onChangeTab(index);
    }; }, [onChangeTab]);
    var isSelectedTab = React.useCallback(function (index) { return selectedTab == index; }, [selectedTab]);
    var content = React.useMemo(function () { return tabs[selectedTab]; }, [tabs, selectedTab]).content;
    return (React__default["default"].createElement("div", { className: "".concat(MegaMenuJobsTabs_module["mega-menu-jobs-tabs__container"]) },
        React__default["default"].createElement("nav", null,
            React__default["default"].createElement("ul", { className: "".concat(MegaMenuJobsTabs_module["mega-menu-jobs-tabs"]) },
                tabs &&
                    tabs.map(function (_a, index) {
                        var label = _a.label, url = _a.url;
                        return (React__default["default"].createElement("li", { key: index },
                            React__default["default"].createElement(ButtonLink_component.ButtonLink, { buttonText: label, href: url, onClick: onClickTab(index), suffixIcon: megaMenu_constants.megaMenuJobsIcons[index], className: "".concat(MegaMenuJobsTabs_module["mega-menu-jobs-tabs__tab"], " ").concat(isSelectedTab(index) ? MegaMenuJobsTabs_module["selected-tab"] : ''), target: '_blank', iconSize: 16 })));
                    }),
                React__default["default"].createElement(Divider_component.Divider, { direction: 'VERTICAL' }),
                React__default["default"].createElement("li", null,
                    React__default["default"].createElement(ButtonLink_component.ButtonLink, { buttonText: (_a = allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.label) !== null && _a !== void 0 ? _a : '', href: (_b = allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.url) !== null && _b !== void 0 ? _b : '', onClick: allJobsAction === null || allJobsAction === void 0 ? void 0 : allJobsAction.onClick, prefixIcon: ArrowRight2, iconSize: 14 })))),
        React__default["default"].createElement(Divider_component.Divider, null),
        React__default["default"].createElement("div", { className: "".concat(MegaMenuJobsTabs_module["mega-menu-jobs-tabs__content"]) }, content)));
};

module.exports = MegaMenuJobsTabs;
//# sourceMappingURL=MegaMenuJobsTabs.component.js.map
