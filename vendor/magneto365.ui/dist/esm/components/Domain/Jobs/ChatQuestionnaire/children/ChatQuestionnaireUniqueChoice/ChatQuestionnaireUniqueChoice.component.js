import React from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import '../../../../../UI/atoms/Collapse/Collapse.component.js';
import '../../../../../../constants/stories/DatePicker.constants.js';
import '../../../../../../constants/stories/jobVideo.constants.js';
import '../../../../../../constants/stories/megaMenu.constants.js';
import '../../../../../../constants/stories/sideFilter.constants.js';
import '../../../../../../constants/stories/vacancies.constants.js';
import '../../../../../../constants/stories/vacantPositionsCategory.constants.js';
import '../../../../../../constants/img.constants.js';
import '../../../../../../utils/date/dateInput.util.js';
import '../../../../../UI/atoms/Field/Field.component.js';
import '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import '../../../../../UI/atoms/InputFile/InputFile.component.js';
import '../../../../../UI/atoms/Paragraph/Paragraph.component.js';
import { Radio } from '../../../../../UI/atoms/Radio/Radio.component.js';
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { EQuestionType } from '../../ChatQuestionnaire.interface.js';
import styles from './ChatQuestionnaireUniqueChoice.module.scss.js';

var cx = classNames.bind(styles);
var ChatQuestionnaireUniqueChoice = function (_a) {
    var questionWithAnswer = _a.questionWithAnswer, onChange = _a.onChange, classNames = _a.classNames, className = _a.className;
    var question = questionWithAnswer.question, answer = questionWithAnswer.answer, questionnaireId = questionWithAnswer.questionnaireId;
    if (question.answerType !== EQuestionType.unique)
        return null;
    if (answer && answer.type !== EQuestionType.unique)
        return null;
    var possibleAnswers = question.possibleAnswers;
    var handleChange = function (id, titleAnswer) {
        onChange({
            question: question,
            questionnaireId: questionnaireId,
            mode: 'readonly',
            answer: {
                type: EQuestionType.unique,
                id: question.id,
                answer: [{ id: id, titleAnswer: titleAnswer }]
            }
        });
    };
    return (React.createElement("div", { className: cx('answers-container', className) },
        React.createElement("div", { className: cx('answers', classNames === null || classNames === void 0 ? void 0 : classNames.answers) }, possibleAnswers.map(function (possibleAnswer) { return (React.createElement(Radio, { className: cx('answers__option', { 'answers__option--selected': answer === null || answer === void 0 ? void 0 : answer.answer.some(function (a) { return a.id === possibleAnswer.id; }) }, classNames === null || classNames === void 0 ? void 0 : classNames.option), checked: answer === null || answer === void 0 ? void 0 : answer.answer.some(function (a) { return a.id === possibleAnswer.id; }), type: "button", key: possibleAnswer.id, id: possibleAnswer.id.toString(), onChange: function () { return handleChange(possibleAnswer.id, possibleAnswer.titleAnswer); } }, possibleAnswer.titleAnswer)); }))));
};

export { ChatQuestionnaireUniqueChoice };
//# sourceMappingURL=ChatQuestionnaireUniqueChoice.component.js.map
