'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
require('../../../constants/stories/DatePicker.constants.js');
require('../../../constants/stories/jobVideo.constants.js');
require('../../../constants/stories/megaMenu.constants.js');
var sideFilter_constants = require('../../../constants/stories/sideFilter.constants.js');
require('../../../constants/stories/vacancies.constants.js');
require('../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../constants/img.constants.js');
var index = require('../useMediaQuery/index.js');
var usePositionCalculation = require('./usePositionCalculation.js');
var useFilterEventListeners = require('./useFilterEventListeners.js');

var useFilterCard = function (_a) {
    var values = _a.values, renderType = _a.renderType, setIsApplied = _a.setIsApplied, index$1 = _a.index, setCurrentOpenFilter = _a.setCurrentOpenFilter, showFilters = _a.showFilters, horizontal = _a.horizontal, field = _a.field;
    var _b = React.useState(values), options = _b[0], setOptions = _b[1];
    var _c = React.useState(showFilters), showItems = _c[0], setShowItems = _c[1];
    var _d = React.useState(false), showMobileDrawer = _d[0], setShowMobileDrawer = _d[1];
    var _e = React.useState(false), showTooltip = _e[0], setShowTooltip = _e[1];
    var _f = React.useState(false), isDragScrolling = _f[0], setIsDragScrolling = _f[1];
    var buttonRef = React.useRef(null);
    var isMobile = index.useMediaQuery(false, {
        xs: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });
    // Position calculation
    var _g = usePositionCalculation.usePositionCalculation({
        buttonRef: buttonRef
    }), popoverPosition = _g.popoverPosition, tooltipPosition = _g.tooltipPosition, calculatePositions = _g.calculatePositions;
    // Computed values
    var hasSearch = React.useMemo(function () { return renderType === sideFilter_constants.ERenderType.multiSelect; }, [renderType]);
    var hasTotal = React.useMemo(function () { return !values.find(function (value) { return value.isApplied; }); }, [values]);
    var appliedOption = React.useMemo(function () { return options.find(function (_a) {
        var isApplied = _a.isApplied;
        return isApplied;
    }); }, [options]);
    var appliedValue = React.useMemo(function () { return values.find(function (v) { return v.isApplied; }); }, [values]);
    var hasntOptions = React.useMemo(function () { return options.every(function (_a) {
        var total = _a.total;
        return total == 0 || total == undefined;
    }); }, [options]);
    var isInteractiveSection = React.useMemo(function () { return !hasntOptions && !appliedOption; }, [hasntOptions, appliedOption]);
    // Search handler
    var handleSearch = React.useCallback(function (event) {
        event.preventDefault();
        var searchedOptions = values.filter(function (opt) { return opt.label.toLowerCase().includes(event.target.value.toLowerCase()); });
        setOptions(searchedOptions);
    }, [values]);
    // Show items handler
    var handleShowItems = React.useCallback(function () {
        if (isDragScrolling)
            return;
        if (horizontal && isMobile) {
            setShowMobileDrawer(true);
            return;
        }
        var shouldOpenFilter = !showItems;
        if (shouldOpenFilter) {
            setCurrentOpenFilter(index$1);
            calculatePositions();
        }
        else {
            setCurrentOpenFilter(99);
        }
        if (!horizontal || !isMobile) {
            setShowItems(function (current) { return !current; });
        }
    }, [showItems, index$1, setCurrentOpenFilter, calculatePositions, isDragScrolling, horizontal, isMobile]);
    // Close mobile drawer handler
    var handleCloseMobileDrawer = React.useCallback(function () {
        setShowMobileDrawer(false);
    }, []);
    // Option selection handler
    var handleOptionSelected = React.useCallback(function (optionData) {
        if (setIsApplied) {
            setIsApplied(optionData);
        }
        Promise.resolve().then(function () {
            if (horizontal && !isMobile) {
                setCurrentOpenFilter(99);
                setShowItems(false);
            }
            if (horizontal && isMobile) {
                setShowMobileDrawer(false);
            }
        });
    }, [setIsApplied, horizontal, isMobile, setCurrentOpenFilter]);
    // Remove applied filter handler
    var handleRemove = React.useCallback(function (e) {
        e.stopPropagation();
        if (appliedValue && setIsApplied) {
            setIsApplied(tslib_es6.__assign(tslib_es6.__assign({ field: field || '' }, appliedValue), { isApplied: true, multiple: false }));
        }
    }, [appliedValue, setIsApplied, field]);
    // Tooltip handlers
    var handleMouseEnter = React.useCallback(function () {
        if (!showItems) {
            calculatePositions();
            setShowTooltip(true);
        }
    }, [showItems, calculatePositions]);
    var handleMouseLeave = React.useCallback(function () {
        setShowTooltip(false);
    }, []);
    var handleTouchStart = React.useCallback(function () {
        var _a;
        if (!showItems) {
            var touchTimer = setTimeout(function () {
                calculatePositions();
                setShowTooltip(true);
            }, 500);
            (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute('data-touch-timer', touchTimer.toString());
        }
    }, [showItems, calculatePositions]);
    var handleTouchEnd = React.useCallback(function () {
        var _a, _b;
        var timer = (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.getAttribute('data-touch-timer');
        if (timer) {
            clearTimeout(parseInt(timer));
            (_b = buttonRef.current) === null || _b === void 0 ? void 0 : _b.removeAttribute('data-touch-timer');
        }
        setTimeout(function () {
            setShowTooltip(false);
        }, 2000);
    }, []);
    // Event listeners
    useFilterEventListeners.useFilterEventListeners({
        horizontal: horizontal,
        showItems: showItems,
        showTooltip: showTooltip,
        isMobile: isMobile,
        index: index$1,
        buttonRef: buttonRef,
        setCurrentOpenFilter: setCurrentOpenFilter,
        setShowItems: setShowItems,
        setShowTooltip: setShowTooltip,
        setIsDragScrolling: setIsDragScrolling,
        calculatePositions: calculatePositions
    });
    React.useEffect(function () {
        var shouldShowItemsForAppliedOption = appliedOption !== undefined && !horizontal;
        if (shouldShowItemsForAppliedOption) {
            setShowItems(true);
        }
    }, [appliedOption, horizontal]);
    React.useEffect(function () {
        setOptions(values);
    }, [values]);
    React.useEffect(function () {
        var shouldUpdateShowItems = !appliedOption && !hasntOptions && showFilters !== showItems;
        if (shouldUpdateShowItems)
            setShowItems(showFilters);
    }, [showFilters, appliedOption, hasntOptions, showItems]);
    React.useEffect(function () {
        if (!horizontal)
            return;
        setShowItems(showFilters);
        if (!showFilters)
            setCurrentOpenFilter(99);
    }, [horizontal, showFilters, setCurrentOpenFilter]);
    return {
        state: {
            options: options,
            showItems: showItems,
            showMobileDrawer: showMobileDrawer,
            showTooltip: showTooltip,
            buttonRef: buttonRef
        },
        computed: {
            isMobile: isMobile,
            hasSearch: hasSearch,
            hasTotal: hasTotal,
            appliedOption: appliedOption,
            appliedValue: appliedValue,
            hasntOptions: hasntOptions,
            isInteractiveSection: isInteractiveSection
        },
        positions: {
            popoverPosition: popoverPosition,
            tooltipPosition: tooltipPosition
        },
        handlers: {
            handleSearch: handleSearch,
            handleShowItems: handleShowItems,
            handleCloseMobileDrawer: handleCloseMobileDrawer,
            handleOptionSelected: handleOptionSelected,
            handleRemove: handleRemove,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
            handleTouchStart: handleTouchStart,
            handleTouchEnd: handleTouchEnd
        }
    };
};

exports.useFilterCard = useFilterCard;
//# sourceMappingURL=useFilterCard.js.map
