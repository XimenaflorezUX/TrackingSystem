'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames_util = require('../../../../../../shared/utils/common/classNames.util.js');
var Chat_component = require('../../../../../UI/molecules/Chat/Chat.component.js');
var Typography_component = require('../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../UI/atoms/Typography/Typography.interface.js');
var ChatQuestionnaireMessageLazy_component = require('../ChatQuestionnaireMessageLazy/ChatQuestionnaireMessageLazy.component.js');
var ChatQuestionnaireQuestion_module = require('./ChatQuestionnaireQuestion.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var cx = classNames_util.classNames.bind(ChatQuestionnaireQuestion_module);
/**
 * A Question is a Special Chat message, it includes message question and answer.
 * @returns
 */
var ChatQuestionnaireQuestion = function (_a) {
    var children = _a.children, questionWithAnswer = _a.questionWithAnswer, className = _a.className, waitFor = _a.waitFor;
    var _b = React.useState(false), showCandidateMessage = _b[0], setShowCandidateMessage = _b[1];
    var ref = React.useRef(null);
    var question = questionWithAnswer.question, mode = questionWithAnswer.mode;
    React.useEffect(function () {
        var _a, _b;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
        });
    }, []);
    if (!question)
        return null;
    return (React__default["default"].createElement("div", { ref: ref, className: cx('question', { 'question--editing': mode === 'editing' }, className) },
        React__default["default"].createElement(ChatQuestionnaireMessageLazy_component.ChatQuestionnaireMessageLazy, { waitFor: waitFor, onLoad: function () { return setShowCandidateMessage(true); } },
            React__default["default"].createElement(Chat_component.Chat.Message, { className: cx('question__bot'), to: "left", role: "bot" },
                React__default["default"].createElement(Typography_component.Typography.Text, null, question.titleQuestion),
                React__default["default"].createElement(Typography_component.Typography.Text, null, question.caption))),
        showCandidateMessage ? children : null));
};

exports.ChatQuestionnaireQuestion = ChatQuestionnaireQuestion;
//# sourceMappingURL=ChatQuestionnaireQuestion.component.js.map
