'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../../../node_modules/tslib/tslib.es6.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FormHandlerContext = React.createContext(undefined);
var FormHandlerProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState({}), answers = _b[0], setAnswers = _b[1];
    var _c = React.useState(false), submitted = _c[0], setSubmitted = _c[1];
    var _d = React.useState({}), currentStepQuestions = _d[0], setCurrentStepQuestions = _d[1];
    var handleChange = React.useCallback(function (questionId, value) {
        setAnswers(function (prev) {
            var _a;
            return (tslib_es6.__assign(tslib_es6.__assign({}, prev), (_a = {}, _a[questionId] = value, _a)));
        });
    }, []);
    var registerQuestion = React.useCallback(function (questionId, questionType) {
        setCurrentStepQuestions(function (prev) {
            var _a;
            return (tslib_es6.__assign(tslib_es6.__assign({}, prev), (_a = {}, _a[questionId] = questionType, _a)));
        });
    }, []);
    var unregisterQuestion = React.useCallback(function (questionId) {
        setCurrentStepQuestions(function (prev) {
            var newQuestions = tslib_es6.__assign({}, prev);
            delete newQuestions[questionId];
            return newQuestions;
        });
    }, []);
    return (React__default["default"].createElement(FormHandlerContext.Provider, { value: {
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
    var context = React.useContext(FormHandlerContext);
    if (context === undefined) {
        throw new Error('useFormHandler must be used within a FormHandler');
    }
    return context;
};

exports.FormHandlerProvider = FormHandlerProvider;
exports["default"] = FormHandlerProvider;
exports.useFormHandler = useFormHandler;
//# sourceMappingURL=TestsFormHandler.context.js.map
