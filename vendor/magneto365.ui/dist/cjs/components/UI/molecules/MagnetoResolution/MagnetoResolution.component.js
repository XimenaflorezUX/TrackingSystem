'use strict';

var React = require('react');
var logoSPE2024 = require('../../../../assets/logo-SPE-2024.svg.js');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var MagnetoResolution_module = require('./MagnetoResolution.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MagnetoResolution = function (_a) {
    var resolutionText = _a.resolutionText, resolutionHrefText = _a.resolutionHrefText, resolutionHref = _a.resolutionHref;
    return (React__default["default"].createElement("div", { className: "".concat(MagnetoResolution_module["".concat(common_constants.classMUI, "-magneto-resolution")]) },
        React__default["default"].createElement("img", { className: "".concat(MagnetoResolution_module["".concat(common_constants.classMUI, "-magneto-resolution__img")]), src: logoSPE2024, alt: "min-trabajo-img", loading: "lazy", width: "80px" }),
        React__default["default"].createElement("p", { className: "".concat(MagnetoResolution_module["".concat(common_constants.classMUI, "-magneto-resolution__text")]) },
            resolutionText,
            React__default["default"].createElement("a", { className: "".concat(MagnetoResolution_module["".concat(common_constants.classMUI, "-magneto-resolution__text--link")]), href: resolutionHref }, resolutionHrefText))));
};

module.exports = MagnetoResolution;
//# sourceMappingURL=MagnetoResolution.component.js.map
