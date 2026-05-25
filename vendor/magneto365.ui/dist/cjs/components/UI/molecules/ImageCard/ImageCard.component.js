'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var ImageCard_module = require('./ImageCard.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
var Icon_component = require('../../atoms/Icon/Icon.component.js');
var ArrowRightWhite = require('../../../../assets/ArrowRightWhite.svg.js');
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
var carousel_constants = require('../../../../constants/stories/carousel.constants.js');
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
require('../../../hooks/useMediaQuery/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ImageCard_module);
var Component = function (_a) {
    var className = _a.className, imagePath = _a.imagePath, _b = _a.alt, alt = _b === void 0 ? 'Image' : _b, title = _a.title, description = _a.description, _c = _a.dimensions, dimensions = _c === void 0 ? { height: '250px', width: '500px' } : _c, _d = _a.icon, icon = _d === void 0 ? { showIcon: true, size: 14 } : _d;
    var customStyles = {
        '--card-width': dimensions.width,
        '--card-height': dimensions.height
    };
    return (React__default["default"].createElement("div", { className: cx(carousel_constants.imageCardPrefix, className), style: customStyles },
        React__default["default"].createElement("img", { className: ImageCard_module["".concat(carousel_constants.imageCardPrefix, "__image")], src: imagePath, alt: alt, loading: "lazy" }),
        React__default["default"].createElement("div", { className: ImageCard_module["".concat(carousel_constants.imageCardPrefix, "__overlay")] },
            React__default["default"].createElement("p", { className: ImageCard_module["".concat(carousel_constants.imageCardPrefix, "__title")] }, title),
            React__default["default"].createElement("div", { className: ImageCard_module["".concat(carousel_constants.imageCardPrefix, "__description")] },
                description && React__default["default"].createElement("p", { className: ImageCard_module["".concat(carousel_constants.imageCardPrefix, "__description_text")] }, description),
                icon.showIcon && (React__default["default"].createElement(Icon_component.IconItem, tslib_es6.__assign({ icon: ArrowRightWhite, className: ImageCard_module["".concat(carousel_constants.imageCardPrefix, "__description_icon")] }, icon)))))));
};
var ImageCard = Component;

exports.ImageCard = ImageCard;
//# sourceMappingURL=ImageCard.component.js.map
