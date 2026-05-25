'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
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
var Radio_component = require('../../../../../UI/atoms/Radio/Radio.component.js');
require('../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../../constants/jobDetails.constants.js');
require('../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../hooks/useMediaQuery/index.js');
var ChatQuestionnaire_interface = require('../../ChatQuestionnaire.interface.js');
var ChatQuestionnaireUniqueChoice_module = require('./ChatQuestionnaireUniqueChoice.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireUniqueChoice_module);
var ChatQuestionnaireUniqueChoice = function (_a) {
    var questionWithAnswer = _a.questionWithAnswer, onChange = _a.onChange, classNames = _a.classNames, className = _a.className;
    var question = questionWithAnswer.question, answer = questionWithAnswer.answer, questionnaireId = questionWithAnswer.questionnaireId;
    if (question.answerType !== ChatQuestionnaire_interface.EQuestionType.unique)
        return null;
    if (answer && answer.type !== ChatQuestionnaire_interface.EQuestionType.unique)
        return null;
    var possibleAnswers = question.possibleAnswers;
    var handleChange = function (id, titleAnswer) {
        onChange({
            question: question,
            questionnaireId: questionnaireId,
            mode: 'readonly',
            answer: {
                type: ChatQuestionnaire_interface.EQuestionType.unique,
                id: question.id,
                answer: [{ id: id, titleAnswer: titleAnswer }]
            }
        });
    };
    return (React__default["default"].createElement("div", { className: cx('answers-container', className) },
        React__default["default"].createElement("div", { className: cx('answers', classNames === null || classNames === void 0 ? void 0 : classNames.answers) }, possibleAnswers.map(function (possibleAnswer) { return (React__default["default"].createElement(Radio_component.Radio, { className: cx('answers__option', { 'answers__option--selected': answer === null || answer === void 0 ? void 0 : answer.answer.some(function (a) { return a.id === possibleAnswer.id; }) }, classNames === null || classNames === void 0 ? void 0 : classNames.option), checked: answer === null || answer === void 0 ? void 0 : answer.answer.some(function (a) { return a.id === possibleAnswer.id; }), type: "button", key: possibleAnswer.id, id: possibleAnswer.id.toString(), onChange: function () { return handleChange(possibleAnswer.id, possibleAnswer.titleAnswer); } }, possibleAnswer.titleAnswer)); }))));
};

exports.ChatQuestionnaireUniqueChoice = ChatQuestionnaireUniqueChoice;
//# sourceMappingURL=ChatQuestionnaireUniqueChoice.component.js.map
