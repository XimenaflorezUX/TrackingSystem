import { useMediaQuery } from '../../../hooks/useMediaQuery/index.js';
import { useCarouselScroll } from '../../../hooks/useCarouselScroll/index.js';
import '../../../../constants/stories/DatePicker.constants.js';
import '../../../../constants/stories/jobVideo.constants.js';
import '../../../../constants/stories/megaMenu.constants.js';
import '../../../../constants/stories/sideFilter.constants.js';
import '../../../../constants/stories/vacancies.constants.js';
import '../../../../constants/stories/vacantPositionsCategory.constants.js';
import { carouselPrefix } from '../../../../constants/stories/carousel.constants.js';
import { classNames } from '../../../../shared/utils/common/classNames.util.js';
import React, { useRef, useMemo } from 'react';
import styles from './Carousel.module.scss.js';
import { CarouselButtons } from './children/CarouselButtons/CarouselButtons.component.js';
import { CarouselFooter } from './children/CarouselFooter/CarouselFooter.component.js';
import { CarouselHeader } from './children/CarouselHeader/CarouselHeader.component.js';
import { CarouselItems } from './children/CarouselItems/CarouselItems.component.js';
import { getAllItems, getChildrenByType } from '../../../../utils/domNode/nodeCount.util.js';

var cx = classNames.bind(styles);
var Component = function (_a) {
    var _b;
    var children = _a.children, classNamesObject = _a.classNamesObject, _c = _a.autoScroll, autoScroll = _c === void 0 ? true : _c, _d = _a.scrollInterval, scrollInterval = _d === void 0 ? 15 : _d, _e = _a.mobileScrollable, mobileScrollable = _e === void 0 ? true : _e, _f = _a.sizeButtons, sizeButtons = _f === void 0 ? 16 : _f, _g = _a.itemsPerSection, itemsPerSection = _g === void 0 ? 3 : _g, _h = _a.gap, gap = _h === void 0 ? 16 : _h, _j = _a.maxContainerWidth, maxContainerWidth = _j === void 0 ? '100%' : _j, controlledIndex = _a.currentIndex, onChangeSlide = _a.onChangeSlide;
    var itemsContainerRef = useRef(null);
    var isMobile = useMediaQuery(false, { xs: true, sm: true, md: true });
    var allItems = getAllItems(children, CarouselItems);
    var totalSections = Math.ceil(allItems.length / itemsPerSection);
    var gapClass = useMemo(function () { return "".concat(carouselPrefix, "__gap-").concat(gap); }, [gap]);
    var _k = useCarouselScroll({
        totalSections: totalSections,
        autoScroll: autoScroll,
        scrollInterval: scrollInterval,
        isDisabled: isMobile
    }), internalIndex = _k.currentIndex, internalChangeSlide = _k.changeSlide;
    var currentIndex = controlledIndex !== null && controlledIndex !== void 0 ? controlledIndex : internalIndex;
    var changeSlide = function (dir) {
        if (typeof controlledIndex === 'number' && onChangeSlide) {
            var next = (controlledIndex + dir + totalSections) % totalSections;
            onChangeSlide(next);
        }
        else {
            internalChangeSlide(dir);
        }
    };
    var renderButtons = function () {
        return !isMobile &&
            totalSections > 1 && (React.createElement(CarouselButtons, { onNextSlide: function () { return changeSlide(1); }, onPrevSlide: function () { return changeSlide(-1); }, size: sizeButtons, className: classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.buttons }));
    };
    // Render items based on whether the carousel is responsive or not
    var renderItems = function () {
        return isMobile ? (React.createElement("div", { className: cx(mobileScrollable ? "".concat(carouselPrefix, "__mobile-slider") : "".concat(carouselPrefix, "__mobile-noScroll"), gapClass, classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.items), ref: itemsContainerRef }, allItems.map(function (item, idx) { return (React.createElement("div", { key: idx, className: cx("".concat(carouselPrefix, "__mobile-item"), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.item) }, item)); }))) : (Array.from({ length: totalSections }, function (_, i) {
            var _a;
            return (React.createElement("div", { key: i, className: cx("".concat(carouselPrefix, "__section"), "".concat(carouselPrefix, "__section--flex"), (_a = {}, _a["".concat(carouselPrefix, "__section--active")] = i === currentIndex, _a), gapClass, classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.item) }, allItems.slice(i * itemsPerSection, (i + 1) * itemsPerSection).map(function (item, idx) { return (React.createElement("div", { key: idx, className: cx("".concat(carouselPrefix, "__grid-item")) }, item)); })));
        }));
    };
    return (React.createElement("div", { className: cx(carouselPrefix, (_b = {}, _b["".concat(carouselPrefix, "--mobile")] = mobileScrollable && isMobile, _b), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.base), style: { maxWidth: maxContainerWidth } },
        React.createElement("div", { className: cx("".concat(carouselPrefix, "__header-container"), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.headerContainer) },
            getChildrenByType(children, CarouselHeader),
            renderButtons()),
        React.createElement("div", { className: cx("".concat(carouselPrefix, "__items_container"), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.items) }, renderItems()),
        getChildrenByType(children, CarouselFooter)));
};
var Carousel = Object.assign(Component, {
    Items: CarouselItems,
    Header: CarouselHeader,
    Footer: CarouselFooter,
    Button: CarouselButtons
});

export { Carousel };
//# sourceMappingURL=Carousel.component.js.map
