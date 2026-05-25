'use strict';

var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var FilterContainerMenu_module = require('./FilterContainerMenu.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FilterContainerMenu = function (_a) {
    var children = _a.children;
    return React__default["default"].createElement("div", { className: FilterContainerMenu_module["".concat(common_constants.classMUI, "-filter-container")] }, children);
};

module.exports = FilterContainerMenu;
//# sourceMappingURL=FilterContainerMenu.component.js.map
