'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var CandidateProfile_module = require('./CandidateProfile.module.scss.js');
var classNames_util = require('../../../../shared/utils/common/classNames.util.js');
require('../../atoms/BarChart/enums.js');
require('../../../../utils/classNameManager/classNameManager.util.js');
require('../../atoms/Button/Button.component.js');
var Collapse_component = require('../../atoms/Collapse/Collapse.component.js');
require('../../../../constants/stories/DatePicker.constants.js');
require('../../../../constants/stories/jobVideo.constants.js');
require('../../../../constants/stories/megaMenu.constants.js');
require('../../../../constants/stories/sideFilter.constants.js');
require('../../../../constants/stories/vacancies.constants.js');
require('../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../constants/img.constants.js');
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
var index = require('./children/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(CandidateProfile_module);
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? true : _b, onChangeOpen = _a.onChangeOpen, open = _a.open, props = tslib_es6.__rest(_a, ["children", "className", "defaultOpen", "onChangeOpen", "open"]);
    return (React__default["default"].createElement(Collapse_component.Collapse.Provider, { defaultOpen: defaultOpen, open: open, onChangeOpen: onChangeOpen },
        React__default["default"].createElement("article", tslib_es6.__assign({ className: cx('magneto-ui-candidate-profile', className) }, props), children)));
};
/**
 * Molecule UI component of candidate profile
 */
var CandidateProfile = Object.assign(Component, index);

exports.CandidateProfile = CandidateProfile;
//# sourceMappingURL=CandidateProfile.component.js.map
