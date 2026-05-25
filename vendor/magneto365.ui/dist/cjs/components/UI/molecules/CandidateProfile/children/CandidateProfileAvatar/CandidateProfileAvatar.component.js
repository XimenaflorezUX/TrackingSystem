'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var Avatar_component = require('../../../../atoms/Avatar/Avatar.component.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
require('../../../../atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../atoms/Field/Field.component.js');
require('../../../../atoms/Typography/Typography.component.js');
require('../../../../atoms/Typography/Typography.interface.js');
require('../../../../atoms/InputFile/InputFile.component.js');
require('../../../../atoms/Paragraph/Paragraph.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../atoms/Radio/Radio.constants.js');
var RatingBadge_component = require('../../../../atoms/RatingBadge/RatingBadge.component.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var CandidateProfileAvatar_module = require('./CandidateProfileAvatar.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfileAvatar_module);
var Component = function (_a) {
    var fallbackImage = _a.fallbackImage, onClick = _a.onClick, score = _a.score, userImage = _a.userImage, props = tslib_es6.__rest(_a, ["fallbackImage", "onClick", "score", "userImage"]);
    return (React__default["default"].createElement("div", tslib_es6.__assign({ className: cx('magneto-ui-candidate-profile-avatar') }, props),
        React__default["default"].createElement("picture", { className: cx('magneto-ui-candidate-profile-avatar__picture') },
            React__default["default"].createElement(Avatar_component.Avatar, { userImage: userImage, fallbackImage: fallbackImage, onClick: onClick })),
        score && (React__default["default"].createElement("div", { className: cx('magneto-ui-candidate-profile-avatar__score') },
            React__default["default"].createElement(RatingBadge_component.RatingBadge, { score: score })))));
};
/**
 * Molecule UI component child of candidate profile
 */
var CandidateProfileAvatar = Component;

exports.CandidateProfileAvatar = CandidateProfileAvatar;
//# sourceMappingURL=CandidateProfileAvatar.component.js.map
