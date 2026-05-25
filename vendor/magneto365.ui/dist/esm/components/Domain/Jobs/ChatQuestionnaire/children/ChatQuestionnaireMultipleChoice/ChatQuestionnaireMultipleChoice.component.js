import { __spreadArray } from '../../../../../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import '../../../../../UI/atoms/BarChart/enums.js';
import '../../../../../../utils/classNameManager/classNameManager.util.js';
import '../../../../../UI/atoms/Button/Button.component.js';
import { Checkbox } from '../../../../../UI/atoms/Checkbox/Checkbox.component.js';
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
import '../../../../../UI/atoms/Radio/Radio.interface.js';
import '../../../../../UI/atoms/Radio/Radio.constants.js';
import '../../../../../../constants/jobDetails.constants.js';
import '../../../../../UI/atoms/Toggle/Toggle.component.js';
import '../../../../../hooks/useMediaQuery/index.js';
import { EQuestionType } from '../../ChatQuestionnaire.interface.js';
import styles from './ChatQuestionnaireMultipleChoice.module.scss.js';

var cx = classNames.bind(styles);
var ChatQuestionnaireMultipleChoice = function (_a) {
    var questionWithAnswer = _a.questionWithAnswer, onChange = _a.onChange, renderSubmitButton = _a.renderSubmitButton, className = _a.className;
    var question = questionWithAnswer.question, answer = questionWithAnswer.answer, questionnaireId = questionWithAnswer.questionnaireId;
    var _b = useState(function () {
        var _a;
        if (answer && answer.type !== EQuestionType.multiple)
            return [];
        return (_a = answer === null || answer === void 0 ? void 0 : answer.answer.map(function (a) { return a.id; })) !== null && _a !== void 0 ? _a : [];
    }), selectedAnswerIds = _b[0], setSelectedAnswerIds = _b[1];
    if (question.answerType !== EQuestionType.multiple)
        return null;
    if (answer && answer.type !== EQuestionType.multiple)
        return null;
    var handleCheckboxChange = function (id) {
        setSelectedAnswerIds(function (prevIds) {
            if (prevIds.includes(id)) {
                return prevIds.filter(function (checkedId) { return checkedId !== id; });
            }
            else {
                return __spreadArray(__spreadArray([], prevIds, true), [id], false);
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
            type: EQuestionType.multiple,
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
    return (React.createElement("form", { className: cx('answers-container', className), onSubmit: handleSubmit },
        React.createElement("div", { className: cx('answers') }, question.possibleAnswers.map(function (possibleAnswer) { return (React.createElement(Checkbox, { className: cx('answers__option', {
                'answers__option--selected': selectedAnswerIds.includes(possibleAnswer.id)
            }), key: possibleAnswer.id, name: "question-".concat(question.id), id: "multiple-".concat(possibleAnswer.id), checked: selectedAnswerIds.includes(possibleAnswer.id), onChange: function () { return handleCheckboxChange(possibleAnswer.id); }, renderCheck: function () { return null; } }, possibleAnswer.titleAnswer)); })),
        renderSubmitButton({ disabled: isDisabled, className: cx('continue-button') })));
};

export { ChatQuestionnaireMultipleChoice };
//# sourceMappingURL=ChatQuestionnaireMultipleChoice.component.js.map
