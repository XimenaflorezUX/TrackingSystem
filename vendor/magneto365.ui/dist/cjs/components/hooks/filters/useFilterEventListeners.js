'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useFilterEventListeners = function (_a) {
    var horizontal = _a.horizontal, showItems = _a.showItems, showTooltip = _a.showTooltip, isMobile = _a.isMobile, index = _a.index, buttonRef = _a.buttonRef, setCurrentOpenFilter = _a.setCurrentOpenFilter, setShowItems = _a.setShowItems, setShowTooltip = _a.setShowTooltip, setIsDragScrolling = _a.setIsDragScrolling, calculatePositions = _a.calculatePositions;
    // Click outside handler
    React.useEffect(function () {
        if (horizontal && showItems && !isMobile) {
            var handleClickOutside_1 = function (event) {
                var _a;
                var target = event.target;
                if ((_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))
                    return;
                var popover = document.querySelector("[data-popover-index=\"".concat(index, "\"]"));
                if (popover === null || popover === void 0 ? void 0 : popover.contains(target))
                    return;
                setCurrentOpenFilter(99);
                setShowTooltip(false);
            };
            var timeoutId_1 = setTimeout(function () {
                document.addEventListener('click', handleClickOutside_1, true);
            }, 100);
            return function () {
                clearTimeout(timeoutId_1);
                document.removeEventListener('click', handleClickOutside_1, true);
            };
        }
    }, [horizontal, showItems, isMobile, index, buttonRef, setCurrentOpenFilter, setShowTooltip]);
    // Window scroll and resize
    React.useEffect(function () {
        if (horizontal && (showItems || showTooltip)) {
            var handleScroll_1 = function () { return calculatePositions(buttonRef.current); };
            window.addEventListener('scroll', handleScroll_1, true);
            window.addEventListener('resize', handleScroll_1);
            return function () {
                window.removeEventListener('scroll', handleScroll_1, true);
                window.removeEventListener('resize', handleScroll_1);
            };
        }
    }, [horizontal, showItems, showTooltip, calculatePositions, buttonRef]);
    // Container scroll
    React.useEffect(function () {
        if (horizontal) {
            var handleContainerScroll_1 = function () {
                setCurrentOpenFilter(99);
                setShowItems(false);
                setShowTooltip(false);
                setIsDragScrolling(true);
                setTimeout(function () { return setIsDragScrolling(false); }, 100);
            };
            var scrollContainer_1 = document.querySelector('.magneto-ui-horizontal-filter__scroll-container');
            if (scrollContainer_1) {
                scrollContainer_1.addEventListener('scroll', handleContainerScroll_1, { passive: true });
                return function () {
                    scrollContainer_1.removeEventListener('scroll', handleContainerScroll_1);
                };
            }
        }
    }, [horizontal, setCurrentOpenFilter, setShowItems, setShowTooltip, setIsDragScrolling]);
};

exports.useFilterEventListeners = useFilterEventListeners;
//# sourceMappingURL=useFilterEventListeners.js.map
