'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var validateCurrentStepAnswers = function (currentStepQuestions, answers) {
    return Object.entries(currentStepQuestions).every(function (_a) {
        var questionId = _a[0], questionType = _a[1];
        var answer = answers[questionId];
        if (questionType === 'multiple') {
            return Array.isArray(answer) && answer.length > 0;
        }
        else if (questionType === 'single') {
            return answer && typeof answer === 'object' && !Array.isArray(answer) && 'id' in answer;
        }
        else if (questionType === 'text') {
            return typeof answer === 'string' && answer.trim().length > 0;
        }
        return false;
    });
};
var questionTypeValidators = {
    multiple: function (answer) { return !Array.isArray(answer) || answer.length === 0; },
    single: function (answer) { return !(answer && typeof answer === 'object' && !Array.isArray(answer) && 'id' in answer); },
    text: function (answer) { return !(typeof answer === 'string' && answer.trim().length > 0); }
};
var isMissingValidator = function (answer, question) {
    var validator = questionTypeValidators[question.type];
    return validator ? validator(answer) : false;
};

exports.isMissingValidator = isMissingValidator;
exports.questionTypeValidators = questionTypeValidators;
exports.validateCurrentStepAnswers = validateCurrentStepAnswers;
//# sourceMappingURL=validateStepAnswers.js.map
