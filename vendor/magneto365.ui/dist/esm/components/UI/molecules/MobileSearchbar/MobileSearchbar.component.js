import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import '../../atoms/BarChart/enums.js';
import '../../../../utils/classNameManager/classNameManager.util.js';
import '../../atoms/Button/Button.component.js';
import '../../atoms/Collapse/Collapse.component.js';
import '../../../../constants/stories/DatePicker.constants.js';
import { searchMobileProps, closeSearchMobileProps } from '../../../../constants/stories/headers.constants.js';
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
import { MainButton } from '../../atoms/MainButton/MainButton.component.js';
import '../../atoms/Paragraph/Paragraph.component.js';
import '../../atoms/Radio/Radio.interface.js';
import '../../atoms/Radio/Radio.constants.js';
import '../../../../constants/jobDetails.constants.js';
import '../../atoms/Toggle/Toggle.component.js';
import '../../../hooks/useMediaQuery/index.js';
import styles from './MobileSearchbar.modules.scss.js';
import { useClickOutside } from '../../../hooks/useClickOutside/index.js';

var Component = function (_a) {
    var termValue = _a.termValue, onSearch = _a.onSearch, onClick = _a.onClick, focusSearchInput = _a.focusSearchInput, showMobileSearchbar = _a.showMobileSearchbar, placeholder = _a.placeholder, _b = _a.options, options = _b === void 0 ? [] : _b, onSelectOption = _a.onSelectOption, onSubmit = _a.onSubmit, renderMobileSearch = _a.renderMobileSearch;
    var _c = useState(termValue ? String(termValue) : ''), searchValue = _c[0], setSearchValue = _c[1];
    var _d = useState(false), showOptions = _d[0], setShowOptions = _d[1];
    var contentRef = useRef(null);
    var searchInputRef = useRef(null);
    var safeOptions = useMemo(function () { return (Array.isArray(options) ? options : []); }, [options]);
    var handleSubmit = function (event) {
        var _a;
        event.preventDefault();
        onSearch(searchValue);
        onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(searchValue);
        localStorage.setItem('searchValue', searchValue);
        setShowOptions(false);
        (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    };
    var handleClearSearch = function () {
        setSearchValue('');
        onSearch('');
        localStorage.removeItem('searchValue');
        setShowOptions(false);
        if (onClick)
            onClick();
    };
    var onSearchValues = useCallback(function (event) {
        var value = event.target.value;
        setSearchValue(value);
        onSearch(value);
        if (String(value !== null && value !== void 0 ? value : '').trim().length >= 2) {
            setShowOptions(true);
        }
    }, [onSearch]);
    var onSelectSearchOption = useCallback(function (option) { return function (event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        setShowOptions(false);
        setSearchValue(option.title);
        onSearch(option.title);
        localStorage.setItem('searchValue', option.title);
        onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option);
        (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        if (onClick)
            onClick();
    }; }, [onClick, onSearch, onSelectOption]);
    var closeOptions = useCallback(function () {
        setShowOptions(false);
    }, []);
    useClickOutside(contentRef, closeOptions);
    useEffect(function () {
        var _a;
        if (focusSearchInput) {
            (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            if (safeOptions.length > 0) {
                setShowOptions(true);
            }
        }
    }, [focusSearchInput, safeOptions.length]);
    useEffect(function () {
        setSearchValue(termValue ? String(termValue) : '');
    }, [termValue]);
    useEffect(function () {
        if (!showMobileSearchbar) {
            setShowOptions(false);
        }
    }, [showMobileSearchbar]);
    useEffect(function () {
        if (String(searchValue !== null && searchValue !== void 0 ? searchValue : '').trim().length > 0 && safeOptions.length > 0) {
            setShowOptions(true);
        }
    }, [safeOptions.length, searchValue]);
    if (renderMobileSearch) {
        return React.createElement(React.Fragment, null, renderMobileSearch({ onClose: onClick, open: showMobileSearchbar !== null && showMobileSearchbar !== void 0 ? showMobileSearchbar : false }));
    }
    return (React.createElement("div", { className: styles.MobileSearchbarComponent, "data-show-mobile-searchbar": showMobileSearchbar, ref: contentRef },
        React.createElement("form", { onSubmit: handleSubmit },
            searchValue && React.createElement("div", { className: styles['search-badge'] }),
            React.createElement(MainButton, __assign({ className: styles['magneto-ui-search-button'] }, searchMobileProps)),
            React.createElement("label", { htmlFor: "search" }),
            React.createElement("input", { type: "text", name: "search", value: searchValue, placeholder: placeholder, onChange: onSearchValues, onFocus: function () { return safeOptions.length > 0 && setShowOptions(true); }, ref: searchInputRef }),
            React.createElement(MainButton, __assign({ className: styles['magneto-ui-remove-button'], onClick: handleClearSearch }, closeSearchMobileProps))),
        showOptions && safeOptions.length > 0 && (React.createElement("div", { className: styles['mobile-searchbar-options'] }, safeOptions.map(function (option, index) { return (React.createElement("a", { className: styles['mobile-searchbar-option'], href: option.url, key: "mobile-search-option-".concat(option.title, "-").concat(index), onClick: onSelectSearchOption(option) },
            React.createElement("p", { className: styles['mobile-searchbar-option__title'] }, option.title),
            option.subtitle && React.createElement("p", { className: styles['mobile-searchbar-option__subtitle'] }, option.subtitle))); })))));
};
/**
 * Molecule UI component for MobileSearchbar
 */
var MobileSearchbar = Component;

export { MobileSearchbar };
//# sourceMappingURL=MobileSearchbar.component.js.map
