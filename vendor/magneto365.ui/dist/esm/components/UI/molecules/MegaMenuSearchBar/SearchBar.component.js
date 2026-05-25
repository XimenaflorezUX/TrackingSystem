import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import styles from './MegaMenuSearchBar.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import CurrentLocation from '../../../../assets/current-location.svg.js';
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
import Input from '../Input/Input.component.js';
import { useClickOutside } from '../../../hooks/useClickOutside/index.js';
import '../Actions/Actions.component.js';
import '../AlertJobModal/AlertJobModal.component.js';
import '../AlertJobStatus/AlertJobStatus.component.js';
import 'react-dom';
import '../../../context/container/container.context.js';
import '../BrandsMenuPopover/BrandsMenuPopover.component.js';
import '../CandidateNav/CandidateNav.component.js';
import '../CandidateProfile/CandidateProfile.component.js';
import '../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.constants.js';
import '../ExpandableInfo/children/ExpandableInfoAction/ExpandableInfoAction.interface.js';
import '../ExpandableInfo/children/ExpandableInfoMessage/ExpandableInfoMessage.constants.js';
import '../ExpandableInfo/children/ExpandableInfoPopover/ExpandableInfoPopover.component.js';
import '../ExpandableInfo/ExpandableInfo.interface.js';
import '../SharePopover/SharePopover.js';
import '../JobCard/children/JobCardOption/JobCardOption.component.js';
import '../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.constant.js';
import '../MegaMenuDrawerItem/MegaMenuDrawerItem.component.js';
import MegaMenuEmpty from '../MegaMenuEmpty/MegaMenuEmpty.component.js';
import '../../template/MegaMenu/MegaMenu.context.js';
import '../Modal/Modal.component.js';
import '../SimilarCard/SimilarCard.component.js';
import '../SortMenu/SortMenu.component.js';
import '../TimelineEvent/TimelineEvent.interface.js';
import '../UserMenu/UserMenu.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.constants.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionDefault/UserMenuAnalystOptionDefault.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionHover/UserMenuAnalystOptionHover.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionText/UserMenuAnalystOptionText.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/children/UserMenuAnalystOptionActions/UserMenuAnalystOptionActions.component.js';
import '../UserMenuAnalyst/children/UserMenuAnalystOptions/children/UserMenuAnalystOption/UserMenuAnalystOption.interface.js';
import '../UserMenuWrapperAnalyst/children/UserMenuWrapperAnalystDropdown/UserMenuWrapperAnalystDropdown.component.js';
import '../JobDetails/JobDetails.component.js';
import '../Chat/Chat.component.js';

var AVAILABLE_KEYS = ['Enter', 'ArrowDown', 'ArrowUp', 'Escape'];
var SearchBar = function (_a) {
    var _b, _c;
    var icon = _a.icon, onSearch = _a.onSearch, className = _a.className, placeholder = _a.placeholder, termValue = _a.termValue, actionIcon = _a.actionIcon, _d = _a.options, options = _d === void 0 ? [] : _d, sectionTitle = _a.sectionTitle, onSelectOption = _a.onSelectOption, noContent = _a.noContent, recentSearch = _a.recentSearch, _e = _a.disableOptions, disableOptions = _e === void 0 ? false : _e, onSubmit = _a.onSubmit;
    var _f = useState(0), selectedOption = _f[0], setSelectedOption = _f[1];
    var _g = useState(false), showOptions = _g[0], setShowOptions = _g[1];
    var optionLinksRef = useRef([]);
    var optionsRef = useRef(null);
    var contentRef = useRef(null);
    var safeOptions = useMemo(function () { return (Array.isArray(options) ? options : []); }, [options]);
    useEffect(function () {
        setSelectedOption(0);
        optionLinksRef.current = [];
    }, [safeOptions, termValue]);
    var renderSectionTitle = useMemo(function () {
        if (!sectionTitle || termValue)
            return null;
        var title = sectionTitle.title, url = sectionTitle.url, onClick = sectionTitle.onClick;
        return (React.createElement("div", { className: styles['mega-menu-search-bar__input-title'], key: 'main title', onClick: onClick },
            React.createElement("a", { href: url },
                React.createElement(IconItem, { icon: CurrentLocation, size: 16 }),
                React.createElement("p", { className: styles['mega-menu-search-bar__input-option__title'] }, title))));
    }, [sectionTitle, termValue]);
    var onSearchValues = useCallback(function (event) {
        var value = event.target.value;
        onSearch(value);
        if (!disableOptions && String(value !== null && value !== void 0 ? value : '').trim().length >= 2) {
            setShowOptions(true);
        }
    }, [disableOptions, onSearch]);
    var closeOptions = useCallback(function () {
        setShowOptions(false);
    }, []);
    var blurInput = useCallback(function () {
        requestAnimationFrame(function () {
            var _a, _b;
            (_b = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.blur();
        });
    }, []);
    useEffect(function () {
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
    var onPressKey = useCallback(function (event) {
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
    var onPressOption = useCallback(function (option) { return function (event) {
        event.preventDefault();
        closeOptions();
        blurInput();
        onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option);
    }; }, [blurInput, closeOptions, onSelectOption]);
    var handleClickOutside = useCallback(function () {
        if (!disableOptions)
            closeOptions();
    }, [closeOptions, disableOptions]);
    useClickOutside(contentRef, handleClickOutside);
    return (React.createElement("div", { className: styles['mega-menu-search-bar__input-content'], ref: contentRef },
        React.createElement(Input, { mainClassName: "".concat(styles['mega-menu-search-bar__input'], " ").concat(className !== null && className !== void 0 ? className : ''), value: termValue, onChange: onSearchValues, customIcon: icon, type: "text", placeholder: placeholder, actionIcon: actionIcon, onKeyDown: onPressKey, onFocus: function () { return !disableOptions && setShowOptions(true); } }),
        !disableOptions && showOptions && (React.createElement("div", { className: styles['mega-menu-search-bar__input-options'], ref: optionsRef },
            sectionTitle && !recentSearch && renderSectionTitle,
            safeOptions.length > 0 &&
                (!recentSearch || (termValue === null || termValue === void 0 ? void 0 : termValue.length) > 0) &&
                safeOptions.map(function (_a, index) {
                    var title = _a.title, subtitle = _a.subtitle, url = _a.url, field = _a.field;
                    return (React.createElement("div", { className: "".concat(styles['mega-menu-search-bar__input-option'], " ").concat(selectedOption === index ? styles['mega-menu-search-bar__input-option--selected'] : ''), key: "".concat(title, "-").concat(index) },
                        React.createElement("a", { href: url, onClick: onPressOption({ title: title, subtitle: subtitle, url: url, field: field }), ref: function (el) { return (optionLinksRef.current[index] = el); } },
                            React.createElement("p", { className: styles['mega-menu-search-bar__input-option__title'] }, title),
                            subtitle && React.createElement("p", { className: styles['mega-menu-search-bar__input-option__subtitle'] }, subtitle))));
                }),
            safeOptions.length === 0 && !recentSearch && (React.createElement(MegaMenuEmpty, { title: (_b = noContent === null || noContent === void 0 ? void 0 : noContent.title) !== null && _b !== void 0 ? _b : '', subtitle: (_c = noContent === null || noContent === void 0 ? void 0 : noContent.subtitle) !== null && _c !== void 0 ? _c : '', imageHeight: 120, customStyle: { title: { fontSize: 16 }, subtitle: { fontSize: 14 }, content: { gap: 0 } } })),
            recentSearch && (termValue === null || termValue === void 0 ? void 0 : termValue.length) === 0 && (React.createElement("div", { className: styles['mega-menu-search-bar__input-options--recent'] },
                React.createElement("h4", null, recentSearch.recentSearchesTitle),
                recentSearch.recentSearches.map(function (option, index) { return (React.createElement("div", { className: styles['mega-menu-search-bar__input-option'], key: "recent-".concat(index) },
                    React.createElement("a", { href: option.url, onClick: onPressOption(option) },
                        React.createElement("p", { className: styles['mega-menu-search-bar__input-option__title'] }, option.title)))); }),
                React.createElement("h4", null, recentSearch.mostSearchedTitle),
                recentSearch.mostSearched.map(function (option, index) { return (React.createElement("div", { className: styles['mega-menu-search-bar__input-option'], key: "most-".concat(index) },
                    React.createElement("a", { href: option.url, onClick: onPressOption(option) },
                        React.createElement("p", { className: styles['mega-menu-search-bar__input-option__title'] }, option.title)))); })))))));
};

export { SearchBar as default };
//# sourceMappingURL=SearchBar.component.js.map
