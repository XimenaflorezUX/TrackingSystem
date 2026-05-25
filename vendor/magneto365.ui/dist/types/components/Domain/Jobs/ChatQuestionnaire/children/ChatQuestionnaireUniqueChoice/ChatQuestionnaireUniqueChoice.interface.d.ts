import { IQuestionnaireAnswer } from '../../ChatQuestionnaire.interface';

interface IChatQuestionnaireUniqueChoice extends IQuestionnaireAnswer {
    className?: string;
    classNames?: {
        answers?: string;
        option: string;
    };
}

export { IChatQuestionnaireUniqueChoice };
