'use strict';

var React = require('react');
var Icon_component = require('../Icon/Icon.component.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var Tag_module = require('./Tag.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Tags = function (_a) {
    var text = _a.text, onClick = _a.onClick, icon = _a.icon, _b = _a.bgColor, bgColor = _b === void 0 ? '#F4F4FA' : _b, _c = _a.textColor, textColor = _c === void 0 ? 'black' : _c;
    return (React__default["default"].createElement("button", { className: Tag_module["".concat(common_constants.classMUI, "-tag")], style: { backgroundColor: bgColor, color: textColor }, onClick: onClick, type: "button" },
        text,
        React__default["default"].createElement(Icon_component.IconItem, { icon: icon, alt: "tag-icon" })));
};

module.exports = Tags;
//# sourceMappingURL=Tag.component.js.map
