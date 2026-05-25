'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var FilterSearchItem_component = require('../../molecules/FilterSearchItem/FilterSearchItem.component.js');
var FilterMenuItem_component = require('../../molecules/FilterMenuItem/FilterMenuItem.component.js');
var Switch_component = require('../../atoms/Switch/Switch.component.js');
var MobileDrawer_component = require('../../molecules/MobileDrawer/MobileDrawer.component.js');
var MenuSearch_component = require('../../molecules/MenuSearch/MenuSearch.component.js');
var filterCardOnSearch_component_util = require('./utils/filterCardOnSearch.component.util.js');
var useKeyboard = require('./hooks/useKeyboard.js');
var index = require('../../../hooks/useMediaQuery/index.js');
var iconMapping_utils = require('../../../../utils/icons/iconMapping.utils.js');
var FilterCardOnSearch_module = require('./FilterCardOnSearch.module.scss.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var Add = require('../../../../assets/Add.svg.js');
var SmallClose = require('../../../../assets/SmallClose.svg.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterCardOnSearch = function (_a) {
    var label = _a.label, field = _a.field, repository = _a.repository, child = _a.child, filtersApplied = _a.filtersApplied, params = _a.params, _b = _a.searchPlaceholder, searchPlaceholder = _b === void 0 ? '' : _b, _c = _a.switchText, switchText = _c === void 0 ? '' : _c, setIsApplied = _a.setIsApplied, unApplyWithChild = _a.unApplyWithChild, getOptionsOnLoad = _a.getOptionsOnLoad, getOptionsOnSearch = _a.getOptionsOnSearch, horizontal = _a.horizontal, props = tslib_es6.__rest(_a, ["label", "field", "repository", "child", "filtersApplied", "params", "searchPlaceholder", "switchText", "setIsApplied", "unApplyWithChild", "getOptionsOnLoad", "getOptionsOnSearch", "horizontal"]);
    var _d = React.useState([]), options = _d[0], setOptions = _d[1];
    var _e = React.useState([]), appliedOptions = _e[0], setAppliedOptions = _e[1];
    var _f = React.useState(null), refInput = _f[0], setRefInput = _f[1];
    var _g = React.useState(false), showMobileDrawer = _g[0], setShowMobileDrawer = _g[1];
    var _h = React.useState({ top: 0, left: 0 }), popoverPosition = _h[0], setPopoverPosition = _h[1];
    var _j = React.useState({ top: 0, left: 0 }), tooltipPosition = _j[0], setTooltipPosition = _j[1];
    var _k = React.useState(false), showTooltip = _k[0], setShowTooltip = _k[1];
    var buttonRef = React.useRef(null);
    var isMobile = index.useMediaQuery(false, {
        xs: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });
    var keyboardIndex = useKeyboard.useKeyboard(field, options.length, function () { return filterCardOnSearch_component_util.cleanSearch(refInput, setOptions); })[0];
    var values = React.useMemo(function () { return filterCardOnSearch_component_util.getValues(filtersApplied); }, [filtersApplied]);
    // this effect load labels when page is reloaded
    React.useEffect(function () {
        var _a;
        if (values && values.length > (appliedOptions === null || appliedOptions === void 0 ? void 0 : appliedOptions.length) && !options.length) {
            (_a = getOptionsOnLoad(field, values)) === null || _a === void 0 ? void 0 : _a.then(function (opt) { return setAppliedOptions(opt); });
        }
    }, [field, values, appliedOptions, options.length, getOptionsOnLoad]);
    var positionVars = React.useMemo(function () {
        return ({
            '--popover-top': "".concat(popoverPosition.top, "px"),
            '--popover-left': "".concat(popoverPosition.left, "px"),
            '--tooltip-top': "".concat(tooltipPosition.top, "px"),
            '--tooltip-left': "".concat(tooltipPosition.left, "px")
        });
    }, [popoverPosition.top, popoverPosition.left, tooltipPosition.top, tooltipPosition.left]);
    var calculatePositions = React.useCallback(function () {
        if (buttonRef.current) {
            var rect = buttonRef.current.getBoundingClientRect();
            setTooltipPosition({
                top: rect.bottom + 2,
                left: rect.left + rect.width / 2 - 50
            });
        }
    }, []);
    React.useEffect(function () { return filterCardOnSearch_component_util.refreshChildren(params, setAppliedOptions); }, [params]);
    React.useEffect(function () { return filterCardOnSearch_component_util.refreshParents(filtersApplied, setAppliedOptions); }, [filtersApplied]);
    var handleShowItems = React.useCallback(function () {
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
    var handleCloseMobileDrawer = React.useCallback(function () {
        setShowMobileDrawer(false);
    }, []);
    var handleSearch = React.useCallback(function (event, inputRef) { return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
        var searchedOptions;
        return tslib_es6.__generator(this, function (_a) {
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
    var callSetIsApplied = React.useCallback(function (filter) {
        var _a;
        (_a = setIsApplied(filter)) === null || _a === void 0 ? void 0 : _a.then(function () {
            var totalApplied = filter.isApplied
                ? appliedOptions.filter(function (opt) { return opt.id !== filter.id; })
                : filter.multiple
                    ? tslib_es6.__spreadArray(tslib_es6.__spreadArray([], appliedOptions, true), [tslib_es6.__assign(tslib_es6.__assign({}, options.filter(function (opt) { return opt.id === filter.id; })[0]), { isApplied: true })], false) : [tslib_es6.__assign(tslib_es6.__assign({}, options.filter(function (opt) { return opt.id === filter.id; })[0]), { isApplied: true })];
            setAppliedOptions(totalApplied);
        });
        filterCardOnSearch_component_util.cleanSearch(refInput, setOptions);
    }, [appliedOptions, options, setIsApplied, refInput]);
    var handleOptionSelected = React.useCallback(function (filter) {
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
    var handleApply = React.useCallback(function (filter) {
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
                newParent && setAppliedOptions([tslib_es6.__assign(tslib_es6.__assign({}, newParent), { isApplied: true })]);
                filterCardOnSearch_component_util.cleanSearch(refInput, setOptions);
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
    var displayMenuSearch = React.useMemo(function () {
        return (React__default["default"].createElement(MenuSearch_component, { show: !!options.length, handleOnBlur: function () { return filterCardOnSearch_component_util.cleanSearch(refInput, setOptions, 300); }, content: options.map(function (opt, key) {
                var optProps = tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, props), opt), { field: field, setIsApplied: handleApply, isSearched: true });
                return (React__default["default"].createElement(FilterMenuItem_component.FilterMenuItem, tslib_es6.__assign({ key: "".concat(opt.id, "-").concat(opt.label), customId: "".concat(field, "-menu-item-").concat(key), customClass: "".concat(key === keyboardIndex ? FilterCardOnSearch_module.selected : '') }, optProps)));
            }) },
            React__default["default"].createElement(FilterSearchItem_component.FilterSearchItem, { placeholder: searchPlaceholder, disabled: params ? !params.length : false, loading: props.loading, handleSearch: handleSearch })));
    }, [options, field, params, searchPlaceholder, props, refInput, keyboardIndex, handleApply, handleSearch]);
    var displayAppliedOptions = React.useMemo(function () {
        return (React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-onSearch_options'] }, appliedOptions.map(function (opt, key) {
            var optProps = tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, props), opt), { field: field, setIsApplied: handleApply, isSearched: true });
            return React__default["default"].createElement(FilterMenuItem_component.FilterMenuItem, tslib_es6.__assign({ key: "".concat(key, "-").concat(opt.label) }, optProps));
        })));
    }, [appliedOptions, field, props, handleApply]);
    var displayChild = React.useMemo(function () {
        if (!child)
            return React__default["default"].createElement(React.Fragment, null);
        var childProps = tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, props), child), { params: values, setIsApplied: setIsApplied, unApplyWithChild: unApplyWithChild, getOptionsOnLoad: getOptionsOnLoad, getOptionsOnSearch: getOptionsOnSearch });
        return React__default["default"].createElement(FilterCardOnSearch, tslib_es6.__assign({}, childProps));
    }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, values, props, child]);
    React.useEffect(function () {
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
    React.useEffect(function () {
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
    React.useEffect(function () {
        if (props.showFilters) {
            setShowTooltip(false);
        }
    }, [props.showFilters]);
    if (horizontal) {
        var appliedValue = appliedOptions.length > 0 ? appliedOptions.map(function (o) { return o.label; }).join(', ') : '';
        var icon = iconMapping_utils.getFieldIcon(field, props.icon);
        var handleRemove_1 = function (e, opt) {
            e.stopPropagation();
            handleApply(tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, props), opt), { field: field, isApplied: true }));
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
        var buttonContent = (React__default["default"].createElement("button", { ref: buttonRef, className: "".concat(FilterCardOnSearch_module['magneto-ui-horizontal-filter-button']), onClick: appliedValue ? undefined : handleShowItems, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd },
            React__default["default"].createElement(Icon_component.IconItem, { icon: icon, size: 20, className: !appliedValue ? FilterCardOnSearch_module['magneto-ui-horizontal-filter-button--grayscale'] : '' }),
            React__default["default"].createElement("span", null, appliedValue || label),
            appliedValue ? (React__default["default"].createElement("span", { onClick: function (e) { return handleRemove_1(e, appliedOptions[0]); } },
                React__default["default"].createElement(Icon_component.IconItem, { icon: SmallClose, size: 17 }))) : (React__default["default"].createElement(Icon_component.IconItem, { icon: Add, size: 19 }))));
        return (React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-card-horizontal'], style: positionVars },
            buttonContent,
            showTooltip && (React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-card-horizontal__tooltip'] }, appliedValue || label)),
            props.showFilters && !isMobile && (React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-card-horizontal__popover'] },
                React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-card_options'] }, displayAppliedOptions),
                displayMenuSearch)),
            isMobile && (React__default["default"].createElement(MobileDrawer_component.MobileDrawer, { isOpen: showMobileDrawer, onClose: handleCloseMobileDrawer },
                React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-card-horizontal__drawer-content'] },
                    React__default["default"].createElement("h3", null, label),
                    React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-card_options'] }, displayAppliedOptions),
                    displayMenuSearch)))));
    }
    return (React__default["default"].createElement("article", { className: "".concat(FilterCardOnSearch_module['magneto-ui-filter-onSearch'], " ").concat(FilterCardOnSearch_module.hasSearch) },
        React__default["default"].createElement("div", { className: FilterCardOnSearch_module['magneto-ui-filter-onSearch_header'] },
            React__default["default"].createElement("p", null, label),
            switchText && (React__default["default"].createElement(Switch_component.Switch, { title: switchText, setIsActive: function (value) { return console.log('Change isActive', value); }, isActive: true }))),
        displayMenuSearch,
        displayAppliedOptions,
        displayChild));
};

exports.FilterCardOnSearch = FilterCardOnSearch;
//# sourceMappingURL=FilterCardOnSearch.component.js.map
