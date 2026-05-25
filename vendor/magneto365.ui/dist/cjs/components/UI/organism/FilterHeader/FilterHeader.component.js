'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Broom = require('../../../../assets/Broom.svg.js');
var filterSearch = require('../../../../assets/filter-search.svg.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
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
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
var Switch_component = require('../../atoms/Switch/Switch.component.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var FilterHeader_modules = require('./FilterHeader.modules.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterHeader = function (_a) {
    var title = _a.title, buttonText = _a.buttonText, filterSummary = _a.filterSummary, totalApplied = _a.totalApplied, clearFilters = _a.clearFilters, switchText = _a.switchText;
    var mainBtnProps = React.useMemo(function () {
        return {
            buttonText: buttonText,
            title: buttonText,
            iconProps: { icon: Broom, size: 18 },
            className: FilterHeader_modules['magneto-ui-filter-header_btn'],
            disabled: !totalApplied,
            onClick: function () { return clearFilters(); }
        };
    }, [buttonText, totalApplied, clearFilters]);
    var displayBtnClear = React.useMemo(function () {
        return (React__default["default"].createElement("div", { className: FilterHeader_modules['magneto-ui-filter-header_clean'] },
            React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({}, mainBtnProps)),
            typeof totalApplied === 'number' && (React__default["default"].createElement("span", { className: !totalApplied ? FilterHeader_modules.disabled : '' }, "(".concat(totalApplied, ")")))));
    }, [totalApplied, mainBtnProps]);
    var displayFilterSummary = React.useMemo(function () {
        return React__default["default"].createElement("span", { className: FilterHeader_modules['magneto-ui-filter-header_summary'] }, filterSummary);
    }, [filterSummary]);
    return (React__default["default"].createElement("article", { className: FilterHeader_modules['magneto-ui-filter-header'] },
        React__default["default"].createElement("div", { className: FilterHeader_modules['magneto-ui-filter-header_title'] },
            React__default["default"].createElement("p", null,
                React__default["default"].createElement(Icon_component.IconItem, { icon: filterSearch, size: 16 }),
                title),
            displayBtnClear),
        switchText && (React__default["default"].createElement(Switch_component.Switch
        //TODO: review isActive, setIsActive
        , { 
            //TODO: review isActive, setIsActive
            title: switchText, className: FilterHeader_modules['magneto-ui-filter-header_switch'], setIsActive: function (value) { return console.log('Change isActive', value); }, isActive: true })),
        displayFilterSummary));
};

exports.FilterHeader = FilterHeader;
//# sourceMappingURL=FilterHeader.component.js.map
