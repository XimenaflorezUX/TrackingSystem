'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
require('../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../UI/atoms/Button/Button.component.js');
var Checkbox_component = require('../../../../../UI/atoms/Checkbox/Checkbox.component.js');
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
var ChatQuestionnaire_interface = require('../../ChatQuestionnaire.interface.js');
var ChatQuestionnaireMultipleChoice_module = require('./ChatQuestionnaireMultipleChoice.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireMultipleChoice_module);
var ChatQuestionnaireMultipleChoice = function (_a) {
    var questionWithAnswer = _a.questionWithAnswer, onChange = _a.onChange, renderSubmitButton = _a.renderSubmitButton, className = _a.className;
    var question = questionWithAnswer.question, answer = questionWithAnswer.answer, questionnaireId = questionWithAnswer.questionnaireId;
    var _b = React.useState(function () {
        var _a;
        if (answer && answer.type !== ChatQuestionnaire_interface.EQuestionType.multiple)
            return [];
        return (_a = answer === null || answer === void 0 ? void 0 : answer.answer.map(function (a) { return a.id; })) !== null && _a !== void 0 ? _a : [];
    }), selectedAnswerIds = _b[0], setSelectedAnswerIds = _b[1];
    if (question.answerType !== ChatQuestionnaire_interface.EQuestionType.multiple)
        return null;
    if (answer && answer.type !== ChatQuestionnaire_interface.EQuestionType.multiple)
        return null;
    var handleCheckboxChange = function (id) {
        setSelectedAnswerIds(function (prevIds) {
            if (prevIds.includes(id)) {
                return prevIds.filter(function (checkedId) { return checkedId !== id; });
            }
            else {
                return tslib_es6.__spreadArray(tslib_es6.__spreadArray([], prevIds, true), [id], false);
            }
        });
    };
    var isDisabled = selectedAnswerIds.length === 0;
    var handleSubmit = function (event) {
        event.preventDefault();
        if (isDisabled)
            return;
        var currentAnswers = selectedAnswerIds
            .map(function (id) { return question.possibleAnswers.find(function (pa) { return pa.id === id; }); })
            .filter(function (a) { return a !== undefined; });
        var newAnswer = {
            type: ChatQuestionnaire_interface.EQuestionType.multiple,
            id: question.id,
            answer: currentAnswers
        };
        onChange({
            question: question,
            questionnaireId: questionnaireId,
            answer: newAnswer,
            mode: 'readonly'
        });
    };
    return (React__default["default"].createElement("form", { className: cx('answers-container', className), onSubmit: handleSubmit },
        React__default["default"].createElement("div", { className: cx('answers') }, question.possibleAnswers.map(function (possibleAnswer) { return (React__default["default"].createElement(Checkbox_component.Checkbox, { className: cx('answers__option', {
                'answers__option--selected': selectedAnswerIds.includes(possibleAnswer.id)
            }), key: possibleAnswer.id, name: "question-".concat(question.id), id: "multiple-".concat(possibleAnswer.id), checked: selectedAnswerIds.includes(possibleAnswer.id), onChange: function () { return handleCheckboxChange(possibleAnswer.id); }, renderCheck: function () { return null; } }, possibleAnswer.titleAnswer)); })),
        renderSubmitButton({ disabled: isDisabled, className: cx('continue-button') })));
};

exports.ChatQuestionnaireMultipleChoice = ChatQuestionnaireMultipleChoice;
//# sourceMappingURL=ChatQuestionnaireMultipleChoice.component.js.map
