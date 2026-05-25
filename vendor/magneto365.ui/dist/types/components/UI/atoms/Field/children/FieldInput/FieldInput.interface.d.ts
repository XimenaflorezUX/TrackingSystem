declare type OmittedFieldInputProps = 'prefix' | 'size';
declare type TFieldInputButtonAlign = 'left' | 'center' | 'right';
declare type FieldInputButtonAlign = `${TFieldInputButtonAlign}`;
declare enum FieldInputTypeEnum {
    TEXT = "text",
    PASSWORD = "password",
    NUMBER = "number",
    EMAIL = "email",
    TEL = "tel",
    BUTTON = "button"
}
declare type FieldInputTypes = `${FieldInputTypeEnum}`;
interface IFieldInputBase extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedFieldInputProps> {
    error?: boolean;
    prefix?: React.ReactNode | ((args: {
        inputRef: React.RefObject<HTMLInputElement>;
        prefixRef: React.RefObject<HTMLSpanElement>;
        opened: boolean;
    }) => React.ReactNode);
    /**
     * If for example the dev wants to keep de focus on a mobile environment by clicking it.
     */
    preserveFocus?: boolean;
    size?: 'small' | 'medium';
    suffix?: React.ReactNode | ((args: {
        inputRef: React.RefObject<HTMLInputElement>;
        suffixRef: React.RefObject<HTMLSpanElement>;
        opened: boolean;
    }) => React.ReactNode);
    wrapper?: Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'>;
    inputClassName?: string;
    prefixClassName?: string;
    suffixClassName?: string;
}
interface IFieldInputButton extends IFieldInputBase {
    type: `${FieldInputTypeEnum.BUTTON}`;
    align?: FieldInputButtonAlign;
}
interface IFieldInputCommon extends IFieldInputBase {
    type?: Exclude<FieldInputTypes, `${FieldInputTypeEnum.BUTTON}`>;
    align?: never;
}
declare type IFieldInput = IFieldInputButton | IFieldInputCommon;

export { FieldInputButtonAlign, FieldInputTypeEnum, FieldInputTypes, IFieldInput, IFieldInputBase, IFieldInputButton, IFieldInputCommon, OmittedFieldInputProps, TFieldInputButtonAlign };
