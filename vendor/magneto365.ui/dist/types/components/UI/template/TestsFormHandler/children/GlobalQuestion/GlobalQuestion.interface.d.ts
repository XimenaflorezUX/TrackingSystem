interface IGlobalQuestionProps {
    /**
     * The question to be displayed
     */
    question: IQuestion;
    /**
     * The text to be displayed in the error message
     */
    errorText: string;
    /**
     * Index of the question (optional, will use context if not provided)
     */
    idx?: number;
}
interface IQuestion {
    /**
     * Unique identifier for the question
     */
    id: string;
    /**
     * The text of the question
     */
    text: string;
    /**
     * The type of the question: single, multiple, or text
     */
    type: 'single' | 'multiple' | 'text';
    /**
     * Array of options for the question, if any
     */
    options?: IQuestionOptions[];
}
interface IQuestionOptions {
    /**
     * Unique identifier for the option
     */
    id: number;
    /**
     * The text of the option
     */
    label: string;
}
declare type AnswerType = string | IQuestionOptions | IQuestionOptions[];
interface QuestionTypeValidators {
    [key: string]: (answer: AnswerType) => boolean;
}

export { AnswerType, IGlobalQuestionProps, IQuestion, IQuestionOptions, QuestionTypeValidators };
