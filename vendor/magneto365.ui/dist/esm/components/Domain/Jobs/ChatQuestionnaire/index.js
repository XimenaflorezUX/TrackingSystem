import { ChatQuestionnaireOpen } from './children/ChatQuestionnaireOpen/ChatQuestionnaireOpen.component.js';
import { ChatQuestionnaireMessageCandidate } from './children/ChatQuestionnaireMessageCandidate/ChatQuestionnaireMessageCandidate.component.js';
import { ChatQuestionnaireMultipleChoice } from './children/ChatQuestionnaireMultipleChoice/ChatQuestionnaireMultipleChoice.component.js';
import { ChatQuestionnaire as ChatQuestionnaire$1 } from './ChatQuestionnaire.component.js';
import { ChatQuestionnaireUniqueChoice } from './children/ChatQuestionnaireUniqueChoice/ChatQuestionnaireUniqueChoice.component.js';
import { ChatQuestionnaireQuestion } from './children/ChatQuestionnaireQuestion/ChatQuestionnaireQuestion.component.js';
import { ChatQuestionnaireHeader } from './children/ChatQuestionnaireHeader/ChatQuestionnaireHeader.component.js';
import { ChatQuestionnaireButton } from './children/ChatQuestionnaireButton/ChatQuestionnaireButton.component.js';
import { useChatQuestionnaire } from './hooks/useChatQuestionnaire.js';

var ChatQuestionnaire = Object.assign(ChatQuestionnaire$1, {
    Question: ChatQuestionnaireQuestion,
    MessageCandidate: ChatQuestionnaireMessageCandidate,
    Answer: {
        UniqueChoice: ChatQuestionnaireUniqueChoice,
        MultipleChoice: ChatQuestionnaireMultipleChoice,
        Open: ChatQuestionnaireOpen
    },
    useChat: useChatQuestionnaire,
    Button: ChatQuestionnaireButton,
    Header: ChatQuestionnaireHeader
});

export { ChatQuestionnaire };
//# sourceMappingURL=index.js.map
