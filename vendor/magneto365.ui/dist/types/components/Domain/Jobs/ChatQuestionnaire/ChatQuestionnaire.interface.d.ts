import { IChat } from '@components/UI/molecules/Chat';

declare enum EQuestionType {
    unique = 0,
    multiple = 1,
    openShort = 2,
    openLong = 3
}
interface IPossibleAnswer {
    id: number;
    titleAnswer: string;
}
declare type IQuestion = {
    id: number;
    titleQuestion: string;
    caption?: string;
    answerType: EQuestionType;
    possibleAnswers: IPossibleAnswer[];
};
declare type TQuestionnaires = {
    id: number;
    questions: IQuestion[];
};
declare type TSendOpenQuestion = {
    type: EQuestionType.openShort | EQuestionType.openLong;
    id: number;
    openAnswer: string;
};
declare type TSendCloseQuestion = {
    type: EQuestionType.multiple | EQuestionType.unique;
    id: number;
    answer: {
        id: number;
        titleAnswer: string;
    }[];
};
declare type TSendQuestion = TSendCloseQuestion | TSendOpenQuestion;
interface IQuestionWithAnswer {
    questionnaireId: number;
    question: IQuestion;
    answer?: TSendQuestion;
    mode: 'editing' | 'readonly';
}
declare type TSendQuestionnaire = {
    id: number;
    questions: TSendQuestion[];
};
interface IQuestionnaireMessage extends IChat.Message {
    id: string;
    sender: string;
    type: EQuestionType;
    content: IQuestionWithAnswer;
}
interface IChatQuestionnaire {
    className?: string;
    children?: (messages: IQuestionnaireMessage[]) => React.ReactNode;
}
interface IQuestionnaireAnswer {
    className?: string;
    questionWithAnswer: IQuestionWithAnswer;
    onChange: (answer: IQuestionWithAnswer) => void;
}

export { EQuestionType, IChatQuestionnaire, IPossibleAnswer, IQuestion, IQuestionWithAnswer, IQuestionnaireAnswer, IQuestionnaireMessage, TQuestionnaires, TSendCloseQuestion, TSendOpenQuestion, TSendQuestion, TSendQuestionnaire };
