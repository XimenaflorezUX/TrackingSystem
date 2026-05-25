'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../../hooks/useMediaQuery/index.js');
var index$1 = require('../../../hooks/useCarouselScroll/index.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
var carousel_constants = require('../../../../constants/stories/carousel.constants.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var React = require('react');
var Carousel_module = require('./Carousel.module.scss.js');
var CarouselButtons_component = require('./children/CarouselButtons/CarouselButtons.component.js');
var CarouselFooter_component = require('./children/CarouselFooter/CarouselFooter.component.js');
var CarouselHeader_component = require('./children/CarouselHeader/CarouselHeader.component.js');
var CarouselItems_component = require('./children/CarouselItems/CarouselItems.component.js');
var nodeCount_util = require('../../../../utils/domNode/nodeCount.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Carousel_module);
var Component = function (_a) {
    var _b;
    var children = _a.children, classNamesObject = _a.classNamesObject, _c = _a.autoScroll, autoScroll = _c === void 0 ? true : _c, _d = _a.scrollInterval, scrollInterval = _d === void 0 ? 15 : _d, _e = _a.mobileScrollable, mobileScrollable = _e === void 0 ? true : _e, _f = _a.sizeButtons, sizeButtons = _f === void 0 ? 16 : _f, _g = _a.itemsPerSection, itemsPerSection = _g === void 0 ? 3 : _g, _h = _a.gap, gap = _h === void 0 ? 16 : _h, _j = _a.maxContainerWidth, maxContainerWidth = _j === void 0 ? '100%' : _j, controlledIndex = _a.currentIndex, onChangeSlide = _a.onChangeSlide;
    var itemsContainerRef = React.useRef(null);
    var isMobile = index.useMediaQuery(false, { xs: true, sm: true, md: true });
    var allItems = nodeCount_util.getAllItems(children, CarouselItems_component.CarouselItems);
    var totalSections = Math.ceil(allItems.length / itemsPerSection);
    var gapClass = React.useMemo(function () { return "".concat(carousel_constants.carouselPrefix, "__gap-").concat(gap); }, [gap]);
    var _k = index$1.useCarouselScroll({
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
            totalSections > 1 && (React__default["default"].createElement(CarouselButtons_component.CarouselButtons, { onNextSlide: function () { return changeSlide(1); }, onPrevSlide: function () { return changeSlide(-1); }, size: sizeButtons, className: classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.buttons }));
    };
    // Render items based on whether the carousel is responsive or not
    var renderItems = function () {
        return isMobile ? (React__default["default"].createElement("div", { className: cx(mobileScrollable ? "".concat(carousel_constants.carouselPrefix, "__mobile-slider") : "".concat(carousel_constants.carouselPrefix, "__mobile-noScroll"), gapClass, classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.items), ref: itemsContainerRef }, allItems.map(function (item, idx) { return (React__default["default"].createElement("div", { key: idx, className: cx("".concat(carousel_constants.carouselPrefix, "__mobile-item"), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.item) }, item)); }))) : (Array.from({ length: totalSections }, function (_, i) {
            var _a;
            return (React__default["default"].createElement("div", { key: i, className: cx("".concat(carousel_constants.carouselPrefix, "__section"), "".concat(carousel_constants.carouselPrefix, "__section--flex"), (_a = {}, _a["".concat(carousel_constants.carouselPrefix, "__section--active")] = i === currentIndex, _a), gapClass, classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.item) }, allItems.slice(i * itemsPerSection, (i + 1) * itemsPerSection).map(function (item, idx) { return (React__default["default"].createElement("div", { key: idx, className: cx("".concat(carousel_constants.carouselPrefix, "__grid-item")) }, item)); })));
        }));
    };
    return (React__default["default"].createElement("div", { className: cx(carousel_constants.carouselPrefix, (_b = {}, _b["".concat(carousel_constants.carouselPrefix, "--mobile")] = mobileScrollable && isMobile, _b), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.base), style: { maxWidth: maxContainerWidth } },
        React__default["default"].createElement("div", { className: cx("".concat(carousel_constants.carouselPrefix, "__header-container"), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.headerContainer) },
            nodeCount_util.getChildrenByType(children, CarouselHeader_component.CarouselHeader),
            renderButtons()),
        React__default["default"].createElement("div", { className: cx("".concat(carousel_constants.carouselPrefix, "__items_container"), classNamesObject === null || classNamesObject === void 0 ? void 0 : classNamesObject.items) }, renderItems()),
        nodeCount_util.getChildrenByType(children, CarouselFooter_component.CarouselFooter)));
};
var Carousel = Object.assign(Component, {
    Items: CarouselItems_component.CarouselItems,
    Header: CarouselHeader_component.CarouselHeader,
    Footer: CarouselFooter_component.CarouselFooter,
    Button: CarouselButtons_component.CarouselButtons
});

exports.Carousel = Carousel;
//# sourceMappingURL=Carousel.component.js.map
