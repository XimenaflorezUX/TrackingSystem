'use strict';

var React = require('react');
var MegaMenuSearchBar_module = require('./MegaMenuSearchBar.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var currentLocation = require('../../../../assets/current-location.svg.js');
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
var Input_component = require('../Input/Input.component.js');
var index = require('../../../hooks/useClickOutside/index.js');
require('../Actions/Actions.component.js');
require('../AlertJobModal/AlertJobModal.component.js');
require('../AlertJobStatus/AlertJobStatus.component.js');
require('react-dom');
require('../../../context/container/container.context.js');
require('../BrandsMenuPopover/BrandsMenuPopover.component.js');
require('../CandidateNav/CandidateNav.component.js');
require('../CandidateProfile/CandidateProfile.component.js');
require('../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js');
require('../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js');
require('../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js');
require('../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js');
require('../ExpandableInfo/ExpandableInfo.interface.js');
require('../SharePopover/SharePopover.js');
require('../JobCard/children/JobCardOption/JobCardOption.component.js');
require('../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js');
require('../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js');
var MegaMenuEmpty_component = require('../MegaMenuEmpty/MegaMenuEmpty.component.js');
require('../../template/MegaMenu/MegaMenu.context.js');
require('../Modal/Modal.component.js');
require('../SimilarCard/SimilarCard.component.js');
require('../SortMenu/SortMenu.component.js');
require('../TimelineEvent/TimelineEvent.interface.js');
require('../UserMenu/UserMenu.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js');
require('../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js');
require('../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js');
require('../JobDetails/JobDetails.component.js');
require('../Chat/Chat.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var AVAILABLE_KEYS = ['Enter', 'ArrowDown', 'ArrowUp', 'Escape'];
var SearchBar = function (_a) {
    var _b, _c;
    var icon = _a.icon, onSearch = _a.onSearch, className = _a.className, placeholder = _a.placeholder, termValue = _a.termValue, actionIcon = _a.actionIcon, _d = _a.options, options = _d === void 0 ? [] : _d, sectionTitle = _a.sectionTitle, onSelectOption = _a.onSelectOption, noContent = _a.noContent, recentSearch = _a.recentSearch, _e = _a.disableOptions, disableOptions = _e === void 0 ? false : _e, onSubmit = _a.onSubmit;
    var _f = React.useState(0), selectedOption = _f[0], setSelectedOption = _f[1];
    var _g = React.useState(false), showOptions = _g[0], setShowOptions = _g[1];
    var optionLinksRef = React.useRef([]);
    var optionsRef = React.useRef(null);
    var contentRef = React.useRef(null);
    var safeOptions = React.useMemo(function () { return (Array.isArray(options) ? options : []); }, [options]);
    React.useEffect(function () {
        setSelectedOption(0);
        optionLinksRef.current = [];
    }, [safeOptions, termValue]);
    var renderSectionTitle = React.useMemo(function () {
        if (!sectionTitle || termValue)
            return null;
        var title = sectionTitle.title, url = sectionTitle.url, onClick = sectionTitle.onClick;
        return (React__default["default"].createElement("div", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-title'], key: 'main title', onClick: onClick },
            React__default["default"].createElement("a", { href: url },
                React__default["default"].createElement(Icon_component.IconItem, { icon: currentLocation, size: 16 }),
                React__default["default"].createElement("p", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option__title'] }, title))));
    }, [sectionTitle, termValue]);
    var onSearchValues = React.useCallback(function (event) {
        var value = event.target.value;
        onSearch(value);
        if (!disableOptions && String(value !== null && value !== void 0 ? value : '').trim().length >= 2) {
            setShowOptions(true);
        }
    }, [disableOptions, onSearch]);
    var closeOptions = React.useCallback(function () {
        setShowOptions(false);
    }, []);
    var blurInput = React.useCallback(function () {
        requestAnimationFrame(function () {
            var _a, _b;
            (_b = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.blur();
        });
    }, []);
    React.useEffect(function () {
        if (!showOptions)
            return;
        var container = optionsRef.current;
        var selectedEl = optionLinksRef.current[selectedOption];
        if (!container || !selectedEl)
            return;
        var containerRect = container.getBoundingClientRect();
        var elRect = selectedEl.getBoundingClientRect();
        var isOutOfView = elRect.top < containerRect.top || elRect.bottom > containerRect.bottom;
        if (isOutOfView)
            selectedEl.scrollIntoView({ block: 'nearest' });
    }, [selectedOption, showOptions]);
    var onPressKey = React.useCallback(function (event) {
        var key = event.key;
        if (key === 'Escape') {
            closeOptions();
            return;
        }
        if (key === 'Enter') {
            if (!disableOptions && showOptions) {
                var option = safeOptions[selectedOption];
                if (option) {
                    event.preventDefault();
                    closeOptions();
                    blurInput();
                    onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option);
                    return;
                }
            }
            if (onSubmit) {
                event.preventDefault();
                closeOptions();
                blurInput();
                onSubmit(event.currentTarget.value);
            }
            return;
        }
        if (!AVAILABLE_KEYS.includes(key) || disableOptions || !showOptions)
            return;
        setSelectedOption(function (current) {
            if (key === 'ArrowDown' && current < safeOptions.length - 1)
                return current + 1;
            if (key === 'ArrowUp' && current > 0)
                return current - 1;
            return current;
        });
    }, [blurInput, closeOptions, disableOptions, onSelectOption, onSubmit, safeOptions, selectedOption, showOptions]);
    var onPressOption = React.useCallback(function (option) { return function (event) {
        event.preventDefault();
        closeOptions();
        blurInput();
        onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option);
    }; }, [blurInput, closeOptions, onSelectOption]);
    var handleClickOutside = React.useCallback(function () {
        if (!disableOptions)
            closeOptions();
    }, [closeOptions, disableOptions]);
    index.useClickOutside(contentRef, handleClickOutside);
    return (React__default["default"].createElement("div", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-content'], ref: contentRef },
        React__default["default"].createElement(Input_component, { mainClassName: "".concat(MegaMenuSearchBar_module['mega-menu-search-bar__input'], " ").concat(className !== null && className !== void 0 ? className : ''), value: termValue, onChange: onSearchValues, customIcon: icon, type: "text", placeholder: placeholder, actionIcon: actionIcon, onKeyDown: onPressKey, onFocus: function () { return !disableOptions && setShowOptions(true); } }),
        !disableOptions && showOptions && (React__default["default"].createElement("div", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-options'], ref: optionsRef },
            sectionTitle && !recentSearch && renderSectionTitle,
            safeOptions.length > 0 &&
                (!recentSearch || (termValue === null || termValue === void 0 ? void 0 : termValue.length) > 0) &&
                safeOptions.map(function (_a, index) {
                    var title = _a.title, subtitle = _a.subtitle, url = _a.url, field = _a.field;
                    return (React__default["default"].createElement("div", { className: "".concat(MegaMenuSearchBar_module['mega-menu-search-bar__input-option'], " ").concat(selectedOption === index ? MegaMenuSearchBar_module['mega-menu-search-bar__input-option--selected'] : ''), key: "".concat(title, "-").concat(index) },
                        React__default["default"].createElement("a", { href: url, onClick: onPressOption({ title: title, subtitle: subtitle, url: url, field: field }), ref: function (el) { return (optionLinksRef.current[index] = el); } },
                            React__default["default"].createElement("p", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option__title'] }, title),
                            subtitle && React__default["default"].createElement("p", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option__subtitle'] }, subtitle))));
                }),
            safeOptions.length === 0 && !recentSearch && (React__default["default"].createElement(MegaMenuEmpty_component, { title: (_b = noContent === null || noContent === void 0 ? void 0 : noContent.title) !== null && _b !== void 0 ? _b : '', subtitle: (_c = noContent === null || noContent === void 0 ? void 0 : noContent.subtitle) !== null && _c !== void 0 ? _c : '', imageHeight: 120, customStyle: { title: { fontSize: 16 }, subtitle: { fontSize: 14 }, content: { gap: 0 } } })),
            recentSearch && (termValue === null || termValue === void 0 ? void 0 : termValue.length) === 0 && (React__default["default"].createElement("div", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-options--recent'] },
                React__default["default"].createElement("h4", null, recentSearch.recentSearchesTitle),
                recentSearch.recentSearches.map(function (option, index) { return (React__default["default"].createElement("div", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option'], key: "recent-".concat(index) },
                    React__default["default"].createElement("a", { href: option.url, onClick: onPressOption(option) },
                        React__default["default"].createElement("p", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option__title'] }, option.title)))); }),
                React__default["default"].createElement("h4", null, recentSearch.mostSearchedTitle),
                recentSearch.mostSearched.map(function (option, index) { return (React__default["default"].createElement("div", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option'], key: "most-".concat(index) },
                    React__default["default"].createElement("a", { href: option.url, onClick: onPressOption(option) },
                        React__default["default"].createElement("p", { className: MegaMenuSearchBar_module['mega-menu-search-bar__input-option__title'] }, option.title)))); })))))));
};

module.exports = SearchBar;
//# sourceMappingURL=SearchBar.component.js.map
