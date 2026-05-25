import * as React from 'react';
import { IChatQuestionnaireHeader } from './children/ChatQuestionnaireHeader/ChatQuestionnaireHeader.interface';
import { IChatQuestionnaireButton } from './children/ChatQuestionnaireButton/ChatQuestionnaireButton.interface';
import { IChatQuestionnaireShort } from './children/ChatQuestionnaireOpen/ChatQuestionnaireOpen.interface';
import { IChatQuestionnaireMultipleChoice } from './children/ChatQuestionnaireMultipleChoice/ChatQuestionnaireMultipleChoice.interface';
import { IChatQuestionnaireUniqueChoice } from './children/ChatQuestionnaireUniqueChoice/ChatQuestionnaireUniqueChoice.interface';
import { IChatQuestionnaireQuestion } from './children/ChatQuestionnaireQuestion/ChatQuestionnaireQuestion.interface';
import { IChat } from '../../../UI/molecules/Chat/Chat.interface';
import { IChatQuestionnaire, IQuestionnaireAnswer, TQuestionnaires, IQuestionWithAnswer, TSendQuestionnaire } from './ChatQuestionnaire.interface';
export { EQuestionType, IChatQuestionnaire, IPossibleAnswer, IQuestion, IQuestionWithAnswer, IQuestionnaireAnswer, IQuestionnaireMessage, TQuestionnaires, TSendCloseQuestion, TSendOpenQuestion, TSendQuestion, TSendQuestionnaire } from './ChatQuestionnaire.interface';

declare const ChatQuestionnaire: React.ForwardRefExoticComponent<IChatQuestionnaire & React.RefAttributes<IChat.Methods>> & {
    Question: React.FC<IChatQuestionnaireQuestion>;
    MessageCandidate: React.FC<React.PropsWithChildren<IQuestionnaireAnswer>>;
    Answer: {
        UniqueChoice: React.FC<IChatQuestionnaireUniqueChoice>;
        MultipleChoice: React.FC<IChatQuestionnaireMultipleChoice>;
        Open: React.FC<IChatQuestionnaireShort>;
    };
    useChat: (questionsParam: TQuestionnaires[]) => {
        next: () => IQuestionWithAnswer | null;
        getAnswers: () => TSendQuestionnaire[];
        saveAnswer: (data: IQuestionWithAnswer) => void;
        reset: (questionnaire?: TQuestionnaires[] | undefined) => void;
        isCompleted: boolean;
        chat: React.RefObject<IChat.Methods>;
    };
    Button: React.FC<IChatQuestionnaireButton>;
    Header: React.FC<IChatQuestionnaireHeader>;
};

export { ChatQuestionnaire };
