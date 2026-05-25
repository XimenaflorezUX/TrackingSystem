import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import React, { createContext, useState, useCallback, useContext } from 'react';

var FormHandlerContext = createContext(undefined);
var FormHandlerProvider = function (_a) {
    var children = _a.children;
    var _b = useState({}), answers = _b[0], setAnswers = _b[1];
    var _c = useState(false), submitted = _c[0], setSubmitted = _c[1];
    var _d = useState({}), currentStepQuestions = _d[0], setCurrentStepQuestions = _d[1];
    var handleChange = useCallback(function (questionId, value) {
        setAnswers(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[questionId] = value, _a)));
        });
    }, []);
    var registerQuestion = useCallback(function (questionId, questionType) {
        setCurrentStepQuestions(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[questionId] = questionType, _a)));
        });
    }, []);
    var unregisterQuestion = useCallback(function (questionId) {
        setCurrentStepQuestions(function (prev) {
            var newQuestions = __assign({}, prev);
            delete newQuestions[questionId];
            return newQuestions;
        });
    }, []);
    return (React.createElement(FormHandlerContext.Provider, { value: {
            answers: answers,
            submitted: submitted,
            currentStepQuestions: currentStepQuestions,
            setSubmitted: setSubmitted,
            handleChange: handleChange,
            registerQuestion: registerQuestion,
            unregisterQuestion: unregisterQuestion
        } }, children));
};
var useFormHandler = function () {
    var context = useContext(FormHandlerContext);
    if (context === undefined) {
        throw new Error('useFormHandler must be used within a FormHandler');
    }
    return context;
};

export { FormHandlerProvider, FormHandlerProvider as default, useFormHandler };
//# sourceMappingURL=TestsFormHandler.context.js.map
