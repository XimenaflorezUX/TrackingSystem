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
var RightsReservedText_module = require('./RightsReservedText.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var RightsReservedText = function (_a) {
    var magnetoRightsText = _a.magnetoRightsText;
    return (React__default["default"].createElement("div", { className: "".concat(RightsReservedText_module["".concat(common_constants.classMUI, "-rights-reserved")]) },
        React__default["default"].createElement("p", null, magnetoRightsText)));
};

module.exports = RightsReservedText;
//# sourceMappingURL=RightsReservedText.component.js.map
