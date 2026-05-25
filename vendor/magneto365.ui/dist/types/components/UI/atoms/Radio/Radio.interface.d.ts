import { IRadioButtonProps } from './children/RadioButton/RadioButton.interface';
import { IRadioDefaultProps } from './children/RadioDefault/RadioDefault.interface';

declare enum ERadioType {
    radio = "radio",
    button = "button"
}
declare type ComponentProps<T extends keyof typeof ERadioType> = T extends 'radio' ? IRadioProps & IRadioDefaultProps : T extends 'button' ? IRadioProps & IRadioButtonProps : IRadioDefaultProps;
interface IRadioCommonProps {
    /**
     * If true, the radio will be disabled
     */
    disabled?: boolean;
    /**
     * If true, the radio will be checked by default
     */
    defaultChecked?: boolean;
    /**
     * If true, the radio will be checked
     */
    checked?: boolean;
    /**
     * Optional class name for the main container
     */
    className?: string;
    /**
     * Optional class name for children
     */
    childrenClassName?: string;
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Callback fired when the checked state of a radio button is changed
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Optional children
     */
    children?: React.ReactNode;
}
interface IRadioProps extends IRadioCommonProps {
    /**
     * Optional type of the radio
     */
    type?: ERadioType | keyof typeof ERadioType;
}

export { ComponentProps, ERadioType, IRadioCommonProps, IRadioProps };
