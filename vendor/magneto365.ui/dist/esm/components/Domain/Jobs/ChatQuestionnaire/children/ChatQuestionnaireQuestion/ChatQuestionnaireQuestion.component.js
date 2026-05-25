import React, { useState, useRef, useEffect } from 'react';
import { classNames } from '../../../../../../shared/utils/common/classNames.util.js';
import { Chat } from '../../../../../UI/molecules/Chat/Chat.component.js';
import { Typography } from '../../../../../UI/atoms/Typography/Typography.component.js';
import '../../../../../UI/atoms/Typography/Typography.interface.js';
import { ChatQuestionnaireMessageLazy } from '../ChatQuestionnaireMessageLazy/ChatQuestionnaireMessageLazy.component.js';
import styles from './ChatQuestionnaireQuestion.module.scss.js';

var cx = classNames.bind(styles);
/**
 * A Question is a Special Chat message, it includes message question and answer.
 * @returns
 */
var ChatQuestionnaireQuestion = function (_a) {
    var children = _a.children, questionWithAnswer = _a.questionWithAnswer, className = _a.className, waitFor = _a.waitFor;
    var _b = useState(false), showCandidateMessage = _b[0], setShowCandidateMessage = _b[1];
    var ref = useRef(null);
    var question = questionWithAnswer.question, mode = questionWithAnswer.mode;
    useEffect(function () {
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
    return (React.createElement("div", { ref: ref, className: cx('question', { 'question--editing': mode === 'editing' }, className) },
        React.createElement(ChatQuestionnaireMessageLazy, { waitFor: waitFor, onLoad: function () { return setShowCandidateMessage(true); } },
            React.createElement(Chat.Message, { className: cx('question__bot'), to: "left", role: "bot" },
                React.createElement(Typography.Text, null, question.titleQuestion),
                React.createElement(Typography.Text, null, question.caption))),
        showCandidateMessage ? children : null));
};

export { ChatQuestionnaireQuestion };
//# sourceMappingURL=ChatQuestionnaireQuestion.component.js.map
