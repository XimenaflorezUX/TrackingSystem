'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChatQuestionnaireOpen_component = require('./children/ChatQuestionnaireOpen/ChatQuestionnaireOpen.component.js');
var ChatQuestionnaireMessageCandidate_component = require('./children/ChatQuestionnaireMessageCandidate/ChatQuestionnaireMessageCandidate.component.js');
var ChatQuestionnaireMultipleChoice_component = require('./children/ChatQuestionnaireMultipleChoice/ChatQuestionnaireMultipleChoice.component.js');
var ChatQuestionnaire_component = require('./ChatQuestionnaire.component.js');
var ChatQuestionnaireUniqueChoice_component = require('./children/ChatQuestionnaireUniqueChoice/ChatQuestionnaireUniqueChoice.component.js');
var ChatQuestionnaireQuestion_component = require('./children/ChatQuestionnaireQuestion/ChatQuestionnaireQuestion.component.js');
var ChatQuestionnaireHeader_component = require('./children/ChatQuestionnaireHeader/ChatQuestionnaireHeader.component.js');
var ChatQuestionnaireButton_component = require('./children/ChatQuestionnaireButton/ChatQuestionnaireButton.component.js');
var useChatQuestionnaire = require('./hooks/useChatQuestionnaire.js');

var ChatQuestionnaire = Object.assign(ChatQuestionnaire_component.ChatQuestionnaire, {
    Question: ChatQuestionnaireQuestion_component.ChatQuestionnaireQuestion,
    MessageCandidate: ChatQuestionnaireMessageCandidate_component.ChatQuestionnaireMessageCandidate,
    Answer: {
        UniqueChoice: ChatQuestionnaireUniqueChoice_component.ChatQuestionnaireUniqueChoice,
        MultipleChoice: ChatQuestionnaireMultipleChoice_component.ChatQuestionnaireMultipleChoice,
        Open: ChatQuestionnaireOpen_component.ChatQuestionnaireOpen
    },
    useChat: useChatQuestionnaire.useChatQuestionnaire,
    Button: ChatQuestionnaireButton_component.ChatQuestionnaireButton,
    Header: ChatQuestionnaireHeader_component.ChatQuestionnaireHeader
});

exports.ChatQuestionnaire = ChatQuestionnaire;
//# sourceMappingURL=index.js.map
