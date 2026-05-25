import { IExpandableInfoActionProps } from './children/ExpandableInfoAction/ExpandableInfoAction.interface';
import { IExpandableInfoDetailsProps } from './children/ExpandableInfoDetails/ExpandableInfoDetails.interface';
import { IExpandableInfoMessageProps } from './children/ExpandableInfoMessage/ExpandableInfoMessage.interface';
import { IconProps } from '@components/UI/atoms';

interface IExpandableInfoProps {
    /**
     * Main action
     */
    actions?: IExpandableInfoActionProps[];
    /**
     * Details list
     */
    details?: IExpandableInfoDetailsProps;
    /**
     * Floating component or not
     */
    floating?: boolean;
    /**
     * Footer message
     */
    message?: IExpandableInfoMessageProps;
    /**
     * Left icon of the dropdown
     */
    prefixIcon?: IconProps;
    /**
     * Size of component
     */
    size?: TExpandableInfoSize;
    /**
     * Right icon of the dropdown
     */
    suffixIcon?: IconProps;
    /**
     * Main summary
     */
    summary?: string | number;
    /**
     * Main title
     */
    title?: string;
    /**
     * Type of component theme
     */
    variant?: TExpandableInfoVariant;
}
declare type TExpandableInfoVariant = `${EExpandableInfoVariant}`;
declare enum EExpandableInfoVariant {
    BLUE = "blue",
    WHITE = "white"
}
declare type TExpandableInfoSize = `${EExpandableInfoSize}`;
declare enum EExpandableInfoSize {
    SMALL = "small",
    LARGE = "large"
}

export { EExpandableInfoSize, EExpandableInfoVariant, IExpandableInfoProps, TExpandableInfoSize, TExpandableInfoVariant };
