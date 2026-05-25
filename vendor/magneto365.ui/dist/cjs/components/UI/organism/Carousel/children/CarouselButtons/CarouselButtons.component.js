'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var ArrowLeft2 = require('../../../../../../assets/ArrowLeft2.svg.js');
var ArrowRight2 = require('../../../../../../assets/ArrowRight2.svg.js');
var React = require('react');
var Carousel_module = require('../../Carousel.module.scss.js');
var carousel_constants = require('../../../../../../constants/stories/carousel.constants.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Carousel_module);
var CarouselButtons = function (_a) {
    var onPrevSlide = _a.onPrevSlide, onNextSlide = _a.onNextSlide, className = _a.className, size = _a.size, _b = _a.icons, icons = _b === void 0 ? { left: ArrowLeft2, right: ArrowRight2 } : _b;
    return (React__default["default"].createElement("div", { className: cx(Carousel_module["".concat(carousel_constants.carouselPrefix, "__buttons")], className) },
        React__default["default"].createElement("button", { className: Carousel_module.carousel__button, onClick: onPrevSlide },
            React__default["default"].createElement(Icon_component.IconItem, { icon: icons.left, size: size })),
        React__default["default"].createElement("button", { className: Carousel_module.carousel__button, onClick: onNextSlide },
            React__default["default"].createElement(Icon_component.IconItem, { icon: icons.right, size: size }))));
};

exports.CarouselButtons = CarouselButtons;
//# sourceMappingURL=CarouselButtons.component.js.map
