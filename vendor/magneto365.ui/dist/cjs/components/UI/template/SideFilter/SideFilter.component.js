'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ArrowLeft2 = require('../../../../assets/ArrowLeft2.svg.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
var sideFilter_constants = require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var FilterHeader_component = require('../../organism/FilterHeader/FilterHeader.component.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
require('../../atoms/Collapse/Collapse.component.js');
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
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var factory_component = require('./factory/factory.component.js');
var SideFilter_module = require('./SideFilter.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SideFilter = function (_a) {
    var title = _a.title, _b = _a.filters, filters = _b === void 0 ? [] : _b, totalAppliedFilters = _a.totalAppliedFilters, filterSummary = _a.filterSummary, buttonText = _a.buttonText, loading = _a.loading, isFiltersOpen = _a.isFiltersOpen, textBtnMain = _a.textBtnMain, titleBtnClose = _a.titleBtnClose, setIsFiltersOpen = _a.setIsFiltersOpen, setIsApplied = _a.setIsApplied, clearFilters = _a.clearFilters, unApplyWithChild = _a.unApplyWithChild, getOptionsOnLoad = _a.getOptionsOnLoad, getOptionsOnSearch = _a.getOptionsOnSearch;
    var _c = React.useState(99), currentOpenFilter = _c[0], setCurrentOpenFilter = _c[1];
    var cardProps = React.useMemo(function () {
        return {
            setIsApplied: setIsApplied,
            unApplyWithChild: unApplyWithChild,
            getOptionsOnLoad: getOptionsOnLoad,
            getOptionsOnSearch: getOptionsOnSearch,
            loading: loading
        };
    }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, loading]);
    var headerProps = React.useMemo(function () {
        return {
            title: title,
            buttonText: buttonText,
            filterSummary: filterSummary,
            totalApplied: totalAppliedFilters,
            clearFilters: clearFilters
        };
    }, [title, buttonText, filterSummary, totalAppliedFilters, clearFilters]);
    var displayFilters = React.useMemo(function () {
        var renderFilters = filters.length ? filters : sideFilter_constants.defaultFilters;
        return renderFilters === null || renderFilters === void 0 ? void 0 : renderFilters.map(function (item, i) {
            return (React__default["default"].createElement(factory_component.CardByRenderType, tslib_es6.__assign({ key: "".concat(i, "-").concat(item.field) }, item, { index: i, showFilters: currentOpenFilter === i, setCurrentOpenFilter: setCurrentOpenFilter }, cardProps)));
        });
    }, [filters, cardProps, currentOpenFilter]);
    var displayBtnMain = React.useMemo(function () {
        if (!totalAppliedFilters)
            return React__default["default"].createElement(React.Fragment, null);
        return (React__default["default"].createElement(MainButton_component.MainButton, { buttonText: textBtnMain, className: "".concat(SideFilter_module['magneto-ui-side-filter_btn__main'], " ").concat(isFiltersOpen ? SideFilter_module['btn_main-open'] : ''), title: textBtnMain, onClick: function () { return setIsFiltersOpen(function (isOpen) { return !isOpen; }); } }));
    }, [totalAppliedFilters, isFiltersOpen, textBtnMain, setIsFiltersOpen]);
    var displayBackground = React.useMemo(function () {
        if (!isFiltersOpen)
            return React__default["default"].createElement(React.Fragment, null);
        return React__default["default"].createElement("span", { className: SideFilter_module['magneto-iu-side-filter_background'], onClick: function () { return setIsFiltersOpen(false); } });
    }, [isFiltersOpen, setIsFiltersOpen]);
    React.useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = isFiltersOpen ? 'hidden' : 'auto';
    }, [isFiltersOpen]);
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement("aside", { className: "".concat(SideFilter_module['magneto-iu-side-filter'], " ").concat(isFiltersOpen ? SideFilter_module.open : '') },
            React__default["default"].createElement("div", { className: SideFilter_module['magneto-iu-side-filter_content'] },
                React__default["default"].createElement(FilterHeader_component.FilterHeader, tslib_es6.__assign({}, headerProps)),
                displayFilters)),
        isFiltersOpen && (React__default["default"].createElement("div", { style: { position: 'absolute', height: '100vh', right: '5px', zIndex: '9999' } },
            React__default["default"].createElement(MainButton_component.MainButton, { iconProps: { icon: ArrowLeft2, size: 20 }, className: "".concat(SideFilter_module['magneto-ui-side-filter_btn__close'], " ").concat(isFiltersOpen ? SideFilter_module.btn_close : ''), title: titleBtnClose, onClick: function () { return setIsFiltersOpen(function (isOpen) { return !isOpen; }); } }))),
        displayBtnMain,
        displayBackground));
};

module.exports = SideFilter;
//# sourceMappingURL=SideFilter.component.js.map
