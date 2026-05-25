'use strict';

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var GlobalQuestion_module = require('./GlobalQuestion.module.scss.js');
require('../../../../atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../atoms/Button/Button.component.js');
var Checkbox_component = require('../../../../atoms/Checkbox/Checkbox.component.js');
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
var Radio_component = require('../../../../atoms/Radio/Radio.component.js');
require('../../../../atoms/Radio/Radio.interface.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var TestsFormHandler_context = require('../../TestsFormHandler.context.js');
var validateStepAnswers = require('../../../../../../utils/validateAnswers/validateStepAnswers.js');
var GlobalQuestionError_component = require('../GlobalQuestionError/GlobalQuestionError.component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var GlobalQuestion = function (_a) {
    var _b, _c;
    var question = _a.question, errorText = _a.errorText, idx = _a.idx;
    var _d = TestsFormHandler_context.useFormHandler(), answers = _d.answers, submitted = _d.submitted, handleChange = _d.handleChange, registerQuestion = _d.registerQuestion, unregisterQuestion = _d.unregisterQuestion;
    var answer = answers[question.id];
    var required = submitted && validateStepAnswers.isMissingValidator(answer, question);
    var onChange = function (value) {
        handleChange(question.id, value);
    };
    React.useEffect(function () {
        registerQuestion(question.id, question.type);
        return function () {
            unregisterQuestion(question.id);
        };
    }, [question.id, question.type, registerQuestion, unregisterQuestion]);
    return (React__default["default"].createElement("div", { className: GlobalQuestion_module['formHandler__question'] },
        React__default["default"].createElement("div", null,
            idx,
            " - ",
            question.text,
            " ",
            required && React__default["default"].createElement("span", { className: GlobalQuestion_module['formHandler__question-required'] }, '*')),
        React__default["default"].createElement("div", { className: GlobalQuestion_module['formHandler__options'] },
            question.type === 'single' &&
                ((_b = question.options) === null || _b === void 0 ? void 0 : _b.map(function (opt) { return (React__default["default"].createElement(Radio_component.Radio, { key: opt.id, id: "".concat(question.id, "-").concat(opt.id), checked: typeof answer === 'object' && !Array.isArray(answer) && (answer === null || answer === void 0 ? void 0 : answer.id) === opt.id, onChange: function () { return onChange(opt); }, type: "radio" }, opt.label)); })),
            question.type === 'multiple' &&
                ((_c = question.options) === null || _c === void 0 ? void 0 : _c.map(function (opt) { return (React__default["default"].createElement(Checkbox_component.Checkbox, { key: opt.id, id: "".concat(question.id, "-").concat(opt.id), checked: Array.isArray(answer) && answer.some(function (item) { return item.id === opt.id; }), onChange: function (checked) {
                        var newValue = Array.isArray(answer) ? tslib_es6.__spreadArray([], answer, true) : [];
                        if (checked) {
                            if (!newValue.some(function (item) { return item.id === opt.id; })) {
                                newValue.push(opt);
                            }
                        }
                        else {
                            newValue = newValue.filter(function (item) { return item.id !== opt.id; });
                        }
                        onChange(newValue);
                    } }, opt.label)); }))),
        required && React__default["default"].createElement(GlobalQuestionError_component, { errorText: errorText })));
};

module.exports = GlobalQuestion;
//# sourceMappingURL=GlobalQuestion.component.js.map
