import { IQuestionWithAnswer } from '../../ChatQuestionnaire.interface';

interface IChatQuestionnaireQuestion {
    className?: string;
    children?: React.ReactNode;
    questionWithAnswer: IQuestionWithAnswer;
    waitFor?: number;
}

export { IChatQuestionnaireQuestion };
