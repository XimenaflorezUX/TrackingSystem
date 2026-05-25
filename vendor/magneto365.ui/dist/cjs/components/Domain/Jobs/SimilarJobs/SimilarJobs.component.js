'use strict';

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var common_constants = require('../../../../constants/stories/common.constants.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
var SimilarJobsCard_component = require('./children/SimilarJobsCard/SimilarJobsCard.component.js');
var SimilarJobs_module = require('./SimilarJobs.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SimilarJobs = function (_a) {
    var hideLogo = _a.hideLogo, similarJobsCard = _a.similarJobsCard;
    if (similarJobsCard.length <= 0)
        return null;
    return (React__default["default"].createElement("div", { className: "".concat(SimilarJobs_module["".concat(common_constants.classMUI, "-similar-jobs-section")]) }, similarJobsCard.map(function (_a) {
        var id = _a.id, props = tslib_es6.__rest(_a, ["id"]);
        return (React__default["default"].createElement(SimilarJobsCard_component, tslib_es6.__assign({ key: id, hideLogo: hideLogo }, props)));
    })));
};

module.exports = SimilarJobs;
//# sourceMappingURL=SimilarJobs.component.js.map
