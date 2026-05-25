'use strict';

var React = require('react');
var MegaMenuEmpty_module = require('./MegaMenuEmpty.module.scss.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
var megaMenu_constants = require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MegaMenuEmpty = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, customStyle = _a.customStyle, _b = _a.imageData, imageData = _b === void 0 ? 'noData' : _b, _c = _a.imageHeight, imageHeight = _c === void 0 ? 170 : _c;
    return (React__default["default"].createElement("div", { className: MegaMenuEmpty_module['mega-menu-empty'], style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.content },
        React__default["default"].createElement("h4", { className: MegaMenuEmpty_module['mega-menu-empty__title'], style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.title }, title),
        React__default["default"].createElement("p", { className: MegaMenuEmpty_module['mega-menu-empty__subtitle'], style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitle }, subtitle),
        React__default["default"].createElement("img", { className: MegaMenuEmpty_module['mega-menu-empty__image'], src: megaMenu_constants.staticMessages[imageData], height: imageHeight, style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.image })));
};

module.exports = MegaMenuEmpty;
//# sourceMappingURL=MegaMenuEmpty.component.js.map
