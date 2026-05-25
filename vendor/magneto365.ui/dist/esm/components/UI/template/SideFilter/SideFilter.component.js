import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useMemo, Fragment, useEffect } from 'react';
import ArrowLeft2 from '../../../../assets/ArrowLeft2.svg.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import { defaultFilters } from '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../constants/img.constants.js';
import { FilterHeader } from '../../organism/FilterHeader/FilterHeader.component.js';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../utils/date/dateInput.util.js';
import '../../atoms/Field/Field.component.js';
import '../../atoms/Typography/Typography.component.js';
import '../../atoms/Typography/Typography.interface.js';
import '../../atoms/InputFile/InputFile.component.js';
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import { CardByRenderType } from './factory/factory.component.js';
import styles from './SideFilter.module.scss.js';

var SideFilter = function (_a) {
    var title = _a.title, _b = _a.filters, filters = _b === void 0 ? [] : _b, totalAppliedFilters = _a.totalAppliedFilters, filterSummary = _a.filterSummary, buttonText = _a.buttonText, loading = _a.loading, isFiltersOpen = _a.isFiltersOpen, textBtnMain = _a.textBtnMain, titleBtnClose = _a.titleBtnClose, setIsFiltersOpen = _a.setIsFiltersOpen, setIsApplied = _a.setIsApplied, clearFilters = _a.clearFilters, unApplyWithChild = _a.unApplyWithChild, getOptionsOnLoad = _a.getOptionsOnLoad, getOptionsOnSearch = _a.getOptionsOnSearch;
    var _c = useState(99), currentOpenFilter = _c[0], setCurrentOpenFilter = _c[1];
    var cardProps = useMemo(function () {
        return {
            setIsApplied: setIsApplied,
            unApplyWithChild: unApplyWithChild,
            getOptionsOnLoad: getOptionsOnLoad,
            getOptionsOnSearch: getOptionsOnSearch,
            loading: loading
        };
    }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, loading]);
    var headerProps = useMemo(function () {
        return {
            title: title,
            buttonText: buttonText,
            filterSummary: filterSummary,
            totalApplied: totalAppliedFilters,
            clearFilters: clearFilters
        };
    }, [title, buttonText, filterSummary, totalAppliedFilters, clearFilters]);
    var displayFilters = useMemo(function () {
        var renderFilters = filters.length ? filters : defaultFilters;
        return renderFilters === null || renderFilters === void 0 ? void 0 : renderFilters.map(function (item, i) {
            return (React.createElement(CardByRenderType, __assign({ key: "".concat(i, "-").concat(item.field) }, item, { index: i, showFilters: currentOpenFilter === i, setCurrentOpenFilter: setCurrentOpenFilter }, cardProps)));
        });
    }, [filters, cardProps, currentOpenFilter]);
    var displayBtnMain = useMemo(function () {
        if (!totalAppliedFilters)
            return React.createElement(Fragment, null);
        return (React.createElement(MainButton, { buttonText: textBtnMain, className: "".concat(styles['magneto-ui-side-filter_btn__main'], " ").concat(isFiltersOpen ? styles['btn_main-open'] : ''), title: textBtnMain, onClick: function () { return setIsFiltersOpen(function (isOpen) { return !isOpen; }); } }));
    }, [totalAppliedFilters, isFiltersOpen, textBtnMain, setIsFiltersOpen]);
    var displayBackground = useMemo(function () {
        if (!isFiltersOpen)
            return React.createElement(Fragment, null);
        return React.createElement("span", { className: styles['magneto-iu-side-filter_background'], onClick: function () { return setIsFiltersOpen(false); } });
    }, [isFiltersOpen, setIsFiltersOpen]);
    useEffect(function () {
        var body = document.body;
        if (!body)
            return;
        body.style.overflowY = isFiltersOpen ? 'hidden' : 'auto';
    }, [isFiltersOpen]);
    return (React.createElement(Fragment, null,
        React.createElement("aside", { className: "".concat(styles['magneto-iu-side-filter'], " ").concat(isFiltersOpen ? styles.open : '') },
            React.createElement("div", { className: styles['magneto-iu-side-filter_content'] },
                React.createElement(FilterHeader, __assign({}, headerProps)),
                displayFilters)),
        isFiltersOpen && (React.createElement("div", { style: { position: 'absolute', height: '100vh', right: '5px', zIndex: '9999' } },
            React.createElement(MainButton, { iconProps: { icon: ArrowLeft2, size: 20 }, className: "".concat(styles['magneto-ui-side-filter_btn__close'], " ").concat(isFiltersOpen ? styles.btn_close : ''), title: titleBtnClose, onClick: function () { return setIsFiltersOpen(function (isOpen) { return !isOpen; }); } }))),
        displayBtnMain,
        displayBackground));
};

export { SideFilter as default };
//# sourceMappingURL=SideFilter.component.js.map
