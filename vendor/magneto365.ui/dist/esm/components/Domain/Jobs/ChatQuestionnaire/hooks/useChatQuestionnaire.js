import { __assign } from '../../../../../node_modules/tslib/tslib.es6.js';
import { useState, useRef, useCallback } from 'react';

var initilizeQuestions = function (questionnaires) {
    return questionnaires.flatMap(function (questionnaire) {
        return questionnaire.questions.map(function (question) { return ({
            questionnaireId: questionnaire.id,
            question: question,
            answer: undefined,
            mode: 'readonly'
        }); });
    });
};
var useChatQuestionnaire = function (questionsParam) {
    var _a = useState(function () { return initilizeQuestions(questionsParam); }), questions = _a[0], setQuestions = _a[1];
    var currentIndex = useRef(0);
    var _b = useState(function () { return questions.length === 0; }), isCompleted = _b[0], setIsCompleted = _b[1];
    var ref = useRef(null);
    var handleNext = useCallback(function () {
        var _a, _b;
        try {
            var question = (_a = questions[currentIndex.current]) !== null && _a !== void 0 ? _a : null;
            currentIndex.current += 1;
            if (question) {
                (_b = ref.current) === null || _b === void 0 ? void 0 : _b.pushMessage({
                    id: "".concat(question.questionnaireId, "-").concat(question.question.id),
                    type: question.question.answerType,
                    sender: 'magneto',
                    content: question
                });
            }
            return question;
        }
        catch (_c) {
            return null;
        }
    }, [questions]);
    var handleSaveAnswer = useCallback(function (data) {
        var _a, _b, _c, _d;
        var question = data.question, questionnaireId = data.questionnaireId;
        var questionsRef = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.snapshot().map(function (msg) { return msg.content; })) || [];
        var questionState = questionsRef.find(function (q) { return q.question.id === question.id && q.questionnaireId === questionnaireId; });
        if (!questionState)
            return;
        var mode = (_b = data.mode) !== null && _b !== void 0 ? _b : questionState.mode;
        var answer = (_c = data.answer) !== null && _c !== void 0 ? _c : questionState.answer;
        (_d = ref.current) === null || _d === void 0 ? void 0 : _d.updateMessage({
            id: "".concat(questionState.questionnaireId, "-").concat(questionState.question.id),
            type: 'text',
            sender: 'magneto',
            content: __assign(__assign({}, questionState), { answer: answer, mode: mode })
        });
        var _e = questionsRef, _f = questionsRef.length - 1, lastQuesiton = _e[_f];
        if (lastQuesiton.question.id === question.id) {
            handleNext();
        }
        setIsCompleted(questionsRef.length === questions.length && mode === 'readonly');
    }, [handleNext, questions]);
    var handleGetAnswers = useCallback(function () {
        var _a;
        return (((_a = ref.current) === null || _a === void 0 ? void 0 : _a.snapshot().map(function (msg) { return msg.content; }).reduce(function (acc, curr) {
            var answer = curr.answer, questionnaireId = curr.questionnaireId;
            if (!answer)
                return acc;
            var index = acc.findIndex(function (item) { return item.id === questionnaireId; });
            if (index === -1) {
                acc.push({ id: questionnaireId, questions: [answer] });
            }
            else {
                acc[index].questions.push(answer);
            }
            return acc;
        }, [])) || []);
    }, []);
    var handleReset = useCallback(function (questionnaire) {
        var _a;
        currentIndex.current = 0;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clear();
        setQuestions(function (questions) {
            if (questionnaire) {
                var newQuestions = initilizeQuestions(questionnaire);
                setIsCompleted(newQuestions.length === 0);
                return newQuestions;
            }
            setIsCompleted(questions.length === 0);
            return questions;
        });
    }, []);
    return {
        next: handleNext,
        getAnswers: handleGetAnswers,
        saveAnswer: handleSaveAnswer,
        reset: handleReset,
        isCompleted: isCompleted,
        chat: ref
    };
};

export { useChatQuestionnaire };
//# sourceMappingURL=useChatQuestionnaire.js.map
