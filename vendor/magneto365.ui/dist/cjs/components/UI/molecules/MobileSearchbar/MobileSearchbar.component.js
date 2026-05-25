'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
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
var MainButton_component = require('../../atoms/MainButton/MainButton.component.js');
require('../../atoms/Paragraph/Paragraph.component.js');
require('../../atoms/Radio/Radio.interface.js');
require('../../atoms/Radio/Radio.constants.js');
require('../../../../constants/jobDetails.constants.js');
require('../../atoms/Toggle/Toggle.component.js');
require('../../../hooks/useMediaQuery/index.js');
var MobileSearchbar_modules = require('./MobileSearchbar.modules.scss.js');
var index = require('../../../hooks/useClickOutside/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Component = function (_a) {
    var termValue = _a.termValue, onSearch = _a.onSearch, onClick = _a.onClick, focusSearchInput = _a.focusSearchInput, showMobileSearchbar = _a.showMobileSearchbar, placeholder = _a.placeholder, _b = _a.options, options = _b === void 0 ? [] : _b, onSelectOption = _a.onSelectOption, onSubmit = _a.onSubmit, renderMobileSearch = _a.renderMobileSearch;
    var _c = React.useState(termValue ? String(termValue) : ''), searchValue = _c[0], setSearchValue = _c[1];
    var _d = React.useState(false), showOptions = _d[0], setShowOptions = _d[1];
    var contentRef = React.useRef(null);
    var searchInputRef = React.useRef(null);
    var safeOptions = React.useMemo(function () { return (Array.isArray(options) ? options : []); }, [options]);
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
    var onSearchValues = React.useCallback(function (event) {
        var value = event.target.value;
        setSearchValue(value);
        onSearch(value);
        if (String(value !== null && value !== void 0 ? value : '').trim().length >= 2) {
            setShowOptions(true);
        }
    }, [onSearch]);
    var onSelectSearchOption = React.useCallback(function (option) { return function (event) {
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
    var closeOptions = React.useCallback(function () {
        setShowOptions(false);
    }, []);
    index.useClickOutside(contentRef, closeOptions);
    React.useEffect(function () {
        var _a;
        if (focusSearchInput) {
            (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            if (safeOptions.length > 0) {
                setShowOptions(true);
            }
        }
    }, [focusSearchInput, safeOptions.length]);
    React.useEffect(function () {
        setSearchValue(termValue ? String(termValue) : '');
    }, [termValue]);
    React.useEffect(function () {
        if (!showMobileSearchbar) {
            setShowOptions(false);
        }
    }, [showMobileSearchbar]);
    React.useEffect(function () {
        if (String(searchValue !== null && searchValue !== void 0 ? searchValue : '').trim().length > 0 && safeOptions.length > 0) {
            setShowOptions(true);
        }
    }, [safeOptions.length, searchValue]);
    if (renderMobileSearch) {
        return React__default["default"].createElement(React__default["default"].Fragment, null, renderMobileSearch({ onClose: onClick, open: showMobileSearchbar !== null && showMobileSearchbar !== void 0 ? showMobileSearchbar : false }));
    }
    return (React__default["default"].createElement("div", { className: MobileSearchbar_modules.MobileSearchbarComponent, "data-show-mobile-searchbar": showMobileSearchbar, ref: contentRef },
        React__default["default"].createElement("form", { onSubmit: handleSubmit },
            searchValue && React__default["default"].createElement("div", { className: MobileSearchbar_modules['search-badge'] }),
            React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ className: MobileSearchbar_modules['magneto-ui-search-button'] }, headers_constants.searchMobileProps)),
            React__default["default"].createElement("label", { htmlFor: "search" }),
            React__default["default"].createElement("input", { type: "text", name: "search", value: searchValue, placeholder: placeholder, onChange: onSearchValues, onFocus: function () { return safeOptions.length > 0 && setShowOptions(true); }, ref: searchInputRef }),
            React__default["default"].createElement(MainButton_component.MainButton, tslib_es6.__assign({ className: MobileSearchbar_modules['magneto-ui-remove-button'], onClick: handleClearSearch }, headers_constants.closeSearchMobileProps))),
        showOptions && safeOptions.length > 0 && (React__default["default"].createElement("div", { className: MobileSearchbar_modules['mobile-searchbar-options'] }, safeOptions.map(function (option, index) { return (React__default["default"].createElement("a", { className: MobileSearchbar_modules['mobile-searchbar-option'], href: option.url, key: "mobile-search-option-".concat(option.title, "-").concat(index), onClick: onSelectSearchOption(option) },
            React__default["default"].createElement("p", { className: MobileSearchbar_modules['mobile-searchbar-option__title'] }, option.title),
            option.subtitle && React__default["default"].createElement("p", { className: MobileSearchbar_modules['mobile-searchbar-option__subtitle'] }, option.subtitle))); })))));
};
/**
 * Molecule UI component for MobileSearchbar
 */
var MobileSearchbar = Component;

exports.MobileSearchbar = MobileSearchbar;
//# sourceMappingURL=MobileSearchbar.component.js.map
