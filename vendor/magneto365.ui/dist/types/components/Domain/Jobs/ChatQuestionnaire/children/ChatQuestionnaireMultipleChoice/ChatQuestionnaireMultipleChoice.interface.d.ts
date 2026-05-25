import { IQuestionnaireAnswer } from '../../ChatQuestionnaire.interface';

interface IChatQuestionnaireMultipleChoice extends IQuestionnaireAnswer {
    renderSubmitButton: (options: {
        disabled: boolean;
        className: string;
    }) => React.ReactNode;
}

export { IChatQuestionnaireMultipleChoice };
