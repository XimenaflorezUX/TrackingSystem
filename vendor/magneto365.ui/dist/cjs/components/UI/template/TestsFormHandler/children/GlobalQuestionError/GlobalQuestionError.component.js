'use strict';

var React = require('react');
var Icon_component = require('../../../../atoms/Icon/Icon.component.js');
var infoCircleRed = require('../../../../../../assets/info-circle-red.svg.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
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
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var GlobalQuestionError_module = require('./GlobalQuestionError.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var GlobalQuestionError = function (_a) {
    var errorText = _a.errorText;
    return (React__default["default"].createElement("div", { className: GlobalQuestionError_module['question__error'] },
        React__default["default"].createElement(Icon_component.IconItem, { icon: infoCircleRed, size: 18 }),
        React__default["default"].createElement("div", { className: GlobalQuestionError_module['question__error-text'] }, errorText)));
};

module.exports = GlobalQuestionError;
//# sourceMappingURL=GlobalQuestionError.component.js.map
