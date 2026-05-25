'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Carousel_module = require('../../Carousel.module.scss.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
var carousel_constants = require('../../../../../../constants/stories/carousel.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(Carousel_module);
var CarouselFooter = function (_a) {
    var children = _a.children, className = _a.className;
    return React__default["default"].createElement("div", { className: cx("".concat(carousel_constants.carouselPrefix, "__footer"), className) }, children);
};

exports.CarouselFooter = CarouselFooter;
//# sourceMappingURL=CarouselFooter.component.js.map
