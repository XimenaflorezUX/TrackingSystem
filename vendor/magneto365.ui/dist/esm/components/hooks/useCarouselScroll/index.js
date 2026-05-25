import { useState, useRef, useCallback, useEffect } from 'react';

var useCarouselScroll = function (_a) {
    var totalSections = _a.totalSections, autoScroll = _a.autoScroll, scrollInterval = _a.scrollInterval, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b;
    var _c = useState(0), currentIndex = _c[0], setCurrentIndex = _c[1];
    var autoScrollIntervalRef = useRef(null);
    var setupAutoScrollInterval = useCallback(function () {
        if (autoScrollIntervalRef.current)
            clearInterval(autoScrollIntervalRef.current);
        if (autoScroll && !isDisabled && totalSections > 1) {
            autoScrollIntervalRef.current = setInterval(function () { return setCurrentIndex(function (i) { return (i + 1) % totalSections; }); }, scrollInterval * 1000);
        }
    }, [autoScroll, scrollInterval, isDisabled, totalSections]);
    // Set up auto-scroll interval on mount and when dependencies change
    useEffect(function () {
        setupAutoScrollInterval();
        return function () {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current);
            }
        };
    }, [setupAutoScrollInterval]);
    // Adjust current index if it exceeds total sections
    useEffect(function () {
        setCurrentIndex(function (prev) { return Math.min(prev, Math.max(totalSections - 1, 0)); });
    }, [totalSections]);
    var changeSlide = function (dir) {
        setCurrentIndex(function (i) { return (i + dir + totalSections) % totalSections; });
        setupAutoScrollInterval(); // Reset interval when manually changing slides
    };
    return {
        currentIndex: currentIndex,
        changeSlide: changeSlide
    };
};

export { useCarouselScroll };
//# sourceMappingURL=index.js.map
