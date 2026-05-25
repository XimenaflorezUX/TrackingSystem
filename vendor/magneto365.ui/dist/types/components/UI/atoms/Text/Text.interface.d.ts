interface IText {
    /**
     * This is the main text
     * */
    text?: string;
    /**
     * This is the custom text
     * */
    customText?: ICustomText[];
    /**
     * You can add you custom className here
     */
    className?: string;
}
interface ICustomText {
    /**
     * This is the value to the custom text
     * */
    value: string | React.ReactNode;
    /**
     * This is the custom font weight to text
     * */
    fontWeight: EFontWeightType;
    /**
     * This is the custom line break to text
     * */
    lineBreak?: boolean;
}
declare type EFontWeightType = 'normal' | 'bold' | 'lighter';

export { EFontWeightType, ICustomText, IText };
