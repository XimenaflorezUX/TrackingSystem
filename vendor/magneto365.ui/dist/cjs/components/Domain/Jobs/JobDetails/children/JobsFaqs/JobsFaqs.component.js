'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Icon_component = require('../../../../../UI/atoms/Icon/Icon.component.js');
var questionCirlce = require('../../../../../../assets/question-cirlce.svg.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
require('../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../constants/img.constants.js');
require('../../../../../../utils/date/dateInput.util.js');
require('../../../../../UI/atoms/Field/Field.component.js');
require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var JobsFaqs_module = require('./JobsFaqs.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobsFaqs = function (_a) {
    var roundEdges = _a.roundEdges, title = _a.title, children = _a.children;
    var borderRadius = roundEdges ? JobsFaqs_module['magneto-ui-faqs-rounded-corners'] : '';
    return (React__default["default"].createElement("div", { className: "".concat(JobsFaqs_module["magneto-ui-faqs"], " ").concat(borderRadius) },
        React__default["default"].createElement("div", { className: JobsFaqs_module['magneto-ui-faqs__content'] },
            title && (React__default["default"].createElement("div", { className: JobsFaqs_module['magneto-ui-faqs__content--title'] },
                React__default["default"].createElement(Icon_component.IconItem, { alt: title, icon: questionCirlce, hover: false, size: 16 }),
                React__default["default"].createElement("h3", null, title))),
            React__default["default"].createElement("div", { className: JobsFaqs_module['magneto-ui-faqs__content--children'] }, children))));
};

exports.JobsFaqs = JobsFaqs;
//# sourceMappingURL=JobsFaqs.component.js.map
