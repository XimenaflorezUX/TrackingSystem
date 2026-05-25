'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var factory_component = require('../SideFilter/factory/factory.component.js');
var HorizontalFilter_module = require('./HorizontalFilter.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowRight2 = require('../../../../assets/ArrowRight2.svg.js');
var Broom = require('../../../../assets/Broom.svg.js');
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
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var index = require('../../../hooks/useWithElement/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var HorizontalFilter = function (_a) {
    var title = _a.title, buttonText = _a.buttonText, _b = _a.filters, filters = _b === void 0 ? [] : _b, setIsApplied = _a.setIsApplied, unApplyWithChild = _a.unApplyWithChild, getOptionsOnLoad = _a.getOptionsOnLoad, getOptionsOnSearch = _a.getOptionsOnSearch, loading = _a.loading, isFiltersOpen = _a.isFiltersOpen, totalAppliedFilters = _a.totalAppliedFilters, clearFilters = _a.clearFilters;
    var _c = React.useState(99), currentOpenFilter = _c[0], setCurrentOpenFilter = _c[1];
    var scrollContainerRef = React.useRef(null);
    var _d = React.useState(false), isDragging = _d[0], setIsDragging = _d[1];
    var _e = React.useState({ x: 0, scrollLeft: 0 }), dragStart = _e[0], setDragStart = _e[1];
    var _f = React.useState(false), isOverflown = _f[0], setIsOverflown = _f[1];
    var width = index.useWithElement(scrollContainerRef);
    React.useEffect(function () {
        var el = scrollContainerRef.current;
        if (!el)
            return;
        var updateOverflow = function () {
            var tolerance = 2;
            setIsOverflown(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
        };
        updateOverflow();
        el.addEventListener('scroll', updateOverflow);
        return function () {
            el.removeEventListener('scroll', updateOverflow);
        };
    }, [width, filters]);
    React.useEffect(function () {
        var scrollContainer = scrollContainerRef.current;
        if (!scrollContainer)
            return;
        var handleMouseDown = function (e) {
            setIsDragging(true);
            setDragStart({
                x: e.pageX - scrollContainer.offsetLeft,
                scrollLeft: scrollContainer.scrollLeft
            });
            scrollContainer.style.cursor = 'grabbing';
            scrollContainer.style.userSelect = 'none';
        };
        var handleMouseMove = function (e) {
            if (!isDragging)
                return;
            e.preventDefault();
            var x = e.pageX - scrollContainer.offsetLeft;
            var walk = (x - dragStart.x) * 2;
            scrollContainer.scrollLeft = dragStart.scrollLeft - walk;
        };
        var handleMouseUp = function () {
            setIsDragging(false);
            scrollContainer.style.cursor = 'grab';
            scrollContainer.style.userSelect = 'auto';
        };
        var handleMouseLeave = function () {
            setIsDragging(false);
            scrollContainer.style.cursor = 'grab';
            scrollContainer.style.userSelect = 'auto';
        };
        scrollContainer.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);
        scrollContainer.style.cursor = 'grab';
        return function () {
            scrollContainer.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, dragStart]);
    var cardProps = React.useMemo(function () {
        return {
            setIsApplied: setIsApplied,
            unApplyWithChild: unApplyWithChild,
            getOptionsOnLoad: getOptionsOnLoad,
            getOptionsOnSearch: getOptionsOnSearch,
            loading: loading
        };
    }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, loading]);
    var displayFilters = React.useMemo(function () {
        return filters === null || filters === void 0 ? void 0 : filters.map(function (item, i) {
            return (React__default["default"].createElement(factory_component.CardByRenderType, tslib_es6.__assign({ key: "".concat(i, "-").concat(item.field) }, item, { index: i, showFilters: currentOpenFilter === i, setCurrentOpenFilter: setCurrentOpenFilter }, cardProps, { horizontal: true })));
        });
    }, [filters, cardProps, currentOpenFilter]);
    React.useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = isFiltersOpen ? 'hidden' : 'auto';
    }, [isFiltersOpen]);
    var handleClearFilters = function () {
        if (clearFilters) {
            clearFilters();
        }
    };
    var handleScrollRight = function () {
        var el = scrollContainerRef.current;
        if (!el)
            return;
        var containerRect = el.getBoundingClientRect();
        var children = Array.from(el.children);
        var nextHiddenChild = children.find(function (child) {
            var childRect = child.getBoundingClientRect();
            return childRect.right > containerRect.right + 1;
        });
        if (nextHiddenChild) {
            // Alinea el siguiente item al inicio para evitar cortes
            el.scrollTo({ left: nextHiddenChild.offsetLeft, behavior: 'smooth' });
        }
        else {
            el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
        }
    };
    return (React__default["default"].createElement("div", { className: HorizontalFilter_module['magneto-ui-horizontal-filter'] },
        React__default["default"].createElement("div", { className: HorizontalFilter_module['magneto-ui-horizontal-filter__header'] },
            React__default["default"].createElement("span", null,
                title,
                " (",
                totalAppliedFilters,
                ")"),
            React__default["default"].createElement("button", { className: "".concat(HorizontalFilter_module['magneto-ui-horizontal-filter__clear-button'], " ").concat(totalAppliedFilters > 0 ? '' : HorizontalFilter_module['magneto-ui-horizontal-filter__clear-button--disabled']), onClick: handleClearFilters },
                React__default["default"].createElement(Icon_component.IconItem, { icon: Broom, size: 18 }),
                React__default["default"].createElement("span", null, buttonText))),
        React__default["default"].createElement("div", { className: HorizontalFilter_module['magneto-ui-horizontal-filter__filters-container'] },
            React__default["default"].createElement("div", { ref: scrollContainerRef, className: HorizontalFilter_module['magneto-ui-horizontal-filter__scroll-container'] }, displayFilters),
            React__default["default"].createElement("div", { className: HorizontalFilter_module['btn-next-container'] }, isOverflown && (React__default["default"].createElement("button", { onClick: handleScrollRight, className: HorizontalFilter_module['btn-next'], type: "button" },
                React__default["default"].createElement(Icon_component.IconItem, { icon: ArrowRight2, size: 18 })))))));
};

module.exports = HorizontalFilter;
//# sourceMappingURL=HorizontalFilter.component.js.map
