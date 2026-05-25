import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { CardByRenderType } from '../SideFilter/factory/factory.component.js';
import styles from './HorizontalFilter.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import ArrowRight2 from '../../../../assets/ArrowRight2.svg.js';
import Broom from '../../../../assets/Broom.svg.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { useWithElement } from '../../../hooks/useWithElement/index.js';

var HorizontalFilter = function (_a) {
    var title = _a.title, buttonText = _a.buttonText, _b = _a.filters, filters = _b === void 0 ? [] : _b, setIsApplied = _a.setIsApplied, unApplyWithChild = _a.unApplyWithChild, getOptionsOnLoad = _a.getOptionsOnLoad, getOptionsOnSearch = _a.getOptionsOnSearch, loading = _a.loading, isFiltersOpen = _a.isFiltersOpen, totalAppliedFilters = _a.totalAppliedFilters, clearFilters = _a.clearFilters;
    var _c = useState(99), currentOpenFilter = _c[0], setCurrentOpenFilter = _c[1];
    var scrollContainerRef = useRef(null);
    var _d = useState(false), isDragging = _d[0], setIsDragging = _d[1];
    var _e = useState({ x: 0, scrollLeft: 0 }), dragStart = _e[0], setDragStart = _e[1];
    var _f = useState(false), isOverflown = _f[0], setIsOverflown = _f[1];
    var width = useWithElement(scrollContainerRef);
    useEffect(function () {
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
    useEffect(function () {
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
    var cardProps = useMemo(function () {
        return {
            setIsApplied: setIsApplied,
            unApplyWithChild: unApplyWithChild,
            getOptionsOnLoad: getOptionsOnLoad,
            getOptionsOnSearch: getOptionsOnSearch,
            loading: loading
        };
    }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, loading]);
    var displayFilters = useMemo(function () {
        return filters === null || filters === void 0 ? void 0 : filters.map(function (item, i) {
            return (React.createElement(CardByRenderType, __assign({ key: "".concat(i, "-").concat(item.field) }, item, { index: i, showFilters: currentOpenFilter === i, setCurrentOpenFilter: setCurrentOpenFilter }, cardProps, { horizontal: true })));
        });
    }, [filters, cardProps, currentOpenFilter]);
    useEffect(function () {
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
    return (React.createElement("div", { className: styles['magneto-ui-horizontal-filter'] },
        React.createElement("div", { className: styles['magneto-ui-horizontal-filter__header'] },
            React.createElement("span", null,
                title,
                " (",
                totalAppliedFilters,
                ")"),
            React.createElement("button", { className: "".concat(styles['magneto-ui-horizontal-filter__clear-button'], " ").concat(totalAppliedFilters > 0 ? '' : styles['magneto-ui-horizontal-filter__clear-button--disabled']), onClick: handleClearFilters },
                React.createElement(IconItem, { icon: Broom, size: 18 }),
                React.createElement("span", null, buttonText))),
        React.createElement("div", { className: styles['magneto-ui-horizontal-filter__filters-container'] },
            React.createElement("div", { ref: scrollContainerRef, className: styles['magneto-ui-horizontal-filter__scroll-container'] }, displayFilters),
            React.createElement("div", { className: styles['btn-next-container'] }, isOverflown && (React.createElement("button", { onClick: handleScrollRight, className: styles['btn-next'], type: "button" },
                React.createElement(IconItem, { icon: ArrowRight2, size: 18 })))))));
};

export { HorizontalFilter as default };
//# sourceMappingURL=HorizontalFilter.component.js.map
