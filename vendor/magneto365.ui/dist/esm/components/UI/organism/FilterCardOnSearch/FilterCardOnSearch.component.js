import { __rest, __awaiter, __spreadArray, __assign, __generator } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useMemo, useEffect, useCallback, Fragment } from 'react';
import { FilterSearchItem } from '../../molecules/FilterSearchItem/FilterSearchItem.component.js';
import { FilterMenuItem } from '../../molecules/FilterMenuItem/FilterMenuItem.component.js';
import { Switch } from '../../atoms/Switch/Switch.component.js';
import { MobileDrawer } from '../../molecules/MobileDrawer/MobileDrawer.component.js';
import MenuSearch from '../../molecules/MenuSearch/MenuSearch.component.js';
import { getValues, refreshChildren, refreshParents, cleanSearch } from './utils/filterCardOnSearch.component.util.js';
import { useKeyboard } from './hooks/useKeyboard.js';
import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { getFieldIcon } from '../../../../utils/icons/iconMapping.utils.js';
import styles from './FilterCardOnSearch.module.scss.js';
import { IconItem } from '../../atoms/Icon/Icon.component.js';
import Add from '../../../../assets/Add.svg.js';
import SmallClose from '../../../../assets/SmallClose.svg.js';
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

var FilterCardOnSearch = function (_a) {
    var label = _a.label, field = _a.field, repository = _a.repository, child = _a.child, filtersApplied = _a.filtersApplied, params = _a.params, _b = _a.searchPlaceholder, searchPlaceholder = _b === void 0 ? '' : _b, _c = _a.switchText, switchText = _c === void 0 ? '' : _c, setIsApplied = _a.setIsApplied, unApplyWithChild = _a.unApplyWithChild, getOptionsOnLoad = _a.getOptionsOnLoad, getOptionsOnSearch = _a.getOptionsOnSearch, horizontal = _a.horizontal, props = __rest(_a, ["label", "field", "repository", "child", "filtersApplied", "params", "searchPlaceholder", "switchText", "setIsApplied", "unApplyWithChild", "getOptionsOnLoad", "getOptionsOnSearch", "horizontal"]);
    var _d = useState([]), options = _d[0], setOptions = _d[1];
    var _e = useState([]), appliedOptions = _e[0], setAppliedOptions = _e[1];
    var _f = useState(null), refInput = _f[0], setRefInput = _f[1];
    var _g = useState(false), showMobileDrawer = _g[0], setShowMobileDrawer = _g[1];
    var _h = useState({ top: 0, left: 0 }), popoverPosition = _h[0], setPopoverPosition = _h[1];
    var _j = useState({ top: 0, left: 0 }), tooltipPosition = _j[0], setTooltipPosition = _j[1];
    var _k = useState(false), showTooltip = _k[0], setShowTooltip = _k[1];
    var buttonRef = useRef(null);
    var isMobile = useMediaQuery(false, {
        xs: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });
    var keyboardIndex = useKeyboard(field, options.length, function () { return cleanSearch(refInput, setOptions); })[0];
    var values = useMemo(function () { return getValues(filtersApplied); }, [filtersApplied]);
    // this effect load labels when page is reloaded
    useEffect(function () {
        var _a;
        if (values && values.length > (appliedOptions === null || appliedOptions === void 0 ? void 0 : appliedOptions.length) && !options.length) {
            (_a = getOptionsOnLoad(field, values)) === null || _a === void 0 ? void 0 : _a.then(function (opt) { return setAppliedOptions(opt); });
        }
    }, [field, values, appliedOptions, options.length, getOptionsOnLoad]);
    var positionVars = useMemo(function () {
        return ({
            '--popover-top': "".concat(popoverPosition.top, "px"),
            '--popover-left': "".concat(popoverPosition.left, "px"),
            '--tooltip-top': "".concat(tooltipPosition.top, "px"),
            '--tooltip-left': "".concat(tooltipPosition.left, "px")
        });
    }, [popoverPosition.top, popoverPosition.left, tooltipPosition.top, tooltipPosition.left]);
    var calculatePositions = useCallback(function () {
        if (buttonRef.current) {
            var rect = buttonRef.current.getBoundingClientRect();
            setTooltipPosition({
                top: rect.bottom + 2,
                left: rect.left + rect.width / 2 - 50
            });
        }
    }, []);
    useEffect(function () { return refreshChildren(params, setAppliedOptions); }, [params]);
    useEffect(function () { return refreshParents(filtersApplied, setAppliedOptions); }, [filtersApplied]);
    var handleShowItems = useCallback(function () {
        if (horizontal && !props.showFilters && isMobile) {
            setShowMobileDrawer(true);
            props.setCurrentOpenFilter(props.index);
            return;
        }
        if (horizontal && !props.showFilters && !isMobile) {
            if (buttonRef.current) {
                var rect = buttonRef.current.getBoundingClientRect();
                setPopoverPosition({
                    top: rect.bottom + 4,
                    left: rect.left
                });
            }
            props.setCurrentOpenFilter(props.index);
            return;
        }
        if (horizontal && props.showFilters) {
            props.setCurrentOpenFilter(99);
            setShowMobileDrawer(false);
            return;
        }
        if (!horizontal) {
            if (!props.showFilters) {
                props.setCurrentOpenFilter(props.index);
                calculatePositions();
            }
            else {
                props.setCurrentOpenFilter(99);
            }
        }
    }, [props, calculatePositions, horizontal, isMobile]);
    var handleCloseMobileDrawer = useCallback(function () {
        setShowMobileDrawer(false);
    }, []);
    var handleSearch = useCallback(function (event, inputRef) { return __awaiter(void 0, void 0, void 0, function () {
        var searchedOptions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    !refInput && setRefInput(inputRef);
                    return [4 /*yield*/, getOptionsOnSearch({
                            repository: repository,
                            field: field,
                            value: event.target.value,
                            params: params
                        })
                        // setSearching(false);
                    ];
                case 1:
                    searchedOptions = _a.sent();
                    // setSearching(false);
                    if (!searchedOptions)
                        return [2 /*return*/];
                    setOptions(searchedOptions.filter(function (opt) { return !appliedOptions.find(function (optApplied) { return optApplied.id === opt.id; }); }));
                    return [2 /*return*/];
            }
        });
    }); }, [getOptionsOnSearch, appliedOptions, repository, field, params, refInput]);
    var callSetIsApplied = useCallback(function (filter) {
        var _a;
        (_a = setIsApplied(filter)) === null || _a === void 0 ? void 0 : _a.then(function () {
            var totalApplied = filter.isApplied
                ? appliedOptions.filter(function (opt) { return opt.id !== filter.id; })
                : filter.multiple
                    ? __spreadArray(__spreadArray([], appliedOptions, true), [__assign(__assign({}, options.filter(function (opt) { return opt.id === filter.id; })[0]), { isApplied: true })], false) : [__assign(__assign({}, options.filter(function (opt) { return opt.id === filter.id; })[0]), { isApplied: true })];
            setAppliedOptions(totalApplied);
        });
        cleanSearch(refInput, setOptions);
    }, [appliedOptions, options, setIsApplied, refInput]);
    var handleOptionSelected = useCallback(function (filter) {
        callSetIsApplied(filter);
        Promise.resolve().then(function () {
            if (horizontal && !isMobile) {
                props.setCurrentOpenFilter(99);
            }
            if (horizontal && isMobile) {
                setShowMobileDrawer(false);
            }
        });
    }, [callSetIsApplied, horizontal, isMobile, props]);
    var handleApply = useCallback(function (filter) {
        var isHorizontalDesktop = horizontal && !isMobile;
        var isHorizontalMobile = horizontal && isMobile;
        var closeFilters = function () {
            if (isHorizontalDesktop) {
                props.setCurrentOpenFilter(99);
            }
            if (isHorizontalMobile) {
                setShowMobileDrawer(false);
            }
        };
        if (child && filter.isApplied) {
            return unApplyWithChild({ child: child, parentId: filter.id, parentField: filter.field }).then(function () {
                setAppliedOptions(function (current) { return current.filter(function (opt) { return opt.id !== filter.id; }); });
                closeFilters();
            });
        }
        if (child && !filter.multiple && appliedOptions.length) {
            return unApplyWithChild({
                child: child,
                parentId: appliedOptions[0].id,
                parentField: filter.field,
                newParentId: filter.id
            }).then(function () {
                var newParent = options.find(function (opt) { return opt.id === filter.id; });
                newParent && setAppliedOptions([__assign(__assign({}, newParent), { isApplied: true })]);
                cleanSearch(refInput, setOptions);
                closeFilters();
            });
        }
        if (horizontal) {
            handleOptionSelected(filter);
        }
        else {
            callSetIsApplied(filter);
        }
    }, [
        unApplyWithChild,
        callSetIsApplied,
        handleOptionSelected,
        refInput,
        child,
        appliedOptions,
        options,
        horizontal,
        isMobile,
        props
    ]);
    var displayMenuSearch = useMemo(function () {
        return (React.createElement(MenuSearch, { show: !!options.length, handleOnBlur: function () { return cleanSearch(refInput, setOptions, 300); }, content: options.map(function (opt, key) {
                var optProps = __assign(__assign(__assign({}, props), opt), { field: field, setIsApplied: handleApply, isSearched: true });
                return (React.createElement(FilterMenuItem, __assign({ key: "".concat(opt.id, "-").concat(opt.label), customId: "".concat(field, "-menu-item-").concat(key), customClass: "".concat(key === keyboardIndex ? styles.selected : '') }, optProps)));
            }) },
            React.createElement(FilterSearchItem, { placeholder: searchPlaceholder, disabled: params ? !params.length : false, loading: props.loading, handleSearch: handleSearch })));
    }, [options, field, params, searchPlaceholder, props, refInput, keyboardIndex, handleApply, handleSearch]);
    var displayAppliedOptions = useMemo(function () {
        return (React.createElement("div", { className: styles['magneto-ui-filter-onSearch_options'] }, appliedOptions.map(function (opt, key) {
            var optProps = __assign(__assign(__assign({}, props), opt), { field: field, setIsApplied: handleApply, isSearched: true });
            return React.createElement(FilterMenuItem, __assign({ key: "".concat(key, "-").concat(opt.label) }, optProps));
        })));
    }, [appliedOptions, field, props, handleApply]);
    var displayChild = useMemo(function () {
        if (!child)
            return React.createElement(Fragment, null);
        var childProps = __assign(__assign(__assign({}, props), child), { params: values, setIsApplied: setIsApplied, unApplyWithChild: unApplyWithChild, getOptionsOnLoad: getOptionsOnLoad, getOptionsOnSearch: getOptionsOnSearch });
        return React.createElement(FilterCardOnSearch, __assign({}, childProps));
    }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, values, props, child]);
    useEffect(function () {
        if (horizontal && (props.showFilters || showTooltip)) {
            var handleScroll_1 = function () { return calculatePositions(); };
            window.addEventListener('scroll', handleScroll_1, true);
            window.addEventListener('resize', handleScroll_1);
            return function () {
                window.removeEventListener('scroll', handleScroll_1, true);
                window.removeEventListener('resize', handleScroll_1);
            };
        }
    }, [horizontal, props.showFilters, showTooltip, calculatePositions]);
    useEffect(function () {
        if (horizontal) {
            var handleContainerScroll_1 = function () {
                props.setCurrentOpenFilter(99);
                setShowTooltip(false);
            };
            var scrollContainer_1 = document.querySelector('.magneto-ui-horizontal-filter__scroll-container');
            if (scrollContainer_1) {
                scrollContainer_1.addEventListener('scroll', handleContainerScroll_1, { passive: true });
                return function () {
                    scrollContainer_1.removeEventListener('scroll', handleContainerScroll_1);
                };
            }
        }
    }, [horizontal, props]);
    useEffect(function () {
        if (props.showFilters) {
            setShowTooltip(false);
        }
    }, [props.showFilters]);
    if (horizontal) {
        var appliedValue = appliedOptions.length > 0 ? appliedOptions.map(function (o) { return o.label; }).join(', ') : '';
        var icon = getFieldIcon(field, props.icon);
        var handleRemove_1 = function (e, opt) {
            e.stopPropagation();
            handleApply(__assign(__assign(__assign({}, props), opt), { field: field, isApplied: true }));
        };
        var handleMouseEnter = function () {
            if (!props.showFilters) {
                calculatePositions();
                setShowTooltip(true);
            }
        };
        var handleMouseLeave = function () {
            setShowTooltip(false);
        };
        var handleTouchStart = function () {
            var _a;
            if (!props.showFilters) {
                var touchTimer = setTimeout(function () {
                    calculatePositions();
                    setShowTooltip(true);
                }, 500);
                (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute('data-touch-timer', touchTimer.toString());
            }
        };
        var handleTouchEnd = function () {
            var _a, _b;
            var timer = (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.getAttribute('data-touch-timer');
            if (timer) {
                clearTimeout(parseInt(timer));
                (_b = buttonRef.current) === null || _b === void 0 ? void 0 : _b.removeAttribute('data-touch-timer');
            }
            setTimeout(function () {
                setShowTooltip(false);
            }, 2000);
        };
        var buttonContent = (React.createElement("button", { ref: buttonRef, className: "".concat(styles['magneto-ui-horizontal-filter-button']), onClick: appliedValue ? undefined : handleShowItems, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd },
            React.createElement(IconItem, { icon: icon, size: 20, className: !appliedValue ? styles['magneto-ui-horizontal-filter-button--grayscale'] : '' }),
            React.createElement("span", null, appliedValue || label),
            appliedValue ? (React.createElement("span", { onClick: function (e) { return handleRemove_1(e, appliedOptions[0]); } },
                React.createElement(IconItem, { icon: SmallClose, size: 17 }))) : (React.createElement(IconItem, { icon: Add, size: 19 }))));
        return (React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal'], style: positionVars },
            buttonContent,
            showTooltip && (React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__tooltip'] }, appliedValue || label)),
            props.showFilters && !isMobile && (React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__popover'] },
                React.createElement("div", { className: styles['magneto-ui-filter-card_options'] }, displayAppliedOptions),
                displayMenuSearch)),
            isMobile && (React.createElement(MobileDrawer, { isOpen: showMobileDrawer, onClose: handleCloseMobileDrawer },
                React.createElement("div", { className: styles['magneto-ui-filter-card-horizontal__drawer-content'] },
                    React.createElement("h3", null, label),
                    React.createElement("div", { className: styles['magneto-ui-filter-card_options'] }, displayAppliedOptions),
                    displayMenuSearch)))));
    }
    return (React.createElement("article", { className: "".concat(styles['magneto-ui-filter-onSearch'], " ").concat(styles.hasSearch) },
        React.createElement("div", { className: styles['magneto-ui-filter-onSearch_header'] },
            React.createElement("p", null, label),
            switchText && (React.createElement(Switch, { title: switchText, setIsActive: function (value) { return console.log('Change isActive', value); }, isActive: true }))),
        displayMenuSearch,
        displayAppliedOptions,
        displayChild));
};

export { FilterCardOnSearch };
//# sourceMappingURL=FilterCardOnSearch.component.js.map
